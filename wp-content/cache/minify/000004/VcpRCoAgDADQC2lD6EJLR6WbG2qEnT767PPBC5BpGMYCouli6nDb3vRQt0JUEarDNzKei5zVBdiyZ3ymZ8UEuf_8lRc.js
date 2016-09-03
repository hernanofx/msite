/* global WPGroHo:true, Gravatar */
WPGroHo = jQuery.extend( {
	my_hash: '',
	data: {},
	renderers: {},
	syncProfileData: function( hash, id ) {
		if ( !WPGroHo.data[hash] ) {
			WPGroHo.data[hash] = {};
			jQuery( 'div.grofile-hash-map-' + hash + ' span' ).each( function() {
				WPGroHo.data[hash][this.className] = jQuery( this ).text();
			} );
		}

		WPGroHo.appendProfileData( WPGroHo.data[hash], hash, id );
	},
	appendProfileData: function( data, hash, id ) {
		for ( var key in data ) {
			if ( jQuery.isFunction( WPGroHo.renderers[key] ) ) {
				return WPGroHo.renderers[key]( data[key], hash, id, key );
			}

			jQuery( '#' + id ).find( 'h4' ).after( jQuery( '<p class="grav-extra ' + key + '" />' ).html( data[key] ) );
		}
	}
}, WPGroHo );

jQuery( document ).ready( function() {
	Gravatar.profile_cb = function( h, d ) {
		WPGroHo.syncProfileData( h, d );
	};

	Gravatar.my_hash = WPGroHo.my_hash;
	Gravatar.init( 'body', '#wpadminbar' );
} );

;var addComment={moveForm:function(a,b,c,d){var e,f=this,g=f.I(a),h=f.I(c),i=f.I("cancel-comment-reply-link"),j=f.I("comment_parent"),k=f.I("comment_post_ID");if(g&&h&&i&&j){f.respondId=c,d=d||!1,f.I("wp-temp-form-div")||(e=document.createElement("div"),e.id="wp-temp-form-div",e.style.display="none",h.parentNode.insertBefore(e,h)),g.parentNode.insertBefore(h,g.nextSibling),k&&d&&(k.value=d),j.value=b,i.style.display="",i.onclick=function(){var a=addComment,b=a.I("wp-temp-form-div"),c=a.I(a.respondId);if(b&&c)return a.I("comment_parent").value="0",b.parentNode.insertBefore(c,b),b.parentNode.removeChild(b),this.style.display="none",this.onclick=null,!1};try{f.I("comment").focus()}catch(l){}return!1}},I:function(a){return document.getElementById(a)}};
;"use strict";var BJLL_options=BJLL_options||{},BJLL={_ticking:!1,check:function(){if(!BJLL._ticking){BJLL._ticking=!0,"undefined"==typeof BJLL.threshold&&(BJLL.threshold="undefined"!=typeof BJLL_options.threshold?parseInt(BJLL_options.threshold):200);var winH=document.documentElement.clientHeight||body.clientHeight,updated=!1,els=document.getElementsByClassName("lazy-hidden");[].forEach.call(els,function(el){var elemRect=el.getBoundingClientRect();winH-elemRect.top+BJLL.threshold>0&&(BJLL.show(el),updated=!0)}),BJLL._ticking=!1,updated&&BJLL.check()}},show:function(el){el.className=el.className.replace(/(?:^|\s)lazy-hidden(?!\S)/g,""),el.addEventListener("load",function(){BJLL.customEvent(el,"lazyloaded")},!1);var type=el.getAttribute("data-lazy-type");if("image"==type)el.setAttribute("src",el.getAttribute("data-lazy-src")),null!=el.getAttribute("data-srcset")&&el.setAttribute("srcset",el.getAttribute("data-srcset"));else if("iframe"==type){var s=el.getAttribute("data-lazy-src"),div=document.createElement("div");div.innerHTML=s;var iframe=div.firstChild;el.parentNode.replaceChild(iframe,el)}},customEvent:function(el,eventName){var event;document.createEvent?(event=document.createEvent("HTMLEvents"),event.initEvent(eventName,!0,!0)):(event=document.createEventObject(),event.eventType=eventName),event.eventName=eventName,document.createEvent?el.dispatchEvent(event):el.fireEvent("on"+event.eventType,event)}};window.addEventListener("load",BJLL.check,!1),window.addEventListener("scroll",BJLL.check,!1),window.addEventListener("resize",BJLL.check,!1),document.getElementsByTagName("body").item(0).addEventListener("post-load",BJLL.check,!1);