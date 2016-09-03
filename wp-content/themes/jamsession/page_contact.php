<?php
/*
Template Name: Contact Page
*/
?>

<?php
$nameError = "";
$emailError = "";
$commentError = "";
if(isset($_POST['submitted'])) 
{
	if (sanitize_text_field($_POST['contactName']) === '')
	{
		$nameError = __('Please enter your name.', 'jamsession');
		$hasError = true;
	}
	else 
	{
		$name = sanitize_text_field($_POST['contactName']);
	}

	if (trim($_POST['email']) === '')
	{
		$emailError = __('Please enter your email address.', 'jamsession');
		$hasError = true;
	}
	else 
	{
		if ((!is_email($_POST['email'])))
		{
			$emailError = __('You entered an invalid email address.', 'jamsession');
			$hasError = true;
		} 
		else 
		{
			$email = trim($_POST['email']);
		}
	}
	
	$phone = sanitize_text_field($_POST['phone']);
	

	if(sanitize_text_field($_POST['comments']) === '') 
	{
		$commentError = __('Please enter a message.', 'jamsession');
		$hasError = true;
	}
	else 
	{
		$comments = sanitize_text_field($_POST['comments']);
	}

	if ( isset($_POST["recaptcha_challenge_field"]) && isset($_POST["recaptcha_response_field"]) )
	{	
		if ( false == JAMSESSION_SWP_check_recaptcha($_SERVER["REMOTE_ADDR"], $_POST["recaptcha_challenge_field"], $_POST["recaptcha_response_field"]))
		{
			$captchaError = true;
			$hasError = true;
		}
	}
	
	if(!isset($hasError)) 
	{
		
		//$emailTo = get_option('admin_email');
		$emailTo = JAMSESSION_SWP_get_contact_to_email();

        // subject
        $email_subject = "[" . get_bloginfo( 'name' ) . "] " . __("Contact Form Message", "jamsession");
        // message content
        $email_message = $comments;
		$email_message .= "\n\n".__("Contact Phone: ", "jamsession")." ".$phone."\n";
		
        // e-mail headers with the user's name, e-mail address and character encoding
        $headers  = "From: " . $name . " <" . $email . ">\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\n";
        $headers .= "Content-Transfer-Encoding: 8bit\n";
        // send the e-mail with the shortcode attribute named 'email' and the POSTed data
        wp_mail( $emailTo, $email_subject, $email_message, $headers );
        // and set the result text to the shortcode attribute named 'success'
        $emailSent = true;
		
	}

}
?>


<?php
	get_header();
?>

<div id="main_content">
	<div id="post_content">
		<?php
		if (have_posts()) 
		{	
			while (have_posts()) 
			{
				the_post();
			
				?><div id="page_title"><?php the_title();?></div>

					<?php
					if(isset($emailSent) && $emailSent == true) 
					{ ?>
						<div class="thanks">
							<p class="error"><?php echo __('Thanks, your email was sent successfully.', 'jamsession'); ?></p>
						</div>
					<?php 
					} 
					else
					{ 
						?>
						<?php the_content(); ?>
						<?php if(isset($hasError) || isset($captchaError)) 
						{ ?>
							<p class="error"><?php echo __('Sorry, an error occured.', 'jamsession'); ?></p>
							<?php
							if ( isset($captchaError))
							{
								echo '<p class="error">'.__('The reCAPTCHA was not entered correctly.', 'jamsession').'</p>';
							}							
						} 
					}
					
					?>

					<div class="social_profiles_contact">
						<?php
							JAMSESSION_SWP_front_page_social_profiles();
						?>
					</div>
					
					<div id="contactform">
						<h2><?php echo __('Send us a Message', 'jamsession'); ?></h2>
						<form action="<?php the_permalink(); ?>" id="contactForm" method="post">
								<ul class="contactform">
								<li class="comment-form-author">
									<label for="contactName"><?php echo __('Name ', 'jamsession'); ?><span class="required_field">*</span></label>
									<input type="text" name="contactName" id="contactName" value="<?php if(isset($_POST['contactName'])) echo sanitize_text_field($_POST['contactName']);?>" class="required requiredField" />
									<?php if($nameError != '') { ?>
										<span class="error"><?php echo $nameError;?></span>
									<?php } ?>
								</li>
							

								<li class="comment-form-email">
									<label for="email"><?php echo __('Email ', 'jamsession'); ?><span class="required_field">*</span></label>
									<input type="text" name="email" id="email" value="<?php if(isset($_POST['email']))  echo sanitize_email($_POST['email']) ;?>" class="required requiredField email" />
									<?php if($emailError != '') { ?>
										<span class="error"><?php echo $emailError;?></span>
									<?php } ?>
								</li>
								
								<li class="comment-form-url">
									<label for="phone"><?php echo __('Phone ', 'jamsession'); ?></label>
									<input type="text" name="phone" id="phone" value="<?php if(isset($_POST['phone']))  echo sanitize_text_field($_POST['phone']);?>"  />
								</li>								

								<li class="comment-form-comment">
									<label for="commentsText"><?php echo __('Message ', 'jamsession'); ?><span class="required_field">*</span></label>
									<textarea name="comments" id="commentsText" rows="10" cols="30" class="required requiredField"><?php 
										if(isset($_POST['comments']))
										{ 
												echo sanitize_text_field($_POST['comments']);
										} 
										?></textarea>
									<?php if($commentError != '') { ?>
										<span class="error"><?php echo $commentError;?></span>
									<?php } ?>
								</li>
								<?php
									JAMSESSION_SWP_show_recaptcha();
								?>
								<li>
									<input name="Button1" type="submit" id="submit" value="<?php echo __('Send Email', 'jamsession'); ?>" >
								</li>
							</ul>
							<input type="hidden" name="submitted" id="submitted" value="true" />
						</form>
					</div>
					<?php					
			} /*while*/
		}	/*if*/
		else
		{
			echo '<p>'.__('Sorry, no pages matched your criteria.', 'jamsession').'</p>';
		}
		?>	
	</div>

<?php	get_sidebar();	?>

<div class="clearfix"></div>
</div>

<?php	
	get_footer();
?>