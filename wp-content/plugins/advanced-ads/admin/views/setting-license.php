<?php
$errortext = false;
$expires = Advanced_Ads_Admin::get_instance()->get_license_expires( $options_slug );
$expired = false;
$expired_error = __( 'Your license expired.', 'advanced-ads' );
$expired_error .= $expired_renew_link = ' ' . sprintf(__( '<a href="%s" target="_blank">Renew it with a discount</a>.', 'advanced-ads' ), ADVADS_URL . 'checkout/?edd_license_key=' . esc_attr($license_key) . '#utm_source=advanced-ads&utm_medium=link&utm_campaign=settings-licenses' );
    $expires_time = strtotime( $expires );
    $days_left = ( $expires_time - time() ) / DAY_IN_SECONDS;
    if( $days_left <= 0 ){
	$plugin_url = isset( $plugin_url ) ? $plugin_url : ADVADS_URL;
	$errortext = $expired_error;
	$expired = true;
    } elseif ( 0 < $days_left && 91 > $days_left ){
	$errortext = sprintf( __('(%d days left)', 'advanced-ads' ), $days_left ) . $expired_renew_link;
    }
$show_active = ( $license_status !== false && $license_status == 'valid' && ! $expired ) ? true : false;

?><input type="text" class="regular-text advads-license-key" placeholder="<?php _e( 'License key', 'advanced-ads' ); ?>"
       name="<?php echo ADVADS_SLUG . '-licenses'; ?>[<?php echo $index; ?>]"
       value="<?php esc_attr_e($license_key); ?>"
       <?php if( $license_status !== false && $license_status == 'valid' && ! $expired ) : ?> disabled="disabled"<?php endif; ?>/>

<button type="button" class="button-secondary advads-license-deactivate"
	<?php if( $license_status !== 'valid' ) echo ' style="display: none;" '; ?>
	data-addon="<?php echo $index; ?>"
	data-pluginname="<?php echo $plugin_name; ?>"
	data-optionslug="<?php echo $options_slug; ?>"
	name="advads_license_activate"><?php _e('Deactivate License'); ?></button>

<button type="button" class="button-primary advads-license-activate"
	    <?php if( $license_status === 'valid' && ! $expired ) echo ' style="display: none;" '; ?>
	    data-addon="<?php echo $index; ?>"
	    data-pluginname="<?php echo $plugin_name; ?>"
	    data-optionslug="<?php echo $options_slug; ?>"
	    name="advads_license_activate"><?php _e('Activate License'); ?></button><?php
    if( '' === trim( $license_key ) ){
	$errortext = __('Please enter a valid license key', 'advanced-ads');
    } elseif( ! $expired && ! $errortext ){
	$errortext = ( $license_status == 'invalid') ? __('License key invalid', 'advanced-ads') : '';
    }
?>&nbsp;
<span class="advads-license-activate-active" <?php if( ! $show_active ) echo 'style="display: none;"'; ?>><?php _e( 'active', 'advanced-ads' ); ?></span>
<span class="advads-license-activate-error" <?php if( ! $errortext ) echo 'style="display: none;"'; ?>><?php echo $errortext; ?></span>
<span class="advads-license-expired-error advads-error-message" style="display: none;"><?php echo $expired_error; ?></span>