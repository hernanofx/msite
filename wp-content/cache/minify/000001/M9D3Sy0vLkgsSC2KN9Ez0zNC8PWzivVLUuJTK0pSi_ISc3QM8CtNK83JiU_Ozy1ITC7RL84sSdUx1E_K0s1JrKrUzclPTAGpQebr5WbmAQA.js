//@prepros-append td_style_customizer.js


// jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
jQuery.easing.jswing=jQuery.easing.swing;
jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,a,c,b,d){return jQuery.easing[jQuery.easing.def](e,a,c,b,d)},easeInQuad:function(e,a,c,b,d){return b*(a/=d)*a+c},easeOutQuad:function(e,a,c,b,d){return-b*(a/=d)*(a-2)+c},easeInOutQuad:function(e,a,c,b,d){return 1>(a/=d/2)?b/2*a*a+c:-b/2*(--a*(a-2)-1)+c},easeInCubic:function(e,a,c,b,d){return b*(a/=d)*a*a+c},easeOutCubic:function(e,a,c,b,d){return b*((a=a/d-1)*a*a+1)+c},easeInOutCubic:function(e,a,c,b,d){return 1>(a/=d/2)?b/2*a*a*a+c:
    b/2*((a-=2)*a*a+2)+c},easeInQuart:function(e,a,c,b,d){return b*(a/=d)*a*a*a+c},easeOutQuart:function(e,a,c,b,d){return-b*((a=a/d-1)*a*a*a-1)+c},easeInOutQuart:function(e,a,c,b,d){return 1>(a/=d/2)?b/2*a*a*a*a+c:-b/2*((a-=2)*a*a*a-2)+c},easeInQuint:function(e,a,c,b,d){return b*(a/=d)*a*a*a*a+c},easeOutQuint:function(e,a,c,b,d){return b*((a=a/d-1)*a*a*a*a+1)+c},easeInOutQuint:function(e,a,c,b,d){return 1>(a/=d/2)?b/2*a*a*a*a*a+c:b/2*((a-=2)*a*a*a*a+2)+c},easeInSine:function(e,a,c,b,d){return-b*Math.cos(a/
    d*(Math.PI/2))+b+c},easeOutSine:function(e,a,c,b,d){return b*Math.sin(a/d*(Math.PI/2))+c},easeInOutSine:function(e,a,c,b,d){return-b/2*(Math.cos(Math.PI*a/d)-1)+c},easeInExpo:function(e,a,c,b,d){return 0==a?c:b*Math.pow(2,10*(a/d-1))+c},easeOutExpo:function(e,a,c,b,d){return a==d?c+b:b*(-Math.pow(2,-10*a/d)+1)+c},easeInOutExpo:function(e,a,c,b,d){return 0==a?c:a==d?c+b:1>(a/=d/2)?b/2*Math.pow(2,10*(a-1))+c:b/2*(-Math.pow(2,-10*--a)+2)+c},easeInCirc:function(e,a,c,b,d){return-b*(Math.sqrt(1-(a/=d)*
    a)-1)+c},easeOutCirc:function(e,a,c,b,d){return b*Math.sqrt(1-(a=a/d-1)*a)+c},easeInOutCirc:function(e,a,c,b,d){return 1>(a/=d/2)?-b/2*(Math.sqrt(1-a*a)-1)+c:b/2*(Math.sqrt(1-(a-=2)*a)+1)+c},easeInElastic:function(e,a,c,b,d){e=1.70158;var f=0,g=b;if(0==a)return c;if(1==(a/=d))return c+b;f||(f=0.3*d);g<Math.abs(b)?(g=b,e=f/4):e=f/(2*Math.PI)*Math.asin(b/g);return-(g*Math.pow(2,10*(a-=1))*Math.sin((a*d-e)*2*Math.PI/f))+c},easeOutElastic:function(e,a,c,b,d){e=1.70158;var f=0,g=b;if(0==a)return c;if(1==
    (a/=d))return c+b;f||(f=0.3*d);g<Math.abs(b)?(g=b,e=f/4):e=f/(2*Math.PI)*Math.asin(b/g);return g*Math.pow(2,-10*a)*Math.sin((a*d-e)*2*Math.PI/f)+b+c},easeInOutElastic:function(e,a,c,b,d){e=1.70158;var f=0,g=b;if(0==a)return c;if(2==(a/=d/2))return c+b;f||(f=d*0.3*1.5);g<Math.abs(b)?(g=b,e=f/4):e=f/(2*Math.PI)*Math.asin(b/g);return 1>a?-0.5*g*Math.pow(2,10*(a-=1))*Math.sin((a*d-e)*2*Math.PI/f)+c:0.5*g*Math.pow(2,-10*(a-=1))*Math.sin((a*d-e)*2*Math.PI/f)+b+c},easeInBack:function(e,a,c,b,d,f){void 0==
    f&&(f=1.70158);return b*(a/=d)*a*((f+1)*a-f)+c},easeOutBack:function(e,a,c,b,d,f){void 0==f&&(f=1.70158);return b*((a=a/d-1)*a*((f+1)*a+f)+1)+c},easeInOutBack:function(e,a,c,b,d,f){void 0==f&&(f=1.70158);return 1>(a/=d/2)?b/2*a*a*(((f*=1.525)+1)*a-f)+c:b/2*((a-=2)*a*(((f*=1.525)+1)*a+f)+2)+c},easeInBounce:function(e,a,c,b,d){return b-jQuery.easing.easeOutBounce(e,d-a,0,b,d)+c},easeOutBounce:function(e,a,c,b,d){return(a/=d)<1/2.75?b*7.5625*a*a+c:a<2/2.75?b*(7.5625*(a-=1.5/2.75)*a+0.75)+c:a<2.5/2.75?
    b*(7.5625*(a-=2.25/2.75)*a+0.9375)+c:b*(7.5625*(a-=2.625/2.75)*a+0.984375)+c},easeInOutBounce:function(e,a,c,b,d){return a<d/2?0.5*jQuery.easing.easeInBounce(e,2*a,0,b,d)+c:0.5*jQuery.easing.easeOutBounce(e,2*a-d,0,b,d)+0.5*b+c}});



/*
 *  v0.2b - jQuery plugin
 * Copyright (c) 2008 Joel Birch
 * Dual licensed under the MIT and GPL licenses:
 * 	http://www.opensource.org/licenses/mit-license.php
 * 	http://www.gnu.org/licenses/gpl.html
 */
(function(a){a.fn.supersubs=function(h){var f=a.extend({},a.fn.supersubs.defaults,h);return this.each(function(){var c=a(this),d=a.meta?a.extend({},f,c.data()):f,h=a('<li id="menu-fontsize">&#8212;</li>').css({padding:0,position:"absolute",top:"-999em",width:"auto"}).appendTo(c).width();a("#menu-fontsize").remove();$ULs=c.find("ul");$ULs.each(function(e){e=$ULs.eq(e);var g=e.children(),c=g.children("a"),f=g.css("white-space","nowrap").css("float"),b=e.add(g).add(c).css({"float":"none",width:"auto"}).end().end()[0].clientWidth/
    h,b=b+d.extraWidth;b>d.maxWidth?b=d.maxWidth:b<d.minWidth&&(b=d.minWidth);b+="em";e.css("width",b);g.css({"float":f,width:"100%","white-space":"normal"}).each(function(){var c=a(">ul",this),d=void 0!==c.css("left")?"left":"right";c.css(d,b)})})})};a.fn.supersubs.defaults={minWidth:9,maxWidth:25,extraWidth:0}})(jQuery);



/**
 * hoverIntent is similar to jQuery's built-in "hover" method except that
 * instead of firing the handlerIn function immediately, hoverIntent checks
 * to see if the user's mouse has slowed down (beneath the sensitivity
 * threshold) before firing the event. The handlerOut function is only
 * called after a matching handlerIn.
 *
 * hoverIntent r7 // 2013.03.11 // jQuery 1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 */
(function(e){e.fn.hoverIntent=function(a,f,n){var b={interval:100,sensitivity:7,timeout:0},b="object"===typeof a?e.extend(b,a):e.isFunction(f)?e.extend(b,{over:a,out:f,selector:n}):e.extend(b,{over:a,out:a,selector:f}),g,h,j,k,l=function(b){g=b.pageX;h=b.pageY},m=function(a,d){d.hoverIntent_t=clearTimeout(d.hoverIntent_t);if(Math.abs(j-g)+Math.abs(k-h)<b.sensitivity)return e(d).off("mousemove.hoverIntent",l),d.hoverIntent_s=1,b.over.apply(d,[a]);j=g;k=h;d.hoverIntent_t=setTimeout(function(){m(a,d)},
    b.interval)};a=function(a){var d=jQuery.extend({},a),c=this;c.hoverIntent_t&&(c.hoverIntent_t=clearTimeout(c.hoverIntent_t));"mouseenter"==a.type?(j=d.pageX,k=d.pageY,e(c).on("mousemove.hoverIntent",l),1!=c.hoverIntent_s&&(c.hoverIntent_t=setTimeout(function(){m(d,c)},b.interval))):(e(c).off("mousemove.hoverIntent",l),1==c.hoverIntent_s&&(c.hoverIntent_t=setTimeout(function(){c.hoverIntent_t=clearTimeout(c.hoverIntent_t);c.hoverIntent_s=0;b.out.apply(c,[d])},b.timeout)))};return this.on({"mouseenter.hoverIntent":a,
    "mouseleave.hoverIntent":a},b.selector)}})(jQuery);

/*
 * Superfish v1.5.13 - jQuery menu widget
 * Copyright (c) 2013 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 * 	http://www.opensource.org/licenses/mit-license.php
 * 	http://www.gnu.org/licenses/gpl.html
 *
 */
(function(c){c.fn.superfish=function(d){var f=c.fn.superfish,a=f.c,g=c('<span class="'+a.arrowClass+'"> &#187;</span>'),h=function(){var e=c(this),b=l(e);clearTimeout(b.sfTimer);e.showSuperfishUl().siblings().hideSuperfishUl()},j=function(e){var b=c(this),d=l(b),a=f.op,g=function(){a.retainPath=-1<c.inArray(b[0],a.$path);b.hideSuperfishUl();a.$path.length&&1>b.parents("li."+a.hoverClass).length&&(a.onIdle.call(),c.proxy(h,a.$path,e)())};"click"===e.type?g():(clearTimeout(d.sfTimer),d.sfTimer=setTimeout(g,
    a.delay))},l=function(e){e.hasClass(a.menuClass)&&c.error("Superfish requires you to update to a version of hoverIntent that supports event-delegation, such as this one: https://github.com/joeldbirch/onHoverIntent");e=e.closest("."+a.menuClass)[0];f.op=f.o[e.serial];return e},n=function(e){var b=c(this),a=b.siblings("ul");if(0<a.length&&!a.is(":visible")&&(b.data("follow",!1),"MSPointerDown"===e.type))return b.trigger("focus"),!1},p=function(a){var b=c(this),d=b.siblings("ul"),g=!1===b.data("follow")?
    !1:!0;if(d.length&&(f.op.useClick||!g))a.preventDefault(),d.is(":visible")?f.op.useClick&&g&&c.proxy(j,b.parent("li"),a)():c.proxy(h,b.parent("li"))()};return this.addClass(a.menuClass).each(function(){var e=this.serial=f.o.length,b=c.extend({},f.defaults,d),k=c(this),l=k.find("li:has(ul)");b.$path=k.find("li."+b.pathClass).slice(0,b.pathLevels).each(function(){c(this).addClass(b.hoverClass+" "+a.bcClass).filter("li:has(ul)").removeClass(b.pathClass)});f.o[e]=f.op=b;b.autoArrows&&l.children("a").each(function(){c(this).addClass(a.anchorClass).append(g.clone())});
    k.css("ms-touch-action","none");if(!f.op.useClick)if(c.fn.hoverIntent&&!f.op.disableHI)k.hoverIntent(h,j,"li:has(ul)");else k.on("mouseenter","li:has(ul)",h).on("mouseleave","li:has(ul)",j);e="MSPointerDown";navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad)/)||(e+=" touchstart");k.on("focusin","li",h).on("focusout","li",j).on("click","a",p).on(e,"a",n);l.not("."+a.bcClass).children("ul").show().hide();b.onInit.call(this)})};var g=c.fn.superfish;g.o=[];g.op={};g.c={bcClass:"sf-breadcrumb",
    menuClass:"sf-js-enabled",anchorClass:"sf-with-ul",arrowClass:"sf-sub-indicator"};g.defaults={hoverClass:"sfHover",pathClass:"overideThisToUse",pathLevels:1,delay:800,animation:{opacity:"show"},animationOut:{opacity:"hide"},speed:"normal",speedOut:"fast",autoArrows:!0,disableHI:!1,useClick:!1,onInit:function(){},onBeforeShow:function(){},onShow:function(){},onHide:function(){},onIdle:function(){}};c.fn.extend({hideSuperfishUl:function(){var d=g.op,f=this,a=!0===d.retainPath?d.$path:"";d.retainPath=
    !1;c("li."+d.hoverClass,this).add(this).not(a).children("ul").stop(!0,!0).animate(d.animationOut,d.speedOut,function(){$ul=c(this);$ul.parent().removeClass(d.hoverClass);d.onHide.call($ul);g.op.useClick&&f.children("a").data("follow",!1)});return this},showSuperfishUl:function(){var d=g.op,f=this,a=this.children("ul");f.addClass(d.hoverClass);d.onBeforeShow.call(a);a.stop(!0,!0).animate(d.animation,d.speed,function(){d.onShow.call(a);f.children("a").data("follow",!0)});var m=c(window).width(),h=this.children("ul").first();
    if(0<h.length){var j=this.children("ul").first().offset().left+h.width();j>m&&(h.parent().parent().hasClass("sf-menu")?h.css("left","-"+(j-m)+"px"):h.addClass("reversed").css("left","-"+(h.width()+0)+"px"))}return this}})})(jQuery);



/* ============================================================
 * bootstrap-dropdown.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#dropdowns
 * ============================================================ */
!function(d){function h(){d(f).each(function(){g(d(this)).removeClass("open")})}function g(b){var a=b.attr("data-target");a||(a=(a=b.attr("href"))&&/#/.test(a)&&a.replace(/.*(?=#[^\s]*$)/,""));a=a&&d(a);if(!a||!a.length)a=b.parent();return a}var f="[data-toggle=dropdown]",e=function(b){var a=d(b).on("click.dropdown.data-api",this.toggle);d("html").on("click.dropdown.data-api",function(){a.parent().removeClass("open")})};e.prototype={constructor:e,toggle:function(){var b=d(this),a,c;if(!b.is(".disabled, :disabled"))return a=
    g(b),c=a.hasClass("open"),h(),c||a.toggleClass("open"),b.focus(),!1},keydown:function(b){var a,c,e;if(/(38|40|27)/.test(b.keyCode)&&(a=d(this),b.preventDefault(),b.stopPropagation(),!a.is(".disabled, :disabled"))){c=g(a);e=c.hasClass("open");if(!e||e&&27==b.keyCode)return 27==b.which&&c.find(f).focus(),a.click();a=d("[role=menu] li:not(.divider):visible a",c);a.length&&(c=a.index(a.filter(":focus")),38==b.keyCode&&0<c&&c--,40==b.keyCode&&c<a.length-1&&c++,~c||(c=0),a.eq(c).focus())}}};var j=d.fn.dropdown;
    d.fn.dropdown=function(b){return this.each(function(){var a=d(this),c=a.data("dropdown");c||a.data("dropdown",c=new e(this));"string"==typeof b&&c[b].call(a)})};d.fn.dropdown.Constructor=e;d.fn.dropdown.noConflict=function(){d.fn.dropdown=j;return this};d(document).on("click.dropdown.data-api",h).on("click.dropdown.data-api",".dropdown form",function(b){b.stopPropagation()}).on("click.dropdown.data-api",f,e.prototype.toggle).on("keydown.dropdown.data-api",f+", [role=menu]",e.prototype.keydown)}(window.jQuery);




/*
 * jQuery FlexSlider v2.1
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
;(function(d){d.flexslider=function(i,k){var a=d(i),c=d.extend({},d.flexslider.defaults,k),e=c.namespace,p="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,t=p?"touchend":"click",l="vertical"===c.direction,m=c.reverse,h=0<c.itemWidth,r="fade"===c.animation,s=""!==c.asNavFor,f={};d.data(i,"flexslider",a);f={init:function(){a.animating=!1;a.currentSlide=c.startAt;a.animatingTo=a.currentSlide;a.atEnd=0===a.currentSlide||a.currentSlide===a.last;a.containerSelector=c.selector.substr(0,
    c.selector.search(" "));a.slides=d(c.selector,a);a.container=d(a.containerSelector,a);a.count=a.slides.length;a.syncExists=0<d(c.sync).length;"slide"===c.animation&&(c.animation="swing");a.prop=l?"top":"marginLeft";a.args={};a.manualPause=!1;var b=a,g;if(g=!c.video)if(g=!r)if(g=c.useCSS)a:{g=document.createElement("div");var n=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"],e;for(e in n)if(void 0!==g.style[n[e]]){a.pfx=n[e].replace("Perspective","").toLowerCase();
    a.prop="-"+a.pfx+"-transform";g=!0;break a}g=!1}b.transitions=g;""!==c.controlsContainer&&(a.controlsContainer=0<d(c.controlsContainer).length&&d(c.controlsContainer));""!==c.manualControls&&(a.manualControls=0<d(c.manualControls).length&&d(c.manualControls));c.randomize&&(a.slides.sort(function(){return Math.round(Math.random())-0.5}),a.container.empty().append(a.slides));a.doMath();s&&f.asNav.setup();a.setup("init");c.controlNav&&f.controlNav.setup();c.directionNav&&f.directionNav.setup();c.keyboard&&
    (1===d(a.containerSelector).length||c.multipleKeyboard)&&d(document).bind("keyup",function(b){b=b.keyCode;if(!a.animating&&(39===b||37===b))b=39===b?a.getTarget("next"):37===b?a.getTarget("prev"):!1,a.flexAnimate(b,c.pauseOnAction)});c.mousewheel&&a.bind("mousewheel",function(b,g){b.preventDefault();var d=0>g?a.getTarget("next"):a.getTarget("prev");a.flexAnimate(d,c.pauseOnAction)});c.pausePlay&&f.pausePlay.setup();c.slideshow&&(c.pauseOnHover&&a.hover(function(){!a.manualPlay&&!a.manualPause&&a.pause()},
    function(){!a.manualPause&&!a.manualPlay&&a.play()}),0<c.initDelay?setTimeout(a.play,c.initDelay):a.play());p&&c.touch&&f.touch();(!r||r&&c.smoothHeight)&&d(window).bind("resize focus",f.resize);setTimeout(function(){c.start(a)},200)},asNav:{setup:function(){a.asNav=!0;a.animatingTo=Math.floor(a.currentSlide/a.move);a.currentItem=a.currentSlide;a.slides.removeClass(e+"active-slide").eq(a.currentItem).addClass(e+"active-slide");a.slides.click(function(b){b.preventDefault();var b=d(this),g=b.index();
    !d(c.asNavFor).data("flexslider").animating&&!b.hasClass("active")&&(a.direction=a.currentItem<g?"next":"prev",a.flexAnimate(g,c.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){a.manualControls?f.controlNav.setupManual():f.controlNav.setupPaging()},setupPaging:function(){var b=1,g;a.controlNavScaffold=d('<ol class="'+e+"control-nav "+e+("thumbnails"===c.controlNav?"control-thumbs":"control-paging")+'"></ol>');if(1<a.pagingCount)for(var n=0;n<a.pagingCount;n++)g="thumbnails"===c.controlNav?
    '<img src="'+a.slides.eq(n).attr("data-thumb")+'"/>':"<a>"+b+"</a>",a.controlNavScaffold.append("<li>"+g+"</li>"),b++;a.controlsContainer?d(a.controlsContainer).append(a.controlNavScaffold):a.append(a.controlNavScaffold);f.controlNav.set();f.controlNav.active();a.controlNavScaffold.delegate("a, img",t,function(b){b.preventDefault();var b=d(this),g=a.controlNav.index(b);b.hasClass(e+"active")||(a.direction=g>a.currentSlide?"next":"prev",a.flexAnimate(g,c.pauseOnAction))});p&&a.controlNavScaffold.delegate("a",
    "click touchstart",function(a){a.preventDefault()})},setupManual:function(){a.controlNav=a.manualControls;f.controlNav.active();a.controlNav.live(t,function(b){b.preventDefault();var b=d(this),g=a.controlNav.index(b);b.hasClass(e+"active")||(g>a.currentSlide?a.direction="next":a.direction="prev",a.flexAnimate(g,c.pauseOnAction))});p&&a.controlNav.live("click touchstart",function(a){a.preventDefault()})},set:function(){a.controlNav=d("."+e+"control-nav li "+("thumbnails"===c.controlNav?"img":"a"),
    a.controlsContainer?a.controlsContainer:a)},active:function(){a.controlNav.removeClass(e+"active").eq(a.animatingTo).addClass(e+"active")},update:function(b,c){1<a.pagingCount&&"add"===b?a.controlNavScaffold.append(d("<li><a>"+a.count+"</a></li>")):1===a.pagingCount?a.controlNavScaffold.find("li").remove():a.controlNav.eq(c).closest("li").remove();f.controlNav.set();1<a.pagingCount&&a.pagingCount!==a.controlNav.length?a.update(c,b):f.controlNav.active()}},directionNav:{setup:function(){var b=d('<ul class="'+
    e+'direction-nav"><li><a class="'+e+'prev" href="#">'+c.prevText+'</a></li><li><a class="'+e+'next" href="#">'+c.nextText+"</a></li></ul>");a.controlsContainer?(d(a.controlsContainer).append(b),a.directionNav=d("."+e+"direction-nav li a",a.controlsContainer)):(a.append(b),a.directionNav=d("."+e+"direction-nav li a",a));f.directionNav.update();a.directionNav.bind(t,function(b){b.preventDefault();b=d(this).hasClass(e+"next")?a.getTarget("next"):a.getTarget("prev");a.flexAnimate(b,c.pauseOnAction)});
    p&&a.directionNav.bind("click touchstart",function(a){a.preventDefault()})},update:function(){var b=e+"disabled";1===a.pagingCount?a.directionNav.addClass(b):c.animationLoop?a.directionNav.removeClass(b):0===a.animatingTo?a.directionNav.removeClass(b).filter("."+e+"prev").addClass(b):a.animatingTo===a.last?a.directionNav.removeClass(b).filter("."+e+"next").addClass(b):a.directionNav.removeClass(b)}},pausePlay:{setup:function(){var b=d('<div class="'+e+'pauseplay"><a></a></div>');a.controlsContainer?
    (a.controlsContainer.append(b),a.pausePlay=d("."+e+"pauseplay a",a.controlsContainer)):(a.append(b),a.pausePlay=d("."+e+"pauseplay a",a));f.pausePlay.update(c.slideshow?e+"pause":e+"play");a.pausePlay.bind(t,function(b){b.preventDefault();d(this).hasClass(e+"pause")?(a.manualPause=!0,a.manualPlay=!1,a.pause()):(a.manualPause=!1,a.manualPlay=!0,a.play())});p&&a.pausePlay.bind("click touchstart",function(a){a.preventDefault()})},update:function(b){"play"===b?a.pausePlay.removeClass(e+"pause").addClass(e+
    "play").text(c.playText):a.pausePlay.removeClass(e+"play").addClass(e+"pause").text(c.pauseText)}},touch:function(){function b(b){j=l?d-b.touches[0].pageY:d-b.touches[0].pageX;p=l?Math.abs(j)<Math.abs(b.touches[0].pageX-e):Math.abs(j)<Math.abs(b.touches[0].pageY-e);if(!p||500<Number(new Date)-k)b.preventDefault(),!r&&a.transitions&&(c.animationLoop||(j/=0===a.currentSlide&&0>j||a.currentSlide===a.last&&0<j?Math.abs(j)/q+2:1),a.setProps(f+j,"setTouch"))}function g(){i.removeEventListener("touchmove",
    b,!1);if(a.animatingTo===a.currentSlide&&!p&&null!==j){var h=m?-j:j,l=0<h?a.getTarget("next"):a.getTarget("prev");a.canAdvance(l)&&(550>Number(new Date)-k&&50<Math.abs(h)||Math.abs(h)>q/2)?a.flexAnimate(l,c.pauseOnAction):r||a.flexAnimate(a.currentSlide,c.pauseOnAction,!0)}i.removeEventListener("touchend",g,!1);f=j=e=d=null}var d,e,f,q,j,k,p=!1;i.addEventListener("touchstart",function(j){a.animating?j.preventDefault():1===j.touches.length&&(a.pause(),q=l?a.h:a.w,k=Number(new Date),f=h&&m&&a.animatingTo===
    a.last?0:h&&m?a.limit-(a.itemW+c.itemMargin)*a.move*a.animatingTo:h&&a.currentSlide===a.last?a.limit:h?(a.itemW+c.itemMargin)*a.move*a.currentSlide:m?(a.last-a.currentSlide+a.cloneOffset)*q:(a.currentSlide+a.cloneOffset)*q,d=l?j.touches[0].pageY:j.touches[0].pageX,e=l?j.touches[0].pageX:j.touches[0].pageY,i.addEventListener("touchmove",b,!1),i.addEventListener("touchend",g,!1))},!1)},resize:function(){!a.animating&&a.is(":visible")&&(h||a.doMath(),r?f.smoothHeight():h?(a.slides.width(a.computedW),
    a.update(a.pagingCount),a.setProps()):l?(a.viewport.height(a.h),a.setProps(a.h,"setTotal")):(c.smoothHeight&&f.smoothHeight(),a.newSlides.width(a.computedW),a.setProps(a.computedW,"setTotal")))},smoothHeight:function(b){if(!l||r){var c=r?a:a.viewport;b?c.animate({height:a.slides.eq(a.animatingTo).height()},b):c.height(a.slides.eq(a.animatingTo).height())}},sync:function(b){var g=d(c.sync).data("flexslider"),e=a.animatingTo;switch(b){case "animate":g.flexAnimate(e,c.pauseOnAction,!1,!0);break;case "play":!g.playing&&
    !g.asNav&&g.play();break;case "pause":g.pause()}}};a.flexAnimate=function(b,g,n,i,k){s&&1===a.pagingCount&&(a.direction=a.currentItem<b?"next":"prev");if(!a.animating&&(a.canAdvance(b,k)||n)&&a.is(":visible")){if(s&&i)if(n=d(c.asNavFor).data("flexslider"),a.atEnd=0===b||b===a.count-1,n.flexAnimate(b,!0,!1,!0,k),a.direction=a.currentItem<b?"next":"prev",n.direction=a.direction,Math.ceil((b+1)/a.visible)-1!==a.currentSlide&&0!==b)a.currentItem=b,a.slides.removeClass(e+"active-slide").eq(b).addClass(e+
    "active-slide"),b=Math.floor(b/a.visible);else return a.currentItem=b,a.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),!1;a.animating=!0;a.animatingTo=b;c.before(a);g&&a.pause();a.syncExists&&!k&&f.sync("animate");c.controlNav&&f.controlNav.active();h||a.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide");a.atEnd=0===b||b===a.last;c.directionNav&&f.directionNav.update();b===a.last&&(c.end(a),c.animationLoop||a.pause());if(r)p?(a.slides.eq(a.currentSlide).css({opacity:0,
    zIndex:1}),a.slides.eq(b).css({opacity:1,zIndex:2}),a.slides.unbind("webkitTransitionEnd transitionend"),a.slides.eq(a.currentSlide).bind("webkitTransitionEnd transitionend",function(){c.after(a)}),a.animating=!1,a.currentSlide=a.animatingTo):(a.slides.eq(a.currentSlide).fadeOut(c.animationSpeed,c.easing),a.slides.eq(b).fadeIn(c.animationSpeed,c.easing,a.wrapup));else{var q=l?a.slides.filter(":first").height():a.computedW;h?(b=c.itemWidth>a.w?2*c.itemMargin:c.itemMargin,b=(a.itemW+b)*a.move*a.animatingTo,
    b=b>a.limit&&1!==a.visible?a.limit:b):b=0===a.currentSlide&&b===a.count-1&&c.animationLoop&&"next"!==a.direction?m?(a.count+a.cloneOffset)*q:0:a.currentSlide===a.last&&0===b&&c.animationLoop&&"prev"!==a.direction?m?0:(a.count+1)*q:m?(a.count-1-b+a.cloneOffset)*q:(b+a.cloneOffset)*q;a.setProps(b,"",c.animationSpeed);if(a.transitions){if(!c.animationLoop||!a.atEnd)a.animating=!1,a.currentSlide=a.animatingTo;a.container.unbind("webkitTransitionEnd transitionend");a.container.bind("webkitTransitionEnd transitionend",
    function(){a.wrapup(q)})}else a.container.animate(a.args,c.animationSpeed,c.easing,function(){a.wrapup(q)})}c.smoothHeight&&f.smoothHeight(c.animationSpeed)}};a.wrapup=function(b){!r&&!h&&(0===a.currentSlide&&a.animatingTo===a.last&&c.animationLoop?a.setProps(b,"jumpEnd"):a.currentSlide===a.last&&(0===a.animatingTo&&c.animationLoop)&&a.setProps(b,"jumpStart"));a.animating=!1;a.currentSlide=a.animatingTo;c.after(a)};a.animateSlides=function(){a.animating||a.flexAnimate(a.getTarget("next"))};a.pause=
    function(){clearInterval(a.animatedSlides);a.playing=!1;c.pausePlay&&f.pausePlay.update("play");a.syncExists&&f.sync("pause")};a.play=function(){a.animatedSlides=setInterval(a.animateSlides,c.slideshowSpeed);a.playing=!0;c.pausePlay&&f.pausePlay.update("pause");a.syncExists&&f.sync("play")};a.canAdvance=function(b,g){var d=s?a.pagingCount-1:a.last;return g?!0:s&&a.currentItem===a.count-1&&0===b&&"prev"===a.direction?!0:s&&0===a.currentItem&&b===a.pagingCount-1&&"next"!==a.direction?!1:b===a.currentSlide&&
    !s?!1:c.animationLoop?!0:a.atEnd&&0===a.currentSlide&&b===d&&"next"!==a.direction?!1:a.atEnd&&a.currentSlide===d&&0===b&&"next"===a.direction?!1:!0};a.getTarget=function(b){a.direction=b;return"next"===b?a.currentSlide===a.last?0:a.currentSlide+1:0===a.currentSlide?a.last:a.currentSlide-1};a.setProps=function(b,g,d){var e,f=b?b:(a.itemW+c.itemMargin)*a.move*a.animatingTo;e=-1*function(){if(h)return"setTouch"===g?b:m&&a.animatingTo===a.last?0:m?a.limit-(a.itemW+c.itemMargin)*a.move*a.animatingTo:a.animatingTo===
    a.last?a.limit:f;switch(g){case "setTotal":return m?(a.count-1-a.currentSlide+a.cloneOffset)*b:(a.currentSlide+a.cloneOffset)*b;case "setTouch":return b;case "jumpEnd":return m?b:a.count*b;case "jumpStart":return m?a.count*b:b;default:return b}}()+"px";a.transitions&&(e=l?"translate3d(0,"+e+",0)":"translate3d("+e+",0,0)",d=void 0!==d?d/1E3+"s":"0s",a.container.css("-"+a.pfx+"-transition-duration",d));a.args[a.prop]=e;(a.transitions||void 0===d)&&a.container.css(a.args)};a.setup=function(b){if(r)a.slides.css({width:"100%",
    "float":"left",marginRight:"-100%",position:"relative"}),"init"===b&&(p?a.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+c.animationSpeed/1E3+"s ease",zIndex:1}).eq(a.currentSlide).css({opacity:1,zIndex:2}):a.slides.eq(a.currentSlide).fadeIn(c.animationSpeed,c.easing)),c.smoothHeight&&f.smoothHeight();else{var g,n;"init"===b&&(a.viewport=d('<div class="'+e+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(a).append(a.container),a.cloneCount=0,a.cloneOffset=
    0,m&&(n=d.makeArray(a.slides).reverse(),a.slides=d(n),a.container.empty().append(a.slides)));c.animationLoop&&!h&&(a.cloneCount=2,a.cloneOffset=1,"init"!==b&&a.container.find(".clone").remove(),a.container.append(a.slides.first().clone().addClass("clone")).prepend(a.slides.last().clone().addClass("clone")));a.newSlides=d(c.selector,a);g=m?a.count-1-a.currentSlide+a.cloneOffset:a.currentSlide+a.cloneOffset;l&&!h?(a.container.height(200*(a.count+a.cloneCount)+"%").css("position","absolute").width("100%"),
    setTimeout(function(){a.newSlides.css({display:"block"});a.doMath();a.viewport.height(a.h);a.setProps(g*a.h,"init")},"init"===b?100:0)):(a.container.width(200*(a.count+a.cloneCount)+"%"),a.setProps(g*a.computedW,"init"),setTimeout(function(){a.doMath();a.newSlides.css({width:a.computedW,"float":"left",display:"block"});c.smoothHeight&&f.smoothHeight()},"init"===b?100:0))}h||a.slides.removeClass(e+"active-slide").eq(a.currentSlide).addClass(e+"active-slide")};a.doMath=function(){var b=a.slides.first(),
    d=c.itemMargin,e=c.minItems,f=c.maxItems;a.w=a.width();a.h=b.height();a.boxPadding=b.outerWidth()-b.width();h?(a.itemT=c.itemWidth+d,a.minW=e?e*a.itemT:a.w,a.maxW=f?f*a.itemT:a.w,a.itemW=a.minW>a.w?(a.w-d*e)/e:a.maxW<a.w?(a.w-d*f)/f:c.itemWidth>a.w?a.w:c.itemWidth,a.visible=Math.floor(a.w/(a.itemW+d)),a.move=0<c.move&&c.move<a.visible?c.move:a.visible,a.pagingCount=Math.ceil((a.count-a.visible)/a.move+1),a.last=a.pagingCount-1,a.limit=1===a.pagingCount?0:c.itemWidth>a.w?(a.itemW+2*d)*a.count-a.w-
    d:(a.itemW+d)*a.count-a.w-d):(a.itemW=a.w,a.pagingCount=a.count,a.last=a.count-1);a.computedW=a.itemW-a.boxPadding};a.update=function(b,d){a.doMath();h||(b<a.currentSlide?a.currentSlide+=1:b<=a.currentSlide&&0!==b&&(a.currentSlide-=1),a.animatingTo=a.currentSlide);if(c.controlNav&&!a.manualControls)if("add"===d&&!h||a.pagingCount>a.controlNav.length)f.controlNav.update("add");else if("remove"===d&&!h||a.pagingCount<a.controlNav.length)h&&a.currentSlide>a.last&&(a.currentSlide-=1,a.animatingTo-=1),
    f.controlNav.update("remove",a.last);c.directionNav&&f.directionNav.update()};a.addSlide=function(b,e){var f=d(b);a.count+=1;a.last=a.count-1;l&&m?void 0!==e?a.slides.eq(a.count-e).after(f):a.container.prepend(f):void 0!==e?a.slides.eq(e).before(f):a.container.append(f);a.update(e,"add");a.slides=d(c.selector+":not(.clone)",a);a.setup();c.added(a)};a.removeSlide=function(b){var e=isNaN(b)?a.slides.index(d(b)):b;a.count-=1;a.last=a.count-1;isNaN(b)?d(b,a.slides).remove():l&&m?a.slides.eq(a.last).remove():
    a.slides.eq(b).remove();a.doMath();a.update(e,"remove");a.slides=d(c.selector+":not(.clone)",a);a.setup();c.removed(a)};f.init()};d.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7E3,animationSpeed:600,initDelay:0,randomize:!1,pauseOnAction:!0,pauseOnHover:!1,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",
    keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:0,maxItems:0,move:0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){}};d.fn.flexslider=function(i){void 0===i&&(i={});if("object"===typeof i)return this.each(function(){var a=d(this),c=a.find(i.selector?i.selector:".slides > li");1===c.length?(c.fadeIn(400),
    i.start&&i.start(a)):void 0==a.data("flexslider")&&new d.flexslider(this,i)});var k=d(this).data("flexslider");switch(i){case "play":k.play();break;case "pause":k.pause();break;case "next":k.flexAnimate(k.getTarget("next"),!0);break;case "prev":case "previous":k.flexAnimate(k.getTarget("prev"),!0);break;default:"number"===typeof i&&k.flexAnimate(i,!0)}}})(jQuery);



/*
 * iosSlider - http://iosscripts.com/iosslider/
 */

(function(b){var na=0,W=0,da=0,L=0,za="ontouchstart"in window,Ba="onorientationchange"in window,ea=!1,aa=!1,X=!1,oa=!1,ha=!1,ia="pointer",sa="pointer",ja=[],T=[],ta=[],$=[],B=[],ba=[],x=[],m=[],s=[],ua=[],fa=[],e={showScrollbar:function(a,e){a.scrollbarHide&&b("."+e).css({opacity:a.scrollbarOpacity,filter:"alpha(opacity:"+100*a.scrollbarOpacity+")"})},hideScrollbar:function(b,f,c,g,h,d,m,s,B,x){if(b.scrollbar&&b.scrollbarHide)for(var t=c;t<c+25;t++)f[f.length]=e.hideScrollbarIntervalTimer(10*t,g[c], (c+24-t)/24,h,d,m,s,B,x,b)},hideScrollbarInterval:function(a,f,c,g,h,d,m,B,x){L=-1*a/s[B]*(h-d-m-g);e.setSliderOffset("."+c,L);b("."+c).css({opacity:x.scrollbarOpacity*f,filter:"alpha(opacity:"+100*x.scrollbarOpacity*f+")"})},slowScrollHorizontalInterval:function(a,f,c,g,h,d,K,O,N,J,t,y,z,w,v,q,G,p,n){if(n.infiniteSlider){if(c<=-1*s[q]){var r=b(a).width();if(c<=-1*ua[q]){var u=-1*t[0];b(f).each(function(c){e.setSliderOffset(b(f)[c],u+G);c<y.length&&(y[c]=-1*u);u+=v[c]});c+=-1*y[0];m[q]=-1*y[0]+G; s[q]=m[q]+r-d;x[q]=0}else{var k=0,C=e.getSliderOffset(b(f[0]),"x");b(f).each(function(c){e.getSliderOffset(this,"x")<C&&(C=e.getSliderOffset(this,"x"),k=c)});z=m[q]+r;e.setSliderOffset(b(f)[k],z);m[q]=-1*y[1]+G;s[q]=m[q]+r-d;y.splice(0,1);y.splice(y.length,0,-1*z+G);x[q]++}}if(c>=-1*m[q]||0<=c){r=b(a).width();if(0<=c)for(u=-1*t[0],b(f).each(function(c){e.setSliderOffset(b(f)[c],u+G);c<y.length&&(y[c]=-1*u);u+=v[c]}),c-=-1*y[0],m[q]=-1*y[0]+G,s[q]=m[q]+r-d,x[q]=w;0<-1*y[0]-r+G;){var A=0,I=e.getSliderOffset(b(f[0]), "x");b(f).each(function(c){e.getSliderOffset(this,"x")>I&&(I=e.getSliderOffset(this,"x"),A=c)});z=m[q]-v[A];e.setSliderOffset(b(f)[A],z);y.splice(0,0,-1*z+G);y.splice(y.length-1,1);m[q]=-1*y[0]+G;s[q]=m[q]+r-d;x[q]--;B[q]++}0>c&&(A=0,I=e.getSliderOffset(b(f[0]),"x"),b(f).each(function(c){e.getSliderOffset(this,"x")>I&&(I=e.getSliderOffset(this,"x"),A=c)}),z=m[q]-v[A],e.setSliderOffset(b(f)[A],z),y.splice(0,0,-1*z+G),y.splice(y.length-1,1),m[q]=-1*y[0]+G,s[q]=m[q]+r-d,x[q]--)}}t=!1;d=e.calcActiveOffset(n, c,y,d,x[q],w,J,q);z=(d+x[q]+w)%w;n.infiniteSlider?z!=ba[q]&&(t=!0):d!=B[q]&&(t=!0);if(t&&(w=new e.args("change",n,a,b(a).children(":eq("+z+")"),z,p),b(a).parent().data("args",w),""!=n.onSlideChange))n.onSlideChange(w);B[q]=d;ba[q]=z;c=Math.floor(c);e.setSliderOffset(a,c);n.scrollbar&&(L=Math.floor((-1*c-m[q]+G)/(s[q]-m[q]+G)*(K-O-h)),a=h-N,c>=-1*m[q]+G?(a=h-N- -1*L,e.setSliderOffset(b("."+g),0)):(c<=-1*s[q]+1&&(a=K-O-N-L),e.setSliderOffset(b("."+g),L)),b("."+g).css({width:a+"px"}))},slowScrollHorizontal:function(a, f,c,g,h,d,K,O,N,J,t,y,z,w,v,q,G,p,n,r,u){var k=e.getSliderOffset(a,"x");d=[];var C=0,A=25/1024*O;frictionCoefficient=u.frictionCoefficient;elasticFrictionCoefficient=u.elasticFrictionCoefficient;snapFrictionCoefficient=u.snapFrictionCoefficient;h>u.snapVelocityThreshold&&u.snapToChildren&&!n?C=1:h<-1*u.snapVelocityThreshold&&(u.snapToChildren&&!n)&&(C=-1);h<-1*A?h=-1*A:h>A&&(h=A);b(a)[0]!==b(p)[0]&&(C*=-1,h*=-2);p=x[v];if(u.infiniteSlider)var I=m[v],l=s[v];n=[];for(var A=[],E=0;E<z.length;E++)n[E]= z[E],E<f.length&&(A[E]=e.getSliderOffset(b(f[E]),"x"));for(;1<h||-1>h;){h*=frictionCoefficient;k+=h;(k>-1*m[v]||k<-1*s[v])&&!u.infiniteSlider&&(h*=elasticFrictionCoefficient,k+=h);if(u.infiniteSlider){if(k<=-1*l){for(var l=b(a).width(),L=0,Q=A[0],E=0;E<A.length;E++)A[E]<Q&&(Q=A[E],L=E);E=I+l;A[L]=E;I=-1*n[1]+r;l=I+l-O;n.splice(0,1);n.splice(n.length,0,-1*E+r);p++}if(k>=-1*I){l=b(a).width();L=0;Q=A[0];for(E=0;E<A.length;E++)A[E]>Q&&(Q=A[E],L=E);E=I-w[L];A[L]=E;n.splice(0,0,-1*E+r);n.splice(n.length- 1,1);I=-1*n[0]+r;l=I+l-O;p--}}d[d.length]=k}A=!1;h=e.calcActiveOffset(u,k,n,O,p,G,B[v],v);I=(h+p+G)%G;u.snapToChildren&&(u.infiniteSlider?I!=ba[v]&&(A=!0):h!=B[v]&&(A=!0),0>C&&!A?(h++,h>=z.length&&!u.infinteSlider&&(h=z.length-1)):0<C&&!A&&(h--,0>h&&!u.infinteSlider&&(h=0)));if(u.snapToChildren||(k>-1*m[v]||k<-1*s[v])&&!u.infiniteSlider){(k>-1*m[v]||k<-1*s[v])&&!u.infiniteSlider?d.splice(0,d.length):(d.splice(0.1*d.length,d.length),k=0<d.length?d[d.length-1]:k);for(;k<n[h]-0.5||k>n[h]+0.5;)k=(k-n[h])* snapFrictionCoefficient+n[h],d[d.length]=k;d[d.length]=n[h]}C=1;0!=d.length%2&&(C=0);for(k=0;k<c.length;k++)clearTimeout(c[k]);p=(h+p+G)%G;I=0;for(k=C;k<d.length;k+=2)if(k==C||1<Math.abs(d[k]-I)||k>=d.length-2)I=d[k],c[c.length]=e.slowScrollHorizontalIntervalTimer(10*k,a,f,d[k],g,K,O,N,J,t,h,y,z,q,G,w,v,r,p,u);I=(h+x[v]+G)%G;""!=u.onSlideComplete&&1<d.length&&(c[c.length]=e.onSlideCompleteTimer(10*(k+1),u,a,b(a).children(":eq("+I+")"),p,v));$[v]=c;e.hideScrollbar(u,c,k,d,g,K,O,J,t,v)},onSlideComplete:function(a, f,c,g,h){c=new e.args("complete",a,b(f),c,g,g);b(f).parent().data("args",c);if(""!=a.onSlideComplete)a.onSlideComplete(c)},getSliderOffset:function(a,e){var c=0;e="x"==e?4:5;if(!ea||aa||X)c=parseInt(b(a).css("left"),10);else{for(var c=["-webkit-transform","-moz-transform","transform"],g,h=0;h<c.length;h++)if(void 0!=b(a).css(c[h])&&0<b(a).css(c[h]).length){g=b(a).css(c[h]).split(",");break}c=void 0==g[e]?0:parseInt(g[e],10)}return c},setSliderOffset:function(a,e){!ea||aa||X?b(a).css({left:e+"px"}): b(a).css({webkitTransform:"matrix(1,0,0,1,"+e+",0)",MozTransform:"matrix(1,0,0,1,"+e+",0)",transform:"matrix(1,0,0,1,"+e+",0)"})},setBrowserInfo:function(){null!=navigator.userAgent.match("WebKit")?(ia="-webkit-grab",sa="-webkit-grabbing"):null!=navigator.userAgent.match("Gecko")?(ha=!0,ia="move",sa="-moz-grabbing"):null!=navigator.userAgent.match("MSIE 7")?oa=aa=!0:null!=navigator.userAgent.match("MSIE 8")?oa=X=!0:null!=navigator.userAgent.match("MSIE 9")&&(oa=!0)},has3DTransform:function(){var a= !1,e=b("<div />").css({webkitTransform:"matrix(1,1,1,1,1,1)",MozTransform:"matrix(1,1,1,1,1,1)",transform:"matrix(1,1,1,1,1,1)"});""==e.attr("style")?a=!1:ha&&!za&&21<=parseInt(navigator.userAgent.split("/")[3],10)?a=!1:void 0!=e.attr("style")&&(a=!0);return a},getSlideNumber:function(b,e,c){return(b-x[e]+c)%c},calcActiveOffset:function(b,e,c,g,h,d,m,s){h=!1;b=[];var x;e>c[0]&&(x=0);e<c[c.length-1]&&(x=d-1);for(d=0;d<c.length;d++)c[d]<=e&&c[d]>e-g&&(h||c[d]==e||(b[b.length]=c[d-1]),b[b.length]=c[d], h=!0);0==b.length&&(b[0]=c[c.length-1]);for(d=h=0;d<b.length;d++)m=Math.abs(e-b[d]),m<g&&(h=b[d],g=m);for(d=0;d<c.length;d++)h==c[d]&&(x=d);return x},changeSlide:function(a,f,c,g,h,d,m,s,N,J,t,y,z,w,v,q,G,p){e.autoSlidePause(w);for(var n=0;n<g.length;n++)clearTimeout(g[n]);var r=Math.ceil(p.autoSlideTransTimer/10)+1,u=e.getSliderOffset(f,"x"),k=y[a],k=k-u,C=a-(B[w]+x[w]+q)%q;if(p.infiniteSlider){a=(a-x[w]+2*q)%q;n=!1;0==a&&2==q&&(a=q,y[a]=y[a-1]-b(c).eq(0).outerWidth(!0),n=!0);var k=y[a],k=k-u,A= [y[a]-b(f).width(),y[a]+b(f).width()];n&&y.splice(y.length-1,1);for(n=0;n<A.length;n++)Math.abs(A[n]-u)<Math.abs(k)&&(k=A[n]-u);0>k&&-1==C?k+=b(f).width():0<k&&1==C&&(k-=b(f).width())}C=[];e.showScrollbar(p,h);for(n=0;n<=r;n++)A=n,A/=r,A--,A=u+k*(Math.pow(A,5)+1),C[C.length]=A;r=(a+x[w]+q)%q;for(n=u=0;n<C.length;n++){if(0==n||1<Math.abs(C[n]-u)||n>=C.length-2)u=C[n],g[n]=e.slowScrollHorizontalIntervalTimer(10*(n+1),f,c,C[n],h,d,m,s,N,J,a,t,y,v,q,z,w,G,r,p);0==n&&""!=p.onSlideStart&&(k=(B[w]+x[w]+ q)%q,p.onSlideStart(new e.args("start",p,f,b(f).children(":eq("+k+")"),k,a)))}u=!1;p.infiniteSlider?r!=ba[w]&&(u=!0):a!=B[w]&&(u=!0);u&&""!=p.onSlideComplete&&(g[g.length]=e.onSlideCompleteTimer(10*(n+1),p,f,b(f).children(":eq("+r+")"),r,w));$[w]=g;e.hideScrollbar(p,g,n,C,h,d,m,N,J,w);e.autoSlide(f,c,g,h,d,m,s,N,J,t,y,z,w,v,q,G,p)},autoSlide:function(b,f,c,g,h,d,m,s,N,J,t,y,z,w,v,q,G){if(!T[z].autoSlide)return!1;e.autoSlidePause(z);ja[z]=setTimeout(function(){!G.infiniteSlider&&B[z]>t.length-1&&(B[z]-= v);e.changeSlide((B[z]+x[z]+t.length+1)%t.length,b,f,c,g,h,d,m,s,N,J,t,y,z,w,v,q,G);e.autoSlide(b,f,c,g,h,d,m,s,N,J,t,y,z,w,v,q,G)},G.autoSlideTimer+G.autoSlideTransTimer)},autoSlidePause:function(b){clearTimeout(ja[b])},isUnselectable:function(a,e){return""!=e.unselectableSelector&&1==b(a).closest(e.unselectableSelector).size()?!0:!1},slowScrollHorizontalIntervalTimer:function(b,f,c,g,h,d,m,s,x,B,t,y,z,w,v,q,G,p,n,r){return setTimeout(function(){e.slowScrollHorizontalInterval(f,c,g,h,d,m,s,x,B,t, y,z,w,v,q,G,p,n,r)},b)},onSlideCompleteTimer:function(b,f,c,g,h,d){return setTimeout(function(){e.onSlideComplete(f,c,g,h,d)},b)},hideScrollbarIntervalTimer:function(b,f,c,g,h,d,m,s,x,B){return setTimeout(function(){e.hideScrollbarInterval(f,c,g,h,d,m,s,x,B)},b)},args:function(a,f,c,g,h,d){this.prevSlideNumber=void 0==b(c).parent().data("args")?void 0:b(c).parent().data("args").prevSlideNumber;this.prevSlideObject=void 0==b(c).parent().data("args")?void 0:b(c).parent().data("args").prevSlideObject; this.targetSlideNumber=d+1;this.targetSlideObject=b(c).children(":eq("+d+")");this.slideChanged=!1;"load"==a?this.targetSlideObject=this.targetSlideNumber=void 0:"start"==a?this.targetSlideObject=this.targetSlideNumber=void 0:"change"==a?(this.slideChanged=!0,this.prevSlideNumber=void 0==b(c).parent().data("args")?f.startAtSlide:b(c).parent().data("args").currentSlideNumber,this.prevSlideObject=b(c).children(":eq("+this.prevSlideNumber+")")):"complete"==a&&(this.slideChanged=b(c).parent().data("args").slideChanged); this.settings=f;this.data=b(c).parent().data("iosslider");this.sliderObject=c;this.sliderContainerObject=b(c).parent();this.currentSlideObject=g;this.currentSlideNumber=h+1;this.currentSliderOffset=-1*e.getSliderOffset(c,"x")},preventDrag:function(b){b.preventDefault()},preventClick:function(b){b.stopImmediatePropagation();return!1},enableClick:function(){return!0}};e.setBrowserInfo();var V={init:function(a,f){ea=e.has3DTransform();var c=b.extend(!0,{elasticPullResistance:0.6,frictionCoefficient:0.92, elasticFrictionCoefficient:0.6,snapFrictionCoefficient:0.92,snapToChildren:!1,snapSlideCenter:!1,startAtSlide:1,scrollbar:!1,scrollbarDrag:!1,scrollbarHide:!0,scrollbarLocation:"top",scrollbarContainer:"",scrollbarOpacity:0.4,scrollbarHeight:"4px",scrollbarBorder:"0",scrollbarMargin:"5px",scrollbarBackground:"#000",scrollbarBorderRadius:"100px",scrollbarShadow:"0 0 0 #000",scrollbarElasticPullResistance:0.9,desktopClickDrag:!1,keyboardControls:!1,tabToAdvance:!1,responsiveSlideContainer:!0,responsiveSlides:!0, navSlideSelector:"",navPrevSelector:"",navNextSelector:"",autoSlideToggleSelector:"",autoSlide:!1,autoSlideTimer:5E3,autoSlideTransTimer:750,autoSlideHoverPause:!0,infiniteSlider:!1,snapVelocityThreshold:5,slideStartVelocityThreshold:0,horizontalSlideLockThreshold:5,verticalSlideLockThreshold:3,stageCSS:{position:"relative",top:"0",left:"0",overflow:"hidden",zIndex:1},unselectableSelector:"",onSliderLoaded:"",onSliderUpdate:"",onSliderResize:"",onSlideStart:"",onSlideChange:"",onSlideComplete:""}, a);void 0==f&&(f=this);return b(f).each(function(a){function f(){e.autoSlidePause(d);va=b(F).find("a");ja=b(F).find("[onclick]");pa=b(F).find("*");b(n).css("width","");b(n).css("height","");b(F).css("width","");D=b(F).children().not("script").get();ga=[];M=[];c.responsiveSlides&&b(D).css("width","");s[d]=0;l=[];q=b(n).parent().width();r=b(n).outerWidth(!0);c.responsiveSlideContainer&&(r=b(n).outerWidth(!0)>q?q:b(n).outerWidth(!0));b(n).css({position:c.stageCSS.position,top:c.stageCSS.top,left:c.stageCSS.left, overflow:c.stageCSS.overflow,zIndex:c.stageCSS.zIndex,webkitPerspective:1E3,webkitBackfaceVisibility:"hidden",msTouchAction:"pan-y",width:r});b(c.unselectableSelector).css({cursor:"default"});for(var a=0;a<D.length;a++){ga[a]=b(D[a]).width();M[a]=b(D[a]).outerWidth(!0);var h=M[a];c.responsiveSlides&&(M[a]>r?(h=r+-1*(M[a]-ga[a]),ga[a]=h,M[a]=r):h=ga[a],b(D[a]).css({width:h}));b(D[a]).css({webkitBackfaceVisibility:"hidden",overflow:"hidden",position:"absolute"});l[a]=-1*s[d];s[d]=s[d]+h+(M[a]-ga[a])}c.snapSlideCenter&& (p=0.5*(r-M[0]),c.responsiveSlides&&M[0]>r&&(p=0));ua[d]=2*s[d];for(a=0;a<D.length;a++)e.setSliderOffset(b(D[a]),-1*l[a]+s[d]+p),l[a]-=s[d];if(!c.infiniteSlider&&!c.snapSlideCenter){for(a=0;a<l.length&&!(l[a]<=-1*(2*s[d]-r));a++)ha=a;l.splice(ha+1,l.length);l[l.length]=-1*(2*s[d]-r)}for(a=0;a<l.length;a++)E[a]=l[a];I&&(c.startAtSlide=T[d].startAtSlide>l.length?l.length:T[d].startAtSlide,c.infiniteSlider?(c.startAtSlide=(T[d].startAtSlide-1+H)%H,B[d]=T[d].startAtSlide):(c.startAtSlide=0>T[d].startAtSlide- 1?l.length-1:T[d].startAtSlide,B[d]=T[d].startAtSlide-1),ba[d]=B[d]);m[d]=s[d]+p;b(F).css({position:"relative",cursor:ia,webkitPerspective:"0",webkitBackfaceVisibility:"hidden",width:s[d]+"px"});R=s[d];s[d]=2*s[d]-r+2*p;(Y=R<r||0==r?!0:!1)&&b(F).css({cursor:"default"});G=b(n).parent().outerHeight(!0);u=b(n).height();c.responsiveSlideContainer&&(u=u>G?G:u);b(n).css({height:u});e.setSliderOffset(F,l[B[d]]);if(c.infiniteSlider&&!Y){a=e.getSliderOffset(b(F),"x");for(h=-1*((x[d]+H)%H);0>h;){var g=0,A= e.getSliderOffset(b(D[0]),"x");b(D).each(function(b){e.getSliderOffset(this,"x")<A&&(A=e.getSliderOffset(this,"x"),g=b)});var L=m[d]+R;e.setSliderOffset(b(D)[g],L);m[d]=-1*l[1]+p;s[d]=m[d]+R-r;l.splice(0,1);l.splice(l.length,0,-1*L+p);h++}for(;0<-1*l[0]-R+p&&c.snapSlideCenter&&I;){var N=0,O=e.getSliderOffset(b(D[0]),"x");b(D).each(function(b){e.getSliderOffset(this,"x")>O&&(O=e.getSliderOffset(this,"x"),N=b)});L=m[d]-M[N];e.setSliderOffset(b(D)[N],L);l.splice(0,0,-1*L+p);l.splice(l.length-1,1);m[d]= -1*l[0]+p;s[d]=m[d]+R-r;x[d]--;B[d]++}for(;a<=-1*s[d];)g=0,A=e.getSliderOffset(b(D[0]),"x"),b(D).each(function(b){e.getSliderOffset(this,"x")<A&&(A=e.getSliderOffset(this,"x"),g=b)}),L=m[d]+R,e.setSliderOffset(b(D)[g],L),m[d]=-1*l[1]+p,s[d]=m[d]+R-r,l.splice(0,1),l.splice(l.length,0,-1*L+p),x[d]++,B[d]--}e.setSliderOffset(F,l[B[d]]);c.desktopClickDrag||b(F).css({cursor:"default"});c.scrollbar&&(b("."+J).css({margin:c.scrollbarMargin,overflow:"hidden",display:"none"}),b("."+J+" ."+t).css({border:c.scrollbarBorder}), k=parseInt(b("."+J).css("marginLeft"))+parseInt(b("."+J).css("marginRight")),C=parseInt(b("."+J+" ."+t).css("borderLeftWidth"),10)+parseInt(b("."+J+" ."+t).css("borderRightWidth"),10),w=""!=c.scrollbarContainer?b(c.scrollbarContainer).width():r,v=r/R*(w-k),c.scrollbarHide||(V=c.scrollbarOpacity),b("."+J).css({position:"absolute",left:0,width:w-k+"px",margin:c.scrollbarMargin}),"top"==c.scrollbarLocation?b("."+J).css("top","0"):b("."+J).css("bottom","0"),b("."+J+" ."+t).css({borderRadius:c.scrollbarBorderRadius, background:c.scrollbarBackground,height:c.scrollbarHeight,width:v-C+"px",minWidth:c.scrollbarHeight,border:c.scrollbarBorder,webkitPerspective:1E3,webkitBackfaceVisibility:"hidden",position:"relative",opacity:V,filter:"alpha(opacity:"+100*V+")",boxShadow:c.scrollbarShadow}),e.setSliderOffset(b("."+J+" ."+t),Math.floor((-1*l[B[d]]-m[d]+p)/(s[d]-m[d]+p)*(w-k-v))),b("."+J).css({display:"block"}),y=b("."+J+" ."+t),z=b("."+J));c.scrollbarDrag&&!Y&&b("."+J+" ."+t).css({cursor:ia});c.infiniteSlider&&(S= (s[d]+r)/3);""!=c.navSlideSelector&&b(c.navSlideSelector).each(function(a){b(this).css({cursor:"pointer"});b(this).unbind(P).bind(P,function(f){"touchstart"==f.type?b(this).unbind("click.iosSliderEvent"):b(this).unbind("touchstart.iosSliderEvent");P=f.type+".iosSliderEvent";e.changeSlide(a,F,D,K,t,v,r,w,k,C,E,l,M,d,S,H,p,c)})});""!=c.navPrevSelector&&(b(c.navPrevSelector).css({cursor:"pointer"}),b(c.navPrevSelector).unbind(P).bind(P,function(a){"touchstart"==a.type?b(this).unbind("click.iosSliderEvent"): b(this).unbind("touchstart.iosSliderEvent");P=a.type+".iosSliderEvent";a=(B[d]+x[d]+H)%H;(0<a||c.infiniteSlider)&&e.changeSlide(a-1,F,D,K,t,v,r,w,k,C,E,l,M,d,S,H,p,c)}));""!=c.navNextSelector&&(b(c.navNextSelector).css({cursor:"pointer"}),b(c.navNextSelector).unbind(P).bind(P,function(a){"touchstart"==a.type?b(this).unbind("click.iosSliderEvent"):b(this).unbind("touchstart.iosSliderEvent");P=a.type+".iosSliderEvent";a=(B[d]+x[d]+H)%H;(a<l.length-1||c.infiniteSlider)&&e.changeSlide(a+1,F,D,K,t,v,r, w,k,C,E,l,M,d,S,H,p,c)}));c.autoSlide&&!Y&&""!=c.autoSlideToggleSelector&&(b(c.autoSlideToggleSelector).css({cursor:"pointer"}),b(c.autoSlideToggleSelector).unbind(P).bind(P,function(a){"touchstart"==a.type?b(this).unbind("click.iosSliderEvent"):b(this).unbind("touchstart.iosSliderEvent");P=a.type+".iosSliderEvent";wa?(e.autoSlide(F,D,K,t,v,r,w,k,C,E,l,M,d,S,H,p,c),wa=!1,b(c.autoSlideToggleSelector).removeClass("on")):(e.autoSlidePause(d),wa=!0,b(c.autoSlideToggleSelector).addClass("on"))}));e.autoSlide(F, D,K,t,v,r,w,k,C,E,l,M,d,S,H,p,c);b(n).bind("mouseleave.iosSliderEvent",function(){e.autoSlide(F,D,K,t,v,r,w,k,C,E,l,M,d,S,H,p,c)});b(n).bind("touchend.iosSliderEvent",function(){e.autoSlide(F,D,K,t,v,r,w,k,C,E,l,M,d,S,H,p,c)});c.autoSlidePauseHover&&b(n).bind("mouseenter.iosSliderEvent",function(){e.autoSlidePause(d)});b(n).data("iosslider",{obj:Aa,settings:c,scrollerNode:F,slideNodes:D,numberOfSlides:H,centeredSlideOffset:p,sliderNumber:d,originalOffsets:E,childrenOffsets:l,sliderMax:s[d],scrollbarClass:t, scrollbarWidth:v,scrollbarStageWidth:w,stageWidth:r,scrollMargin:k,scrollBorder:C,infiniteSliderOffset:x[d],infiniteSliderWidth:S,slideNodeOuterWidths:M});I=!1;return!0}na++;var d=na,K=[];T[d]=c;m[d]=0;s[d]=0;var O=[0,0],N=[0,0],J="scrollbarBlock"+na,t="scrollbar"+na,y,z,w,v,q,G,p=0,n=b(this),r,u,k,C,A,I=!0;a=-1;var l,E=[],V=0,Q=0,ea=0,F=b(this).children(":first-child"),D,ga,M,H=b(F).children().not("script").size(),U=!1,ha=0,xa=!1,qa=void 0,S;x[d]=0;var Y=!1,wa=!1;ta[d]=!1;var Z,ra=!1,ka=!1,P="touchstart.iosSliderEvent click.iosSliderEvent", R,va,ja,pa;fa[d]=!1;$[d]=[];c.scrollbarDrag&&(c.scrollbar=!0,c.scrollbarHide=!1);var Aa=b(this);if(void 0!=Aa.data("iosslider"))return!0;b(this).find("img").bind("dragstart.iosSliderEvent",function(b){b.preventDefault()});c.infiniteSlider&&(c.scrollbar=!1);c.infiniteSlider&&1==H&&(c.infiniteSlider=!1);c.scrollbar&&(""!=c.scrollbarContainer?b(c.scrollbarContainer).append("<div class = '"+J+"'><div class = '"+t+"'></div></div>"):b(F).parent().append("<div class = '"+J+"'><div class = '"+t+"'></div></div>")); if(!f())return!0;b(this).find("a").bind("mousedown",e.preventDrag);b(this).find("[onclick]").bind("click",e.preventDrag).each(function(){b(this).data("onclick",this.onclick)});a=e.calcActiveOffset(c,e.getSliderOffset(b(F),"x"),l,r,x[d],H,void 0,d);a=(a+x[d]+H)%H;a=new e.args("load",c,F,b(F).children(":eq("+a+")"),a,a);b(n).data("args",a);if(""!=c.onSliderLoaded)c.onSliderLoaded(a);if(T[d].responsiveSlides||T[d].responsiveSlideContainer)a=Ba?"orientationchange":"resize",b(window).bind(a+".iosSliderEvent-"+ d,function(){if(!f())return!0;var a=b(n).data("args");if(""!=c.onSliderResize)c.onSliderResize(a)});!c.keyboardControls&&!c.tabToAdvance||Y||b(document).bind("keydown.iosSliderEvent",function(b){aa||X||(b=b.originalEvent);if(37==b.keyCode&&c.keyboardControls)b.preventDefault(),b=(B[d]+x[d]+H)%H,(0<b||c.infiniteSlider)&&e.changeSlide(b-1,F,D,K,t,v,r,w,k,C,E,l,M,d,S,H,p,c);else if(39==b.keyCode&&c.keyboardControls||9==b.keyCode&&c.tabToAdvance)b.preventDefault(),b=(B[d]+x[d]+H)%H,(b<l.length-1||c.infiniteSlider)&& e.changeSlide(b+1,F,D,K,t,v,r,w,k,C,E,l,M,d,S,H,p,c)});if(za||c.desktopClickDrag){var ca=!1,la=b(F),ma=b(F),ya=!1;c.scrollbarDrag&&(la=la.add(y),ma=ma.add(z));b(la).bind("mousedown.iosSliderEvent touchstart.iosSliderEvent",function(a){if(ca)return!0;ca=!0;"touchstart"==a.type?b(ma).unbind("mousedown.iosSliderEvent"):b(ma).unbind("touchstart.iosSliderEvent");if(fa[d]||Y||(ya=e.isUnselectable(a.target,c)))return U=ca=!1,!0;Z=b(this)[0]===b(y)[0]?y:F;aa||X||(a=a.originalEvent);e.autoSlidePause(d);pa.unbind(".disableClick"); if("touchstart"==a.type)eventX=a.touches[0].pageX,eventY=a.touches[0].pageY;else{if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges();else if(document.selection)if(X)try{document.selection.empty()}catch(f){}else document.selection.empty();eventX=a.pageX;eventY=a.pageY;xa=!0;qa=F;b(this).css({cursor:sa})}O=[0,0];N=[0,0];W=0;U=!1;for(a=0;a<K.length;a++)clearTimeout(K[a]);a=e.getSliderOffset(F, "x");a>-1*m[d]+p+R?(a=-1*m[d]+p+R,e.setSliderOffset(b("."+t),a),b("."+t).css({width:v-C+"px"})):a<-1*s[d]&&(e.setSliderOffset(b("."+t),w-k-v),b("."+t).css({width:v-C+"px"}));a=b(this)[0]===b(y)[0]?m[d]:0;Q=-1*(e.getSliderOffset(this,"x")-eventX-a);e.getSliderOffset(this,"y");O[1]=eventX;N[1]=eventY;ka=!1});b(ma).bind("touchmove.iosSliderEvent mousemove.iosSliderEvent",function(a){aa||X||(a=a.originalEvent);if(fa[d]||Y||ya)return!0;var f=0;if("touchmove"==a.type)eventX=a.touches[0].pageX,eventY=a.touches[0].pageY; else{if(window.getSelection)window.getSelection().empty||window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges();else if(document.selection)if(X)try{document.selection.empty()}catch(h){}else document.selection.empty();eventX=a.pageX;eventY=a.pageY;if(!xa||!oa&&("undefined"!=typeof a.webkitMovementX||"undefined"!=typeof a.webkitMovementY)&&0===a.webkitMovementY&&0===a.webkitMovementX)return!0}O[0]=O[1];O[1]=eventX;W=(O[1]-O[0])/2;N[0]=N[1];N[1]=eventY;da=(N[1]-N[0])/2;if(!U){var g= (B[d]+x[d]+H)%H,g=new e.args("start",c,F,b(F).children(":eq("+g+")"),g,void 0);b(n).data("args",g);if(""!=c.onSlideStart)c.onSlideStart(g)}(da>c.verticalSlideLockThreshold||da<-1*c.verticalSlideLockThreshold)&&("touchmove"==a.type&&!U)&&(ra=!0);(W>c.horizontalSlideLockThreshold||W<-1*c.horizontalSlideLockThreshold)&&"touchmove"==a.type&&a.preventDefault();if(W>c.slideStartVelocityThreshold||W<-1*c.slideStartVelocityThreshold)U=!0;if(U&&!ra){var g=e.getSliderOffset(F,"x"),q=b(Z)[0]===b(y)[0]?m[d]: p,u=b(Z)[0]===b(y)[0]?(m[d]-s[d]-p)/(w-k-v):1,z=b(Z)[0]===b(y)[0]?c.scrollbarElasticPullResistance:c.elasticPullResistance,G=c.snapSlideCenter&&b(Z)[0]===b(y)[0]?0:p,J=c.snapSlideCenter&&b(Z)[0]===b(y)[0]?p:0;"touchmove"==a.type&&(ea!=a.touches.length&&(Q=-1*g+eventX),ea=a.touches.length);if(c.infiniteSlider){if(g<=-1*s[d]){var I=b(F).width();if(g<=-1*ua[d]){var K=-1*E[0];b(D).each(function(a){e.setSliderOffset(b(D)[a],K+p);a<l.length&&(l[a]=-1*K);K+=M[a]});Q-=-1*l[0];m[d]=-1*l[0]+p;s[d]=m[d]+I-r; x[d]=0}else{var S=0,T=e.getSliderOffset(b(D[0]),"x");b(D).each(function(b){e.getSliderOffset(this,"x")<T&&(T=e.getSliderOffset(this,"x"),S=b)});z=m[d]+I;e.setSliderOffset(b(D)[S],z);m[d]=-1*l[1]+p;s[d]=m[d]+I-r;l.splice(0,1);l.splice(l.length,0,-1*z+p);x[d]++}}if(g>=-1*m[d]||0<=g)if(I=b(F).width(),0<=g)for(K=-1*E[0],b(D).each(function(a){e.setSliderOffset(b(D)[a],K+p);a<l.length&&(l[a]=-1*K);K+=M[a]}),Q+=-1*l[0],m[d]=-1*l[0]+p,s[d]=m[d]+I-r,x[d]=H;0<-1*l[0]-I+p;){var P=0,R=e.getSliderOffset(b(D[0]), "x");b(D).each(function(b){e.getSliderOffset(this,"x")>R&&(R=e.getSliderOffset(this,"x"),P=b)});z=m[d]-M[P];e.setSliderOffset(b(D)[P],z);l.splice(0,0,-1*z+p);l.splice(l.length-1,1);m[d]=-1*l[0]+p;s[d]=m[d]+I-r;x[d]--;B[d]++}else P=0,R=e.getSliderOffset(b(D[0]),"x"),b(D).each(function(b){e.getSliderOffset(this,"x")>R&&(R=e.getSliderOffset(this,"x"),P=b)}),z=m[d]-M[P],e.setSliderOffset(b(D)[P],z),l.splice(0,0,-1*z+p),l.splice(l.length-1,1),m[d]=-1*l[0]+p,s[d]=m[d]+I-r,x[d]--}else I=b(F).width(),g>-1* m[d]+p&&(f=-1*(m[d]+-1*(Q-q-eventX+G)*u-q)*z/u),g<-1*s[d]&&(f=-1*(s[d]+J+-1*(Q-q-eventX)*u-q)*z/u);e.setSliderOffset(F,-1*(Q-q-eventX-f)*u-q+J);c.scrollbar&&(e.showScrollbar(c,t),L=Math.floor((Q-eventX-f-m[d]+G)/(s[d]-m[d]+p)*(w-k-v)*u),g=v,0>=L?(g=v-C- -1*L,e.setSliderOffset(b("."+t),0),b("."+t).css({width:g+"px"})):L>=w-k-C-v?(g=w-k-C-L,e.setSliderOffset(b("."+t),L),b("."+t).css({width:g+"px"})):e.setSliderOffset(b("."+t),L));"touchmove"==a.type&&(A=a.touches[0].pageX);a=!1;f=e.calcActiveOffset(c, -1*(Q-eventX-f),l,r,x[d],H,void 0,d);g=(f+x[d]+H)%H;c.infiniteSlider?g!=ba[d]&&(a=!0):f!=B[d]&&(a=!0);if(a&&(B[d]=f,ba[d]=g,ka=!0,g=new e.args("change",c,F,b(F).children(":eq("+g+")"),g,g),b(n).data("args",g),""!=c.onSlideChange))c.onSlideChange(g)}ca=!1});a=b(window);if(X||aa)a=b(document);b(la).bind("touchend.iosSliderEvent",function(b){b=b.originalEvent;if(fa[d]||Y||ya)return!0;if(0!=b.touches.length)for(var a=0;a<b.touches.length;a++)b.touches[a].pageX==A&&e.slowScrollHorizontal(F,D,K,t,W,da, v,r,w,k,C,E,l,M,d,S,H,Z,ka,p,c);else e.slowScrollHorizontal(F,D,K,t,W,da,v,r,w,k,C,E,l,M,d,S,H,Z,ka,p,c);ca=ra=!1});b(a).bind("mouseup.iosSliderEvent-"+d,function(a){U?va.unbind("click.disableClick").bind("click.disableClick",e.preventClick):va.unbind("click.disableClick").bind("click.disableClick",e.enableClick);ja.each(function(){this.onclick=function(a){if(U)return!1;b(this).data("onclick").call(this,a||window.event)}});1.8<=parseFloat(b().jquery)?pa.each(function(){var a=b._data(this,"events"); if(void 0!=a&&void 0!=a.click&&"iosSliderEvent"!=a.click[0].namespace){if(!U)return!1;b(this).one("click.disableClick",e.preventClick);var a=b._data(this,"events").click,c=a.pop();a.splice(0,0,c)}}):1.6<=parseFloat(b().jquery)&&pa.each(function(){var a=b(this).data("events");if(void 0!=a&&void 0!=a.click&&"iosSliderEvent"!=a.click[0].namespace){if(!U)return!1;b(this).one("click.disableClick",e.preventClick);var a=b(this).data("events").click,c=a.pop();a.splice(0,0,c)}});if(!ta[d]){if(Y)return!0;b(la).css({cursor:ia}); xa=!1;if(void 0==qa)return!0;e.slowScrollHorizontal(qa,D,K,t,W,da,v,r,w,k,C,E,l,M,d,S,H,Z,ka,p,c);qa=void 0}ca=ra=!1})}})},destroy:function(a,f){void 0==f&&(f=this);return b(f).each(function(){var c=b(this),f=c.data("iosslider");if(void 0==f)return!1;void 0==a&&(a=!0);e.autoSlidePause(f.sliderNumber);ta[f.sliderNumber]=!0;b(window).unbind(".iosSliderEvent-"+f.sliderNumber);b(document).unbind(".iosSliderEvent-"+f.sliderNumber);b(document).unbind("keydown.iosSliderEvent");b(this).unbind(".iosSliderEvent"); b(this).children(":first-child").unbind(".iosSliderEvent");b(this).children(":first-child").children().unbind(".iosSliderEvent");a&&(b(this).attr("style",""),b(this).children(":first-child").attr("style",""),b(this).children(":first-child").children().attr("style",""),b(f.settings.navSlideSelector).attr("style",""),b(f.settings.navPrevSelector).attr("style",""),b(f.settings.navNextSelector).attr("style",""),b(f.settings.autoSlideToggleSelector).attr("style",""),b(f.settings.unselectableSelector).attr("style", ""));f.settings.scrollbar&&b(".scrollbarBlock"+f.sliderNumber).remove();for(var f=$[f.sliderNumber],h=0;h<f.length;h++)clearTimeout(f[h]);c.removeData("iosslider");c.removeData("args")})},update:function(a){void 0==a&&(a=this);return b(a).each(function(){var a=b(this),c=a.data("iosslider");if(void 0==c)return!1;c.settings.startAtSlide=a.data("args").currentSlideNumber;V.destroy(!1,this);1!=c.numberOfSlides&&c.settings.infiniteSlider&&(c.settings.startAtSlide=(B[c.sliderNumber]+1+x[c.sliderNumber]+ c.numberOfSlides)%c.numberOfSlides);V.init(c.settings,this);a=new e.args("update",c.settings,c.scrollerNode,b(c.scrollerNode).children(":eq("+(c.settings.startAtSlide-1)+")"),c.settings.startAtSlide-1,c.settings.startAtSlide-1);b(c.stageNode).data("args",a);if(""!=c.settings.onSliderUpdate)c.settings.onSliderUpdate(a)})},addSlide:function(a,e){return this.each(function(){var c=b(this),g=c.data("iosslider");if(void 0==g)return!1;0==b(g.scrollerNode).children().size()?(b(g.scrollerNode).append(a),c.data("args").currentSlideNumber= 1):g.settings.infiniteSlider?(1==e?b(g.scrollerNode).children(":eq(0)").before(a):b(g.scrollerNode).children(":eq("+(e-2)+")").after(a),-1>x[g.sliderNumber]&&B[g.sliderNumber]--,c.data("args").currentSlideNumber>=e&&B[g.sliderNumber]++):(e<=g.numberOfSlides?b(g.scrollerNode).children(":eq("+(e-1)+")").before(a):b(g.scrollerNode).children(":eq("+(e-2)+")").after(a),c.data("args").currentSlideNumber>=e&&c.data("args").currentSlideNumber++);c.data("iosslider").numberOfSlides++;V.update(this)})},removeSlide:function(a){return this.each(function(){var e= b(this).data("iosslider");if(void 0==e)return!1;b(e.scrollerNode).children(":eq("+(a-1)+")").remove();B[e.sliderNumber]>a-1&&B[e.sliderNumber]--;V.update(this)})},goToSlide:function(a,f){void 0==f&&(f=this);return b(f).each(function(){var c=b(this).data("iosslider");if(void 0==c)return!1;a=a>c.childrenOffsets.length?c.childrenOffsets.length-1:a-1;e.changeSlide(a,b(c.scrollerNode),b(c.slideNodes),$[c.sliderNumber],c.scrollbarClass,c.scrollbarWidth,c.stageWidth,c.scrollbarStageWidth,c.scrollMargin, c.scrollBorder,c.originalOffsets,c.childrenOffsets,c.slideNodeOuterWidths,c.sliderNumber,c.infiniteSliderWidth,c.numberOfSlides,c.centeredSlideOffset,c.settings);B[c.sliderNumber]=a})},prevSlide:function(){return this.each(function(){var a=b(this).data("iosslider");if(void 0==a)return!1;var f=(B[a.sliderNumber]+x[a.sliderNumber]+a.numberOfSlides)%a.numberOfSlides;(0<f||a.settings.infiniteSlider)&&e.changeSlide(f-1,b(a.scrollerNode),b(a.slideNodes),$[a.sliderNumber],a.scrollbarClass,a.scrollbarWidth, a.stageWidth,a.scrollbarStageWidth,a.scrollMargin,a.scrollBorder,a.originalOffsets,a.childrenOffsets,a.slideNodeOuterWidths,a.sliderNumber,a.infiniteSliderWidth,a.numberOfSlides,a.centeredSlideOffset,a.settings);B[a.sliderNumber]=f})},nextSlide:function(){return this.each(function(){var a=b(this).data("iosslider");if(void 0==a)return!1;var f=(B[a.sliderNumber]+x[a.sliderNumber]+a.numberOfSlides)%a.numberOfSlides;(f<a.childrenOffsets.length-1||a.settings.infiniteSlider)&&e.changeSlide(f+1,b(a.scrollerNode), b(a.slideNodes),$[a.sliderNumber],a.scrollbarClass,a.scrollbarWidth,a.stageWidth,a.scrollbarStageWidth,a.scrollMargin,a.scrollBorder,a.originalOffsets,a.childrenOffsets,a.slideNodeOuterWidths,a.sliderNumber,a.infiniteSliderWidth,a.numberOfSlides,a.centeredSlideOffset,a.settings);B[a.sliderNumber]=f})},lock:function(){return this.each(function(){var a=b(this).data("iosslider");if(void 0==a)return!1;fa[a.sliderNumber]=!0})},unlock:function(){return this.each(function(){var a=b(this).data("iosslider"); if(void 0==a)return!1;fa[a.sliderNumber]=!1})},getData:function(){return this.each(function(){var a=b(this).data("iosslider");return void 0==a?!1:a})},autoSlidePause:function(){return this.each(function(){var a=b(this).data("iosslider");if(void 0==a)return!1;T[a.sliderNumber].autoSlide=!1;e.autoSlidePause(a.sliderNumber);return a})},autoSlidePlay:function(){return this.each(function(){var a=b(this).data("iosslider");if(void 0==a)return!1;T[a.sliderNumber].autoSlide=!0;e.autoSlide(b(a.scrollerNode), b(a.slideNodes),$[a.sliderNumber],a.scrollbarClass,a.scrollbarWidth,a.stageWidth,a.scrollbarStageWidth,a.scrollMargin,a.scrollBorder,a.originalOffsets,a.childrenOffsets,a.slideNodeOuterWidths,a.sliderNumber,a.infiniteSliderWidth,a.numberOfSlides,a.centeredSlideOffset,a.settings);return a})}};b.fn.iosSlider=function(a){if(V[a])return V[a].apply(this,Array.prototype.slice.call(arguments,1));if("object"!==typeof a&&a)b.error("invalid method call!");else return V.init.apply(this,arguments)}})(jQuery);


/*!
 jQuery Colorbox v1.4.17 - 2013-05-23
 (c) 2013 Jack Moore - jacklmoore.com/colorbox
 license: http://www.opensource.org/licenses/mit-license.php
 */
(function(t,e,i){function o(i,o,n){var r=e.createElement(i);return o&&(r.id=te+o),n&&(r.style.cssText=n),t(r)}function n(){return i.innerHeight?i.innerHeight:t(i).height()}function r(t){var e=E.length,i=(j+t)%e;return 0>i?e+i:i}function h(t,e){return Math.round((/%/.test(t)?("x"===e?H.width():n())/100:1)*parseInt(t,10))}function l(t,e){return t.photo||t.photoRegex.test(e)}function s(t,e){return t.retinaUrl&&i.devicePixelRatio>1?e.replace(t.photoRegex,t.retinaSuffix):e}function a(t){"contains"in x[0]&&!x[0].contains(t.target)&&(t.stopPropagation(),x.focus())}function d(){var e,i=t.data(A,Z);null==i?(_=t.extend({},Y),console&&console.log&&console.log("Error: cboxElement missing settings object")):_=t.extend({},i);for(e in _)t.isFunction(_[e])&&"on"!==e.slice(0,2)&&(_[e]=_[e].call(A));_.rel=_.rel||A.rel||t(A).data("rel")||"nofollow",_.href=_.href||t(A).attr("href"),_.title=_.title||A.title,"string"==typeof _.href&&(_.href=t.trim(_.href))}function c(i,o){t(e).trigger(i),se.trigger(i),t.isFunction(o)&&o.call(A)}function u(){var t,e,i,o,n,r=te+"Slideshow_",h="click."+te;_.slideshow&&E[1]?(e=function(){clearTimeout(t)},i=function(){(_.loop||E[j+1])&&(t=setTimeout(J.next,_.slideshowSpeed))},o=function(){M.html(_.slideshowStop).unbind(h).one(h,n),se.bind(ne,i).bind(oe,e).bind(re,n),x.removeClass(r+"off").addClass(r+"on")},n=function(){e(),se.unbind(ne,i).unbind(oe,e).unbind(re,n),M.html(_.slideshowStart).unbind(h).one(h,function(){J.next(),o()}),x.removeClass(r+"on").addClass(r+"off")},_.slideshowAuto?o():n()):x.removeClass(r+"off "+r+"on")}function f(i){G||(A=i,d(),E=t(A),j=0,"nofollow"!==_.rel&&(E=t("."+ee).filter(function(){var e,i=t.data(this,Z);return i&&(e=t(this).data("rel")||i.rel||this.rel),e===_.rel}),j=E.index(A),-1===j&&(E=E.add(A),j=E.length-1)),g.css({opacity:parseFloat(_.opacity),cursor:_.overlayClose?"pointer":"auto",visibility:"visible"}).show(),V&&x.add(g).removeClass(V),_.className&&x.add(g).addClass(_.className),V=_.className,K.html(_.close).show(),$||($=q=!0,x.css({visibility:"hidden",display:"block"}),W=o(ae,"LoadedContent","width:0; height:0; overflow:hidden").appendTo(v),D=b.height()+k.height()+v.outerHeight(!0)-v.height(),B=C.width()+T.width()+v.outerWidth(!0)-v.width(),N=W.outerHeight(!0),z=W.outerWidth(!0),_.w=h(_.initialWidth,"x"),_.h=h(_.initialHeight,"y"),J.position(),u(),c(ie,_.onOpen),O.add(S).hide(),x.focus(),_.trapFocus&&e.addEventListener&&(e.addEventListener("focus",a,!0),se.one(he,function(){e.removeEventListener("focus",a,!0)})),_.returnFocus&&se.one(he,function(){t(A).focus()})),w())}function p(){!x&&e.body&&(X=!1,H=t(i),x=o(ae).attr({id:Z,"class":t.support.opacity===!1?te+"IE":"",role:"dialog",tabindex:"-1"}).hide(),g=o(ae,"Overlay").hide(),L=o(ae,"LoadingOverlay").add(o(ae,"LoadingGraphic")),y=o(ae,"Wrapper"),v=o(ae,"Content").append(S=o(ae,"Title"),I=o(ae,"Current"),P=t('<button type="button"/>').attr({id:te+"Previous"}),R=t('<button type="button"/>').attr({id:te+"Next"}),M=o("button","Slideshow"),L,K=t('<button type="button"/>').attr({id:te+"Close"})),y.append(o(ae).append(o(ae,"TopLeft"),b=o(ae,"TopCenter"),o(ae,"TopRight")),o(ae,!1,"clear:left").append(C=o(ae,"MiddleLeft"),v,T=o(ae,"MiddleRight")),o(ae,!1,"clear:left").append(o(ae,"BottomLeft"),k=o(ae,"BottomCenter"),o(ae,"BottomRight"))).find("div div").css({"float":"left"}),F=o(ae,!1,"position:absolute; width:9999px; visibility:hidden; display:none"),O=R.add(P).add(I).add(M),t(e.body).append(g,x.append(y,F)))}function m(){function i(t){t.which>1||t.shiftKey||t.altKey||t.metaKey||t.control||(t.preventDefault(),f(this))}return x?(X||(X=!0,R.click(function(){J.next()}),P.click(function(){J.prev()}),K.click(function(){J.close()}),g.click(function(){_.overlayClose&&J.close()}),t(e).bind("keydown."+te,function(t){var e=t.keyCode;$&&_.escKey&&27===e&&(t.preventDefault(),J.close()),$&&_.arrowKey&&E[1]&&!t.altKey&&(37===e?(t.preventDefault(),P.click()):39===e&&(t.preventDefault(),R.click()))}),t.isFunction(t.fn.on)?t(e).on("click."+te,"."+ee,i):t("."+ee).live("click."+te,i)),!0):!1}function w(){var n,r,a,u=J.prep,f=++de;q=!0,U=!1,A=E[j],d(),c(le),c(oe,_.onLoad),_.h=_.height?h(_.height,"y")-N-D:_.innerHeight&&h(_.innerHeight,"y"),_.w=_.width?h(_.width,"x")-z-B:_.innerWidth&&h(_.innerWidth,"x"),_.mw=_.w,_.mh=_.h,_.maxWidth&&(_.mw=h(_.maxWidth,"x")-z-B,_.mw=_.w&&_.w<_.mw?_.w:_.mw),_.maxHeight&&(_.mh=h(_.maxHeight,"y")-N-D,_.mh=_.h&&_.h<_.mh?_.h:_.mh),n=_.href,Q=setTimeout(function(){L.show()},100),_.inline?(a=o(ae).hide().insertBefore(t(n)[0]),se.one(le,function(){a.replaceWith(W.children())}),u(t(n))):_.iframe?u(" "):_.html?u(_.html):l(_,n)?(n=s(_,n),U=e.createElement("img"),t(U).addClass(te+"Photo").bind("error",function(){_.title=!1,u(o(ae,"Error").html(_.imgError))}).one("load",function(){var e;f===de&&(U.alt=t(A).attr("alt")||t(A).attr("data-alt")||"",_.retinaImage&&i.devicePixelRatio>1&&(U.height=U.height/i.devicePixelRatio,U.width=U.width/i.devicePixelRatio),_.scalePhotos&&(r=function(){U.height-=U.height*e,U.width-=U.width*e},_.mw&&U.width>_.mw&&(e=(U.width-_.mw)/U.width,r()),_.mh&&U.height>_.mh&&(e=(U.height-_.mh)/U.height,r())),_.h&&(U.style.marginTop=Math.max(_.mh-U.height,0)/2+"px"),E[1]&&(_.loop||E[j+1])&&(U.style.cursor="pointer",U.onclick=function(){J.next()}),U.style.width=U.width+"px",U.style.height=U.height+"px",setTimeout(function(){u(U)},1))}),setTimeout(function(){U.src=n},1)):n&&F.load(n,_.data,function(e,i){f===de&&u("error"===i?o(ae,"Error").html(_.xhrError):t(this).contents())})}var g,x,y,v,b,C,T,k,E,H,W,F,L,S,I,M,R,P,K,O,_,D,B,N,z,A,j,U,$,q,G,Q,J,V,X,Y={transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,inline:!1,html:!1,iframe:!1,fastIframe:!0,photo:!1,href:!1,title:!1,rel:!1,opacity:.9,preloading:!0,className:!1,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",open:!1,returnFocus:!0,trapFocus:!0,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp)((#|\?).*)?$/i,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0},Z="colorbox",te="cbox",ee=te+"Element",ie=te+"_open",oe=te+"_load",ne=te+"_complete",re=te+"_cleanup",he=te+"_closed",le=te+"_purge",se=t("<a/>"),ae="div",de=0;t.colorbox||(t(p),J=t.fn[Z]=t[Z]=function(e,i){var o=this;if(e=e||{},p(),m()){if(t.isFunction(o))o=t("<a/>"),e.open=!0;else if(!o[0])return o;i&&(e.onComplete=i),o.each(function(){t.data(this,Z,t.extend({},t.data(this,Z)||Y,e))}).addClass(ee),(t.isFunction(e.open)&&e.open.call(o)||e.open)&&f(o[0])}return o},J.position=function(t,e){function i(t){b[0].style.width=k[0].style.width=v[0].style.width=parseInt(t.style.width,10)-B+"px",v[0].style.height=C[0].style.height=T[0].style.height=parseInt(t.style.height,10)-D+"px"}var o,r,l,s=0,a=0,d=x.offset();H.unbind("resize."+te),x.css({top:-9e4,left:-9e4}),r=H.scrollTop(),l=H.scrollLeft(),_.fixed?(d.top-=r,d.left-=l,x.css({position:"fixed"})):(s=r,a=l,x.css({position:"absolute"})),a+=_.right!==!1?Math.max(H.width()-_.w-z-B-h(_.right,"x"),0):_.left!==!1?h(_.left,"x"):Math.round(Math.max(H.width()-_.w-z-B,0)/2),s+=_.bottom!==!1?Math.max(n()-_.h-N-D-h(_.bottom,"y"),0):_.top!==!1?h(_.top,"y"):Math.round(Math.max(n()-_.h-N-D,0)/2),x.css({top:d.top,left:d.left,visibility:"visible"}),t=x.width()===_.w+z&&x.height()===_.h+N?0:t||0,y[0].style.width=y[0].style.height="9999px",o={width:_.w+z+B,height:_.h+N+D,top:s,left:a},0===t&&x.css(o),x.dequeue().animate(o,{duration:t,complete:function(){i(this),q=!1,y[0].style.width=_.w+z+B+"px",y[0].style.height=_.h+N+D+"px",_.reposition&&setTimeout(function(){H.bind("resize."+te,J.position)},1),e&&e()},step:function(){i(this)}})},J.resize=function(t){$&&(t=t||{},t.width&&(_.w=h(t.width,"x")-z-B),t.innerWidth&&(_.w=h(t.innerWidth,"x")),W.css({width:_.w}),t.height&&(_.h=h(t.height,"y")-N-D),t.innerHeight&&(_.h=h(t.innerHeight,"y")),t.innerHeight||t.height||(W.css({height:"auto"}),_.h=W.height()),W.css({height:_.h}),J.position("none"===_.transition?0:_.speed))},J.prep=function(e){function i(){return _.w=_.w||W.width(),_.w=_.mw&&_.mw<_.w?_.mw:_.w,_.w}function n(){return _.h=_.h||W.height(),_.h=_.mh&&_.mh<_.h?_.mh:_.h,_.h}if($){var h,a="none"===_.transition?0:_.speed;W.empty().remove(),W=o(ae,"LoadedContent").append(e),W.hide().appendTo(F.show()).css({width:i(),overflow:_.scrolling?"auto":"hidden"}).css({height:n()}).prependTo(v),F.hide(),t(U).css({"float":"none"}),h=function(){function e(){t.support.opacity===!1&&x[0].style.removeAttribute("filter")}var i,n,h=E.length,d="frameBorder",u="allowTransparency";$&&(n=function(){clearTimeout(Q),L.hide(),c(ne,_.onComplete)},S.html(_.title).add(W).show(),h>1?("string"==typeof _.current&&I.html(_.current.replace("{current}",j+1).replace("{total}",h)).show(),R[_.loop||h-1>j?"show":"hide"]().html(_.next),P[_.loop||j?"show":"hide"]().html(_.previous),_.slideshow&&M.show(),_.preloading&&t.each([r(-1),r(1)],function(){var e,i,o=E[this],n=t.data(o,Z);n&&n.href?(e=n.href,t.isFunction(e)&&(e=e.call(o))):e=t(o).attr("href"),e&&l(n,e)&&(e=s(n,e),i=new Image,i.src=e)})):O.hide(),_.iframe?(i=o("iframe")[0],d in i&&(i[d]=0),u in i&&(i[u]="true"),_.scrolling||(i.scrolling="no"),t(i).attr({src:_.href,name:(new Date).getTime(),"class":te+"Iframe",allowFullScreen:!0,webkitAllowFullScreen:!0,mozallowfullscreen:!0}).one("load",n).appendTo(W),se.one(le,function(){i.src="//about:blank"}),_.fastIframe&&t(i).trigger("load")):n(),"fade"===_.transition?x.fadeTo(a,1,e):e())},"fade"===_.transition?x.fadeTo(a,0,function(){J.position(0,h)}):J.position(a,h)}},J.next=function(){!q&&E[1]&&(_.loop||E[j+1])&&(j=r(1),f(E[j]))},J.prev=function(){!q&&E[1]&&(_.loop||j)&&(j=r(-1),f(E[j]))},J.close=function(){$&&!G&&(G=!0,$=!1,c(re,_.onCleanup),H.unbind("."+te),g.fadeTo(_.fadeOut||0,0),x.stop().fadeTo(_.fadeOut||0,0,function(){x.add(g).css({opacity:1,cursor:"auto"}).hide(),c(le),W.empty().remove(),setTimeout(function(){G=!1,c(he,_.onClosed)},1)}))},J.remove=function(){x&&(x.stop(),t.colorbox.close(),x.stop().remove(),g.remove(),G=!1,x=null,t("."+ee).removeData(Z).removeClass(ee),t(e).unbind("click."+te))},J.element=function(){return t(A)},J.settings=Y)})(jQuery,document,window);



/*! Magnific Popup - v0.9.9 - 2013-12-27
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2013 Dmitry Semenov; */
(function(e){var t,n,i,o,r,a,s,l="Close",c="BeforeClose",d="AfterClose",u="BeforeAppend",p="MarkupParse",f="Open",m="Change",g="mfp",h="."+g,v="mfp-ready",C="mfp-removing",y="mfp-prevent-close",w=function(){},b=!!window.jQuery,I=e(window),x=function(e,n){t.ev.on(g+e+h,n)},k=function(t,n,i,o){var r=document.createElement("div");return r.className="mfp-"+t,i&&(r.innerHTML=i),o?n&&n.appendChild(r):(r=e(r),n&&r.appendTo(n)),r},T=function(n,i){t.ev.triggerHandler(g+n,i),t.st.callbacks&&(n=n.charAt(0).toLowerCase()+n.slice(1),t.st.callbacks[n]&&t.st.callbacks[n].apply(t,e.isArray(i)?i:[i]))},E=function(n){return n===s&&t.currTemplate.closeBtn||(t.currTemplate.closeBtn=e(t.st.closeMarkup.replace("%title%",t.st.tClose)),s=n),t.currTemplate.closeBtn},_=function(){e.magnificPopup.instance||(t=new w,t.init(),e.magnificPopup.instance=t)},S=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1};w.prototype={constructor:w,init:function(){var n=navigator.appVersion;t.isIE7=-1!==n.indexOf("MSIE 7."),t.isIE8=-1!==n.indexOf("MSIE 8."),t.isLowIE=t.isIE7||t.isIE8,t.isAndroid=/android/gi.test(n),t.isIOS=/iphone|ipad|ipod/gi.test(n),t.supportsTransition=S(),t.probablyMobile=t.isAndroid||t.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),o=e(document),t.popupsCache={}},open:function(n){i||(i=e(document.body));var r;if(n.isObj===!1){t.items=n.items.toArray(),t.index=0;var s,l=n.items;for(r=0;l.length>r;r++)if(s=l[r],s.parsed&&(s=s.el[0]),s===n.el[0]){t.index=r;break}}else t.items=e.isArray(n.items)?n.items:[n.items],t.index=n.index||0;if(t.isOpen)return t.updateItemHTML(),void 0;t.types=[],a="",t.ev=n.mainEl&&n.mainEl.length?n.mainEl.eq(0):o,n.key?(t.popupsCache[n.key]||(t.popupsCache[n.key]={}),t.currTemplate=t.popupsCache[n.key]):t.currTemplate={},t.st=e.extend(!0,{},e.magnificPopup.defaults,n),t.fixedContentPos="auto"===t.st.fixedContentPos?!t.probablyMobile:t.st.fixedContentPos,t.st.modal&&(t.st.closeOnContentClick=!1,t.st.closeOnBgClick=!1,t.st.showCloseBtn=!1,t.st.enableEscapeKey=!1),t.bgOverlay||(t.bgOverlay=k("bg").on("click"+h,function(){t.close()}),t.wrap=k("wrap").attr("tabindex",-1).on("click"+h,function(e){t._checkIfClose(e.target)&&t.close()}),t.container=k("container",t.wrap)),t.contentContainer=k("content"),t.st.preloader&&(t.preloader=k("preloader",t.container,t.st.tLoading));var c=e.magnificPopup.modules;for(r=0;c.length>r;r++){var d=c[r];d=d.charAt(0).toUpperCase()+d.slice(1),t["init"+d].call(t)}T("BeforeOpen"),t.st.showCloseBtn&&(t.st.closeBtnInside?(x(p,function(e,t,n,i){n.close_replaceWith=E(i.type)}),a+=" mfp-close-btn-in"):t.wrap.append(E())),t.st.alignTop&&(a+=" mfp-align-top"),t.fixedContentPos?t.wrap.css({overflow:t.st.overflowY,overflowX:"hidden",overflowY:t.st.overflowY}):t.wrap.css({top:I.scrollTop(),position:"absolute"}),(t.st.fixedBgPos===!1||"auto"===t.st.fixedBgPos&&!t.fixedContentPos)&&t.bgOverlay.css({height:o.height(),position:"absolute"}),t.st.enableEscapeKey&&o.on("keyup"+h,function(e){27===e.keyCode&&t.close()}),I.on("resize"+h,function(){t.updateSize()}),t.st.closeOnContentClick||(a+=" mfp-auto-cursor"),a&&t.wrap.addClass(a);var u=t.wH=I.height(),m={};if(t.fixedContentPos&&t._hasScrollBar(u)){var g=t._getScrollbarSize();g&&(m.marginRight=g)}t.fixedContentPos&&(t.isIE7?e("body, html").css("overflow","hidden"):m.overflow="hidden");var C=t.st.mainClass;return t.isIE7&&(C+=" mfp-ie7"),C&&t._addClassToMFP(C),t.updateItemHTML(),T("BuildControls"),e("html").css(m),t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo||i),t._lastFocusedEl=document.activeElement,setTimeout(function(){t.content?(t._addClassToMFP(v),t._setFocus()):t.bgOverlay.addClass(v),o.on("focusin"+h,t._onFocusIn)},16),t.isOpen=!0,t.updateSize(u),T(f),n},close:function(){t.isOpen&&(T(c),t.isOpen=!1,t.st.removalDelay&&!t.isLowIE&&t.supportsTransition?(t._addClassToMFP(C),setTimeout(function(){t._close()},t.st.removalDelay)):t._close())},_close:function(){T(l);var n=C+" "+v+" ";if(t.bgOverlay.detach(),t.wrap.detach(),t.container.empty(),t.st.mainClass&&(n+=t.st.mainClass+" "),t._removeClassFromMFP(n),t.fixedContentPos){var i={marginRight:""};t.isIE7?e("body, html").css("overflow",""):i.overflow="",e("html").css(i)}o.off("keyup"+h+" focusin"+h),t.ev.off(h),t.wrap.attr("class","mfp-wrap").removeAttr("style"),t.bgOverlay.attr("class","mfp-bg"),t.container.attr("class","mfp-container"),!t.st.showCloseBtn||t.st.closeBtnInside&&t.currTemplate[t.currItem.type]!==!0||t.currTemplate.closeBtn&&t.currTemplate.closeBtn.detach(),t._lastFocusedEl&&e(t._lastFocusedEl).focus(),t.currItem=null,t.content=null,t.currTemplate=null,t.prevHeight=0,T(d)},updateSize:function(e){if(t.isIOS){var n=document.documentElement.clientWidth/window.innerWidth,i=window.innerHeight*n;t.wrap.css("height",i),t.wH=i}else t.wH=e||I.height();t.fixedContentPos||t.wrap.css("height",t.wH),T("Resize")},updateItemHTML:function(){var n=t.items[t.index];t.contentContainer.detach(),t.content&&t.content.detach(),n.parsed||(n=t.parseEl(t.index));var i=n.type;if(T("BeforeChange",[t.currItem?t.currItem.type:"",i]),t.currItem=n,!t.currTemplate[i]){var o=t.st[i]?t.st[i].markup:!1;T("FirstMarkupParse",o),t.currTemplate[i]=o?e(o):!0}r&&r!==n.type&&t.container.removeClass("mfp-"+r+"-holder");var a=t["get"+i.charAt(0).toUpperCase()+i.slice(1)](n,t.currTemplate[i]);t.appendContent(a,i),n.preloaded=!0,T(m,n),r=n.type,t.container.prepend(t.contentContainer),T("AfterChange")},appendContent:function(e,n){t.content=e,e?t.st.showCloseBtn&&t.st.closeBtnInside&&t.currTemplate[n]===!0?t.content.find(".mfp-close").length||t.content.append(E()):t.content=e:t.content="",T(u),t.container.addClass("mfp-"+n+"-holder"),t.contentContainer.append(t.content)},parseEl:function(n){var i,o=t.items[n];if(o.tagName?o={el:e(o)}:(i=o.type,o={data:o,src:o.src}),o.el){for(var r=t.types,a=0;r.length>a;a++)if(o.el.hasClass("mfp-"+r[a])){i=r[a];break}o.src=o.el.attr("data-mfp-src"),o.src||(o.src=o.el.attr("href"))}return o.type=i||t.st.type||"inline",o.index=n,o.parsed=!0,t.items[n]=o,T("ElementParse",o),t.items[n]},addGroup:function(e,n){var i=function(i){i.mfpEl=this,t._openClick(i,e,n)};n||(n={});var o="click.magnificPopup";n.mainEl=e,n.items?(n.isObj=!0,e.off(o).on(o,i)):(n.isObj=!1,n.delegate?e.off(o).on(o,n.delegate,i):(n.items=e,e.off(o).on(o,i)))},_openClick:function(n,i,o){var r=void 0!==o.midClick?o.midClick:e.magnificPopup.defaults.midClick;if(r||2!==n.which&&!n.ctrlKey&&!n.metaKey){var a=void 0!==o.disableOn?o.disableOn:e.magnificPopup.defaults.disableOn;if(a)if(e.isFunction(a)){if(!a.call(t))return!0}else if(a>I.width())return!0;n.type&&(n.preventDefault(),t.isOpen&&n.stopPropagation()),o.el=e(n.mfpEl),o.delegate&&(o.items=i.find(o.delegate)),t.open(o)}},updateStatus:function(e,i){if(t.preloader){n!==e&&t.container.removeClass("mfp-s-"+n),i||"loading"!==e||(i=t.st.tLoading);var o={status:e,text:i};T("UpdateStatus",o),e=o.status,i=o.text,t.preloader.html(i),t.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),t.container.addClass("mfp-s-"+e),n=e}},_checkIfClose:function(n){if(!e(n).hasClass(y)){var i=t.st.closeOnContentClick,o=t.st.closeOnBgClick;if(i&&o)return!0;if(!t.content||e(n).hasClass("mfp-close")||t.preloader&&n===t.preloader[0])return!0;if(n===t.content[0]||e.contains(t.content[0],n)){if(i)return!0}else if(o&&e.contains(document,n))return!0;return!1}},_addClassToMFP:function(e){t.bgOverlay.addClass(e),t.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),t.wrap.removeClass(e)},_hasScrollBar:function(e){return(t.isIE7?o.height():document.body.scrollHeight)>(e||I.height())},_setFocus:function(){(t.st.focus?t.content.find(t.st.focus).eq(0):t.wrap).focus()},_onFocusIn:function(n){return n.target===t.wrap[0]||e.contains(t.wrap[0],n.target)?void 0:(t._setFocus(),!1)},_parseMarkup:function(t,n,i){var o;i.data&&(n=e.extend(i.data,n)),T(p,[t,n,i]),e.each(n,function(e,n){if(void 0===n||n===!1)return!0;if(o=e.split("_"),o.length>1){var i=t.find(h+"-"+o[0]);if(i.length>0){var r=o[1];"replaceWith"===r?i[0]!==n[0]&&i.replaceWith(n):"img"===r?i.is("img")?i.attr("src",n):i.replaceWith('<img src="'+n+'" class="'+i.attr("class")+'" />'):i.attr(o[1],n)}}else t.find(h+"-"+e).html(n)})},_getScrollbarSize:function(){if(void 0===t.scrollbarSize){var e=document.createElement("div");e.id="mfp-sbm",e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),t.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return t.scrollbarSize}},e.magnificPopup={instance:null,proto:w.prototype,modules:[],open:function(t,n){return _(),t=t?e.extend(!0,{},t):{},t.isObj=!0,t.index=n||0,this.instance.open(t)},close:function(){return e.magnificPopup.instance&&e.magnificPopup.instance.close()},registerModule:function(t,n){n.options&&(e.magnificPopup.defaults[t]=n.options),e.extend(this.proto,n.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},e.fn.magnificPopup=function(n){_();var i=e(this);if("string"==typeof n)if("open"===n){var o,r=b?i.data("magnificPopup"):i[0].magnificPopup,a=parseInt(arguments[1],10)||0;r.items?o=r.items[a]:(o=i,r.delegate&&(o=o.find(r.delegate)),o=o.eq(a)),t._openClick({mfpEl:o},i,r)}else t.isOpen&&t[n].apply(t,Array.prototype.slice.call(arguments,1));else n=e.extend(!0,{},n),b?i.data("magnificPopup",n):i[0].magnificPopup=n,t.addGroup(i,n);return i};var P,O,z,M="inline",B=function(){z&&(O.after(z.addClass(P)).detach(),z=null)};e.magnificPopup.registerModule(M,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){t.types.push(M),x(l+"."+M,function(){B()})},getInline:function(n,i){if(B(),n.src){var o=t.st.inline,r=e(n.src);if(r.length){var a=r[0].parentNode;a&&a.tagName&&(O||(P=o.hiddenClass,O=k(P),P="mfp-"+P),z=r.after(O).detach().removeClass(P)),t.updateStatus("ready")}else t.updateStatus("error",o.tNotFound),r=e("<div>");return n.inlineElement=r,r}return t.updateStatus("ready"),t._parseMarkup(i,{},n),i}}});var F,H="ajax",L=function(){F&&i.removeClass(F)},A=function(){L(),t.req&&t.req.abort()};e.magnificPopup.registerModule(H,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){t.types.push(H),F=t.st.ajax.cursor,x(l+"."+H,A),x("BeforeChange."+H,A)},getAjax:function(n){F&&i.addClass(F),t.updateStatus("loading");var o=e.extend({url:n.src,success:function(i,o,r){var a={data:i,xhr:r};T("ParseAjax",a),t.appendContent(e(a.data),H),n.finished=!0,L(),t._setFocus(),setTimeout(function(){t.wrap.addClass(v)},16),t.updateStatus("ready"),T("AjaxContentAdded")},error:function(){L(),n.finished=n.loadError=!0,t.updateStatus("error",t.st.ajax.tError.replace("%url%",n.src))}},t.st.ajax.settings);return t.req=e.ajax(o),""}}});var j,N=function(n){if(n.data&&void 0!==n.data.title)return n.data.title;var i=t.st.image.titleSrc;if(i){if(e.isFunction(i))return i.call(t,n);if(n.el)return n.el.attr(i)||""}return""};e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var e=t.st.image,n=".image";t.types.push("image"),x(f+n,function(){"image"===t.currItem.type&&e.cursor&&i.addClass(e.cursor)}),x(l+n,function(){e.cursor&&i.removeClass(e.cursor),I.off("resize"+h)}),x("Resize"+n,t.resizeImage),t.isLowIE&&x("AfterChange",t.resizeImage)},resizeImage:function(){var e=t.currItem;if(e&&e.img&&t.st.image.verticalFit){var n=0;t.isLowIE&&(n=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",t.wH-n)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,j&&clearInterval(j),e.isCheckingImgSize=!1,T("ImageHasSize",e),e.imgHidden&&(t.content&&t.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var n=0,i=e.img[0],o=function(r){j&&clearInterval(j),j=setInterval(function(){return i.naturalWidth>0?(t._onImageHasSize(e),void 0):(n>200&&clearInterval(j),n++,3===n?o(10):40===n?o(50):100===n&&o(500),void 0)},r)};o(1)},getImage:function(n,i){var o=0,r=function(){n&&(n.img[0].complete?(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("ready")),n.hasSize=!0,n.loaded=!0,T("ImageLoadComplete")):(o++,200>o?setTimeout(r,100):a()))},a=function(){n&&(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("error",s.tError.replace("%url%",n.src))),n.hasSize=!0,n.loaded=!0,n.loadError=!0)},s=t.st.image,l=i.find(".mfp-img");if(l.length){var c=document.createElement("img");c.className="mfp-img",n.img=e(c).on("load.mfploader",r).on("error.mfploader",a),c.src=n.src,l.is("img")&&(n.img=n.img.clone()),c=n.img[0],c.naturalWidth>0?n.hasSize=!0:c.width||(n.hasSize=!1)}return t._parseMarkup(i,{title:N(n),img_replaceWith:n.img},n),t.resizeImage(),n.hasSize?(j&&clearInterval(j),n.loadError?(i.addClass("mfp-loading"),t.updateStatus("error",s.tError.replace("%url%",n.src))):(i.removeClass("mfp-loading"),t.updateStatus("ready")),i):(t.updateStatus("loading"),n.loading=!0,n.hasSize||(n.imgHidden=!0,i.addClass("mfp-loading"),t.findImageSize(n)),i)}}});var W,R=function(){return void 0===W&&(W=void 0!==document.createElement("p").style.MozTransform),W};e.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,n=t.st.zoom,i=".zoom";if(n.enabled&&t.supportsTransition){var o,r,a=n.duration,s=function(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),i="all "+n.duration/1e3+"s "+n.easing,o={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},r="transition";return o["-webkit-"+r]=o["-moz-"+r]=o["-o-"+r]=o[r]=i,t.css(o),t},d=function(){t.content.css("visibility","visible")};x("BuildControls"+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.content.css("visibility","hidden"),e=t._getItemToZoom(),!e)return d(),void 0;r=s(e),r.css(t._getOffset()),t.wrap.append(r),o=setTimeout(function(){r.css(t._getOffset(!0)),o=setTimeout(function(){d(),setTimeout(function(){r.remove(),e=r=null,T("ZoomAnimationEnded")},16)},a)},16)}}),x(c+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.st.removalDelay=a,!e){if(e=t._getItemToZoom(),!e)return;r=s(e)}r.css(t._getOffset(!0)),t.wrap.append(r),t.content.css("visibility","hidden"),setTimeout(function(){r.css(t._getOffset())},16)}}),x(l+i,function(){t._allowZoom()&&(d(),r&&r.remove(),e=null)})}},_allowZoom:function(){return"image"===t.currItem.type},_getItemToZoom:function(){return t.currItem.hasSize?t.currItem.img:!1},_getOffset:function(n){var i;i=n?t.currItem.img:t.st.zoom.opener(t.currItem.el||t.currItem);var o=i.offset(),r=parseInt(i.css("padding-top"),10),a=parseInt(i.css("padding-bottom"),10);o.top-=e(window).scrollTop()-r;var s={width:i.width(),height:(b?i.innerHeight():i[0].offsetHeight)-a-r};return R()?s["-moz-transform"]=s.transform="translate("+o.left+"px,"+o.top+"px)":(s.left=o.left,s.top=o.top),s}}});var Z="iframe",q="//about:blank",D=function(e){if(t.currTemplate[Z]){var n=t.currTemplate[Z].find("iframe");n.length&&(e||(n[0].src=q),t.isIE8&&n.css("display",e?"block":"none"))}};e.magnificPopup.registerModule(Z,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){t.types.push(Z),x("BeforeChange",function(e,t,n){t!==n&&(t===Z?D():n===Z&&D(!0))}),x(l+"."+Z,function(){D()})},getIframe:function(n,i){var o=n.src,r=t.st.iframe;e.each(r.patterns,function(){return o.indexOf(this.index)>-1?(this.id&&(o="string"==typeof this.id?o.substr(o.lastIndexOf(this.id)+this.id.length,o.length):this.id.call(this,o)),o=this.src.replace("%id%",o),!1):void 0});var a={};return r.srcAction&&(a[r.srcAction]=o),t._parseMarkup(i,a,n),t.updateStatus("ready"),i}}});var K=function(e){var n=t.items.length;return e>n-1?e-n:0>e?n+e:e},Y=function(e,t,n){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,n)};e.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var n=t.st.gallery,i=".mfp-gallery",r=Boolean(e.fn.mfpFastClick);return t.direction=!0,n&&n.enabled?(a+=" mfp-gallery",x(f+i,function(){n.navigateByImgClick&&t.wrap.on("click"+i,".mfp-img",function(){return t.items.length>1?(t.next(),!1):void 0}),o.on("keydown"+i,function(e){37===e.keyCode?t.prev():39===e.keyCode&&t.next()})}),x("UpdateStatus"+i,function(e,n){n.text&&(n.text=Y(n.text,t.currItem.index,t.items.length))}),x(p+i,function(e,i,o,r){var a=t.items.length;o.counter=a>1?Y(n.tCounter,r.index,a):""}),x("BuildControls"+i,function(){if(t.items.length>1&&n.arrows&&!t.arrowLeft){var i=n.arrowMarkup,o=t.arrowLeft=e(i.replace(/%title%/gi,n.tPrev).replace(/%dir%/gi,"left")).addClass(y),a=t.arrowRight=e(i.replace(/%title%/gi,n.tNext).replace(/%dir%/gi,"right")).addClass(y),s=r?"mfpFastClick":"click";o[s](function(){t.prev()}),a[s](function(){t.next()}),t.isIE7&&(k("b",o[0],!1,!0),k("a",o[0],!1,!0),k("b",a[0],!1,!0),k("a",a[0],!1,!0)),t.container.append(o.add(a))}}),x(m+i,function(){t._preloadTimeout&&clearTimeout(t._preloadTimeout),t._preloadTimeout=setTimeout(function(){t.preloadNearbyImages(),t._preloadTimeout=null},16)}),x(l+i,function(){o.off(i),t.wrap.off("click"+i),t.arrowLeft&&r&&t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(),t.arrowRight=t.arrowLeft=null}),void 0):!1},next:function(){t.direction=!0,t.index=K(t.index+1),t.updateItemHTML()},prev:function(){t.direction=!1,t.index=K(t.index-1),t.updateItemHTML()},goTo:function(e){t.direction=e>=t.index,t.index=e,t.updateItemHTML()},preloadNearbyImages:function(){var e,n=t.st.gallery.preload,i=Math.min(n[0],t.items.length),o=Math.min(n[1],t.items.length);for(e=1;(t.direction?o:i)>=e;e++)t._preloadItem(t.index+e);for(e=1;(t.direction?i:o)>=e;e++)t._preloadItem(t.index-e)},_preloadItem:function(n){if(n=K(n),!t.items[n].preloaded){var i=t.items[n];i.parsed||(i=t.parseEl(n)),T("LazyLoad",i),"image"===i.type&&(i.img=e('<img class="mfp-img" />').on("load.mfploader",function(){i.hasSize=!0}).on("error.mfploader",function(){i.hasSize=!0,i.loadError=!0,T("LazyLoadError",i)}).attr("src",i.src)),i.preloaded=!0}}}});var U="retina";e.magnificPopup.registerModule(U,{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var e=t.st.retina,n=e.ratio;n=isNaN(n)?n():n,n>1&&(x("ImageHasSize."+U,function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/n,width:"100%"})}),x("ElementParse."+U,function(t,i){i.src=e.replaceSrc(i,n)}))}}}}),function(){var t=1e3,n="ontouchstart"in window,i=function(){I.off("touchmove"+r+" touchend"+r)},o="mfpFastClick",r="."+o;e.fn.mfpFastClick=function(o){return e(this).each(function(){var a,s=e(this);if(n){var l,c,d,u,p,f;s.on("touchstart"+r,function(e){u=!1,f=1,p=e.originalEvent?e.originalEvent.touches[0]:e.touches[0],c=p.clientX,d=p.clientY,I.on("touchmove"+r,function(e){p=e.originalEvent?e.originalEvent.touches:e.touches,f=p.length,p=p[0],(Math.abs(p.clientX-c)>10||Math.abs(p.clientY-d)>10)&&(u=!0,i())}).on("touchend"+r,function(e){i(),u||f>1||(a=!0,e.preventDefault(),clearTimeout(l),l=setTimeout(function(){a=!1},t),o())})})}s.on("click"+r,function(){a||o()})})},e.fn.destroyMfpFastClick=function(){e(this).off("touchstart"+r+" click"+r),n&&I.off("touchmove"+r+" touchend"+r)}}(),_()})(window.jQuery||window.Zepto);


/**
 * placeholder
 */
(function(q,f,d){function r(b){var a={},c=/^jQuery\d+$/;d.each(b.attributes,function(b,d){d.specified&&!c.test(d.name)&&(a[d.name]=d.value)});return a}function g(b,a){var c=d(this);if(this.value==c.attr("placeholder")&&c.hasClass("placeholder"))if(c.data("placeholder-password")){c=c.hide().next().show().attr("id",c.removeAttr("id").data("placeholder-id"));if(!0===b)return c[0].value=a;c.focus()}else this.value="",c.removeClass("placeholder"),this==m()&&this.select()}function k(){var b,a=d(this),c=
    this.id;if(""==this.value){if("password"==this.type){if(!a.data("placeholder-textinput")){try{b=a.clone().attr({type:"text"})}catch(e){b=d("<input>").attr(d.extend(r(this),{type:"text"}))}b.removeAttr("name").data({"placeholder-password":a,"placeholder-id":c}).bind("focus.placeholder",g);a.data({"placeholder-textinput":b,"placeholder-id":c}).before(b)}a=a.removeAttr("id").hide().prev().attr("id",c).show()}a.addClass("placeholder");a[0].value=a.attr("placeholder")}else a.removeClass("placeholder")}
    function m(){try{return f.activeElement}catch(b){}}var h="placeholder"in f.createElement("input"),l="placeholder"in f.createElement("textarea"),e=d.fn,n=d.valHooks,p=d.propHooks;h&&l?(e=e.placeholder=function(){return this},e.input=e.textarea=!0):(e=e.placeholder=function(){this.filter((h?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":g,"blur.placeholder":k}).data("placeholder-enabled",!0).trigger("blur.placeholder");return this},e.input=h,e.textarea=l,e={get:function(b){var a=
        d(b),c=a.data("placeholder-password");return c?c[0].value:a.data("placeholder-enabled")&&a.hasClass("placeholder")?"":b.value},set:function(b,a){var c=d(b),e=c.data("placeholder-password");if(e)return e[0].value=a;if(!c.data("placeholder-enabled"))return b.value=a;""==a?(b.value=a,b!=m()&&k.call(b)):c.hasClass("placeholder")?g.call(b,!0,a)||(b.value=a):b.value=a;return c}},h||(n.input=e,p.value=e),l||(n.textarea=e,p.value=e),d(function(){d(f).delegate("form","submit.placeholder",function(){var b=
        d(".placeholder",this).each(g);setTimeout(function(){b.each(k)},10)})}),d(q).bind("beforeunload.placeholder",function(){d(".placeholder").each(function(){this.value=""})}))})(this,document,jQuery);





//fgnass.github.com/spin.js#v2.0.1
!function(a,b){"object"==typeof exports?module.exports=b():"function"==typeof define&&define.amd?define(b):a.Spinner=b()}(this,function(){"use strict";function a(a,b){var c,d=document.createElement(a||"div");for(c in b)d[c]=b[c];return d}function b(a){for(var b=1,c=arguments.length;c>b;b++)a.appendChild(arguments[b]);return a}function c(a,b,c,d){var e=["opacity",b,~~(100*a),c,d].join("-"),f=.01+c/d*100,g=Math.max(1-(1-a)/b*(100-f),a),h=j.substring(0,j.indexOf("Animation")).toLowerCase(),i=h&&"-"+h+"-"||"";return l[e]||(m.insertRule("@"+i+"keyframes "+e+"{0%{opacity:"+g+"}"+f+"%{opacity:"+a+"}"+(f+.01)+"%{opacity:1}"+(f+b)%100+"%{opacity:"+a+"}100%{opacity:"+g+"}}",m.cssRules.length),l[e]=1),e}function d(a,b){var c,d,e=a.style;for(b=b.charAt(0).toUpperCase()+b.slice(1),d=0;d<k.length;d++)if(c=k[d]+b,void 0!==e[c])return c;return void 0!==e[b]?b:void 0}function e(a,b){for(var c in b)a.style[d(a,c)||c]=b[c];return a}function f(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)void 0===a[d]&&(a[d]=c[d])}return a}function g(a,b){return"string"==typeof a?a:a[b%a.length]}function h(a){this.opts=f(a||{},h.defaults,n)}function i(){function c(b,c){return a("<"+b+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',c)}m.addRule(".spin-vml","behavior:url(#default#VML)"),h.prototype.lines=function(a,d){function f(){return e(c("group",{coordsize:k+" "+k,coordorigin:-j+" "+-j}),{width:k,height:k})}function h(a,h,i){b(m,b(e(f(),{rotation:360/d.lines*a+"deg",left:~~h}),b(e(c("roundrect",{arcsize:d.corners}),{width:j,height:d.width,left:d.radius,top:-d.width>>1,filter:i}),c("fill",{color:g(d.color,a),opacity:d.opacity}),c("stroke",{opacity:0}))))}var i,j=d.length+d.width,k=2*j,l=2*-(d.width+d.length)+"px",m=e(f(),{position:"absolute",top:l,left:l});if(d.shadow)for(i=1;i<=d.lines;i++)h(i,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(i=1;i<=d.lines;i++)h(i);return b(a,m)},h.prototype.opacity=function(a,b,c,d){var e=a.firstChild;d=d.shadow&&d.lines||0,e&&b+d<e.childNodes.length&&(e=e.childNodes[b+d],e=e&&e.firstChild,e=e&&e.firstChild,e&&(e.opacity=c))}}var j,k=["webkit","Moz","ms","O"],l={},m=function(){var c=a("style",{type:"text/css"});return b(document.getElementsByTagName("head")[0],c),c.sheet||c.styleSheet}(),n={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"50%",left:"50%",position:"absolute"};h.defaults={},f(h.prototype,{spin:function(b){this.stop();{var c=this,d=c.opts,f=c.el=e(a(0,{className:d.className}),{position:d.position,width:0,zIndex:d.zIndex});d.radius+d.length+d.width}if(e(f,{left:d.left,top:d.top}),b&&b.insertBefore(f,b.firstChild||null),f.setAttribute("role","progressbar"),c.lines(f,c.opts),!j){var g,h=0,i=(d.lines-1)*(1-d.direction)/2,k=d.fps,l=k/d.speed,m=(1-d.opacity)/(l*d.trail/100),n=l/d.lines;!function o(){h++;for(var a=0;a<d.lines;a++)g=Math.max(1-(h+(d.lines-a)*n)%l*m,d.opacity),c.opacity(f,a*d.direction+i,g,d);c.timeout=c.el&&setTimeout(o,~~(1e3/k))}()}return c},stop:function(){var a=this.el;return a&&(clearTimeout(this.timeout),a.parentNode&&a.parentNode.removeChild(a),this.el=void 0),this},lines:function(d,f){function h(b,c){return e(a(),{position:"absolute",width:f.length+f.width+"px",height:f.width+"px",background:b,boxShadow:c,transformOrigin:"left",transform:"rotate("+~~(360/f.lines*k+f.rotate)+"deg) translate("+f.radius+"px,0)",borderRadius:(f.corners*f.width>>1)+"px"})}for(var i,k=0,l=(f.lines-1)*(1-f.direction)/2;k<f.lines;k++)i=e(a(),{position:"absolute",top:1+~(f.width/2)+"px",transform:f.hwaccel?"translate3d(0,0,0)":"",opacity:f.opacity,animation:j&&c(f.opacity,f.trail,l+k*f.direction,f.lines)+" "+1/f.speed+"s linear infinite"}),f.shadow&&b(i,e(h("#000","0 0 4px #000"),{top:"2px"})),b(d,b(i,h(g(f.color,k),"0 0 1px rgba(0,0,0,.1)")));return d},opacity:function(a,b,c){b<a.childNodes.length&&(a.childNodes[b].style.opacity=c)}});var o=e(a("group"),{behavior:"url(#default#VML)"});return!d(o,"transform")&&o.adj?i():j=d(o,"animation"),h});




// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
// MIT license
(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
            || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());







function td_smooth_scroll() {


// SmoothScroll v1.2.1
// Licensed under the terms of the MIT license.

// People involved
//  - Balazs Galambosi (maintainer)
//  - Patrick Brunner  (original idea)
//  - Michael Herf     (Pulse Algorithm)

// Scroll Variables (tweakable)
    var defaultOptions = {

        // Scrolling Core
        frameRate        : 150, // [Hz]
        animationTime    : 600, // [px]
        stepSize         : 120, // [px]

        // Pulse (less tweakable)
        // ratio of "tail" to "acceleration"
        pulseAlgorithm   : true,
        pulseScale       : 8,
        pulseNormalize   : 1,

        // Acceleration
        accelerationDelta : 20,  // 20
        accelerationMax   : 1,   // 1

        // Keyboard Settings
        keyboardSupport   : true,  // option
        arrowScroll       : 50,     // [px]

        // Other
        touchpadSupport   : true,
        fixedBackground   : true,
        excluded          : ""
    };

    var options = defaultOptions;


// Other Variables
    var isExcluded = false;
    var isFrame = false;
    var direction = { x: 0, y: 0 };
    var initDone  = false;
    var root = document.documentElement;
    var activeElement;
    var observer;
    var deltaBuffer = [ 120, 120, 120 ];

    var key = { left: 37, up: 38, right: 39, down: 40, spacebar: 32,
        pageup: 33, pagedown: 34, end: 35, home: 36 };


    /***********************************************
     * SETTINGS
     ***********************************************/
    if(typeof(chrome) !== 'undefined' && typeof(chrome.storage) !== 'undefined') {
        chrome.storage.sync.get(defaultOptions, function (syncedOptions) {

            options = syncedOptions;

            // it seems that sometimes settings come late
            // and we need to test again for excluded pages
            initTest();
        });
    }

    /***********************************************
     * INITIALIZE
     ***********************************************/

    /**
     * Tests if smooth scrolling is allowed. Shuts down everything if not.
     */
    function initTest() {

        var disableKeyboard = false;

        // disable keys for google reader (spacebar conflict)
        if (document.URL.indexOf("google.com/reader/view") > -1) {
            disableKeyboard = true;
        }

        // disable everything if the page is blacklisted
        if (options.excluded) {
            var domains = options.excluded.split(/[,\n] ?/);
            domains.push("mail.google.com"); // exclude Gmail for now
            for (var i = domains.length; i--;) {
                if (document.URL.indexOf(domains[i]) > -1) {
                    observer && observer.disconnect();
                    removeEvent("mousewheel", wheel);
                    disableKeyboard = true;
                    isExcluded = true;
                    break;
                }
            }
        }

        // disable keyboard support if anything above requested it
        if (disableKeyboard) {
            removeEvent("keydown", keydown);
        }

        if (options.keyboardSupport && !disableKeyboard) {
            addEvent("keydown", keydown);
        }
    }

    /**
     * Sets up scrolls array, determines if frames are involved.
     */
    function init() {

        if (!document.body) return;

        var body = document.body;
        var html = document.documentElement;
        var windowHeight = window.innerHeight;
        var scrollHeight = body.scrollHeight;

        // check compat mode for root element
        root = (document.compatMode.indexOf('CSS') >= 0) ? html : body;
        activeElement = body;

        initTest();
        initDone = true;

        // Checks if this script is running in a frame
        if (top != self) {
            isFrame = true;
        }

        /**
         * This fixes a bug where the areas left and right to
         * the content does not trigger the onmousewheel event
         * on some pages. e.g.: html, body { height: 100% }
         */
        else if (scrollHeight > windowHeight &&
            (body.offsetHeight <= windowHeight ||
                html.offsetHeight <= windowHeight)) {

            // DOMChange (throttle): fix height
            var pending = false;
            var refresh = function () {
                if (!pending && html.scrollHeight != document.height) {
                    pending = true; // add a new pending action
                    setTimeout(function () {
                        html.style.height = document.height + 'px';
                        pending = false;
                    }, 500); // act rarely to stay fast
                }
            };
            html.style.height = 'auto';
            setTimeout(refresh, 10);

            var config = {
                attributes: true,
                childList: true,
                characterData: false
            };

            observer = new MutationObserver(refresh);
            observer.observe(body, config);

            // clearfix
            if (root.offsetHeight <= windowHeight) {
                var underlay = document.createElement("div");
                underlay.style.clear = "both";
                body.appendChild(underlay);
            }
        }

        // gmail performance fix
        if (document.URL.indexOf("mail.google.com") > -1) {
            var s = document.createElement("style");
            s.innerHTML = ".iu { visibility: hidden }";
            (document.getElementsByTagName("head")[0] || html).appendChild(s);
        }
        // facebook better home timeline performance
        // all the HTML resized images make rendering CPU intensive
        else if (document.URL.indexOf("www.facebook.com") > -1) {
            var home_stream = document.getElementById("home_stream");
            home_stream && (home_stream.style.webkitTransform = "translateZ(0)");
        }
        // disable fixed background
        if (!options.fixedBackground && !isExcluded) {
            body.style.backgroundAttachment = "scroll";
            html.style.backgroundAttachment = "scroll";
        }
    }


    /************************************************
     * SCROLLING
     ************************************************/

    var que = [];
    var pending = false;
    var lastScroll = +new Date;

    /**
     * Pushes scroll actions to the scrolling queue.
     */
    function scrollArray(elem, left, top, delay) {

        delay || (delay = 1000);
        directionCheck(left, top);

        if (options.accelerationMax != 1) {
            var now = +new Date;
            var elapsed = now - lastScroll;
            if (elapsed < options.accelerationDelta) {
                var factor = (1 + (30 / elapsed)) / 2;
                if (factor > 1) {
                    factor = Math.min(factor, options.accelerationMax);
                    left *= factor;
                    top  *= factor;
                }
            }
            lastScroll = +new Date;
        }

        // push a scroll command
        que.push({
            x: left,
            y: top,
            lastX: (left < 0) ? 0.99 : -0.99,
            lastY: (top  < 0) ? 0.99 : -0.99,
            start: +new Date
        });

        // don't act if there's a pending queue
        if (pending) {
            return;
        }

        var scrollWindow = (elem === document.body);

        var step = function (time) {

            var now = +new Date;
            var scrollX = 0;
            var scrollY = 0;

            for (var i = 0; i < que.length; i++) {

                var item = que[i];
                var elapsed  = now - item.start;
                var finished = (elapsed >= options.animationTime);

                // scroll position: [0, 1]
                var position = (finished) ? 1 : elapsed / options.animationTime;

                // easing [optional]
                if (options.pulseAlgorithm) {
                    position = pulse(position);
                }

                // only need the difference
                var x = (item.x * position - item.lastX) >> 0;
                var y = (item.y * position - item.lastY) >> 0;

                // add this to the total scrolling
                scrollX += x;
                scrollY += y;

                // update last values
                item.lastX += x;
                item.lastY += y;

                // delete and step back if it's over
                if (finished) {
                    que.splice(i, 1); i--;
                }
            }

            // scroll left and top
            if (scrollWindow) {
                window.scrollBy(scrollX, scrollY);
            }
            else {
                if (scrollX) elem.scrollLeft += scrollX;
                if (scrollY) elem.scrollTop  += scrollY;
            }

            // clean up if there's nothing left to do
            if (!left && !top) {
                que = [];
            }

            if (que.length) {
                requestFrame(step, elem, (delay / options.frameRate + 1));
            } else {
                pending = false;
            }
        };

        // start a new queue of actions
        requestFrame(step, elem, 0);
        pending = true;
    }


    /***********************************************
     * EVENTS
     ***********************************************/

    /**
     * Mouse wheel handler.
     * @param {Object} event
     */
    function wheel(event) {

        if (!initDone) {
            init();
        }

        var target = event.target;
        var overflowing = overflowingAncestor(target);

        // use default if there's no overflowing
        // element or default action is prevented
        if (!overflowing || event.defaultPrevented ||
            isNodeName(activeElement, "embed") ||
            (isNodeName(target, "embed") && /\.pdf/i.test(target.src))) {
            return true;
        }

        var deltaX = event.wheelDeltaX || 0;
        var deltaY = event.wheelDeltaY || 0;

        // use wheelDelta if deltaX/Y is not available
        if (!deltaX && !deltaY) {
            deltaY = event.wheelDelta || 0;
        }

        // check if it's a touchpad scroll that should be ignored
        if (!options.touchpadSupport && isTouchpad(deltaY)) {
            return true;
        }

        // scale by step size
        // delta is 120 most of the time
        // synaptics seems to send 1 sometimes
        if (Math.abs(deltaX) > 1.2) {
            deltaX *= options.stepSize / 120;
        }
        if (Math.abs(deltaY) > 1.2) {
            deltaY *= options.stepSize / 120;
        }

        scrollArray(overflowing, -deltaX, -deltaY);
        event.preventDefault();
    }

    /**
     * Keydown event handler.
     * @param {Object} event
     */
    function keydown(event) {

        var target   = event.target;
        var modifier = event.ctrlKey || event.altKey || event.metaKey ||
            (event.shiftKey && event.keyCode !== key.spacebar);

        // do nothing if user is editing text
        // or using a modifier key (except shift)
        // or in a dropdown
        if ( /input|textarea|select|embed/i.test(target.nodeName) ||
            target.isContentEditable ||
            event.defaultPrevented   ||
            modifier ) {
            return true;
        }
        // spacebar should trigger button press
        if (isNodeName(target, "button") &&
            event.keyCode === key.spacebar) {
            return true;
        }

        var shift, x = 0, y = 0;
        var elem = overflowingAncestor(activeElement);
        var clientHeight = elem.clientHeight;

        if (elem == document.body) {
            clientHeight = window.innerHeight;
        }

        switch (event.keyCode) {
            case key.up:
                y = -options.arrowScroll;
                break;
            case key.down:
                y = options.arrowScroll;
                break;
            case key.spacebar: // (+ shift)
                shift = event.shiftKey ? 1 : -1;
                y = -shift * clientHeight * 0.9;
                break;
            case key.pageup:
                y = -clientHeight * 0.9;
                break;
            case key.pagedown:
                y = clientHeight * 0.9;
                break;
            case key.home:
                y = -elem.scrollTop;
                break;
            case key.end:
                var damt = elem.scrollHeight - elem.scrollTop - clientHeight;
                y = (damt > 0) ? damt+10 : 0;
                break;
            case key.left:
                x = -options.arrowScroll;
                break;
            case key.right:
                x = options.arrowScroll;
                break;
            default:
                return true; // a key we don't care about
        }

        scrollArray(elem, x, y);
        event.preventDefault();
    }

    /**
     * Mousedown event only for updating activeElement
     */
    function mousedown(event) {
        activeElement = event.target;
    }


    /***********************************************
     * OVERFLOW
     ***********************************************/

    var cache = {}; // cleared out every once in while
    setInterval(function () { cache = {}; }, 10 * 1000);

    var uniqueID = (function () {
        var i = 0;
        return function (el) {
            return el.uniqueID || (el.uniqueID = i++);
        };
    })();

    function setCache(elems, overflowing) {
        for (var i = elems.length; i--;)
            cache[uniqueID(elems[i])] = overflowing;
        return overflowing;
    }

    function overflowingAncestor(el) {
        var elems = [];
        var rootScrollHeight = root.scrollHeight;
        do {
            var cached = cache[uniqueID(el)];
            if (cached) {
                return setCache(elems, cached);
            }
            elems.push(el);
            if (rootScrollHeight === el.scrollHeight) {
                if (!isFrame || root.clientHeight + 10 < rootScrollHeight) {
                    return setCache(elems, document.body); // scrolling root in WebKit
                }
            } else if (el.clientHeight + 10 < el.scrollHeight) {
                overflow = getComputedStyle(el, "").getPropertyValue("overflow-y");
                if (overflow === "scroll" || overflow === "auto") {
                    return setCache(elems, el);
                }
            }
        } while (el = el.parentNode);
    }


    /***********************************************
     * HELPERS
     ***********************************************/

    function addEvent(type, fn, bubble) {
        window.addEventListener(type, fn, (bubble||false));
    }

    function removeEvent(type, fn, bubble) {
        window.removeEventListener(type, fn, (bubble||false));
    }

    function isNodeName(el, tag) {
        return (el.nodeName||"").toLowerCase() === tag.toLowerCase();
    }

    function directionCheck(x, y) {
        x = (x > 0) ? 1 : -1;
        y = (y > 0) ? 1 : -1;
        if (direction.x !== x || direction.y !== y) {
            direction.x = x;
            direction.y = y;
            que = [];
            lastScroll = 0;
        }
    }

    var deltaBufferTimer;

    function isTouchpad(deltaY) {
        if (!deltaY) return;
        deltaY = Math.abs(deltaY)
        deltaBuffer.push(deltaY);
        deltaBuffer.shift();
        clearTimeout(deltaBufferTimer);
        deltaBufferTimer = setTimeout(function () {
            chrome.storage.local.set({ deltaBuffer: deltaBuffer });
        }, 1000);
        var allEquals    = (deltaBuffer[0] == deltaBuffer[1] &&
            deltaBuffer[1] == deltaBuffer[2]);
        var allDivisable = (isDivisible(deltaBuffer[0], 120) &&
            isDivisible(deltaBuffer[1], 120) &&
            isDivisible(deltaBuffer[2], 120));
        return !(allEquals || allDivisable);
    }

    function isDivisible(n, divisor) {
        return (Math.floor(n / divisor) == n / divisor);
    }

    if(typeof(chrome) !== 'undefined' && typeof(chrome.storage) !== 'undefined') {
        chrome.storage.local.get('deltaBuffer', function (stored) {
            if (stored.deltaBuffer) {
                deltaBuffer = stored.deltaBuffer;
            }
        });
    }

    var requestFrame = (function () {
        return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            function (callback, element, delay) {
                window.setTimeout(callback, delay || (1000/60));
            };
    })();

    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;


    /***********************************************
     * PULSE
     ***********************************************/

    /**
     * Viscous fluid with a pulse for part and decay for the rest.
     * - Applies a fixed force over an interval (a damped acceleration), and
     * - Lets the exponential bleed away the velocity over a longer interval
     * - Michael Herf, http://stereopsis.com/stopping/
     */
    function pulse_(x) {
        var val, start, expx;
        // test
        x = x * options.pulseScale;
        if (x < 1) { // acceleartion
            val = x - (1 - Math.exp(-x));
        } else {     // tail
            // the previous animation ended here:
            start = Math.exp(-1);
            // simple viscous drag
            x -= 1;
            expx = 1 - Math.exp(-x);
            val = start + (expx * (1 - start));
        }
        return val * options.pulseNormalize;
    }

    function pulse(x) {
        if (x >= 1) return 1;
        if (x <= 0) return 0;

        if (options.pulseNormalize == 1) {
            options.pulseNormalize /= pulse_(1);
        }
        return pulse_(x);
    }

    addEvent("mousedown", mousedown);
    addEvent("mousewheel", wheel);
    addEvent("load", init);
} //end smooth scroll


;"use strict";

/*  ----------------------------------------------------------------------------
    td_detect - browser detection object (instance)
    v1.1
 */

var td_detect = new function () {

    //constructor
    this.is_ie8 = false;
    this.is_ie9 = false;
    this.is_ie10 = false;
    this.is_ie11 = false;
    this.is_ie = false;
    this.is_safary = false;
    this.is_chrome = false;
    this.is_ipad = false;

    this.is_touch_device = false;

    this.has_history = false;

    this.is_phone_screen = false;

    this.is_ios = false;

    this.is_android = false;

    // is touch device ?
    this.is_touch_device = !!('ontouchstart' in window);

    this.is_mobile_device = false;

    // detect ie8
    if (jQuery('html').is('.ie8')) {
        this.is_ie8 = true;
        this.is_ie = true;
    }



    // detect ie9
    if (jQuery('html').is('.ie9')) {
        this.is_ie9 = true;
        this.is_ie = true;
    }

    // detect ie10 - also adds the ie10 class //it also detects windows mobile IE as IE10
    if(navigator.userAgent.indexOf("MSIE 10.0") > -1){
        jQuery("html").addClass("ie10");
        this.is_ie10 = true;
        this.is_ie = true;
        //alert('10');
    }

    //ie 11 check - also adds the ie11 class - it may detect ie on windows mobile
    if(!!navigator.userAgent.match(/Trident.*rv\:11\./)){
        jQuery("html").addClass("ie11");
        this.is_ie11 = true;
        //this.is_ie = true; //do not flag ie11 as is_ie
        //alert('11');
    }


    //do we have html5 history support?
    if (window.history && window.history.pushState) {
        this.has_history = true;
    }

    //check for safary
    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        this.is_safary = true;
    }

    //chrome and chrome-ium check
    this.is_chrome = /chrom(e|ium)/.test(navigator.userAgent.toLowerCase());

    this.is_ipad = navigator.userAgent.match(/iPad/i) != null;



    this.is_ios = /(iPad|iPhone|iPod)/g.test( navigator.userAgent );


    //detect if we run on a mobile device - ipad included - used by the modal / scroll to @see scroll_into_view
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        this.is_mobile_device = true;
    }

    /**
     * function to check the phone screen
     * @see td_events
     * The jQuery windows width is not reliable cross browser!
     */
    this.run_is_phone_screen = function () {
        if ((jQuery(window).width() < 768 || jQuery(window).height() < 768) && this.is_ipad === false) {
            this.is_phone_screen = true;

        } else {
            this.is_phone_screen = false;
        }

        //console.log(this.is_phone_screen + ' ' + jQuery(window).width() + ' ' + jQuery(window).height());
    };



    this.run_is_phone_screen();


    //test for android
    var user_agent = navigator.userAgent.toLowerCase();
    if(user_agent.indexOf("android") > -1) {
        this.is_android = true;
    }



};




/*  ----------------------------------------------------------------------------
    tagDiv magic cache
    v1.0
 */
var td_local_cache = {
    data: {},
    remove: function (resurce_id) {
        delete td_local_cache.data[resurce_id];
    },
    exist: function (resurce_id) {
        return td_local_cache.data.hasOwnProperty(resurce_id) && td_local_cache.data[resurce_id] !== null;
    },
    get: function (resurce_id) {
        return td_local_cache.data[resurce_id];
    },
    set: function (resurce_id, cachedData) {
        td_local_cache.remove(resurce_id);
        td_local_cache.data[resurce_id] = cachedData;
    }
};

/*
    td_util.js
    v1.1
 */

"use strict";



/*  ----------------------------------------------------------------------------
    tagDiv utility class
 */
var td_util = {


    /**
     * utility function, used by td_post_images.js
     * @param class_selector
     */
    image_move_class_to_figure: function (class_selector) {
        jQuery('figure .' + class_selector).each(function() {
            jQuery(this).parent().parent().addClass(class_selector);
            jQuery(this).removeClass(class_selector);
        });
    },



    /**
     * safe function to read variables passed by the theme via the js buffer. If by some kind of error the variable is missing from the global scope, this function will return false
     * @param variable_name
     * @returns {*}
     */
    get_backend_var: function(variable_name) {
        if (typeof window[variable_name] === 'undefined') {
            return '';
        }
        return window[variable_name];
    },



    /**
     * scrolls to a dom element
     * @param dom_element
     */
    scroll_to_element: function(dom_element, duration) {
        td_is_scrolling_animation = true;
        jQuery("html, body").stop();


        var dest;

        //calculate destination place
        if (dom_element.offset().top > jQuery(document).height() - jQuery(window).height()) {
            dest = jQuery(document).height() - jQuery(window).height();
        } else {
            dest = dom_element.offset().top;
        }
        //go to destination
        jQuery("html, body").animate({ scrollTop: dest }, {
                duration: duration,
                easing:'easeInOutQuart',
                complete: function(){
                    td_is_scrolling_animation = false;
                }
            }
        );
    },


    /**
     * scrolls to a dom element - the element will be close to the center of the screen
     * !!! compensates for long distances !!!
     */
    scroll_into_view: function (dom_element) {

        if (td_detect.is_mobile_device === true) {
            return; //do not run on any mobile device
        }

        td_is_scrolling_animation = true;
        jQuery("html, body").stop();


        var destination = dom_element.offset().top;
        destination = destination - 150;

        var distance = Math.abs(jQuery(window).scrollTop() - destination);
        var computed_time = distance / 5;
        //console.log(distance + ' -> ' + computed_time +  ' -> ' + (1100+computed_time));

        //go to destination
        jQuery("html, body").animate({ scrollTop: destination }, {
                duration: 1100 + computed_time,
                easing:'easeInOutQuart',
                complete: function(){
                    td_is_scrolling_animation = false;
                }
            }
        );
    },

    /**
     * scrolls to a position
     * @param px_from_top - pixels from top
     */
    scroll_to_position: function(px_from_top, duration) {
        td_is_scrolling_animation = true;
        jQuery("html, body").stop();

        //go to destination
        jQuery("html, body").animate({ scrollTop: px_from_top }, {
                duration: duration,
                easing:'easeInOutQuart',
                complete: function(){
                    td_is_scrolling_animation = false;
                }
            }
        );
    },
    td_move_y: function td_move_Y (elm, value) {
        var translate = 'translate3d(0px,' + value + 'px, 0px)';
        elm.style['-webkit-transform'] = translate;
        elm.style['-moz-transform'] = translate;
        elm.style['-ms-transform'] = translate;
        elm.style['-o-transform'] = translate;
        elm.style.transform = translate;
    }


};


/**
 * Created by ra on 6/27/14.
 * copyright tagDiv 2014
 * V 1.1 - better iOS 8 support
 */


var td_affix = {

    //settings, obtained from ext
    menu_selector: '', //the affix menu (this element will get the td-affix)
    menu_wrap_selector: '', //the menu wrapper / placeholder
    tds_snap_menu: '', //the panel setting


    top_offset: 0, //how much the menu is moved from the original position when it's affixed
    menu_offset: 0, //used to hide the menu on scroll
    is_requestAnimationFrame_running:false, //prevent multiple calls to requestAnimationFrame
    is_menu_affix: false, //the current state of the menu, true if the menu is affix
    is_top_menu:false, //true when the menu is at the top of the screen (0px topScroll)

    //menu offset boundaries - so we do not fire the animation event when the boundary is hit
    menu_offset_max_hit: false,
    menu_offset_min_hit: true,


    scroll_window_scrollTop_last: 0, //last scrollTop position, used to calculate the scroll direction

    /**
     * run the affix, we use the menu wrap selector to compute the menu position from top
     *
       {
            menu_selector: '.td-header-main-menu',
            menu_wrap_selector: '.td-header-menu-wrap',
            tds_snap_menu: td_util.get_backend_var('tds_snap_menu')
        }
     */
    init : function init (atts) {

        //read the settings
        td_affix.menu_selector = atts.menu_selector;
        td_affix.menu_wrap_selector = atts.menu_wrap_selector;
        td_affix.tds_snap_menu = atts.tds_snap_menu;

        //the snap menu is disabled from the panel
        if (!td_affix.tds_snap_menu) {
            return;
        }

        //compute on semi dom ready
        td_affix.compute_top();


        //recompute when all the page + logos are loaded
        jQuery(window).load(function() {
            td_affix.compute_top();

            //recompute after 1 sec for retarded phones
            setTimeout(function(){
                td_affix.compute_top();
            }, 1000);
        });




    },

    /**
     * called by td_events.js on scroll
     */
    td_events_scroll: function td_events_scroll(scrollTop) {

        //do not run if we don't have a snap menu
        if (!td_affix.tds_snap_menu) {
            return;
        }


        /*  ----------------------------------------------------------------------------
            scroll direction + delta (used by affix for now)
            to run thios code:
             - td_affix.tds_snap_menu != '' (from above)
             - td_affix.tds_snap_menu != 'snap'
         */
        if (td_affix.tds_snap_menu != 'snap') { //do not run on snap
            if ((td_affix.tds_snap_menu != 'smart_snap_mobile' || td_detect.is_phone_screen === true)) {  // different from smart_snap_mobile or td_detect.is_phone_screen === true
                //console.log('rrr');
                var scroll_direction = '';
                var scrollDelta = 0;

                //check the direction
                if (scrollTop != td_affix.scroll_window_scrollTop_last) { //compute direction only if we have different last scroll top
                    // compute the direction of the scroll
                    if (scrollTop > td_affix.scroll_window_scrollTop_last) {
                        scroll_direction = 'down';
                    } else {
                        scroll_direction = 'up';
                    }
                    //calculate the scroll delta
                    scrollDelta = Math.abs(scrollTop - td_affix.scroll_window_scrollTop_last);
                }

                td_affix.scroll_window_scrollTop_last = scrollTop;
            }
        }

        /*  ---------------------------------------------------------------------------- */



        //if the menu is in the affix state
        if (scrollTop > td_affix.top_offset || td_affix.is_top_menu === true) {

            //get the menu element
            var td_affix_menu_element = jQuery(td_affix.menu_selector);
            
            //turn affix on for it
            td_affix._affix_on(td_affix_menu_element);


            //if the menu is only with snap or we are on smart_snap_mobile + mobile, our job here in this function is done, return
            if (td_affix.tds_snap_menu == 'snap' || (td_affix.tds_snap_menu =='smart_snap_mobile' && td_detect.is_phone_screen === false)) {
                return;
            }

            /*    ---  end simple snap  ---  */


            /*  ----------------------------------------------------------------------------
                check scroll directions (we may also have scroll_direction = '', that's why we have to check for the specific state (up or down))
             */



            // boundary check - to not run the position on each scroll event
            if ((td_affix.menu_offset_max_hit === false && scroll_direction=='down') || (td_affix.menu_offset_min_hit === false && scroll_direction=='up')) {
                //request animation frame
                if (td_affix.is_requestAnimationFrame_running === false) {
                    window.requestAnimationFrame(function(){

                        var offset = 0;


                        if (scrollTop > 0) { // ios returns negative scrollTop values
                            if (scroll_direction == 'down') {

                                //compute the offset
                                offset = td_affix.menu_offset - scrollDelta;
                                if (offset < -80) {
                                    offset = -80;
                                }

                            } else if (scroll_direction == 'up') {
                                //compute the offset
                                offset = td_affix.menu_offset + scrollDelta;
                                if (offset > 0) {
                                    offset = 0;
                                }
                            }

                        }

                        //td_debug.log_live(scroll_direction + ' | scrollTop: ' + scrollTop + '  | offset: ' + offset);

                        td_affix.is_requestAnimationFrame_running = true;

                        //move the menu
                        td_util.td_move_y(td_affix_menu_element[0], offset);
                        //td_affix_menu_element.css({top: (offset) + 'px'});  //legacy menu move code

                        //check boundaries
                        if (offset == 0) {
                            td_affix.menu_offset_min_hit = true;
                        } else {
                            td_affix.menu_offset_min_hit = false;
                        }

                        if (offset == -80) {
                            td_affix.menu_offset_max_hit = true;
                            //also hide the menu when it's 100% out of view on ios - the safari header is transparent and we can see the menu
                            if(td_detect.is_ios === true) {
                                td_affix_menu_element.hide();
                            }
                        } else {
                            td_affix.menu_offset_max_hit = false;

                            if(td_detect.is_ios === true) { //ios safari fix
                                td_affix_menu_element.show();
                            }
                        }


                        td_affix.is_requestAnimationFrame_running = false;




                        td_affix.menu_offset = offset; //update the current offset of the menu


                    },td_affix_menu_element[0]);

                }
                //console.log(offset + ' ' + scroll_direction);

            } //end boundary check



        } else {
            td_affix._affix_off(jQuery(td_affix.menu_selector));
        }

    },


    /**
     * calculates the affix point (the distance from the top when affix should be enabled)
     * @see td_affix.init()
     * @see td_events
     */
    compute_top: function compute_top() {
        td_affix.top_offset = jQuery(td_affix.menu_wrap_selector).offset().top;

        //check to see if the menu is at the top of the screen
        if (td_affix.top_offset == 1) {
            //switch to affix - because the menu is at the top of the page
            //td_affix._affix_on(jQuery(td_affix.menu_selector));
            td_affix.is_top_menu = true;
        } else {
            //check to see the current top offset
            td_affix.is_top_menu = false;

        }
        td_affix.td_events_scroll(jQuery(window).scrollTop());

        //alert(td_affix.top_offset);
        //console.log('computed: ' + td_affix.top_offset);
    },



    /**
     * turns affix on for the menu element
     * @param td_affix_menu_element
     * @private
     */
    _affix_on: function _affix_on(td_affix_menu_element) {
        if (td_affix.is_menu_affix === false) {
            //make the menu fixed
            td_affix_menu_element.addClass('td-affix');

            //add body-td-affix class on body for header style 8 -> when scrolling down the window jumps 76px up when the menu is changing from header style 8 default to header style 8 affix
            jQuery('body').addClass('body-td-affix');

            td_affix.is_menu_affix = true;
        }
    },



    /**
     * Turns affix off for the menu element
     * @param td_affix_menu_element
     * @private
     */
    _affix_off: function _affix_off(td_affix_menu_element) {
        if (td_affix.is_menu_affix === true) {
            //make the menu normal
            jQuery(td_affix.menu_selector).removeClass('td-affix');

            //remove body-td-affix class on body for header style 8 -> when scrolling down the window jumps 76px up when the menu is changing from header style 8 default to header style 8 affix
            jQuery('body').removeClass('body-td-affix');

            td_affix.is_menu_affix = false;

            //move the menu to 0 (ios seems to skip animation frames)
            td_util.td_move_y(td_affix_menu_element[0], 0);

            if(td_detect.is_ios === true) {
                td_affix_menu_element.show();
            }

        }
    }



};



/*  ----------------------------------------------------------------------------
    Affix menu
 */
td_affix.init({
    menu_selector: '.td-menu-background',
    menu_wrap_selector: '.td-menu-placeholder',
    tds_snap_menu: td_util.get_backend_var('tds_snap_menu')
});




/*
    tagDiv - 2014 - Newspaper WordPress theme v4.0
    Our portfolio:  http://themeforest.net/user/tagDiv/portfolio

    Thanks for using our theme! :)
*/





var td_is_slide_moving = false; //disable touch when the touch sliders are moving




/*  ----------------------------------------------------------------------------
 Menu script
 */

jQuery('#td-top-menu .sf-menu').supersubs({
    minWidth:    10, // minimum width of sub-menus in em units
    maxWidth:    40, // maximum width of sub-menus in em units
    extraWidth:  1 // extra width can ensure lines don't sometimes turn over
});

if (td_detect.is_touch_device) {
    //touch
    jQuery('#td-top-menu .sf-menu').superfish({
        delay:300,
        speed:'fast',
        useClick:true
    });
} else {
    //not touch
    jQuery('#td-top-menu .sf-menu').superfish({
        delay:500,
        speed:200,
        useClick:false
    });
}

/*  ----------------------------------------------------------------------------
    On load
 */
jQuery().ready(function jQuery_ready() {



    //resize all the videos if we have them
    td_resize_videos();









    //put focus on search box in blog header
    jQuery('#search-button').click(function(){
        jQuery(this).delay(200).queue(function(){
            document.getElementById("td-header-search").focus();
            jQuery(this).dequeue();
        });
    });


    //retina images
    td_retina();

    //colorbox
    jQuery('.td-featured-img').colorbox({
        maxWidth:"95%",
        maxHeight:"95%",
        fixed:true
    });





    td_ajax_search();


    //srun the mobile menu on phones and on desktop (no ipad or big tablets with touch)
    if (td_detect.is_phone_screen || td_detect.is_touch_device === false) {
        //alert('mobile menu');
        //td_mobile_menu2();

        td_mobile_menu();
    }







    td_fake_clicks();







    //fake placeholder for ie
    jQuery('input, textarea').placeholder();



    //more stories box
    td_more_articles_box.init();



    if (td_detect.is_chrome === true || td_detect.is_ie10 || td_detect.is_ie11) {
        td_smooth_scroll();
    }


    setTimeout(function(){
        td_resize_page_sliders()
    }, 1500);

}); //end on load


/**
 * windlow.load
 */
jQuery(window).load(function() {
    td_resize_page_sliders();
});



/*  ----------------------------------------------------------------------------
 Scroll to top + animation stop
 */

var td_is_scrolling_animation = false;
var td_mouse_wheel_or_touch_moved = false; //we want to know if the user stopped the animation via touch or mouse move

//stop the animation on mouse wheel
jQuery(document).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(e){
    if (td_is_scrolling_animation === false) {
        return;
    } else {
        td_is_scrolling_animation = false;
        td_mouse_wheel_or_touch_moved = true;

        jQuery("html, body").stop();
    }
});

//stop the animation on touch
if (document.addEventListener){
    document.addEventListener('touchmove', function(e) {
        if (td_is_scrolling_animation === false) {
            return;
        } else {
            td_is_scrolling_animation = false;
            td_mouse_wheel_or_touch_moved = true;
            jQuery("html, body").stop();
        }
    }, false);
}

/**
 * called by td_events.js on scroll - back to top
 */
var td_scroll_to_top_is_visible = false;
function td_events_scroll_scroll_to_top(scrollTop) {
    if(td_is_scrolling_animation) {  //do not fire the event on animations
        return;
    }
    if (scrollTop > 400) {
        if (td_scroll_to_top_is_visible === false) { //only add class if needed
            td_scroll_to_top_is_visible = true;
            jQuery('.td-scroll-up').addClass('td-scroll-up-visible');
        }
    } else {
        if (td_scroll_to_top_is_visible === true) { //only add class if needed
            td_scroll_to_top_is_visible = false;
            jQuery('.td-scroll-up').removeClass('td-scroll-up-visible');
        }
    }
}


jQuery('.td-scroll-up').click(function(){
    if(td_is_scrolling_animation) { //double check - because when we remove the class, the button is still visible for a while
        return;
    }

    //hide the button
    td_scroll_to_top_is_visible = false;
    jQuery('.td-scroll-up').removeClass('td-scroll-up-visible');

    //hide more articles box
    td_more_articles_box.is_box_visible = false;
    jQuery('.td-more-articles-box').removeClass('td-front-end-display-block');

    //scroll to top
    td_util.scroll_to_position(0, 1200);

    return false;
});


/**
 * More stories box
 */
var td_more_articles_box = {
    is_box_visible:false,
    cookie:'',
    distance_from_top:400,

    init: function init() {


        //read the cookie
        td_more_articles_box.cookie = td_read_site_cookie('td-cookie-more-articles');


        //setting distance from the top
        if(!isNaN(parseInt(tds_more_articles_on_post_pages_distance_from_top)) && isFinite(tds_more_articles_on_post_pages_distance_from_top) && parseInt(tds_more_articles_on_post_pages_distance_from_top) > 0){
            td_more_articles_box.distance_from_top = parseInt(tds_more_articles_on_post_pages_distance_from_top);
        } else {
            td_more_articles_box.distance_from_top = 400;
        }

        //adding event to hide the box
        jQuery('.td-close-more-articles-box').click(function(){

            //hiding the box
            jQuery('.td-more-articles-box').removeClass('td-front-end-display-block');
            jQuery('.td-more-articles-box').hide();

            //cookie life
            if(!isNaN(parseInt(tds_more_articles_on_post_time_to_wait)) && isFinite(tds_more_articles_on_post_time_to_wait)){
                //setting cookie
                td_create_cookie('td-cookie-more-articles', 'hide-more-articles-box', parseInt(tds_more_articles_on_post_time_to_wait));
            }
        });
    },

    /**
     * called by td_events.js on scroll
     */
    td_events_scroll: function td_events_scroll(scrollTop) {

        if(td_is_scrolling_animation) { //do not fire the event on animations
            return;
        }

        //check to see if it's enable form panel and also from cookie
        if(td_util.get_backend_var('tds_more_articles_on_post_enable') == "show" && td_more_articles_box.cookie != 'hide-more-articles-box') {

            if (scrollTop > td_more_articles_box.distance_from_top ) {
                if (td_more_articles_box.is_box_visible === false) {
                    jQuery('.td-more-articles-box').addClass('td-front-end-display-block');
                    td_more_articles_box.is_box_visible = true;
                }
            } else {
                if (td_more_articles_box.is_box_visible === true) {
                    jQuery('.td-more-articles-box').removeClass('td-front-end-display-block');
                    td_more_articles_box.is_box_visible = false;
                }
            }
        }
    }
};



//click on a div -> go to a url
function td_fake_clicks() {
    jQuery('.td-fake-click').click(function(){
        window.location = jQuery(this).data("fake-click");
    });
}




var td_resize_timer_id;
jQuery(window).resize(function() {
    clearTimeout(td_resize_timer_id);
    td_resize_timer_id = setTimeout(td_done_resizing, 500);

});

function td_done_resizing(){
    td_resize_videos();
}



/*  ----------------------------------------------------------------------------
    Resize the videos
 */
function td_resize_videos() {
    //youtube in content
    jQuery(document).find('iframe[src*="youtube.com"]').each(function() {

        if(jQuery(this).parent().hasClass("td_wrapper_playlist_player_youtube")) {
            //do nothing for playlist player youtube
        } else {
            var td_video = jQuery(this);
            td_video.attr('width', '100%');
            var td_video_width = td_video.width();
            td_video.css('height', td_video_width * 0.6, 'important');
        }
    });


    //vimeo in content
    jQuery(document).find('iframe[src*="vimeo.com"]').each(function() {

        if(jQuery(this).parent().hasClass("td_wrapper_playlist_player_vimeo")) {
            //do nothing for playlist player vimeo
        } else {
            var td_video = jQuery(this);
            td_video.attr('width', '100%');
            var td_video_width = td_video.width();
            td_video.css('height', td_video_width * 0.6, 'important');
        }
    })


    //daily motion in content
    jQuery(document).find('iframe[src*="dailymotion.com"]').each(function() {
        var td_video = jQuery(this);
        td_video.attr('width', '100%');
        var td_video_width = td_video.width();
        td_video.css('height', td_video_width * 0.6, 'important');
    })


    jQuery(document).find(".wp-video-shortcode").each(function() {
        var td_video = jQuery(this);

        var td_video_width = td_video.width() + 3;
        jQuery(this).parent().css('height', td_video_width * 0.56, 'important');
        //td_video.css('height', td_video_width * 0.6, 'important')
        td_video.css('width', '100%', 'important');
        td_video.css('height', '100%', 'important');
    })
}




/*  ----------------------------------------------------------------------------
    Ajax search
 */
var td_aj_search_cur_sel = 0;
var td_aj_search_results = 0;
var td_aj_first_down_up = true;
function td_ajax_search() {




    jQuery('#td-header-search').keydown(function(event) {

        //console.log(event.keyCode);


        if ((event.which && event.which == 39) || (event.keyCode && event.keyCode == 39) || (event.which && event.which == 37) || (event.keyCode && event.keyCode == 37)) {
            //do nothing on left and right arrows
            td_aj_search_input_focus();
            return;
        }

        if ((event.which && event.which == 13) || (event.keyCode && event.keyCode == 13)) {

            //redirectSearch('q');
            var td_aj_cur_element = jQuery('.td-aj-cur-element');
            if (td_aj_cur_element.length > 0) {
                //alert('ra');
                var td_go_to_url = td_aj_cur_element.find('.entry-title a').attr('href');
                window.location = td_go_to_url;
            } else {
                jQuery(this).parent().parent().submit();
            }

            return false; //redirect for search on enter
        } else {

            if ((event.which && event.which == 40) || (event.keyCode && event.keyCode == 40)) {
                // down
                td_aj_search_move_prompt_down();
                return false; //disable the envent

            } else if((event.which && event.which == 38) || (event.keyCode && event.keyCode == 38)) {
                //up
                td_aj_search_move_prompt_up();
                return false; //disable the envent
            } else {

                //for backspace we have to check if the search query is empty and if so, clear the list
                if ((event.which && event.which == 8) || (event.keyCode && event.keyCode == 8)) {
                    //if we have just one character left, that means it will be deleted now and we also have to clear the search results list
                    var search_query = jQuery(this).val();
                    if (search_query.length == 1) {
                        jQuery('#td-aj-search').empty();
                    }

                }

                //various keys
                td_aj_search_input_focus();
                setTimeout("td_ajax_search_do_request()",100);
            }
            return true;
        }

    });



}

//moves the select up
function td_aj_search_move_prompt_up() {


    if (td_aj_first_down_up === true) {
        td_aj_first_down_up = false;
        if (td_aj_search_cur_sel === 0) {
            td_aj_search_cur_sel = td_aj_search_results - 1;
        } else {
            td_aj_search_cur_sel--;
        }
    } else {
        if (td_aj_search_cur_sel === 0) {
            td_aj_search_cur_sel = td_aj_search_results;
        } else {
            td_aj_search_cur_sel--;
        }
    }


    jQuery('.td_mod_aj_search').removeClass('td-aj-cur-element');



    if (td_aj_search_cur_sel  > td_aj_search_results -1) {
        //the input is selected
        jQuery('.td-search-form').fadeTo(100, 1);
    } else {
        td_aj_search_input_remove_focus();
        jQuery('.td_mod_aj_search').eq(td_aj_search_cur_sel).addClass('td-aj-cur-element');
    }



}

//moves the select prompt down
function td_aj_search_move_prompt_down() {

    if (td_aj_first_down_up === true) {
        td_aj_first_down_up = false;
    } else {
        if (td_aj_search_cur_sel === td_aj_search_results) {
            td_aj_search_cur_sel = 0;
        } else {
            td_aj_search_cur_sel++;
        }
    }


    jQuery('.td_mod_aj_search').removeClass('td-aj-cur-element');

    if (td_aj_search_cur_sel > td_aj_search_results - 1 ) {
        //the input is selected
        jQuery('.td-search-form').fadeTo(100, 1);
    } else {
        td_aj_search_input_remove_focus();
        jQuery('.td_mod_aj_search').eq(td_aj_search_cur_sel).addClass('td-aj-cur-element');
    }


}


// puts the focus on the input box
function td_aj_search_input_focus() {
    td_aj_search_cur_sel = 0;
    td_aj_first_down_up = true;
    jQuery('.td-search-form').fadeTo(100, 1);
    jQuery('.td_mod_aj_search').removeClass('td-aj-cur-element');
}

//removes the focus from the input box
function td_aj_search_input_remove_focus() {
    if (td_aj_search_results !== 0) {
        jQuery('.td-search-form').css('opacity', 0.5);
    }
}

//makes an ajax request
function td_ajax_search_do_request() {

    if (jQuery('#td-header-search').val() == '') {
        td_aj_search_input_focus();
        return;
    }


    var search_query = jQuery('#td-header-search').val();


    //do we have a cache hit
    if (td_local_cache.exist(search_query)) {
        td_ajax_search_process_request(td_local_cache.get(search_query));
        return; //cache HIT
    }


    //fk no cache hit - do the real request



    jQuery.ajax({
        type: 'POST',
        url: td_ajax_url,
        data: {
            action: 'td_ajax_search',
            td_string: search_query
        },
        success: function(data, textStatus, XMLHttpRequest){
            td_local_cache.set(search_query, data);
            td_ajax_search_process_request(data);
        },
        error: function(MLHttpRequest, textStatus, errorThrown){
            //console.log(errorThrown);
        }
    });
}

function td_ajax_search_process_request(data) {
    var current_query = jQuery('#td-header-search').val();

    //the search is empty - drop results
    if (current_query == '') {
        jQuery('#td-aj-search').empty();
        return;
    }

    var td_data_object = jQuery.parseJSON(data); //get the data object
    //drop the result - it's from a old query
    if (td_data_object.td_search_query !== current_query) {
        return;
    }

    //reset the current selection and total posts
    td_aj_search_cur_sel = 0;
    td_aj_search_results = td_data_object.td_total_in_list;
    td_aj_first_down_up = true;


    //update the query
    jQuery('#td-aj-search').html(td_data_object.td_data);

    /*
     td_data_object.td_data
     td_data_object.td_total_results
     td_data_object.td_total_in_list
     */
}




/*  ----------------------------------------------------------------------------
    Slider callbacks
 */
function slideStartedMoving(args) {
    td_is_slide_moving = true; //used on touch screens + mobile menu 2
}

function slideContentComplete(args) {
    td_is_slide_moving = false;
    if(!args.slideChanged) return false;
    jQuery(args.currentSlideObject).parent().find('.slide-info-wrap').removeClass('slide-wrap-active');
    jQuery(args.currentSlideObject).children('.slide-info-wrap').addClass('slide-wrap-active');
}

function slideContentLoaded(args) {
    if(!args.slideChanged) return false;
   // console.log('loaded');
    jQuery(args.currentSlideObject).parent().find('.slide-info-wrap').removeClass('slide-wrap-active');
    jQuery(args.currentSlideObject).children('.slide-info-wrap').addClass('slide-wrap-active');
}




/*  ----------------------------------------------------------------------------
    Add retina support
 */

function td_retina() {
    if (window.devicePixelRatio > 1) {
        jQuery('.td-retina').each(function(i) {
            var lowres = jQuery(this).attr('src');
            var highres = lowres.replace(".png", "@2x.png");
            highres = highres.replace(".jpg", "@2x.jpg");
            jQuery(this).attr('src', highres);

        });


        //custom logo support
        jQuery('.td-retina-data').each(function(i) {
            jQuery(this).attr('src', jQuery(this).data('retina'));
            //fix logo aligment on retina devices
            jQuery(this).addClass('td-retina-version');
        });

    }
}

/*
jQuery('body').click(function(e){
    if(! jQuery(e.target).hasClass('custom-background')){
        alert('clicked on something that has not the class theDIV');
    }

});*/

//click only on BACKGROUND, for devices that don't have touch (ex: phone, tablets)
if(!td_detect.is_touch_device && td_ad_background_click_link != '') {

    //var ev = ev || window.event;
    //var target = ev.target || ev.srcElement;
    jQuery('body').click(function(event) {

        //getting the target element that the user clicks - for W3C and MSIE
        var target = (event.target) ? event.target : event.srcElement;

        //only if the background has background image
        if(jQuery('body').hasClass('td-boxed-layout')) {
            if(target.id == 'inner-wrap' || target.className == 'td-header-menu-wrap' || target.className == 'td-header-bg' || target.className == 'td-menu-background affix-top') {

                //open the link ad page
                if(td_ad_background_click_target == '_blank') {
                    //open in a new window
                    window.open(td_ad_background_click_link)
                } else {
                    //open in the same window
                    location.href = td_ad_background_click_link;
                }
            }
        }

        //e.stopPropagation();
        //stopBubble(event);
    });
}


function stopBubble(e){
    if(e && e.stopPropagation) {
        e.stopPropagation();
    } else {
        window.event.cancelBubble=true;
    }
}



/**
 * reading cookies
 * @param name
 * @returns {*}
 */
function td_read_site_cookie(name) {
    var nameEQ = escape(name) + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return unescape(c.substring(nameEQ.length, c.length));
    }
    return null;
}


/**
 *
 * @param td_time_cookie_array
 *
 * @param[0]: name of the cookie
 * @param[1]: value of the cookie
 * @param[2]: expiration time
 */
function td_set_cookies_life(td_time_cookie_array) {
    var expiry = new Date();
    expiry.setTime(expiry.getTime() + td_time_cookie_array[2]);

    // Date()'s toGMTSting() method will format the date correctly for a cookie
    document.cookie = td_time_cookie_array[0] + "=" + td_time_cookie_array[1] + "; expires=" + expiry.toGMTString() + "; path=/";
}



//get page width
function td_get_page_width() {
    var x = 0;

    if (self.innerHeight)     {
        x = self.innerWidth;

    } else if (document.documentElement && document.documentElement.clientHeight) {
        x = document.documentElement.clientWidth;

    } else if (document.body) {
        x = document.body.clientWidth;
    }

    return x;
}



//function to resize the height of the slide
function td_resize_slide(args) {
    if(td_get_page_width() < 768) {
        var slide_displayd = args.currentSlideNumber;


        //console.log(args.sliderObject[0]);
        //console.log(args.data.obj[0]);

        var current_slider = jQuery(args.data.obj[0]).attr("id");

        if(td_detect.is_ie8 === false) {
            jQuery("#" + current_slider).css("overflow", "none");
            jQuery("#" + current_slider + " .item").css("overflow", "visible");
        }



        var setHeight = 0;
        setHeight = jQuery("#" + current_slider + "_item_" + slide_displayd).outerHeight(true);


        jQuery("#" + current_slider + ", #" + current_slider + " .slider").css({
            height: setHeight
        });
    }
}


//function to resize the height of the slide with jQuery.each() function
function td_resize_page_sliders() {
    jQuery(document).find('.iosSlider.td_block_big_grid').each(function() {
        var current_slider = jQuery(this).attr("id");

        if(!td_detect.is_ie8) {
            jQuery("#" + current_slider).css("overflow", "none");
            jQuery("#" + current_slider + " .item").css("overflow", "visible");
        }

        var setHeight = 0;
        setHeight = jQuery("#" + current_slider + "_item_1").outerHeight(true);

        jQuery("#" + current_slider + ", #" + current_slider + " .slider").css({
            height: setHeight
        });
    });
}



//handles mobile menu
function td_mobile_menu() {
    jQuery('.td-mobile-close a, #td-top-mobile-toggle a').click(function(){
        if(jQuery('body').hasClass('td-menu-mob-open-menu')) {
            jQuery('body').removeClass('td-menu-mob-open-menu');
        } else {
            jQuery('body').addClass('td-menu-mob-open-menu');
        }
    });
}

var td_loading_box = {

    //array_colors: ['#ffffff', '#fafafa', '#ececec', '#dddddd', '#bfbfbf', '#9a9a9a', '#7e7e7e', '#636363'],//whiter -> darker

    array_colors_temp: ['rgba(99, 99, 99, 0)', 'rgba(99, 99, 99, 0.05)', 'rgba(99, 99, 99, 0.08)', 'rgba(99, 99, 99, 0.2)', 'rgba(99, 99, 99, 0.3)', 'rgba(99, 99, 99, 0.5)', 'rgba(99, 99, 99, 0.6)', 'rgba(99, 99, 99, 1)'],//whiter -> darker

    array_colors: [],

    status_animation: 'stop',

    //stop loading box
    stop : function stop () {
        td_loading_box.status_animation = 'stop';
        //jQuery('.td-loader-gif').html("");
    },


    //init loading box
    init : function init (color) {

        var td_color_reg_exp = /^#[a-zA-Z0-9]{3,6}$/;
        if(color && td_color_reg_exp.test(color)) {

            var col_rgba = td_loading_box.hexToRgb(color);

            var rgba_string = "rgba(" + col_rgba.r + ", " + col_rgba.g + ", " + col_rgba.b + ", ";

            td_loading_box.array_colors[7] = rgba_string + " 1)";
            td_loading_box.array_colors[6] = rgba_string + " 0.6)";
            td_loading_box.array_colors[5] = rgba_string + " 0.5)";
            td_loading_box.array_colors[4] = rgba_string + " 0.3)";
            td_loading_box.array_colors[3] = rgba_string + " 0.2)";
            td_loading_box.array_colors[2] = rgba_string + " 0.08)";
            td_loading_box.array_colors[1] = rgba_string + " 0.05)";
            td_loading_box.array_colors[0] = rgba_string + " 0)";

        } else {
            //default array
            td_loading_box.array_colors = td_loading_box.array_colors_temp.slice(0);

        }

        if(td_loading_box.status_animation == 'stop') {
            td_loading_box.status_animation = 'display';
            this.render();
        }
    },


    //create the animation
    render: function render (color) {

        //call the animation_display function
        td_loading_box.animation_display('<div class="td-lb-box td-lb-box-1" style="background-color:' + td_loading_box.array_colors[0] + '"></div><div class="td-lb-box td-lb-box-2" style="background-color:' + td_loading_box.array_colors[1] + '"></div><div class="td-lb-box td-lb-box-3" style="background-color:' + td_loading_box.array_colors[2] + '"></div><div class="td-lb-box td-lb-box-4" style="background-color:' + td_loading_box.array_colors[3] + '"></div><div class="td-lb-box td-lb-box-5" style="background-color:' + td_loading_box.array_colors[4] + '"></div><div class="td-lb-box td-lb-box-6" style="background-color:' + td_loading_box.array_colors[5] + '"></div><div class="td-lb-box td-lb-box-7" style="background-color:' + td_loading_box.array_colors[6] + '"></div><div class="td-lb-box td-lb-box-8" style="background-color:' + td_loading_box.array_colors[7] + '"></div>');

        //direction right
        var temp_color_array = [td_loading_box.array_colors[0], td_loading_box.array_colors[1], td_loading_box.array_colors[2], td_loading_box.array_colors[3], td_loading_box.array_colors[4], td_loading_box.array_colors[5], td_loading_box.array_colors[6], td_loading_box.array_colors[7]];

        td_loading_box.array_colors[0] = temp_color_array[7];
        td_loading_box.array_colors[1] = temp_color_array[0];
        td_loading_box.array_colors[2] = temp_color_array[1];
        td_loading_box.array_colors[3] = temp_color_array[2];
        td_loading_box.array_colors[4] = temp_color_array[3];
        td_loading_box.array_colors[5] = temp_color_array[4];
        td_loading_box.array_colors[6] = temp_color_array[5];
        td_loading_box.array_colors[7] = temp_color_array[6];

        if(td_loading_box.status_animation == 'display') {


            setTimeout(td_loading_box.render, 40);
        } else {
            td_loading_box.animation_display('');
        }
    },


    //display the animation
    animation_display: function animation_display (animation_str) {
        jQuery('.td-loader-gif').html(animation_str);
    },


    //converts hex to rgba
    hexToRgb: function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
}//td_loading_box.init();//td_loading_box.stop();

"use strict";

/* ----------------------------------------------------------------------------
 blocks.js
 --------------------------------------------------------------------------- */



/*  ----------------------------------------------------------------------------
 On load
 */
jQuery().ready(function() {
    td_on_ready_ajax_blocks();
});





function td_on_ready_ajax_blocks() {


    /*  ----------------------------------------------------------------------------
     AJAX pagination next
     */
    jQuery(".td-ajax-next-page").click(function(event){
        event.preventDefault();

        var current_block_obj = td_getBlockObjById(jQuery(this).data('td_block_id'));

        if(jQuery(this).hasClass('ajax-page-disabled') || current_block_obj.is_ajax_running === true) {
            return;
        }

        current_block_obj.is_ajax_running = true; // ajax is running and we're wayting for a reply from server

        current_block_obj.td_current_page++;
        td_ajax_do_block_request(current_block_obj, 'next');
    });


    /*  ----------------------------------------------------------------------------
     AJAX pagination prev
     */
    jQuery(".td_ajax-prev-page").click(function(event){
        event.preventDefault();

        var current_block_obj = td_getBlockObjById(jQuery(this).data('td_block_id'));

        if(jQuery(this).hasClass('ajax-page-disabled') || current_block_obj.is_ajax_running === true) {
            return;
        }

        current_block_obj.is_ajax_running = true; // ajax is running and we're wayting for a reply from server

        current_block_obj.td_current_page--;
        td_ajax_do_block_request(current_block_obj, 'back');
    });


    /*  ----------------------------------------------------------------------------
     AJAX pagination load more
     */
    jQuery(".td_ajax_load_more").click(function(event){
        event.preventDefault();
        if(jQuery(this).hasClass('ajax-page-disabled')) {
            return;
        }

        var current_block_obj = td_getBlockObjById(jQuery(this).data('td_block_id'));

        current_block_obj.td_current_page++;
        td_ajax_do_block_request(current_block_obj, 'load_more');
    });


    /*  ----------------------------------------------------------------------------
     AJAX pagination infinite load
     */
    /*
    jQuery('.td_ajax_infinite').waypoint(function(direction) {
        if (direction === 'down') {
            //console.log('loading');
            var current_block_obj = td_getBlockObjById(jQuery(this).data('td_block_id'));

            current_block_obj.td_current_page++;
            td_ajax_do_block_request(current_block_obj, 'infinite_load');
        }

    }, { offset: '110%' });

    */



    /*  ----------------------------------------------------------------------------
     AJAX sub cat filter
     */
    jQuery(".ajax-sub-cat").click(function(event){ //click on an ajax category filter
        event.preventDefault();


        //get the current block id
        var current_block_id = jQuery(this).data('td_block_id');


        //destroy any iossliders to avoid bugs
        jQuery('#' + current_block_id).find('.iosSlider').iosSlider('destroy');

        //get current block
        var current_block_obj = td_getBlockObjById(current_block_id);

        //change cur cat
        current_block_obj.td_cur_cat = jQuery(this).data('cat_id');

        current_block_obj.td_current_page = 1;


        //console.log(current_block_obj);

        //do request
        td_ajax_do_block_request(current_block_obj, 'pull_down');
    });




    /*  ----------------------------------------------------------------------------
     AJAX MEGA MENU
     */



    var td_mega_menu_last_link = '';

    //it used to hook the mega menu categories
    function td_ajax_sub_cat_mega_run(event) {

        if (td_mega_menu_last_link != jQuery(this).attr('href')) {
            event.preventDefault();
            td_mega_menu_last_link = jQuery(this).attr('href');
        } else {
            td_mega_menu_last_link = '';
        }


        //get the current block id
        var current_block_id = jQuery(this).data('td_block_id');

        //get current block
        var current_block_obj = td_getBlockObjById(current_block_id);


        //change cur cat
        current_block_obj.td_cur_cat = jQuery(this).data('cat_id');

        current_block_obj.td_current_page = 1;

        //do request - no append, no animation
        td_ajax_do_block_request(current_block_obj, 'pull_down');
    }

    //on touch devices use click
    if (td_detect.is_touch_device) {
        jQuery(".ajax-sub-cat-mega").click(td_ajax_sub_cat_mega_run);
    } else {
        jQuery(".ajax-sub-cat-mega").hover(td_ajax_sub_cat_mega_run, function (event) {} );
    }


} // end td_on_ready_ajax_blocks()



/**
 * makes a ajax block request
 * @param current_block_obj
 * @param td_user_action - append the return content?
 * @returns {string}
 */
function td_ajax_do_block_request(current_block_obj, td_user_action) {

    //console.log(current_block_obj);

    //search the cache
    var current_block_obj_signature = JSON.stringify(current_block_obj);
    if (td_local_cache.exist(current_block_obj_signature)) {
        //do the animation with cache hit = true
        td_block_ajax_loading_start(current_block_obj, true, td_user_action);
        td_ajax_block_process_response(td_local_cache.get(current_block_obj_signature), td_user_action);
        return 'cache_hit'; //cache HIT
    }


    //cache miss - we make a full request! - cache hit - false
    td_block_ajax_loading_start(current_block_obj, false, td_user_action);


    var request_data = {
        action: 'td_ajax_block',
        td_atts: current_block_obj.atts,
        td_cur_cat:current_block_obj.td_cur_cat,
        td_block_id:current_block_obj.id,
        td_column_number:current_block_obj.td_column_number,
        td_current_page:current_block_obj.td_current_page,
        block_type:current_block_obj.block_type,
        td_user_action:current_block_obj.td_user_action
    };

    //console.log(request_data);

    jQuery.ajax({
        type: 'POST',
        url: td_ajax_url,
        cache:true,
        data: request_data,
        success: function(data, textStatus, XMLHttpRequest){
            td_local_cache.set(current_block_obj_signature, data);
            td_ajax_block_process_response(data, td_user_action);
        },
        error: function(MLHttpRequest, textStatus, errorThrown){
            //console.log(errorThrown);
        }
    });
}


/**
 * process the response from the ajax query (it also processes the responses stored in the cache)
 * @param data
 * @param td_user_action
 */
function td_ajax_block_process_response(data, td_user_action) {

    //read the server response
    var td_reply_obj = jQuery.parseJSON(data); //get the data object


    //console.log(td_reply_obj);
    /*
     td_data_object.td_block_id
     td_data_object.td_data
     td_data_object.td_cur_cat
     */

    jQuery('.sub-cat-' + td_reply_obj.td_block_id).removeClass('cur-sub-cat');
    jQuery('#sub-cat-' + td_reply_obj.td_block_id + '-' + td_reply_obj.td_cur_cat).addClass('cur-sub-cat');


    //load the content (in place or append)
    if (td_user_action == 'load_more' || td_user_action == 'infinite_load') {
        jQuery(td_reply_obj.td_data).addClass('animated_xxlong').appendTo('#' + td_reply_obj.td_block_id).addClass('fadeIn');
        //jQuery(td_reply_obj.td_data).hide().appendTo('#' + td_reply_obj.td_block_id).fadeIn(1500); //we need long times :|
    } else {
        jQuery('#' + td_reply_obj.td_block_id).html(td_reply_obj.td_data); //in place
    }


    //hide or show prev
    if (td_reply_obj.td_hide_prev === true) {
        jQuery('#prev-page-' + td_reply_obj.td_block_id).addClass('ajax-page-disabled');
    } else {
        jQuery('#prev-page-' + td_reply_obj.td_block_id).removeClass('ajax-page-disabled');
    }

    //hide or show next
    if (td_reply_obj.td_hide_next === true) {
        jQuery('#next-page-' + td_reply_obj.td_block_id).addClass('ajax-page-disabled');
    } else {
        jQuery('#next-page-' + td_reply_obj.td_block_id).removeClass('ajax-page-disabled');
    }


    var  current_block_obj = td_getBlockObjById(td_reply_obj.td_block_id);
    if (current_block_obj.block_type === 'slide') {
        //make the first slide active (to have caption)
        jQuery('#' + td_reply_obj.td_block_id + ' .slide-wrap-active-first').addClass('slide-wrap-active');
    }

    current_block_obj.is_ajax_running = false; // finish the loading for this block


    //loading effects
    td_block_ajax_loading_end(td_reply_obj, current_block_obj, td_user_action);
}


/**
 * loading start
 * @param current_block_obj
 * @param cache_hit
 * @param td_user_action - the request type / infinite_load ?
 */
function td_block_ajax_loading_start(current_block_obj, cache_hit, td_user_action) {

    //get the element
    var el_cur_td_block_inner = jQuery('#' + current_block_obj.id);

    //remove the loader
    jQuery('.td-loader-gif').remove(); //remove any remaining loaders

    //remove animation classes
    el_cur_td_block_inner.removeClass('fadeInRight fadeInLeft fadeInDown fadeInUp animated fadeIn');

    //add overflow + fixed height
    el_cur_td_block_inner.addClass('td_block_inner_overflow');
    var td_tmp_block_height = el_cur_td_block_inner.height();
    el_cur_td_block_inner.css('height', td_tmp_block_height);


    //show the loader only if it's needed
    if (cache_hit === true) {
        el_cur_td_block_inner.stop();
    } else {

        if (td_user_action == 'load_more') {
            // on load more
            el_cur_td_block_inner.parent().append('<div class="td-loader-gif td-loader-gif-bottom td-loader-animation-start"></div>');
            td_loading_box.init(current_block_obj.header_color ? current_block_obj.header_color : tds_theme_color_site_wide);  //init the loading box
            setTimeout(function(){
                jQuery('.td-loader-gif').removeClass('td-loader-animation-start');
                jQuery('.td-loader-gif').addClass('td-loader-animation-mid');
            },50);


        } else if (td_user_action != 'infinite_load') {
            // anything else except infinite load

            el_cur_td_block_inner.parent().append('<div class="td-loader-gif td-loader-animation-start"></div>');
            td_loading_box.init(current_block_obj.header_color ? current_block_obj.header_color : tds_theme_color_site_wide);  //init the loading box
            setTimeout(function(){
                jQuery('.td-loader-gif').removeClass('td-loader-animation-start');
                jQuery('.td-loader-gif').addClass('td-loader-animation-mid');
            },50);


            el_cur_td_block_inner.stop();
            el_cur_td_block_inner.fadeTo('500',0.1, 'easeInOutCubic');
        }


    }



    //auto height => fixed height
    var td_tmp_block_height = el_cur_td_block_inner.height();
    el_cur_td_block_inner.css('height', td_tmp_block_height);



}


/**
 * we have a reply from the ajax request
 * @param td_reply_obj - the reply object that we got from the server, it's useful with infinite load
 * @param current_block_obj
 * @param td_user_action - infinite_load next back etc... what the user did to trigger the ajax call
 */
function td_block_ajax_loading_end(td_reply_obj, current_block_obj, td_user_action) {

    var milliseconds_to_stop = 800;

    // remove the loader
    if (!td_detect.is_ios) {
        jQuery('.td-loader-gif').removeClass('td-loader-animation-mid');
        jQuery('.td-loader-gif').addClass('td-loader-animation-end');

        milliseconds_to_stop = 400;
    }

    setTimeout(function(){
        jQuery('.td-loader-gif').remove();
        td_loading_box.stop();//stop the loading box
    }, milliseconds_to_stop);




    //get the current inner
    var el_cur_td_block_inner = jQuery('#' + current_block_obj.id);


    el_cur_td_block_inner.stop();



    switch(td_user_action) {
        case 'next':
            el_cur_td_block_inner.addClass('animated fadeInRight');
            break;
        case 'back':
            el_cur_td_block_inner.addClass('animated fadeInLeft');
            break;

        case 'pull_down':
            el_cur_td_block_inner.addClass('animated fadeInDown');
            break;

        case 'mega_menu':
            el_cur_td_block_inner.addClass('animated fadeInUp');
            break;


        case 'load_more':
            //el_cur_td_block_inner.addClass('animated fadeIn');
            break;


        case 'infinite_load':
            setTimeout(function(){
                //refresh waypoints for infinit scroll td_infinite_loader
                td_infinite_loader.compute_top_distances();
                if (td_reply_obj.td_data != '') {
                    td_infinite_loader.enable_is_visible_callback(current_block_obj.id);
                }
            }, 500);


            setTimeout(function(){
                td_infinite_loader.compute_top_distances();
                // load next page only if we have new data comming from the last ajax request
            }, 1000);

            setTimeout(function(){
                td_infinite_loader.compute_top_distances();
            }, 1500);
            break;
    }

    if (td_detect.is_ie9 || td_detect.is_ie8) {
        el_cur_td_block_inner.css('opacity', 1);
    }

    setTimeout(function(){
        jQuery('.td_block_inner_overflow').removeClass('td_block_inner_overflow');
        el_cur_td_block_inner.css('height', 'auto');
    },300);






    //td_infinite_loader.
}


/**
 * search by block _id
 * @param myID - block id
 * @returns {number} the index
 */
function td_getBlockIndex(myID) {
    var cnt = 0;
    var tmpReturn = 0;
    jQuery.each(td_blocks, function(index, td_block) {
        if (td_block.id === myID) {
            tmpReturn = cnt;
            return false; //brake jquery each
        } else {
            cnt++;
        }
    });
    return tmpReturn;
}

/**
 * gets the block object using a block ID
 * @param myID
 * @returns {*} block object
 */
function td_getBlockObjById(myID) {
    return td_blocks[td_getBlockIndex(myID)];
}



/**
 * td_events.js - handles the events that requiere throttling
 * Created by ra on 6/27/14.
 * v1.1
 */

var td_events = {

    //the events - we have timers that look at the variables and fire the event if the flag is true
    scroll_event_slow_run: false,
    scroll_event_medium_run: false,
    resize_event_run: false, //when true, fire up the resize event



    scroll_window_scrollTop: 0, //used to store the scrollTop

    init: function init() {

        jQuery(window).scroll(function() {
            td_events.scroll_event_slow_run = true;
            td_events.scroll_event_medium_run = true;

            //read the scroll top
            td_events.scroll_window_scrollTop = jQuery(window).scrollTop();

            /*  ----------------------------------------------------------------------------
                Run affix menu event
             */
            td_affix.td_events_scroll(td_events.scroll_window_scrollTop); //main menu
        });


        jQuery(window).resize(function() {
            td_events.resize_event_run = true;
        });



        //medium resolution timer for rest?
        setInterval(function() {
            //scroll event
            if (td_events.scroll_event_medium_run) {
                td_events.scroll_event_medium_run = false;
                //compute events for the infinite scroll
                td_infinite_loader.compute_events();
            }
        }, 100);



        //low resolution timer for rest?
        setInterval(function() {
            //scroll event
            if (td_events.scroll_event_slow_run) {
                td_events.scroll_event_slow_run = false;

                //back to top
                td_events_scroll_scroll_to_top(td_events.scroll_window_scrollTop);

                //more articles box
                td_more_articles_box.td_events_scroll(td_events.scroll_window_scrollTop);


            }

            //resize event
            if (td_events.resize_event_run) {
                td_events.resize_event_run = false;
                td_affix.compute_top();
                td_detect.run_is_phone_screen();
            }
        }, 500);

    }



}

td_events.init();

"use strict";

/* ----------------------------------------------------------------------------
 td_post_images.js
 --------------------------------------------------------------------------- */



/*  ----------------------------------------------------------------------------
 On load
 */
jQuery().ready(function() {
    //handles the modal images
    td_modal_image();

    //move classes from post images to figure - td-post-image-full etc
    //td_util.image_move_class_to_figure('td-post-image-full');
    //td_util.image_move_class_to_figure('td-post-image-right');
    //td_util.image_move_class_to_figure('td-post-image-left');




});









var td_modal_image_last_el = '';

// handles modal images for: Featured images, inline image, inline image with caption, galleries
function td_modal_image() {

    //fix wordpress figure + figcaption (we move the figcaption in the data-caption attribute of the link)
    jQuery('figure.wp-caption').each(function() {
        var caption_text = jQuery(this).children('figcaption').html();
        jQuery(this).children('a').data('caption', caption_text);
    });

    //move td-modal-image class to the parent a from the image. We can only add this class to the image via word press media editor
    jQuery('.td-modal-image').each(function() {
        jQuery(this).parent().addClass('td-modal-image');
        jQuery(this).removeClass('td-modal-image');
    });



    //popup on modal images in articles
    jQuery('article').magnificPopup({
        type:'image',
        delegate: ".td-modal-image",
        gallery:{
            enabled:true
        },
        image: {
            tError: "<a href=\'%url%\'>The image #%curr%</a> could not be loaded.",
            titleSrc: function(item) {//console.log(item.el);
                //alert(jQuery(item.el).data("caption"));
                var td_current_caption = jQuery(item.el).data('caption');
                if (typeof td_current_caption != "undefined") {
                    return td_current_caption;
                } else {
                    return '';
                }


            }
        },
        zoom: {
            enabled: true,
            duration: 300,
            opener: function(element) {
                return element.find("img");
            }
        },
        callbacks: {
            change: function(item) {
                td_modal_image_last_el = item.el;
                //setTimeout(function(){
                    td_util.scroll_into_view(item.el);
                //}, 100);

            },
            beforeClose: function() {
                td_util.scroll_into_view(td_modal_image_last_el);
            }

        }



    });





    //gallery popup
    //detect jetpack carousel and disable the theme popup
    if (typeof jetpackCarouselStrings === 'undefined') {

        // copy gallery caption from figcaption to data-caption attribute of the link to the full image, in this way the modal can read the caption
        jQuery('figure.gallery-item').each(function() {
            var caption_text = jQuery(this).children('figcaption').html();
            jQuery(this).find('a').data('caption', caption_text);
        });



        //jquery tiled gallery
        jQuery('.tiled-gallery').magnificPopup({
            type:'image',
            delegate: "a",
            gallery:{
                enabled:true
            },
            image: {
                tError: "<a href=\'%url%\'>The image #%curr%</a> could not be loaded.",
                titleSrc: function(item) {//console.log(item.el);
                    var td_current_caption = jQuery(item.el).parent().find('.tiled-gallery-caption').text();
                    if (typeof td_current_caption != "undefined") {
                        return td_current_caption;
                    } else {
                        return '';
                    }
                }
            },
            zoom: {
                enabled: true,
                duration: 300,
                opener: function(element) {
                    return element.find("img");
                }
            },
            callbacks: {
                change: function(item) {
                    td_modal_image_last_el = item.el;
                    td_util.scroll_into_view(item.el);
                },
                beforeClose: function() {
                    td_util.scroll_into_view(td_modal_image_last_el);
                }

            }
        });



        jQuery('.gallery').magnificPopup({
            type:'image',
            delegate: ".gallery-icon > a",
            gallery:{
                enabled:true
            },
            image: {
                tError: "<a href=\'%url%\'>The image #%curr%</a> could not be loaded.",
                titleSrc: function(item) {//console.log(item.el);
                    var td_current_caption = jQuery(item.el).data('caption');
                    if (typeof td_current_caption != "undefined") {
                        return td_current_caption;
                    } else {
                        return '';
                    }
                }
            },
            zoom: {
                enabled: true,
                duration: 300,
                opener: function(element) {
                    return element.find("img");
                }
            },
            callbacks: {
                change: function(item) {
                    td_modal_image_last_el = item.el;
                    td_util.scroll_into_view(item.el);
                },
                beforeClose: function() {
                    td_util.scroll_into_view(td_modal_image_last_el);
                }

            }
        });


    }

} //end modal

/**
 * Created by ra on 7/9/14.
 */


/*
 * tagDiv mods:
 * - added the td-backstrach class
 * - changed the backstretch.after event so that it dosn't wait for fade
 */

/*
 * Backstretch
 * http://srobbin.com/jquery-plugins/backstretch/
 *
 * Copyright (c) 2013 Scott Robbin
 * Licensed under the MIT license.
 */

;(function ($, window, undefined) {
    'use strict';

    /* PLUGIN DEFINITION
     * ========================= */

    $.fn.backstretch = function (images, options) {
        // We need at least one image or method name
        if (images === undefined || images.length === 0) {
            $.error("No images were supplied for Backstretch");
        }

        /*
         * Scroll the page one pixel to get the right window height on iOS
         * Pretty harmless for everyone else
         */
        if ($(window).scrollTop() === 0 ) {
            window.scrollTo(0, 0);
        }

        return this.each(function () {
            var $this = $(this)
                , obj = $this.data('backstretch');

            // Do we already have an instance attached to this element?
            if (obj) {

                // Is this a method they're trying to execute?
                if (typeof images == 'string' && typeof obj[images] == 'function') {
                    // Call the method
                    obj[images](options);

                    // No need to do anything further
                    return;
                }

                // Merge the old options with the new
                options = $.extend(obj.options, options);

                // Remove the old instance
                obj.destroy(true);
            }

            obj = new Backstretch(this, images, options);
            $this.data('backstretch', obj);
        });
    };

    // If no element is supplied, we'll attach to body
    $.backstretch = function (images, options) {
        // Return the instance
        return $('body')
            .backstretch(images, options)
            .data('backstretch');
    };

    // Custom selector
    $.expr[':'].backstretch = function(elem) {
        return $(elem).data('backstretch') !== undefined;
    };

    /* DEFAULTS
     * ========================= */

    $.fn.backstretch.defaults = {
        centeredX: true   // Should we center the image on the X axis?
        , centeredY: true   // Should we center the image on the Y axis?
        , duration: 5000    // Amount of time in between slides (if slideshow)
        , fade: 0           // Speed of fade transition between slides
    };

    /* STYLES
     *
     * Baked-in styles that we'll apply to our elements.
     * In an effort to keep the plugin simple, these are not exposed as options.
     * That said, anyone can override these in their own stylesheet.
     * ========================= */
    var styles = {
        wrap: {
            left: 0
            , top: 0
            , overflow: 'hidden'
            , margin: 0
            , padding: 0
            , height: '100%'
            , width: '100%'
            , zIndex: -999999
        }
        , img: {
            position: 'absolute'
            , display: 'none'
            , margin: 0
            , padding: 0
            , border: 'none'
            , width: 'auto'
            , height: 'auto'
            , maxHeight: 'none'
            , maxWidth: 'none'
            , zIndex: -999999
        }
    };

    /* CLASS DEFINITION
     * ========================= */
    var Backstretch = function (container, images, options) {
        this.options = $.extend({}, $.fn.backstretch.defaults, options || {});

        /* In its simplest form, we allow Backstretch to be called on an image path.
         * e.g. $.backstretch('/path/to/image.jpg')
         * So, we need to turn this back into an array.
         */
        this.images = $.isArray(images) ? images : [images];

        // Preload images
        $.each(this.images, function () {
            $('<img />')[0].src = this;
        });

        // Convenience reference to know if the container is body.
        this.isBody = container === document.body;

        /* We're keeping track of a few different elements
         *
         * Container: the element that Backstretch was called on.
         * Wrap: a DIV that we place the image into, so we can hide the overflow.
         * Root: Convenience reference to help calculate the correct height.
         */
        this.$container = $(container);
        this.$root = this.isBody ? supportsFixedPosition ? $(window) : $(document) : this.$container;

        // Don't create a new wrap if one already exists (from a previous instance of Backstretch)
        var $existing = this.$container.children(".backstretch").first();
        this.$wrap = $existing.length ? $existing : $('<div class="backstretch"></div>').css(styles.wrap).appendTo(this.$container);

        // Non-body elements need some style adjustments
        if (!this.isBody) {
            // If the container is statically positioned, we need to make it relative,
            // and if no zIndex is defined, we should set it to zero.
            var position = this.$container.css('position')
                , zIndex = this.$container.css('zIndex');

            this.$container.css({
                position: position === 'static' ? 'relative' : position
                , zIndex: zIndex === 'auto' ? 0 : zIndex
                , background: 'none'
            });

            // Needs a higher z-index
            this.$wrap.css({zIndex: -999998});
        }

        // Fixed or absolute positioning?
        this.$wrap.css({
            position: this.isBody && supportsFixedPosition ? 'fixed' : 'absolute'
        });

        // Set the first image
        this.index = 0;
        this.show(this.index);

        // Listen for resize
        $(window).on('resize.backstretch', $.proxy(this.resize, this))
            .on('orientationchange.backstretch', $.proxy(function () {
                // Need to do this in order to get the right window height
                if (this.isBody && window.pageYOffset === 0) {
                    window.scrollTo(0, 1);
                    this.resize();
                }
            }, this));
    };

    /* PUBLIC METHODS
     * ========================= */
    Backstretch.prototype = {
        resize: function () {
            try {
                var bgCSS = {left: 0, top: 0}
                    , rootWidth = this.isBody ? this.$root.width() : this.$root.innerWidth()
                    , bgWidth = rootWidth
                    , rootHeight = this.isBody ? ( window.innerHeight ? window.innerHeight : this.$root.height() ) : this.$root.innerHeight()
                    , bgHeight = bgWidth / this.$img.data('ratio')
                    , bgOffset;

                // Make adjustments based on image ratio
                if (bgHeight >= rootHeight) {
                    bgOffset = (bgHeight - rootHeight) / 2;
                    if(this.options.centeredY) {
                        bgCSS.top = '-' + bgOffset + 'px';
                    }
                } else {
                    bgHeight = rootHeight;
                    bgWidth = bgHeight * this.$img.data('ratio');
                    bgOffset = (bgWidth - rootWidth) / 2;
                    if(this.options.centeredX) {
                        bgCSS.left = '-' + bgOffset + 'px';
                    }
                }

                this.$wrap.css({width: rootWidth, height: rootHeight})
                    .find('img:not(.deleteable)').css({width: bgWidth, height: bgHeight}).css(bgCSS);
            } catch(err) {
                // IE7 seems to trigger resize before the image is loaded.
                // This try/catch block is a hack to let it fail gracefully.
            }

            return this;
        }

        // Show the slide at a certain position
        , show: function (newIndex) {

            // Validate index
            if (Math.abs(newIndex) > this.images.length - 1) {
                return;
            }

            // Vars
            var self = this
                , oldImage = self.$wrap.find('img').addClass('deleteable')
                , evtOptions = { relatedTarget: self.$container[0] };

            // Trigger the "before" event
            self.$container.trigger($.Event('backstretch.before', evtOptions), [self, newIndex]);

            // Set the new index
            this.index = newIndex;

            // Pause the slideshow
            clearInterval(self.interval);

            // New image
            self.$img = $('<img />')
                .css(styles.img)
                .addClass('td-backstretch')
                .bind('load', function (e) {
                    var imgWidth = this.width || $(e.target).width()
                        , imgHeight = this.height || $(e.target).height();

                    // Save the ratio
                    $(this).data('ratio', imgWidth / imgHeight);

                    // Show the image, then delete the old one
                    // "speed" option has been deprecated, but we want backwards compatibilty
                    $(this).fadeIn(self.options.speed || self.options.fade, function () {
                        oldImage.remove();

                        // Resume the slideshow
                        if (!self.paused) {
                            self.cycle();
                        }


                    });

                    // Trigger the "after" and "show" events
                    // "show" is being deprecated
                    $(['after', 'show']).each(function () {
                        self.$container.trigger($.Event('backstretch.' + this, evtOptions), [self, newIndex]);
                    });

                    // Resize
                    self.resize();
                })
                .appendTo(self.$wrap);

            // Hack for IE img onload event
            self.$img.attr('src', self.images[newIndex]);
            return self;
        }

        , next: function () {
            // Next slide
            return this.show(this.index < this.images.length - 1 ? this.index + 1 : 0);
        }

        , prev: function () {
            // Previous slide
            return this.show(this.index === 0 ? this.images.length - 1 : this.index - 1);
        }

        , pause: function () {
            // Pause the slideshow
            this.paused = true;
            return this;
        }

        , resume: function () {
            // Resume the slideshow
            this.paused = false;
            this.next();
            return this;
        }

        , cycle: function () {
            // Start/resume the slideshow
            if(this.images.length > 1) {
                // Clear the interval, just in case
                clearInterval(this.interval);

                this.interval = setInterval($.proxy(function () {
                    // Check for paused slideshow
                    if (!this.paused) {
                        this.next();
                    }
                }, this), this.options.duration);
            }
            return this;
        }

        , destroy: function (preserveBackground) {
            // Stop the resize events
            $(window).off('resize.backstretch orientationchange.backstretch');

            // Clear the interval
            clearInterval(this.interval);

            // Remove Backstretch
            if(!preserveBackground) {
                this.$wrap.remove();
            }
            this.$container.removeData('backstretch');
        }
    };

    /* SUPPORTS FIXED POSITION?
     *
     * Based on code from jQuery Mobile 1.1.0
     * http://jquerymobile.com/
     *
     * In a nutshell, we need to figure out if fixed positioning is supported.
     * Unfortunately, this is very difficult to do on iOS, and usually involves
     * injecting content, scrolling the page, etc.. It's ugly.
     * jQuery Mobile uses this workaround. It's not ideal, but works.
     *
     * Modified to detect IE6
     * ========================= */

    var supportsFixedPosition = (function () {
        var ua = navigator.userAgent
            , platform = navigator.platform
        // Rendering engine is Webkit, and capture major version
            , wkmatch = ua.match( /AppleWebKit\/([0-9]+)/ )
            , wkversion = !!wkmatch && wkmatch[ 1 ]
            , ffmatch = ua.match( /Fennec\/([0-9]+)/ )
            , ffversion = !!ffmatch && ffmatch[ 1 ]
            , operammobilematch = ua.match( /Opera Mobi\/([0-9]+)/ )
            , omversion = !!operammobilematch && operammobilematch[ 1 ]
            , iematch = ua.match( /MSIE ([0-9]+)/ )
            , ieversion = !!iematch && iematch[ 1 ];

        return !(
            // iOS 4.3 and older : Platform is iPhone/Pad/Touch and Webkit version is less than 534 (ios5)
            ((platform.indexOf( "iPhone" ) > -1 || platform.indexOf( "iPad" ) > -1  || platform.indexOf( "iPod" ) > -1 ) && wkversion && wkversion < 534) ||

                // Opera Mini
                (window.operamini && ({}).toString.call( window.operamini ) === "[object OperaMini]") ||
                (operammobilematch && omversion < 7458) ||

                //Android lte 2.1: Platform is Android and Webkit version is less than 533 (Android 2.2)
                (ua.indexOf( "Android" ) > -1 && wkversion && wkversion < 533) ||

                // Firefox Mobile before 6.0 -
                (ffversion && ffversion < 6) ||

                // WebOS less than 3
                ("palmGetResource" in window && wkversion && wkversion < 534) ||

                // MeeGo
                (ua.indexOf( "MeeGo" ) > -1 && ua.indexOf( "NokiaBrowser/8.5.0" ) > -1) ||

                // IE6
                (ieversion && ieversion <= 6)
            );
    }());

}(jQuery, window));

/**
 * Created by ra on 7/8/14.
 */

jQuery().ready(function() {




    jQuery(window).on("backstretch.after", function (e, instance, index) {
        td_template_single_1();
    });
});


/**
 * make td-post-template-6 title move down and blurry
 */
function td_template_single_1() {
    //run only on a post with template 6 on it
    if(jQuery("#td-full-screen-header-image").length > 0) {


        //define all the variables - for better performance ?
        //var td_parallax_el = document.getElementById('td_parallax_header_6');

        var td_parallax_bg_el = jQuery(".td-backstretch")[0];


        //console.log(td_parallax_bg_el);
        var scroll_from_top = '';
        var distance_from_bottom;

        //attach the animation tick on scroll
        jQuery(window).scroll(function(){
            // with each scroll event request an animation frame (we have a polyfill for animation frame)
            // the requestAnimationFrame is called only once and after that we wait
            td_request_tick();
        });
    }


    var td_animation_running = false; //if the tick is running, we set this to true

    function td_request_tick() {
        if (td_animation_running === false) {
            window.requestAnimationFrame(td_do_animation);
        }
        td_animation_running = true;
    }

    /**
     * the animation loop
     */
    function td_do_animation() {
        scroll_from_top = jQuery(document).scrollTop();
        if (scroll_from_top <= 950) { //stop the animation after scroll from top

            var blur_value = 1 - (scroll_from_top / 800); // @todo trebuie verificata formula??
            if (td_detect.is_ie8 === true) {
                blur_value = 1;
            }


            blur_value = Math.round(blur_value * 100) / 100;

            //opacity
            //td_parallax_el.style.opacity = blur_value;

            //move the bg
            var parallax_move = -Math.round(scroll_from_top / 4);
            td_move_Y(td_parallax_bg_el,-parallax_move);


            //move the title + cat
            distance_from_bottom = -Math.round(scroll_from_top / 8);
            //td_move_Y(td_parallax_el,-distance_from_bottom);
            //td_parallax_el.style.bottom = distance_from_bottom + "px";  //un accelerated version


        }

        td_animation_running = false;
    }


    function td_move_Y (elm, value) {
        var translate = 'translate3d(0px,' + value + 'px, 0px)';
        elm.style['-webkit-transform'] = translate;
        elm.style['-moz-transform'] = translate;
        elm.style['-ms-transform'] = translate;
        elm.style['-o-transform'] = translate;
        elm.style.transform = translate;
    }

}

/*
    td_util.js
    v1.1
 */

"use strict";


/*  ----------------------------------------------------------------------------
 On load
 */
jQuery().ready(function() {

    /**
     * Modal window js code
     */
    jQuery('.td-login-modal-js').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',
        removalDelay: 500,

        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function() {


                this.st.mainClass = this.st.el.attr('data-effect');


                //empty all fields
                td_modala_empty_all_fields();

                //empty error display div
                td_modala_empty_err_div();

                if(jQuery(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    if (td_detect.is_ie === false) {
                        //do not focus on ie 10
                        this.st.focus = '#login_email';
                    }

                }
            },

            beforeClose: function() {
            }
        }
    });


    //login
    jQuery('#login-link').on( "click", function() {
        //hides or shows the divs with inputs
        show_hide_content_modala([['#td-login-div', 1], ['#td-register-div', 0], ['#td-forgot-pass-div', 0]]);

        //moves focus on the tab
        modala_swich_tabs([['#login-link', 1], ['#register-link', 0]]);

        if(jQuery(window).width() > 700 && td_detect.is_ie === false) {
            jQuery('#login_email').focus();
        }

        //empty all fields
        //td_modala_empty_all_fields();

        //empty error display div
        td_modala_empty_err_div();
    });
    //login button
    jQuery('#login_button').on( "click", function() {
        handle_login_for_modal_window();
    });
    //enter key on #login_pass
    jQuery('#login_pass').keydown(function(event) {
        if ((event.which && event.which == 13) || (event.keyCode && event.keyCode == 13)) {
            handle_login_for_modal_window();
        }
    });

    //register
    jQuery('#register-link').on( "click", function() {
        //hides or shows the divs with inputs
        show_hide_content_modala([['#td-login-div', 0], ['#td-register-div', 1], ['#td-forgot-pass-div', 0]]);

        //moves focus on the tab
        modala_swich_tabs([['#login-link', 0], ['#register-link', 1]]);

        if(jQuery(window).width() > 700  && td_detect.is_ie === false) {
            jQuery('#register_email').focus();
        }

        //empty all fields
        //td_modala_empty_all_fields();

        //empty error display div
        td_modala_empty_err_div();
    });
    //register button
    jQuery('#register_button').on( "click", function() {
        handle_register_for_modal_window();
    });
    //enter key on #register_user
    jQuery('#register_user').keydown(function(event) {
        if ((event.which && event.which == 13) || (event.keyCode && event.keyCode == 13)) {
            handle_register_for_modal_window();
        }
    });

    //forgot pass
    jQuery('#forgot-pass-link').on( "click", function() {
        //hides or shows the divs with inputs
        show_hide_content_modala([['#td-login-div', 0], ['#td-register-div', 0], ['#td-forgot-pass-div', 1]]);

        //moves focus on the tab
        modala_swich_tabs([['#login-link', 0], ['#register-link', 0]]);

        if(jQuery(window).width() > 700 && td_detect.is_ie === false) {
            jQuery('#forgot_email').focus();
        }

        //empty all fields
        //td_modala_empty_all_fields();

        //empty error display div
        td_modala_empty_err_div();
    });
    //forgot button
    jQuery('#forgot_button').on( "click", function() {
        handle_forgot_password_for_modal_window();
    });
    //enter key on #forgot_email
    jQuery('#forgot_email').keydown(function(event) {
        if ((event.which && event.which == 13) || (event.keyCode && event.keyCode == 13)) {
            handle_forgot_password_for_modal_window();
        }
    });


});//end jquery ready



//patern to check emails
var td_mod_pattern_email = /^[a-zA-Z0-9][a-zA-Z0-9_\.-]{0,}[a-zA-Z0-9]@[a-zA-Z0-9][a-zA-Z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;

/**
 * handle all request made from login tab
 */
function handle_login_for_modal_window() {
    var login_email = jQuery('#login_email').val();
    var login_pass = jQuery('#login_pass').val();

    if(login_email && login_pass){
        //empty error display div
        //td_modala_empty_err_div();

        modala_add_remove_class(['.td_display_err', 1, "td_display_msg_ok"]);
        jQuery('.td_display_err').show();
        td_modala_write_err_div(td_please_wait);

        //call ajax for log in
        td_modala_call_ajax('td_mod_login', login_email, '', login_pass);
    } else {
        jQuery('.td_display_err').show();
        td_modala_write_err_div(td_email_user_pass_incorrect);
    }
}

/**
 * handle all request made from register tab
 */
function handle_register_for_modal_window() {
    var register_email = jQuery('#register_email').val();
    var register_user = jQuery('#register_user').val();

    if(td_mod_pattern_email.test(register_email) && register_user){
        //empty error display div
        //td_modala_empty_err_div();

        modala_add_remove_class(['.td_display_err', 1, "td_display_msg_ok"]);
        jQuery('.td_display_err').show();
        td_modala_write_err_div(td_please_wait);

        //call ajax
        td_modala_call_ajax('td_mod_register', register_email, register_user, '');
    } else {
        jQuery('.td_display_err').show();
        td_modala_write_err_div(td_email_user_incorrect);
    }
}

/**
 * handle all request made from forgot password tab
 */
function handle_forgot_password_for_modal_window() {
    var forgot_email = jQuery('#forgot_email').val();

    if(td_mod_pattern_email.test(forgot_email)){
        //empty error display div
        //td_modala_empty_err_div();

        modala_add_remove_class(['.td_display_err', 1, "td_display_msg_ok"]);
        jQuery('.td_display_err').show();
        td_modala_write_err_div(td_please_wait);

        //call ajax
        td_modala_call_ajax('td_mod_remember_pass', forgot_email, '', '');
    } else {
        jQuery('.td_display_err').show();
        td_modala_write_err_div(td_email_incorrect);
    }
}

/**
 * swhich the div's acordingly to the user action (Log In, Register, Remember Password)
 *
 * ids_array : array of ids that have to be showed or hidden
 */
function show_hide_content_modala(ids_array) {
    var length = ids_array.length;

    for (var i = 0; i < length; i++) {
        var element_id = ids_array[i][0];
        var element_visibility = ids_array[i][1];

        if (element_visibility == 1) {
            jQuery(element_id).removeClass('td-dispaly-none').addClass('td-dispaly-block');
        } else {
            jQuery(element_id).removeClass('td-dispaly-block').addClass('td-dispaly-none');
        }
    }
}


/**
 * swhich the tab's acordingly to the user action (Log In, Register, Remember Password)
 *
 * ids_array : array of ids that have to be focus on or unfocus
 */
function modala_swich_tabs(ids_array) {
    var length = ids_array.length;

    for (var i = 0; i < length; i++) {
        var element_id = ids_array[i][0];
        var element_visibility = ids_array[i][1];

        if (element_visibility == 1) {
            jQuery(element_id).addClass('td_login_tab_focus');
        } else {
            jQuery(element_id).removeClass('td_login_tab_focus');
        }
    }
}


/**
 * adds or remove a class from an html object
 *
 * param : array with object identifier (id - # or class - .)
 * ex: ['.class_indetifier', 1, 'class_to_add'] or ['.class_indetifier', 0, 'class_to_remove']
 */
function modala_add_remove_class(param) {

    //add class
    if (param[1] == 1) {
        jQuery(param[0]).addClass(param[2]);

        //remove class
    } else {
        jQuery(param[0]).removeClass(param[2]);
    }
}


/**
 * empty the error div
 */
function td_modala_empty_err_div() {
    jQuery('.td_display_err').html('');
    jQuery('.td_display_err').hide();
}


/**
 * write text to error div
 */
function td_modala_write_err_div(message) {
    jQuery('.td_display_err').html(message);
}

/**
 * empty all fields in modal window
 */
function td_modala_empty_all_fields() {
    //login fields
    jQuery('#login_email').val('');
    jQuery('#login_pass').val('');

    //register fields
    jQuery('#register_email').val('');
    jQuery('#register_user').val('');

    //forgot pass
    jQuery('#forgot_email').val('');
}


/**
 * call to server from modal window
 *
 * @param $action : what action (log in, register, forgot email)
 * @param $email  : the email beening sent
 * @param $user   : the user name beening sent
 */
function td_modala_call_ajax(sent_action, sent_email, sent_user, sent_pass) {
    jQuery.ajax({
        type: 'POST',
        url: td_ajax_url,
        data: {
            action: sent_action,
            email: sent_email,
            user: sent_user,
            pass: sent_pass
        },
        success: function(data, textStatus, XMLHttpRequest){
            var td_data_object = jQuery.parseJSON(data); //get the data object

            //check the response from server
            switch(td_data_object[0]) {
                case 'login':
                    if(td_data_object[1] == 1) {
                        location.reload(true);
                    } else {
                        modala_add_remove_class(['.td_display_err', 0, 'td_display_msg_ok']);
                        jQuery('.td_display_err').show();
                        td_modala_write_err_div(td_data_object[2]);
                    }
                    break;

                case 'register':
                    if(td_data_object[1] == 1) {
                        modala_add_remove_class(['.td_display_err', 1, "td_display_msg_ok"]);
                        jQuery('.td_display_err').show();
                    } else {
                        modala_add_remove_class(['.td_display_err', 0, "td_display_msg_ok"]);
                        jQuery('.td_display_err').show();
                    }
                    td_modala_write_err_div(td_data_object[2]);
                    break;

                case 'remember_pass':
                    if(td_data_object[1] == 1) {
                        modala_add_remove_class(['.td_display_err', 1, "td_display_msg_ok"]);
                        jQuery('.td_display_err').show();
                    } else {
                        modala_add_remove_class(['.td_display_err', 0, "td_display_msg_ok"]);
                        jQuery('.td_display_err').show();
                    }
                    td_modala_write_err_div(td_data_object[2]);
                    break;

            }


        },
        error: function(MLHttpRequest, textStatus, errorThrown){
            //console.log(errorThrown);
        }
    });
}

/*  ----------------------------------------------------------------------------
 tagDiv live css compiler ( 2013 )
 - this script is used on our demo site to customize the theme live
 - not used on production sites
 */


var td_style_buffer =
    '<style> /* @theme_color */ .category .entry-content, .tag .entry-content, .td_quote_box { -webkit-transition: border-color 1s ease-in-out; -moz-transition: border-color 1s ease-in-out; -o-transition: border-color 1s ease-in-out; transition: border-color 1s ease-in-out; border-color: @theme_color; } .block-title a, .block-title span, .td-tags a:hover, .td-scroll-up-visible, .td-scroll-up, .sf-menu ul .current-menu-item > a, .sf-menu ul a:hover, .sf-menu ul .sfHover > a, .td-rating-bar-wrap div, .iosSlider .slide-meta-cat, .sf-menu ul .current-menu-ancestor > a, .td-404-sub-sub-title a, .widget_tag_cloud .tagcloud a:hover, .td-mobile-close a, ul.td-category a, .td_social .td_social_type .td_social_button a, .dropcap { -webkit-transition: background-color 1s ease-in-out; -moz-transition: background-color 1s ease-in-out; -o-transition: background-color 1s ease-in-out; transition: background-color 1s ease-in-out; background-color: @theme_color; } .block-title, .sf-menu li a:hover, .sf-menu .sfHover a, .sf-menu .current-menu-ancestor a, .header-search-wrap .dropdown-menu, .sf-menu > .current-menu-item > a, .ui-tabs-nav { -webkit-transition: border-color 1s ease-in-out; -moz-transition: border-color 1s ease-in-out; -o-transition: border-color 1s ease-in-out; transition: border-color 1s ease-in-out; border-color: @theme_color; } .author-box-wrap .td-author-name a, blockquote p, .page-nav a:hover, .widget_pages .current_page_item a, .widget_calendar td a, .widget_categories .current-cat > a, .widget_pages .current_page_parent > a, .td_pull_quote p { -webkit-transition: color 1s ease-in-out; -moz-transition: color 1s ease-in-out; -o-transition: color 1s ease-in-out; transition: color 1s ease-in-out; color: @theme_color; } .page-nav .current { -webkit-transition: background-color 1s ease-in-out; -moz-transition: background-color 1s ease-in-out; -o-transition: background-color 1s ease-in-out; transition: background-color 1s ease-in-out; background-color: @theme_color; border-color: @theme_color; } .wpb_btn-inverse, .ui-tabs-nav .ui-tabs-active a, .post .wpb_btn-danger, .form-submit input, .wpcf7-submit { -webkit-transition: background-color 1s ease-in-out; -moz-transition: background-color 1s ease-in-out; -o-transition: background-color 1s ease-in-out; transition: background-color 1s ease-in-out; background-color: @theme_color !important; } .header-search-wrap .dropdown-menu:before { -webkit-transition: border-color 1s ease-in-out; -moz-transition: border-color 1s ease-in-out; -o-transition: border-color 1s ease-in-out; transition: border-color 1s ease-in-out; border-color: transparent transparent @theme_color; } .td-mobile-content .current-menu-item > a, .td-mobile-content a:hover { -webkit-transition: color 1s ease-in-out; -moz-transition: color 1s ease-in-out; -o-transition: color 1s ease-in-out; transition: color 1s ease-in-out; color: @theme_color !important; } /* @slider_text */ .td-sbig-title-wrap .td-sbig-title, .td-slide-item-sec .td-sbig-title-wrap { -webkit-transition: background-color 1s ease-in-out; -moz-transition: background-color 1s ease-in-out; -o-transition: background-color 1s ease-in-out; transition: background-color 1s ease-in-out; background-color: @slider_text; } /* @select_color */ ::-moz-selection { background: @select_color; color: #fff; } ::selection { background: @select_color; color: #fff; } /* @link_color */ a, .widget_recent_comments .recentcomments .url { -webkit-transition: color 1s ease-in-out; -moz-transition: color 1s ease-in-out; -o-transition: color 1s ease-in-out; transition: color 1s ease-in-out; color: @link_color; } .cur-sub-cat { -webkit-transition: color 1s ease-in-out; -moz-transition: color 1s ease-in-out; -o-transition: color 1s ease-in-out; transition: color 1s ease-in-out; color:@link_color !important; } /* @link_hover_color */ a:hover, .widget_recent_comments .recentcomments .url:hover { -webkit-transition: color 1s ease-in-out; -moz-transition: color 1s ease-in-out; -o-transition: color 1s ease-in-out; transition: color 1s ease-in-out; color: @link_hover_color; } </style>';


var td_bg_boxed_imgs = [
    'http://demo.tagdiv.com/newspaper/bg_images/1.jpg',
    'http://demo.tagdiv.com/newspaper/bg_images/2.jpg',
    'http://demo.tagdiv.com/newspaper/bg_images/3.jpg'
];


var td_current_panel_stat = td_read_cookie('td_show_panel');
if (td_current_panel_stat == 'show' || td_current_panel_stat == null) {
    jQuery('.td-theme-settings-small').addClass('td-theme-settings-no-transition');
    jQuery('.td-theme-settings-small').removeClass('td-theme-settings-small');
}




/*  ----------------------------------------------------------------------------
 On load
 */
jQuery().ready(function() {

    //hide panel
    jQuery("#td-theme-set-hide").click(function(event){
        event.preventDefault();
        event.stopPropagation();
        //hide
        td_create_cookie('td_show_panel', 'hide', 1);
        jQuery('#td-theme-settings').removeClass('td-theme-settings-no-transition');
        jQuery('#td-theme-settings').addClass('td-theme-settings-small');


        jQuery('.td-set-theme-style-link').removeClass('fadeInLeft');

    });





    //show panel
    jQuery("#td-theme-settings").click(function(){
        if (jQuery(this).hasClass('td-theme-settings-small')) {

            jQuery('.td-set-theme-style-link').addClass('animated_xlong fadeInLeft');

            //show full
            td_create_cookie('td_show_panel', 'show', 1);
            jQuery('.td-theme-settings-small').removeClass('td-theme-settings-small');
        }
    });





}); //end on load






/*  ----------------------------------------------------------------------------
    Support functions
 */
//add trim for ie8
if (!String.prototype.trim) {
    String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g, '');};
}


function td_create_cookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else var expires = "";
    document.cookie = escape(name) + "=" + escape(value) + expires + "; path=/";

}

function td_read_cookie(name) {
    var nameEQ = escape(name) + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return unescape(c.substring(nameEQ.length, c.length));
    }
    return null;
}






/*  ----------------------------------------------------------------------------
    live css compiler @tagDiv 2013
 */

//the settings object
function td_customizer_setting () {
    this.name = '';
    this.value = '';
}

//the sections object
function td_customizer_css_section() {
    this.name = '';
    this.raw_css = '';
    this.compiled_css = '';
}

//css parser class
function td_custom_css_parser(raw_css) {
    this.raw_css = raw_css;
    this.settings = [];
    this.css_sections = [];
    this.style_element_id = '';
    this.compiled_css = ''; //compiled css
}

//load the settings
td_custom_css_parser.prototype.load_setting_raw = function(name, value){
    if (this.get_css_section(name) === false) {
        var new_setting = new td_customizer_setting();
        new_setting.name = name;
        new_setting.value = value;
        this.settings.push(new_setting);
    } else {
        this.update_setting_value(name, value);
    }
};

//split the css in sections
td_custom_css_parser.prototype.split_into_sections = function(){
    //remove style wrapping
    this.raw_css = this.raw_css.replace(/<style>/gi,'');
    this.raw_css = this.raw_css.replace(/<\/style>/gi,'');

    this.raw_css = this.raw_css.trim();

    //explode the sections
    var css_splits = this.raw_css.split('/*');

    var containing_class = this;
    jQuery.each(css_splits, function(index, css_split) {
        var css_split_parts = css_split.split('*/');
        if (typeof css_split_parts[0] !== "undefined" && typeof css_split_parts[1] !== "undefined") {
            var new_css_section = new td_customizer_css_section();
            new_css_section.name = css_split_parts[0].trim();
            new_css_section.raw_css = css_split_parts[1].trim();
            containing_class.css_sections.push(new_css_section);
        }
    });
};


//get setting value
td_custom_css_parser.prototype.get_setting_value = function(name){
    var tmpReturn = false;
    jQuery.each(this.settings, function(index, setting) {
        if (setting.name === name) {
            tmpReturn = setting.value;
            return false; //brake jquery each
        }
    });
    return tmpReturn;
};

//get setting value
td_custom_css_parser.prototype.update_setting_value = function(name, value){
    jQuery.each(this.settings, function(index, setting) {
        if (setting.name === name) {
            setting.value = value;
            return false; //brake jquery each
        }
    });
};


//get css section
td_custom_css_parser.prototype.get_css_section = function(name){
    var tmpReturn = false;
    jQuery.each(this.settings, function(index, setting) {
        if (setting.name === name) {
            tmpReturn = setting.value;
            return false; //brake jquery each
        }
    });
    return tmpReturn;
};

//compile each section
td_custom_css_parser.prototype.compile_sections = function(){
    if (typeof this.css_sections !== "undefined" && typeof this.settings !== "undefined") {
        var containing_class = this;
        //console.log('start');

        jQuery.each(this.css_sections, function(index, section) {
            jQuery.each(containing_class.settings, function(index, setting) {
                section.raw_css = str_replace("@" + setting.name, setting.value, section.raw_css);
            });
        });
    }
};

//compile the css
td_custom_css_parser.prototype.compile_css = function(){

    this.split_into_sections();
    this.compile_sections();

    var buffy = '';
    var containing_class = this;

    jQuery.each(this.css_sections, function(index, section) {
        if (section.raw_css !== '' && containing_class.get_setting_value(str_replace("@", '', section.name)) !== false) {
            buffy = buffy + section.raw_css;
        }
    });

    this.compiled_css = buffy;
    //alert(buffy);
};


//inject css
td_custom_css_parser.prototype.inject_css = function(){


    var td_style = document.createElement('style');
    td_style.type = 'text/css';
    td_style.innerHTML = this.compiled_css;
    td_style.setAttribute("id", "td_style_inject");
    if (this.style_element_id === '') {
        //new element


        jQuery('body').append(td_style);
        this.style_element_id = 'td_style_inject';
    } else {
        //update old
        jQuery('#td_style_inject').replaceWith(td_style);
    }
};







/*
var td_custom_css_parser = new td_custom_css_parser(td_style_buffer);
td_custom_css_parser.load_setting_raw('header_color', 'red');
td_custom_css_parser.load_setting_raw('header_line_color', 'blue');


td_custom_css_parser.load_setting_raw('link_color', 'pink');

//td_custom_css_parser.compile_css();
//td_custom_css_parser.inject_css();


td_custom_css_parser.load_setting_raw('header_color', 'white');
td_custom_css_parser.load_setting_raw('header_line_color', 'gray');
*/
//td_custom_css_parser.compile_css();
//td_custom_css_parser.inject_css();



//alert(td_custom_css_parser.get_setting_value('link_color'));


//console.log(td_custom_css_parser.settings);
//console.log(td_custom_css_parser.css_sections);


//td_custom_css_parser.load_setting_raw('test');



var pad = function(num, totalChars) {
    var pad = '0';
    num = num + '';
    while (num.length < totalChars) {
        num = pad + num;
    }
    return num;
};

// Ratio is between 0 and 1
var changeColor = function(color, ratio, darker) {
    // Trim trailing/leading whitespace
    color = color.replace(/^\s*|\s*$/, '');

    // Expand three-digit hex
    color = color.replace(
        /^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i,
        '#$1$1$2$2$3$3'
    );

    // Calculate ratio
    var difference = Math.round(ratio * 256) * (darker ? -1 : 1),
    // Determine if input is RGB(A)
        rgb = color.match(new RegExp('^rgba?\\(\\s*' +
            '(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])' +
            '\\s*,\\s*' +
            '(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])' +
            '\\s*,\\s*' +
            '(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])' +
            '(?:\\s*,\\s*' +
            '(0|1|0?\\.\\d+))?' +
            '\\s*\\)$'
            , 'i')),
        alpha = !!rgb && rgb[4] != null ? rgb[4] : null,

    // Convert hex to decimal
        decimal = !!rgb? [rgb[1], rgb[2], rgb[3]] : color.replace(
            /^#?([a-f0-9][a-f0-9])([a-f0-9][a-f0-9])([a-f0-9][a-f0-9])/i,
            function() {
                return parseInt(arguments[1], 16) + ',' +
                    parseInt(arguments[2], 16) + ',' +
                    parseInt(arguments[3], 16);
            }
        ).split(/,/),
        returnValue;

    // Return RGB(A)
    return !!rgb ?
        'rgb' + (alpha !== null ? 'a' : '') + '(' +
            Math[darker ? 'max' : 'min'](
                parseInt(decimal[0], 10) + difference, darker ? 0 : 255
            ) + ', ' +
            Math[darker ? 'max' : 'min'](
                parseInt(decimal[1], 10) + difference, darker ? 0 : 255
            ) + ', ' +
            Math[darker ? 'max' : 'min'](
                parseInt(decimal[2], 10) + difference, darker ? 0 : 255
            ) +
            (alpha !== null ? ', ' + alpha : '') +
            ')' :
        // Return hex
        [
            '#',
            pad(Math[darker ? 'max' : 'min'](
                parseInt(decimal[0], 10) + difference, darker ? 0 : 255
            ).toString(16), 2),
            pad(Math[darker ? 'max' : 'min'](
                parseInt(decimal[1], 10) + difference, darker ? 0 : 255
            ).toString(16), 2),
            pad(Math[darker ? 'max' : 'min'](
                parseInt(decimal[2], 10) + difference, darker ? 0 : 255
            ).toString(16), 2)
        ].join('');
};
var lighterColor = function(color, ratio) {
    return changeColor(color, ratio, false);
};
var darkerColor = function(color, ratio) {
    return changeColor(color, ratio, true);
};









function td_convert_hex(hex,opacity){
    var hex = hex.replace('#','');
    var r = parseInt(hex.substring(0,2), 16);
    var g = parseInt(hex.substring(2,4), 16);
    var b = parseInt(hex.substring(4,6), 16);

    var result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
    return result;
}

function str_replace (search, replace, subject, count) {
    // http://kevin.vanzonneveld.net
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Gabriel Paderni
    // +   improved by: Philip Peterson
    // +   improved by: Simon Willison (http://simonwillison.net)
    // +    revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // +   bugfixed by: Anton Ongson
    // +      input by: Onno Marsman
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +    tweaked by: Onno Marsman
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   input by: Oleg Eremeev
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Oleg Eremeev
    // %          note 1: The count parameter must be passed as a string in order
    // %          note 1:  to find a global variable in which the result will be given
    // *     example 1: str_replace(' ', '.', 'Kevin van Zonneveld');
    // *     returns 1: 'Kevin.van.Zonneveld'
    // *     example 2: str_replace(['{name}', 'l'], ['hello', 'm'], '{name}, lars');
    // *     returns 2: 'hemmo, mars'
    var i = 0,
        j = 0,
        temp = '',
        repl = '',
        sl = 0,
        fl = 0,
        f = [].concat(search),
        r = [].concat(replace),
        s = subject,
        ra = Object.prototype.toString.call(r) === '[object Array]',
        sa = Object.prototype.toString.call(s) === '[object Array]';
    s = [].concat(s);
    if (count) {
        this.window[count] = 0;
    }

    for (i = 0, sl = s.length; i < sl; i++) {
        if (s[i] === '') {
            continue;
        }
        for (j = 0, fl = f.length; j < fl; j++) {
            temp = s[i] + '';
            repl = ra ? (r[j] !== undefined ? r[j] : '') : r[0];
            s[i] = (temp).split(f[j]).join(repl);
            if (count && s[i] !== temp) {
                this.window[count] += (temp.length - s[i].length) / f[j].length;
            }
        }
    }
    return sa ? s : s[0];
}

'use strict';
/**
 * updates the view counter thru ajax
 */
var td_ajax_count = {

    td_get_views_counts_ajax : function td_get_views_counts_ajax (page_type, array_ids) {

        //what function to call based on page type
        var page_type_action = 'td_ajax_get_views';//page_type = page
        if(page_type == "post") {
            page_type_action = 'td_ajax_update_views';
        }

        jQuery.ajax({
            type: 'POST',
            url: td_ajax_url,
            cache:true,

            data: {
                action: page_type_action,
                td_post_ids: array_ids
            },
            success: function(data, textStatus, XMLHttpRequest){
                var td_ajax_post_counts = jQuery.parseJSON(data);//get the return dara

                //check the return var to be object
                if (td_ajax_post_counts instanceof Object) {
                    //alert('value is Object!');

                    //itinerate thru the object
                    jQuery.each(td_ajax_post_counts, function(id_post, value) {
                        //alert(id_post + ": " + value);

                        //this is the count placeholder in witch we write the post count
                        var current_post_count = ".td-nr-views-" + id_post;

                        jQuery(current_post_count).html(value);
                        //console.log(current_post_count + ': ' + value);
                    });
                }
            },
            error: function(MLHttpRequest, textStatus, errorThrown){
                //console.log(errorThrown);
            }
        });

    }
};

 /*
    td_video_playlist.js
    v1.1
 */

"use strict";
// jQuery(window).load(function() {//
jQuery().ready(function() {

    //click on a youtube movie
    jQuery('.td_click_video_youtube').click(function(){

        //this flag is check to see if to start the movie
        td_youtube_player.td_playlist_video_autoplay_youtube = 1;

        //add pause to playlist control
        td_playlist_general_functions.td_playlist_add_play_control('.td_youtube_control');

        //create  and play the clicked video
        var td_youtube_video = jQuery(this).attr("id").substring(3);
        if(td_youtube_video != '') {
            td_youtube_player.playVideo(td_youtube_video);
        }
    });



    //click on youtube play control
    jQuery('.td_youtube_control').click(function(){

        //click to play
        if(jQuery(this).hasClass('td-sp-video-play')){
            //this is to enable video playing
            td_youtube_player.td_playlist_video_autoplay_youtube = 1;

            //play the video
            td_youtube_player.td_playlist_youtube_play_video();

        } else {

            //put pause to the player
            td_youtube_player.td_playlist_youtube_pause_video();
        }
    });



    //check for youtube wrapper and add api code to create the player
    if(jQuery('.td_wrapper_playlist_player_youtube').length > 0) {

        if(jQuery('.td_wrapper_playlist_player_youtube').data("autoplay") == "1") {
            td_youtube_player.td_playlist_video_autoplay_youtube = 1;
        }

        var first_video = jQuery('.td_wrapper_playlist_player_youtube').data('first-video');

        if(first_video != '') {
            td_youtube_player.td_playlist_id_youtube_video_running = first_video;

            td_youtube_player.playVideo(first_video);
        }
    }



    //check autoplay vimeo
    if(jQuery('.td_wrapper_playlist_player_vimeo').data("autoplay") == "1") {
        td_vimeo_playlist_obj.td_playlist_video_autoplay_vimeo = 1;
    }

    //click on a vimeo
    jQuery('.td_click_video_vimeo').click(function(){

        //this flag is check to see if to start the movie
        td_vimeo_playlist_obj.td_playlist_video_autoplay_vimeo = 1;

        //add pause to playlist control
        td_playlist_general_functions.td_playlist_add_play_control('.td_vimeo_control');

        //create  and play the clicked video
        td_vimeo_playlist_obj.create_player(jQuery(this).attr("id").substring(3));
    });





    //check for vimeo wrapper and add api code to create the player
    if(jQuery('.td_wrapper_playlist_player_vimeo').length > 0) {

        //add play to playlist control
        td_playlist_general_functions.td_playlist_add_play_control('.td_vimeo_control');

        //create the iframe with the video
        td_vimeo_playlist_obj.create_player(jQuery('.td_wrapper_playlist_player_vimeo').data("first-video"));
    }




    //click on youtube play control
    jQuery('.td_vimeo_control').click(function(){

        //click to play
        if(jQuery(this).hasClass('td-sp-video-play')){
            //this is to enable video playing
            td_vimeo_playlist_obj.td_playlist_video_autoplay_vimeo = 1;

            //play the video
            td_vimeo_playlist_obj.td_playlisty_player_vimeo.api("play");

        } else {

            //put pause to the player
            td_vimeo_playlist_obj.td_playlisty_player_vimeo.api("pause");
        }
    });

});


var td_youtube_player = {
    td_yt_player: '',

    td_player_container: 'player_youtube',

    td_playlist_video_autoplay_youtube: 0,

    td_playlist_id_youtube_video_running: '',


    playVideo: function(videoId) {
     if (typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined') {
         window.onYouTubePlayerAPIReady = function() {
             td_youtube_player.loadPlayer(td_youtube_player.td_player_container, videoId);
         };
         jQuery.getScript('//www.youtube.com/player_api');
     } else {
         td_youtube_player.loadPlayer(td_youtube_player.td_player_container, videoId);
     }
    },


    loadPlayer: function(container, videoId) {
     //container is here in case we need to add multiple players on page
     td_youtube_player.td_playlist_id_youtube_video_running = videoId;

     var current_video_name = td_youtube_list_ids['td_' + td_youtube_player.td_playlist_id_youtube_video_running]['title'];
     var current_video_time = td_youtube_list_ids['td_' + td_youtube_player.td_playlist_id_youtube_video_running]['time'];

     //remove focus from all videos from playlist
     td_playlist_general_functions.td_video_playlist_remove_focused('.td_click_video_youtube');

     //add focus class on current playing video
     jQuery('#td_' + videoId).addClass('td_video_currently_playing');

     //ading the current video playing title and time to the control area
     jQuery('#td_current_video_play_title_youtube').html(current_video_name);
     jQuery('#td_current_video_play_time_youtube').html(current_video_time);

     td_youtube_player.td_yt_player = '';
     jQuery(".td_wrapper_playlist_player_youtube").html("<div id="+ td_youtube_player.td_player_container +"></div>");

     td_youtube_player.td_yt_player = new YT.Player(container, {//window.myPlayer = new YT.Player(container, {
         playerVars: {
             //modestbranding: 1,
             //rel: 0,
             //showinfo: 0,
             autoplay: td_youtube_player.td_playlist_video_autoplay_youtube
         },
         height: '100%',
         width: '100%',
         videoId: videoId,
         events: {
             'onReady': td_youtube_player.onPlayerReady,
             'onStateChange': td_youtube_player.onPlayerStateChange
         }
     });
    },


    onPlayerStateChange: function onPlayerStateChange(event) {
     if (event.data == YT.PlayerState.PLAYING) {

         //add pause to playlist control
         td_playlist_general_functions.td_playlist_add_pause_control('.td_youtube_control');

     } else if (event.data == YT.PlayerState.ENDED) {
         //video_events_js.on_stop('youtube');

         //add play to playlist control
         td_playlist_general_functions.td_playlist_add_play_control('.td_youtube_control');

         //if a video has ended then make auto play = 1; This is the case when the user set autoplay = 0 but start watching videos
         td_youtube_player.td_playlist_video_autoplay_youtube = 1;

         //get the next video
         var next_video_id = td_playlist_general_functions.td_playlist_choose_next_video([td_youtube_list_ids, td_youtube_player.td_playlist_id_youtube_video_running]);
         if(next_video_id != '') {
             td_youtube_player.playVideo(next_video_id);
         }

     } else if (YT.PlayerState.PAUSED) {
         //add play to playlist control
         td_playlist_general_functions.td_playlist_add_play_control('.td_youtube_control');
     }
    },

    td_playlist_youtube_stopVideo: function td_playlist_youtube_stopVideo() {
        td_youtube_player.td_yt_player.stopVideo();
    },

    td_playlist_youtube_play_video: function td_playlist_youtube_play_video() {
        if(td_detect.is_mobile_device) {
            //alert('mobile');
        } else {
            td_youtube_player.td_yt_player.playVideo();
        }
    },

    td_playlist_youtube_pause_video: function td_playlist_youtube_pause_video() {
        td_youtube_player.td_yt_player.pauseVideo();
    }
};





//VIMEO
var td_vimeo_playlist_obj = {

    current_video_playing : '',

    td_playlisty_player_vimeo: '',//a copy of the vimeo player : needed when playing or pausing the vimeo pleyer from the playlist control

    td_playlist_video_autoplay_vimeo: '',//autoplay

    create_player: function (video_id){
        if(video_id != '') {

            var vimeo_iframe_autoplay = '';

            this.current_video_playing = video_id;

            //remove focus class
            td_playlist_general_functions.td_video_playlist_remove_focused('.td_click_video_vimeo');

            //add focus clas on play movie
            jQuery('#td_' + video_id).addClass('td_video_currently_playing');

            //put movie data to control box
            this.put_movie_data_to_control_box(video_id);

            //check autoplay
            if(this.td_playlist_video_autoplay_vimeo != 0) {
                vimeo_iframe_autoplay = '&autoplay=1';
            }


            jQuery('.td_wrapper_playlist_player_vimeo').html('');
            jQuery('.td_wrapper_playlist_player_vimeo').html('<iframe id="player_vimeo_1" src="//player.vimeo.com/video/' + video_id + '?api=1&player_id=player_vimeo_1' + vimeo_iframe_autoplay + '"  frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');//width="100%" height="100%"

            this.create_vimeo_object_player(jQuery);
        }

    },

    put_movie_data_to_control_box: function (video_id){
        jQuery('#td_current_video_play_title_vimeo').html(td_vimeo_list_ids['td_' + video_id]['title']);
        jQuery('#td_current_video_play_time_vimeo').html(td_vimeo_list_ids['td_' + video_id]['time']);
    },

    create_vimeo_object_player : function ($) {
        var iframe = '';
        var player = '';

        iframe = $('#player_vimeo_1')[0];
        player = $f(iframe)

        //a copy of the vimeo player : needed when playing or pausing the vimeo pleyer from the playlist control
        this.td_playlisty_player_vimeo = player;

        // When the player is ready, add listeners for pause, finish, and playProgress
        player.addEvent('ready', function() {
            //status.text('ready');

            player.addEvent('play', td_vimeo_playlist_obj.onPlay);
            player.addEvent('pause', td_vimeo_playlist_obj.onPause);
            player.addEvent('finish', td_vimeo_playlist_obj.onFinish);
            player.addEvent('playProgress', td_vimeo_playlist_obj.onPlayProgress);
        });
    },

    onPlay : function onPlay(id) {
        td_playlist_general_functions.td_playlist_add_pause_control('.td_vimeo_control');

        td_vimeo_playlist_obj.td_playlist_video_autoplay_vimeo = 1;
    },

    onPause : function onPause(id) {
        td_playlist_general_functions.td_playlist_add_play_control('.td_vimeo_control');
    },

    onFinish : function onFinish(id) {
        //status.text('finished');

        //add play to playlist control
        td_playlist_general_functions.td_playlist_add_play_control('.td_vimeo_control');

        //if a video has ended then make auto play = 1; This is the case when the user set autoplay = 0 but start watching videos
        td_vimeo_playlist_obj.td_playlist_video_autoplay_vimeo = 1;

        if(td_detect.is_mobile_device && td_detect.is_android) {
            //alert('is android');
        } else {

            //get the next video
            var next_video_id = td_playlist_general_functions.td_playlist_choose_next_video([td_vimeo_list_ids, td_vimeo_playlist_obj.current_video_playing]);
            if(next_video_id != '') {
                td_vimeo_playlist_obj.create_player(next_video_id);
            }
        }
    },

    onPlayProgress : function onPlayProgress(data, id) {
        //status.text(data.seconds + 's played');
    }
};


//this object holds some functions used by both the youtube and vimeo
var td_playlist_general_functions = {
     td_video_playlist_remove_focused: function td_video_playlist_remove_focused(obj_class) {
         //remove focus class
         jQuery( obj_class).each(function(){
             jQuery(this).removeClass('td_video_currently_playing');
         });
     },


    /*
    parram_array = array [
    video_list,
    current_video_id_playing
    ]
    */
    td_playlist_choose_next_video: function td_playlist_choose_next_video(parram_array){
         //alert('get next');

         var video_list = parram_array[0];
         var current_video_id_playing = 'td_' + parram_array[1];

         //get next video id
         var next_video_id = '';
         var found_current = '';
         for(var video in video_list){
             if(found_current == 'found') {
                 next_video_id = video;
                 found_current = '';
                 break;//found , now exit
             }
             if(video == current_video_id_playing) {
                 found_current = 'found';
             }
         }

         //play the next video
         if(next_video_id != '') {

             //remove 'td_' from the beginning of the string if necessary
             if(next_video_id.substring(0, 3) == 'td_') {
                 next_video_id = next_video_id.substring(3);
             }

             return next_video_id;
         }

         return '';
    },



    //add pause button playlist control
    td_playlist_add_pause_control: function td_playlist_add_pause_control(wrapper_class){
        jQuery(wrapper_class).removeClass('td-sp-video-play').addClass('td-sp-video-pause');
    },

    //add play button playlist control
    td_playlist_add_play_control: function td_playlist_add_play_control(wrapper_class){
        jQuery(wrapper_class).removeClass('td-sp-video-pause').addClass('td-sp-video-play');
    }
 }

/**
 * Infinite loader v1.0 by Radu O. / tagDiv
 */
"use strict";

/**
 * - register and keep track of dom elements
 * - calculate position from the top of each element
 * - monitor on scroll event
 *  - if one or more of the dom elements is visible
 *  - fire the callback for that dom element! only ONCE
 */


var td_infinite_loader = {

    has_items: false, // this class will only work when this flag is true. If we don't have any items, all the calculations on scroll will be disabled by this flag

    items: [], //the array that has all the items

    // one item object (instantiable)
    item: function() {
        this.uid=''; // - an unique id of the item, usually is the block id!
        this.jquery_obj = ''; //find the item easily for animation ??
        this.bottom_top = 0;  //distance from the bottom of the dom element to top - computed in - @see td_infinite_loader.compute_top_distances();
        this.is_visible_callback_enabled = true; //the callback will fire only when this flag is true. We set it to true after the blocks ajax run @see td_block_ajax_loading_end
        this.is_visible_callback = function () { //callback when the item's bottom is visible :)

        };
    },

    add_item: function(item) {
        td_infinite_loader.has_items = true; //put the flag that we have items
        td_infinite_loader.items.push(item);
    },


    /**
     * foreach element from items, compute the distances from the top
     *  - this is done only on load or when the page is resized
     */
    compute_top_distances: function compute_top_distances() {

        //check the flag to see if we have any items
        if (td_infinite_loader.has_items === false) {
            return;
        }

        jQuery.each(td_infinite_loader.items, function(index, v_event) {
            var top_top = td_infinite_loader.items[index].jquery_obj.offset().top;
            //top of document to bottom of element
            td_infinite_loader.items[index].bottom_top = top_top + td_infinite_loader.items[index].jquery_obj.height();
        });

        //also calculate the events
        td_infinite_loader.compute_events();

    },


    /**
     * calculate if we have to fire an event like is_visible_callback()
     *  - this is done on scroll and on resize!
     */
    compute_events: function compute_events() {
        //check the flag to see if we have any items
        if (td_infinite_loader.has_items === false) {
            return;
        }

        var top_to_viewport_bottom = jQuery(window).height() + jQuery(window).scrollTop();


        jQuery.each(td_infinite_loader.items, function(index, item) {
            if (td_infinite_loader.items[index].bottom_top < top_to_viewport_bottom + 400) {

                //check to see if we can call the callback again
                if (td_infinite_loader.items[index].is_visible_callback_enabled === true) {
                    td_infinite_loader.items[index].is_visible_callback_enabled = false;
                    //the call
                    td_infinite_loader.items[index].is_visible_callback();
                }
            }


        });
    },


    /**
     * enables the is_visible_callback - it is called by td_blocks.js only when a block receives an infinite loading ajax reply
     * @param $item_uid - an unique id of the item, usually is the block id!
     * @see td_block_ajax_loading_end
     */
    enable_is_visible_callback: function enable_is_visible_callback($item_uid) {
        jQuery.each(td_infinite_loader.items, function(index, item) {
            if (item.uid === $item_uid) {
                td_infinite_loader.items[index].is_visible_callback_enabled = true;
                return false; //brake jquery each
            }
        });
    }

};






/**
 * we are using td_ajax_infinite to know when to trigger a block loading
 */
jQuery('.td_ajax_infinite').each(function() {

    // create a new infinite loader item
    var td_infinite_loader_item = new td_infinite_loader.item();

    td_infinite_loader_item.jquery_obj = jQuery(this);
    td_infinite_loader_item.uid = jQuery(this).data('td_block_id');
    td_infinite_loader_item.is_visible_callback = function () {      // the is_visible callback is called when we have to pull new content up because the element is visible
        // get the current block object
        var current_block_obj = td_getBlockObjById(td_infinite_loader_item.jquery_obj.data('td_block_id'));


        // if we don't have a infinite stop limit or if we have one we dint' hit it yet
        if (current_block_obj.ajax_pagination_infinite_stop == '' || current_block_obj.td_current_page < (parseInt(current_block_obj.ajax_pagination_infinite_stop) + 1)) {

            // get the block data and increment the pagination
            current_block_obj.td_current_page++;
            td_ajax_do_block_request(current_block_obj, 'infinite_load');

        } else {

            //show the load more button
            setTimeout(function(){
                jQuery('#infinite-lm-' + current_block_obj.id).show();
            }, 400);

        }




    };
    td_infinite_loader.add_item(td_infinite_loader_item);
});


//compute to
jQuery(window).load(function() {
    td_infinite_loader.compute_top_distances();
});

jQuery().ready(function() {
    td_infinite_loader.compute_top_distances();
});


/**
 * Created by ra on 10/7/2014.
 */


var td_debug = {

    td_debug_visible: false,

    /**
     * replaces the log
     * @param msg
     */
    log_live: function log_live(msg) {
        td_debug._show_debug_window();
        jQuery('#td_debug').html(msg);
    },


    /**
     * @todo log with history not implemented yet
     */
    log : function log() {
        td_debug._show_debug_window();

    },


    _show_debug_window: function _show_debug_window() {
        if (td_debug.td_debug_visible === false) {
            td_debug.td_debug_visible = true;
            jQuery('body').append('<div id="td_debug" style="position: fixed; bottom: 0; left:0; width:200px; height:50px; background-color: black; color: white; z-index: 99999; padding: 5px; font-size:11px;"></div>');
        }

    }
};





;"use strict";var BJLL_options=BJLL_options||{},BJLL={_ticking:!1,check:function(){if(!BJLL._ticking){BJLL._ticking=!0,"undefined"==typeof BJLL.threshold&&(BJLL.threshold="undefined"!=typeof BJLL_options.threshold?parseInt(BJLL_options.threshold):200);var winH=document.documentElement.clientHeight||body.clientHeight,updated=!1,els=document.getElementsByClassName("lazy-hidden");[].forEach.call(els,function(el){var elemRect=el.getBoundingClientRect();winH-elemRect.top+BJLL.threshold>0&&(BJLL.show(el),updated=!0)}),BJLL._ticking=!1,updated&&BJLL.check()}},show:function(el){el.className=el.className.replace(/(?:^|\s)lazy-hidden(?!\S)/g,""),el.addEventListener("load",function(){BJLL.customEvent(el,"lazyloaded")},!1);var type=el.getAttribute("data-lazy-type");if("image"==type)el.setAttribute("src",el.getAttribute("data-lazy-src")),null!=el.getAttribute("data-srcset")&&el.setAttribute("srcset",el.getAttribute("data-srcset"));else if("iframe"==type){var s=el.getAttribute("data-lazy-src"),div=document.createElement("div");div.innerHTML=s;var iframe=div.firstChild;el.parentNode.replaceChild(iframe,el)}},customEvent:function(el,eventName){var event;document.createEvent?(event=document.createEvent("HTMLEvents"),event.initEvent(eventName,!0,!0)):(event=document.createEventObject(),event.eventType=eventName),event.eventName=eventName,document.createEvent?el.dispatchEvent(event):el.fireEvent("on"+event.eventType,event)}};window.addEventListener("load",BJLL.check,!1),window.addEventListener("scroll",BJLL.check,!1),window.addEventListener("resize",BJLL.check,!1),document.getElementsByTagName("body").item(0).addEventListener("post-load",BJLL.check,!1);