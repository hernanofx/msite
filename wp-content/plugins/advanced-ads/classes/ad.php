<?php

/**
 * Advanced Ads Ad.
 *
 * @package   Advanced_Ads_Ad
 * @author    Thomas Maier <thomas.maier@webgilde.com>
 * @license   GPL-2.0+
 * @link      http://webgilde.com
 * @copyright 2013 Thomas Maier, webgilde GmbH
 */

/**
 * an ad object
 *
 * @package Advanced_Ads_Ad
 * @author  Thomas Maier <thomas.maier@webgilde.com>
 * @deprecated since version 1.5.3 (May 6th 2015)
 *  might still be needed if some old add-ons are running somewhere
 */
if( ! class_exists ( 'Advads_Ad', false ) ){
    class Advads_Ad extends Advanced_Ads_Ad {

    }
}

/**
 * an ad object
 *
 * @package Advanced_Ads_Ad
 * @author  Thomas Maier <thomas.maier@webgilde.com>
 */
class Advanced_Ads_Ad {

	/**
	 * id of the post type for this ad
	 */
	public $id = 0;

	/**
	 * true, if this is an Advanced Ads Ad post type
	 */
	protected $is_ad = false;

	/**
	 * ad type
	 */
	public $type = 'content';

	/**
	 * ad width
	 */
	public $width = 0;

	/**
	 * target url
	 *
	 * @since 1.6.10
	 */
	public $url = '';

	/**
	 * ad height
	 */
	public $height = 0;

	/**
	 * object of current ad type
	 */
	protected $type_obj;

	/**
	 * content of the ad
	 *
	 *  only needed for ad types using the post content field
	 */
	public $content = '';

	/**
	 * conditions of the ad display
	 */
	public $conditions = array();

	/**
	 * status of the ad (e.g. publish, pending)
	 */
	public $status = array();

	/**
	 * array with meta field options aka parameters
	 */
	protected $options = array();

	/**
	 * name of the meta field to save options to
	 */
	static $options_meta_field = 'advanced_ads_ad_options';

	/**
	 * additional arguments set when ad is loaded, overwrites or extends options
	 */
	public $args = array();

	/**
	 * multidimensional array contains information about the wrapper
	 *  each possible html attribute is an array with possible multiple elements
	 */
	public $wrapper = array();

	/**
	 * init ad object
	 *
	 * @param int $id id of the ad (= post id)
	 * @param arr $args additional arguments
	 */
	public function __construct($id, $args = array()) {
		$id = absint( $id );
		$this->id = $id;
		$this->args = is_array( $args ) ? $args : array();

		if ( ! empty($id) ) { $this->load( $id ); }

		// dynamically add sanitize filters for condition types
		$_types = array();
		// -TODO use model
		$advanced_ads_ad_conditions = Advanced_Ads::get_ad_conditions();
		foreach ( $advanced_ads_ad_conditions as $_condition ) {
			// add unique
			$_types[$_condition['type']] = false;
		}
		// iterate types
		foreach ( array_keys( $_types ) as $_type ) {
			// -TODO might be faster to use __call() method or isset()-test class method array
			$method_name = 'sanitize_condition_'. $_type;
			if ( method_exists( $this, $method_name ) ) {
				add_filter( 'advanced-ads-sanitize-condition-' . $_type, array($this, $method_name), 10, 1 );
			} elseif ( function_exists( 'advads_sanitize_condition_' . $_type ) ) {
				// check for public function to sanitize this
				add_filter( 'advanced-ads-sanitize-condition-' . $_type, 'advads_sanitize_condition_' . $_type, 10, 1 );

			}
		}
	}

	/**
	 * load an ad object by id based on its ad type
	 *
	 * @since 1.0.0
	 */
	private function load($id = 0){

		$_data = get_post( $id );
		if ( $_data == null ) { return false; }

		// return, if not an ad
		if ( $_data->post_type != Advanced_Ads::POST_TYPE_SLUG ) {
			return false;
		} else {
			$this->is_ad = true;
		}

		$this->type = $this->options( 'type' );
		$this->title = $_data->post_title;
		/* load ad type object */
		$types = Advanced_Ads::get_instance()->ad_types;
		if ( isset($types[$this->type]) ){
			$this->type_obj = $types[$this->type];
		} else {
			$this->type_obj = new Advanced_Ads_Ad_Type_Abstract;
		}
		$this->url = $this->options( 'url' );
		$this->width = $this->options( 'width' );
		$this->height = $this->options( 'height' );
		$this->conditions = $this->options( 'conditions' );
		$this->description = $this->options( 'description' );
		$this->output = $this->options( 'output' );
		$this->status = $_data->post_status;
		$this->wrapper = $this->load_wrapper_options();
		$this->expiry_date = $this->options( 'expiry_date' );

		// load content based on ad type
		$this->content = $this->type_obj->load_content( $_data );

		// set wrapper conditions
		$this->wrapper = apply_filters( 'advanced-ads-set-wrapper', $this->wrapper, $this );
		// add unique wrapper id, if options given
		if ( is_array( $this->wrapper ) && $this->wrapper !== array() && ! isset( $this->wrapper['id'] ) ){
			// create unique id if not yet given
			$this->wrapper['id'] = $this->create_wrapper_id();
		}
	}

	/**
	 * get options from meta field and return specific field
	 *
	 * @param string $field post meta key to be returned
	 * @return mixed meta field content
	 * @since 1.0.0
	 * @todo check against default values
	 */
	public function options( $field = '', $default = null ) {
		// retrieve options, if not given yet
		// -TODO may execute multiple times (if empty); bad design and risk to access unintialised data with direct access to $this->options property.
		if ( $this->options === array() ) {
			// load arguments given on ad load
			$this->options = $this->args;
			// get_post_meta() may return false
			$meta = get_post_meta( $this->id, self::$options_meta_field, true );
			if ( $meta ){
				$this->options = array_merge_recursive( $this->options, $meta );
			}
		}

		// return specific option
		if ( $field != '' ) {
			if ( isset($this->options[$field]) ) {
				return $this->options[$field];
			}
		} else { // return all options
			if ( ! empty($this->options) ) {
				return $this->options;
			}
		}

		return $default;
	}

	/**
	 * set an option of the ad
	 *
	 * @since 1.1.0
	 * @param string $option name of the option
	 * @param mixed $value value of the option
	 */
	public function set_option($option = '', $value = ''){
		if ( $option == '' ) { return; }

		// get current options
		$options = $this->options();

		// set options
		$options[$option] = $value;

		// save options
		$this->options = $options;

	}


	/**
	 * return ad content for frontend output
	 *
	 * @since 1.0.0
	 * @param array $output_options output options
	 * @return string $output ad output
	 */
	public function output( $output_options = array() ){
		if ( ! $this->is_ad ) { return ''; }

		$output_options = wp_parse_args( $output_options, array( 'global_output' => true ) );

		// switch between normal and debug mode
		if( isset( $this->output['debugmode'] ) ){
		    $output = $this->prepare_debug_output();
		} else {
		    $output = $this->prepare_frontend_output();
		}

		if ( $output_options['global_output'] ) {
			// add the ad to the global output array
			$advads = Advanced_Ads::get_instance();
			$advads->current_ads[] = array('type' => 'ad', 'id' => $this->id, 'title' => $this->title, 'output' => $output);
		}

		// action when output is created
		do_action( 'advanced-ads-output', $this, $output, $output_options );

		return $output;
	}

	/**
	 * check if the ad can be displayed in frontend due to its own conditions
	 *
	 * @since 1.0.0
	 * @param array $check_options check options
	 * @return bool $can_display true if can be displayed in frontend
	 */
	public function can_display( $check_options = array() ) {
		$check_options = wp_parse_args( $check_options, array( 'passive_cache_busting' => false ) );
		
		// force ad display if debug mode is enabled
		if( isset( $this->output['debugmode'] )){
		    return true;
		}
		
		// prevent ad to show up through wp_head, if this is not a header placement
		if( doing_action( 'wp_head' ) && isset( $this->options['placement_type'] ) && 'header' !== $this->options['placement_type'] ){
		    return false;
		}
		
		if ( ! $check_options['passive_cache_busting'] ) {
			// don’t display ads that are not published or private for users not logged in
			if ( $this->status !== 'publish' && ! ($this->status === 'private' && ! is_user_logged_in() ) ) {
				return false;
			}

			if ( ! $this->can_display_by_visitor() || ! $this->can_display_by_expiry_date() ) {
				return false;
			}
		} else {
			if ( $this->status !== 'publish' || ! $this->can_display_by_expiry_date() ) {
				return false;
			}
		}

		// add own conditions to flag output as possible or not
		$can_display = apply_filters( 'advanced-ads-can-display', true, $this, $check_options );

		return $can_display;
	}

	/**
	 * check visitor conditions
	 *
	 * @since 1.1.0
	 * @return bool $can_display true if can be displayed in frontend based on visitor settings
	 */
	public function can_display_by_visitor(){
		if ( ! empty( $this->options['wp_the_query']['is_feed'] ) ) {
			return true;
		}

	    // check old "visitor" and new "visitors" conditions
		if ( ( empty($this->options['visitors']) ||
				! is_array( $this->options['visitors'] ) )
			&& ( empty($this->options['visitor']) ||
				! is_array( $this->options['visitor'] )
			    )) { return true; }

		if ( isset( $this->options['visitors'] ) && is_array( $this->options['visitors'] ) ) {

		    $visitor_conditions = $this->options['visitors'];
		    
		    $last_result = false;
		    $length = count( $visitor_conditions );
		    
		    for($i = 0; $i < $length; ++$i) {
			$_condition = current( $visitor_conditions );
			// ignore OR if last result was true
			if( $last_result && isset( $_condition['connector'] ) && 'or' === $_condition['connector'] ){
			    next( $visitor_conditions );
			    continue;
			}
			$last_result = $result = Advanced_Ads_Visitor_Conditions::frontend_check( $_condition, $this );
			if( ! $result ) {
			    // return false only, if the next condition doesn’t have an OR operator
			    $next = next( $visitor_conditions );
			    if( ! isset( $next['connector'] ) || $next['connector'] !== 'or' ) {
				return false;
			    }
			} else {
			    next( $visitor_conditions );
			}
		    }
		}

		/**
		 * "old" visitor conditions
		 *
		 * @deprecated since version 1.5.4
		 */

		if ( empty($this->options['visitor']) ||
				! is_array( $this->options['visitor'] ) ) { return true; }
		$visitor_conditions = $this->options( 'visitor' );

		// check mobile condition
		if ( isset($visitor_conditions['mobile']) ){
			switch ( $visitor_conditions['mobile'] ){
				case 'only' :
					if ( ! wp_is_mobile() ) { return false; }
					break;
				case 'no' :
					if ( wp_is_mobile() ) { return false; }
					break;
			}
		}

		return true;
	}

	/**
	 * check expiry date
	 *
	 * @since 1.3.15
	 * @return bool $can_display true if can be displayed in frontend based on expiry date
	 */
	public function can_display_by_expiry_date(){

		// if expiry_date is not set null is returned
		$ad_expiry_date = (int) $this->options( 'expiry_date' );

		if ( $ad_expiry_date <= 0 ) {
			return true;
		}

		// check blog time against current time (GMT)
		return $ad_expiry_date > time();
	}

	/**
	 * save an ad to the database
	 * takes values from the current state
	 */
	public function save(){
		global $wpdb;

		// remove slashes from content
		$content = $this->prepare_content_to_save();

		$where = array('ID' => $this->id);
		$wpdb->update( $wpdb->posts, array( 'post_content' => $content ), $where );

		// clean post from object cache
		clean_post_cache( $this->id );

		// sanitize conditions
		// see sanitize_conditions function for example on using this filter
		$conditions = self::sanitize_conditions_on_save( $this->conditions );

		// save other options to post meta field
		$options = $this->options();

		$options['type'] = $this->type;
		$options['url'] = $this->url;
		$options['width'] = $this->width;
		$options['height'] = $this->height;
		$options['conditions'] = $conditions;
		$options['expiry_date'] = $this->expiry_date;
		$options['description'] = $this->description;

		// filter to manipulate options or add more to be saved
		$options = apply_filters( 'advanced-ads-save-options', $options, $this );

		update_post_meta( $this->id, self::$options_meta_field, $options );
	}

	/**
	 * native filter for content field before being saved
	 *
	 * @return string $content ad content
	 * @since 1.0.0
	 */
	public function prepare_content_to_save() {

		$content = $this->content;

		// load ad type specific parameter filter
		// @todo this is just a hotfix for type_obj not set, yet the cause is still unknown
		if(is_object( $this->type_obj )){
		    $content = $this->type_obj->sanitize_content( $content );
		}
		// apply a custom filter by ad type
		$content = apply_filters( 'advanced-ads-pre-ad-save-' . $this->type, $content );

		return $content;
	}

	/**
	 * native filter for ad parameters before being saved
	 *
	 * @return arr $parameters sanitized parameters
	 */
	public function prepare_parameters_to_save() {

		$parameters = $this->parameters;
		// load ad type specific parameter filter
		$parameters = $this->type_obj->sanitize_parameters( $parameters );

		// apply native WP filter for content fields
		return $parameters;
	}

	/**
	 * prepare ads output
	 *
	 */
	public function prepare_frontend_output() {

		// load ad type specific content filter
		$output = $this->type_obj->prepare_output( $this );
		// don’t deliver anything, if main ad content is empty
		if( $output == '' ) {
			return;
		}

		// filter to manipulate the output before the wrapper is added
		$output = apply_filters( 'advanced-ads-output-inside-wrapper', $output, $this );

		$output = $this->maybe_add_label ( $output );

		// build wrapper around the ad
		$output = $this->add_wrapper( $output );

		// add a clearfix, if set
		if ( isset($this->output['clearfix']) && $this->output['clearfix'] ){
			$output .= '<br style="clear: both; display: block; float: none;"/>';
		}

		// apply a custom filter by ad type
		$output = apply_filters( 'advanced-ads-ad-output', $output, $this );

		return $output;
	}
	
	/**
	 * prepare debug mode output
	 * 
	 * @since 1.7.0.3
	 */
	public function prepare_debug_output() {
	    
		global $post, $wp_query;
		
		// set size
		if( $this->width && $this->height ){
		    $width = $this->width;
		    $height = $this->height;
		} else {
		    $width = 300;
		    $height = 250;
		}
		
		$style = "width:{$width}px;height:{$height}px;background-color:#ddd;overflow:scroll;";
		
		$prefix = Advanced_Ads_Plugin::get_instance()->get_frontend_prefix();
		
		$content = array();
		
		// display notice that debug doesn’t work with cache-busting
		if( class_exists( 'Advanced_Ads_Pro_Module_Cache_Busting', false ) && isset ( $this->args['cache-busting'] ) && 'off' !== $this->args['cache-busting'] ){
		    $content[] = '<span style="color: red;">Debug mode does not work properly with cache-busting enabled for this ad.</span>';
		}
		
		// compare current wp_query with global wp_main_query
		if( ! $wp_query->is_main_query() ){
		    $content[] = '<span style="color: red;">Current query is not identical to main query.</span>';
		    // output differences
		    $content[] = $this->build_query_diff_table();
		}
		
		// compare current post with global post
		if( $wp_query->post !== $post ){
		    $error = '<span style="color: red;">Current post is not identical to main post.</span>';
		    // output differences
		    if( isset( $post->post_title ) && $post->ID ){
			$error .= '<br/>current post: ' . $post->post_title . ', ID: ' . $post->ID;
		    }
		    if( isset( $wp_query->post->post_title ) && $wp_query->post->ID ){
			$error .= '<br/>main post: ' . $wp_query->post->post_title . ', ID: ' . $wp_query->post->ID;
		    }
		    $content[] = $error;
		}
		
		ob_start();
		
		include( ADVADS_BASE_PATH . '/public/views/ad-debug.php' );
	    
		$output = ob_get_clean();
	    
		// apply a custom filter by ad type
		$output = apply_filters( 'advanced-ads-ad-output-debug', $output, $this );

		return $output;
		
	}
	
	/**
	 * build table with differences between current and main query
	 * 
	 * @since 1.7.0.3
	 */
	private function build_query_diff_table(){
	    
	    global $wp_query, $wp_the_query;
	    
	    $diff_current = array_diff_assoc( $wp_query->query_vars, $wp_the_query->query_vars );
	    $diff_main = array_diff_assoc( $wp_the_query->query_vars, $wp_query->query_vars );
	    
	    if( ! is_array( $diff_current ) || ! is_array( $diff_main ) ){
		return '';
	    }
	    
	    ob_start();
	    
	    ?><table><thead><tr><th></th><th>current query</th><th>main query</th></tr></thead><?php
	    foreach( $diff_current as $_key => $_value ){
		?><tr><td><?php echo $_key; ?></td><td><?php echo $_value; ?></td><td><?php if( isset( $diff_main[$_key] ) ) echo $diff_main[$_key]; ?></td></tr><?php
	    }
	    ?></table><?php
	    
	    return ob_get_clean();
	}

	/**
	 * sanitize ad display conditions when saving the ad
	 *
	 * @param array $conditions conditions array send via the dashboard form for an ad
	 * @return array with sanitized conditions
	 * @since 1.0.0
	 */
	public function sanitize_conditions_on_save($conditions = array()){

		global $advanced_ads_ad_conditions;

		if ( ! is_array( $conditions ) || $conditions == array() ) { return array(); }

		foreach ( $conditions as $_key => $_condition ){
			if ( $_key == 'postids' ){
				// sanitize single post conditions
				if ( empty($_condition['ids']) ){ // remove, if empty
					$_condition['include'] = array();
					$_condition['exclude'] = array();
				} elseif( isset( $_condition['method'] ) ) {
					switch ( $_condition['method'] ){
						case  'include' :
							$_condition['include'] = $_condition['ids'];
							$_condition['exclude'] = array();
							break;
						case  'exclude' :
							$_condition['include'] = array();
							$_condition['exclude'] = $_condition['ids'];
							break;
					}
				}
			} else {
				if ( ! is_array( $_condition ) ) {
					$_condition = trim( $_condition ); }
				if ( $_condition == '' ) {
					$conditions[$_key] = $_condition;
					continue;
				}
			}
			$type = ! empty($advanced_ads_ad_conditions[$_key]['type']) ? $advanced_ads_ad_conditions[$_key]['type'] : 0;
			if ( empty($type) ) { continue; }

			// dynamically apply filters for each condition used
			$conditions[$_key] = apply_filters( 'advanced-ads-sanitize-condition-' . $type, $_condition );
		}
		return $conditions;
	}

	/**
	 * sanitize id input field(s) for pattern /1,2,3,4/
	 *
	 * @pararm array/string $cond input string/array
	 * @return array/string $cond sanitized string/array
	 */
	public static function sanitize_condition_idfield($cond = ''){
		// strip anything that is not comma or number

		if ( is_array( $cond ) ){
			foreach ( $cond as $_key => $_cond ){
				$cond[$_key] = preg_replace( '#[^0-9,]#', '', $_cond );
			}
		} else {
			$cond = preg_replace( '#[^0-9,]#', '', $cond );
		}
		return $cond;
	}

	/**
	 * sanitize radio input field
	 *
	 * @pararm string $string input string
	 * @return string $string sanitized string
	 */
	public static function sanitize_condition_radio($string = ''){
		// only allow 0, 1 and empty
		return $string = preg_replace( '#[^01]#', '', $string );
	}

	/**
	 * sanitize comma seperated text input field
	 *
	 * @pararm array/string $cond input string/array
	 * @return array/string $cond sanitized string/array
	 */
	public static function sanitize_condition_textvalues($cond = ''){
		// strip anything that is not comma, alphanumeric, minus and underscore
		if ( is_array( $cond ) ){
			foreach ( $cond as $_key => $_cond ){
				$cond[$_key] = preg_replace( '#[^0-9,A-Za-z-_]#', '', $_cond );
			}
		} else {
			$cond = preg_replace( '#[^0-9,A-Za-z-_]#', '', $cond );
		}
		return $cond;
	}

	/**
	 * load wrapper options set with the ad
	 *
	 * @since 1.3
	 * @return arr $wrapper options array ready to be use in add_wrapper() function
	 */
	protected function load_wrapper_options(){
		$wrapper = array();

		//  print_r($this->output);

		if ( ! empty($this->output['position']) ) {
			switch ( $this->output['position'] ) {
				case 'left' :
					$wrapper['style']['float'] = 'left';
					break;
				case 'right' :
					$wrapper['style']['float'] = 'right';
					break;
				case 'center' :
					$wrapper['style']['text-align'] = 'center';
					// add css rule after wrapper to center the ad
					// add_filter( 'advanced-ads-output-wrapper-after-content', array( $this, 'center_ad_content' ), 10, 2 );
					break;
				case 'clearfix' :
					$wrapper['style']['clear'] = 'both';
					break;
			}
		}

		if ( isset($this->output['class']) && is_array( $this->output['class'] ) ) {
			$wrapper['class'] = $this->output['class'];
		}

		// add manual classes
		if ( isset($this->output['wrapper-class']) && '' !== $this->output['wrapper-class'] ) {
			$classes = explode( ' ', $this->output['wrapper-class'] );

			foreach( $classes as $_class ){
				$wrapper['class'][] = sanitize_text_field( $_class );
			}
		}

		if ( ! empty($this->output['margin']['top']) ) {
			$wrapper['style']['margin-top'] = intval( $this->output['margin']['top'] ) . 'px';
		}
		if ( ! empty($this->output['margin']['right']) ) {
			$wrapper['style']['margin-right'] = intval( $this->output['margin']['right'] ) . 'px';
		}
		if ( ! empty($this->output['margin']['bottom']) ) {
			$wrapper['style']['margin-bottom'] = intval( $this->output['margin']['bottom'] ) . 'px';
		}
		if ( ! empty($this->output['margin']['left']) ) {
			$wrapper['style']['margin-left'] = intval( $this->output['margin']['left'] ) . 'px';
		}

		if ( ! empty ($this->output['add_wrapper_sizes'] ) ) {
			$wrapper['style']['width'] = intval( $this->width ) . 'px';
			$wrapper['style']['height'] = intval( $this->height ) . 'px';
		}

		return $wrapper;
	}

	/**
	 * add a wrapper arount the ad content if wrapper information are given
	 *
	 * @since 1.1.4
	 * @param str $ad_content content of the ad
	 * @return str $wrapper ad within the wrapper
	 */
	protected function add_wrapper($ad_content = ''){

		$wrapper_options = apply_filters( 'advanced-ads-output-wrapper-options', $this->wrapper, $this );

		if ( $wrapper_options == array() || ! is_array( $wrapper_options ) || empty($wrapper_options) ) { return $ad_content; }

		$wrapper = $ad_content;

		// create unique id if not yet given
		if ( empty($wrapper_options['id']) ){
			$this->wrapper['id'] = $wrapper_options['id'] = $this->create_wrapper_id();
		}
		
		// build the box
		$wrapper = '<div';
		foreach ( $wrapper_options as $_html_attr => $_values ){
			if ( $_html_attr == 'style' ){
				$_style_values_string = '';
				foreach ( $_values as $_style_attr => $_style_values ){
					if ( is_array( $_style_values ) ) {
						$_style_values_string .= $_style_attr . ': ' .implode( ' ', $_style_values ). '; '; }
					else {
						$_style_values_string .= $_style_attr . ': ' .$_style_values. '; '; }
				}
				$wrapper .= " style=\"$_style_values_string\"";
			} else {
				if ( is_array( $_values ) ) {
					$_values_string = implode( ' ', $_values ); }
				else {
					$_values_string = sanitize_title( $_values ); }
				$wrapper .= " $_html_attr=\"$_values_string\"";
			}
		}
		$wrapper .= '>';
		$wrapper .= apply_filters( 'advanced-ads-output-wrapper-before-content', '', $this );
		$wrapper .= $ad_content;
		$wrapper .= apply_filters( 'advanced-ads-output-wrapper-after-content', '', $this );
		$wrapper .= '</div>';

		return $wrapper;
	}

	/**
	 * function to add css rule after the ad to center its content
	 *
	 * @since 1.6.9.5
	 * @param str $output additional output in wrapper after content
	 * @param obj $ad Advanced_Ads_Ad object
	 * @return str $output
	 *
	 */
	/*public function center_ad_content( $output, Advanced_Ads_Ad $ad ){

		// no additional check needed, because the hook is only called when the ad is centered
		if( isset( $ad->wrapper['id'] )){
			// does not work with most div elements, so actually not used now
			$output .= '<style type="text/css">#'. $ad->wrapper['id'] . ' img, #'. $ad->wrapper['id'] . ' div { display: inline !important; }</style>';
		}

		return $output;
	}*/

	/**
	 * create a random wrapper id
	 *
	 * @since 1.1.4
	 * @return string $id random id string
	 */
	private function create_wrapper_id(){

		if( isset( $this->output['wrapper-id'] )){
			$id = sanitize_key( $this->output['wrapper-id'] );
			if( '' !== $id ){
				return $id;
			}
		}

		$prefix = Advanced_Ads_Plugin::get_instance()->get_frontend_prefix();

		return $prefix . mt_rand();
	}

	/**
	 * add an "Advertisement" label if conditions are met
	 *
	 * @param str $output
	 * @return str $output
	 */
	public function maybe_add_label( &$output ) {
		if ( $this->type !== 'group' && $label = Advanced_Ads::get_instance()->get_label() ) {
			if ( isset( $this->args['group_info']['type'] ) && $this->args['group_info']['type'] === 'slider' ) {
				return $output;
			}
			// first ad in a group or single ad without group, and not group output for passive cb
			if ( empty( $this->args['group_info']['ads_displayed'] ) && empty( $this->args['group_info']['passive_cb'] ) ) {
				$output = $label . $output;
			// output label for every ad when slider is used
			}
		}

		return $output;
	}
}
