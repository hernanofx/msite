<?php
/*
Plugin Name: Form Manager Custom Submission Action
Description: (your description here)
Version: 1.1
Author: Campbell Hoffman
Author URI: http://www.campbellhoffman.com/
License: GPL2

  Copyright 2011 Campbell Hoffman

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; version 2 of the License (GPL v2) only.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/

/*
::NOTES::

$args contains two values:
$args['form'] is an array specifying the form. It has the following values:
	'ID' - the form ID
	'title' - form title
	'items' - an array of form items
	(there are many more, see the comment in the function body)
$args['data'] is an array with the submission data, keyed by both nicknames (if they exist) and
	the unique names given to the form elements.

*/

define('CATEGORY_ID_ADOPTION',     2);
define('CATEGORY_ID_LOST',         3);
define('CATEGORY_ID_FOUND',        4);
define('CATEGORY_ID_FOUND_CAT',    5);
define('CATEGORY_ID_FOUND_DOG',    6);
define('CATEGORY_ID_LOST_CAT',     7);
define('CATEGORY_ID_LOST_DOG',     8);
define('CATEGORY_ID_ADOPTION_CAT', 9);
define('CATEGORY_ID_ADOPTION_DOG', 10);

add_action( 'fm_form_submission' , 'fm_custom_submission_action' );

function is_empty_string($str){
  return !isset($str) || trim($str) == '';
}

function str_lreplace($search, $replace, $subject){
  $pos = strrpos($subject, $search);

  if($pos !== false){
    $subject = substr_replace($subject, $replace, $pos, strlen($search));
  }

  return $subject;
}

function build_post_title($petName, $type, $situation, $petRace, $petColor, $neighborhood){
  $title = '';

  if (!is_empty_string($petName)){
    $title = $title . strtolower($petName) . ', ';
  }

  if (!is_empty_string($type)){
    $title = $title . strtolower($type) . ', ';
  }

  if (!is_empty_string($situation)){
    $title = $title . strtolower($situation) . ', ';
  }

  if (!is_empty_string($petRace) && strtolower($petRace) != 'otra'){
    $title = $title . strtolower($petRace) . ', ';
  }

  if (!is_empty_string($petColor)){
    $title = $title . strtolower($petColor) . ', ';
  }

  if (!is_empty_string($neighborhood)){
    $title = $title . strtolower($neighborhood) . ', ';
  }

  return str_lreplace(', ', '', $title);

}

function fm_custom_submission_action($args){

  $formInfo = $args['form'];
  $postData = $args['data'];

  //---------------- START - amatasuarez
  /* src: https://wordpress.org/support/topic/plugin-wordpress-form-manager-adding-tags-and-custom-field
   *
   * Add the value of some fields of the form as post tags and categories.
   * Those fields are: 'tipo de mascota', 'raza', 'color', 'barrio', 'ciudad', 'situacion'.
   */
  $post       = wp_get_recent_posts('1')['0'];
  $postId     = $post['ID'];
  $tags       = '';
  $categories = array();

  // Form data
  $situation    = '';
  $type         = '';
  $petName      = '';
  $petRace      = '';
  $petColor     = '';
  $neighborhood = '';

  // Parse form data
  foreach ( $formInfo['items'] as $item ) {
    switch(strtolower($item['label'])){
      case 'situación':
        $situation = trim($postData[ $item['unique_name'] ]);
        break;
      case 'tipo de mascota':
        $type = trim($postData[ $item['unique_name'] ]);
        break;
      case 'nombre de la mascota':
        $petName = trim($postData[ $item['unique_name'] ]);
        break;
      case 'raza':
        $petRace = trim($postData[ $item['unique_name'] ]);
        $tags = $tags . ',' . trim($postData[ $item['unique_name'] ]);
        break;
      case 'color':
        $petColor = trim($postData[ $item['unique_name'] ]);
        $tags = $tags . ',' . trim($postData[ $item['unique_name'] ]);
        break;
      case 'barrio':
        $neighborhood = trim($postData[ $item['unique_name'] ]);
        $tags = $tags . ',' . trim($postData[ $item['unique_name'] ]);
        break;
      case 'ciudad':
        $tags = $tags . ',' . trim($postData[ $item['unique_name'] ]);
        break;
    }
  }

  // Set post tags
  wp_set_post_tags($postId, $tags, true);

  // Set post title
  wp_update_post(array(
    'ID'         => $postId,
    'post_title' => build_post_title($petName, $type, $situation, $petRace, $petColor, $neighborhood)
  ));

  // Set categories
  switch (strtolower($situation)){
    case 'encontrada':
      $categories[] = CATEGORY_ID_FOUND;
      switch (strtolower($type)){
        case 'gato':
          $categories[] = CATEGORY_ID_FOUND_CAT;
          break;
        case 'perro':
          $categories[] = CATEGORY_ID_FOUND_DOG;
          break;
      }
      break;
    case 'perdida':
      $categories[] = CATEGORY_ID_LOST;
      switch (strtolower($type)){
        case 'gato':
          $categories[] = CATEGORY_ID_LOST_CAT;
          break;
        case 'perro':
          $categories[] = CATEGORY_ID_LOST_DOG;
          break;
      }
      break;
    case 'en adopción':
      $categories[] = CATEGORY_ID_ADOPTION;
      switch (strtolower($type)){
        case 'gato':
          $categories[] = CATEGORY_ID_ADOPTION_CAT;
          break;
        case 'perro':
          $categories[] = CATEGORY_ID_ADOPTION_DOG;
          break;
      }
      break;
  }

  wp_set_post_categories($postId, $categories, false);

  // Uncomment this line to publish immediately.
  // DISCLAIMER: This is not recommended as it skips any admin moderation.
  // wp_publish_post($postId);

  //---------------- END - amatasuarez

  // print_info($args);
}

function print_info($args){

  /* uncomment the line below to see the full set of available form information. */
  echo '<pre>'.print_r( $formInfo, true ).'</pre>';

  /* uncomment the line below to see the current form's submission data.
    The array is keyed by both item nickname and UUID. */
  echo '<pre>'.print_r( $postData, true ).'</pre>';

  /* the code below gives a summary of the form used, and the submitted data. It also
  is a good example of how to access the $formInfo and $postData variables! */

  echo '<pre>';
  echo 'Form ID: ' . $formInfo['ID'] . "\n";
  echo 'Form slug: ' . $formInfo['shortcode'] . "\n";
  echo 'Form Title: ' . $formInfo['title'] . "\n";
  echo 'MySQL data table: ' . $formInfo['data_table'] . "\n";

  echo "\nSubmission data: \n";
  foreach ( $formInfo['items'] as $item ) {
   echo '  ' . $item['label'] . '(' . $item['type'] . ') : ';
   echo $postData[ $item['unique_name'] ] . "\n";
  }

  echo '</pre>';
}

?>
