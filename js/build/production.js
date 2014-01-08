// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

/*!
 * jQuery wmuSlider v2.1
 * 
 * Copyright (c) 2011 Brice Lechatellier
 * http://brice.lechatellier.com/
 *
 * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
 */
(function(a){a.fn.wmuSlider=function(b){var c={animation:"fade",animationDuration:600,slideshow:true,slideshowSpeed:7000,slideToStart:0,navigationControl:true,paginationControl:true,previousText:"Previous",nextText:"Next",touch:false,slide:"article",items:1};var b=a.extend(c,b);return this.each(function(){var p=a(this);var o=b.slideToStart;var f=p.find(".wmuSliderWrapper");var g=p.find(b.slide);var d=g.length;var k;var l;var e;var j=function(t,u,v){if(e){return false}e=true;o=t;var s=a(g[t]);p.animate({height:s.innerHeight()});if(b.animation=="fade"){g.css({position:"absolute",opacity:0});s.css("position","relative");s.animate({opacity:1},b.animationDuration,function(){e=false})}else{if(b.animation=="slide"){if(!u){f.animate({marginLeft:-p.width()/b.items*t},b.animationDuration,function(){e=false})}else{if(t==0){f.animate({marginLeft:-p.width()/b.items*d},b.animationDuration,function(){f.css("marginLeft",0);e=false})}else{if(!v){f.css("marginLeft",-p.width()/b.items*d)}f.animate({marginLeft:-p.width()/b.items*t},b.animationDuration,function(){e=false})}}}}if(l){l.find("a").each(function(w){if(w==t){a(this).addClass("wmuActive")}else{a(this).removeClass("wmuActive")}})}p.trigger("slideLoaded",t)};if(b.navigationControl){var i=a('<a class="wmuSliderPrev">'+b.previousText+"</a>");i.click(function(s){s.preventDefault();clearTimeout(k);if(o==0){j(d-1,true)}else{j(o-1)}});p.append(i);var m=a('<a class="wmuSliderNext">'+b.nextText+"</a>");m.click(function(s){s.preventDefault();clearTimeout(k);if(o+1==d){j(0,true)}else{j(o+1)}});p.append(m)}if(b.paginationControl){l=a('<ul class="wmuSliderPagination"></ul>');a.each(g,function(s){l.append('<li><a href="#">'+s+"</a></li>");l.find("a:eq("+s+")").click(function(t){t.preventDefault();clearTimeout(k);j(s)})});p.append(l)}if(b.slideshow){var r=function(){if(o+1<d){j(o+1)}else{j(0,true)}k=setTimeout(r,b.slideshowSpeed)};k=setTimeout(r,b.slideshowSpeed)}var h=function(){var s=a(g[o]);p.animate({height:s.innerHeight()});if(b.animation=="slide"){g.css({width:p.width()/b.items});f.css({marginLeft:-p.width()/b.items*o,width:p.width()*g.length})}};var n=function(t,s,u,v){clearTimeout(k);if(s=="move"&&(u=="left"||u=="right")){if(u=="right"){if(o==0){f.css("marginLeft",(-d*p.width()/b.items)+v)}else{f.css("marginLeft",(-o*p.width()/b.items)+v)}}else{if(u=="left"){f.css("marginLeft",(-o*p.width()/b.items)-v)}}}else{if(s=="cancel"){if(u=="right"&&o==0){f.animate({marginLeft:-d*p.width()/b.items},b.animationDuration)}else{f.animate({marginLeft:-o*p.width()/b.items},b.animationDuration)}}else{if(s=="end"){if(u=="right"){if(o==0){j(d-1,true,true)}else{j(o-1)}}else{if(u=="left"){if(o+1==d){j(0,true)}else{j(o+1)}}else{f.animate({marginLeft:-o*p.width()/b.items},b.animationDuration)}}}}}};if(b.touch&&b.animation=="slide"){if(!a.isFunction(a.fn.swipe)){a.ajax({url:"jquery.touchSwipe.min.js",async:false})}if(a.isFunction(a.fn.swipe)){p.swipe({triggerOnTouchEnd:false,swipeStatus:n,allowPageScroll:"vertical"})}}var q=function(){var s=a(g[o]);var t=s.find("img");t.load(function(){f.show();p.animate({height:s.innerHeight()})});if(b.animation=="fade"){g.css({position:"absolute",width:"100%",opacity:0});a(g[o]).css("position","relative")}else{if(b.animation=="slide"){if(b.items>d){b.items=d}g.css("float","left");g.each(function(w){var v=a(this);v.attr("data-index",w)});for(var u=0;u<b.items;u++){f.append(a(g[u]).clone())}g=p.find(b.slide)}}h();p.trigger("hasLoaded");j(o)};q();a(window).resize(h);p.bind("loadSlide",function(t,s){clearTimeout(k);j(s)})})}})(jQuery);


/*! Smooth Scroll - v1.4.7 - 2012-10-29
* Copyright (c) 2012 Karl Swedberg; Licensed MIT, GPL */

(function($) {

var version = '1.4.7',
    defaults = {
      exclude: [],
      excludeWithin:[],
      offset: -78,
      direction: 'top', // one of 'top' or 'left'
      scrollElement: null, // jQuery set of elements you wish to scroll (for $.smoothScroll).
                          //  if null (default), $('html, body').firstScrollable() is used.
      scrollTarget: null, // only use if you want to override default behavior
      beforeScroll: function() {},  // fn(opts) function to be called before scrolling occurs. "this" is the element(s) being scrolled
      afterScroll: function() {},   // fn(opts) function to be called after scrolling occurs. "this" is the triggering element
      easing: 'swing',
      speed: 400,
      autoCoefficent: 2 // coefficient for "auto" speed
    },

    getScrollable = function(opts) {
      var scrollable = [],
          scrolled = false,
          dir = opts.dir && opts.dir == 'left' ? 'scrollLeft' : 'scrollTop';

      this.each(function() {

        if (this == document || this == window) { return; }
        var el = $(this);
        if ( el[dir]() > 0 ) {
          scrollable.push(this);
        } else {
          // if scroll(Top|Left) === 0, nudge the element 1px and see if it moves
          el[dir](1);
          scrolled = el[dir]() > 0;
          if ( scrolled ) {
            scrollable.push(this);
          }
          // then put it back, of course
          el[dir](0);
        }
      });

      // If no scrollable elements, fall back to <body>,
      // if it's in the jQuery collection
      // (doing this because Safari sets scrollTop async,
      // so can't set it to 1 and immediately get the value.)
      if (!scrollable.length) {
        this.each(function(index) {
          if (this.nodeName === 'BODY') {
            scrollable = [this];
          }
        });
      }

      // Use the first scrollable element if we're calling firstScrollable()
      if ( opts.el === 'first' && scrollable.length > 1 ) {
        scrollable = [ scrollable[0] ];
      }

      return scrollable;
    },
    isTouch = 'ontouchend' in document;

$.fn.extend({
  scrollable: function(dir) {
    var scrl = getScrollable.call(this, {dir: dir});
    return this.pushStack(scrl);
  },
  firstScrollable: function(dir) {
    var scrl = getScrollable.call(this, {el: 'first', dir: dir});
    return this.pushStack(scrl);
  },

  smoothScroll: function(options) {
    options = options || {};
    var opts = $.extend({}, $.fn.smoothScroll.defaults, options),
        locationPath = $.smoothScroll.filterPath(location.pathname);

    this
    .unbind('click.smoothscroll')
    .bind('click.smoothscroll', function(event) {
      var link = this,
          $link = $(this),
          exclude = opts.exclude,
          excludeWithin = opts.excludeWithin,
          elCounter = 0, ewlCounter = 0,
          include = true,
          clickOpts = {},
          hostMatch = ((location.hostname === link.hostname) || !link.hostname),
          pathMatch = opts.scrollTarget || ( $.smoothScroll.filterPath(link.pathname) || locationPath ) === locationPath,
          thisHash = escapeSelector(link.hash);

      if ( !opts.scrollTarget && (!hostMatch || !pathMatch || !thisHash) ) {
        include = false;
      } else {
        while (include && elCounter < exclude.length) {
          if ($link.is(escapeSelector(exclude[elCounter++]))) {
            include = false;
          }
        }
        while ( include && ewlCounter < excludeWithin.length ) {
          if ($link.closest(excludeWithin[ewlCounter++]).length) {
            include = false;
          }
        }
      }

      if ( include ) {
        event.preventDefault();

        $.extend( clickOpts, opts, {
          scrollTarget: opts.scrollTarget || thisHash,
          link: link
        });

        $.smoothScroll( clickOpts );
      }
    });

    return this;
  }
});

$.smoothScroll = function(options, px) {
  var opts, $scroller, scrollTargetOffset, speed,
      scrollerOffset = 0,
      offPos = 'offset',
      scrollDir = 'scrollTop',
      aniProps = {},
      aniOpts = {},
      scrollprops = [];


  if (typeof options === 'number') {
    opts = $.fn.smoothScroll.defaults;
    scrollTargetOffset = options;
  } else {
    opts = $.extend({}, $.fn.smoothScroll.defaults, options || {});
    if (opts.scrollElement) {
      offPos = 'position';
      if (opts.scrollElement.css('position') == 'static') {
        opts.scrollElement.css('position', 'relative');
      }
    }
  }

  opts = $.extend({link: null}, opts);
  scrollDir = opts.direction == 'left' ? 'scrollLeft' : scrollDir;

  if ( opts.scrollElement ) {
    $scroller = opts.scrollElement;
    scrollerOffset = $scroller[scrollDir]();
  } else {
    $scroller = $('html, body').firstScrollable();
  }

  // beforeScroll callback function must fire before calculating offset
  opts.beforeScroll.call($scroller, opts);

  scrollTargetOffset = (typeof options === 'number') ? options :
                        px ||
                        ( $(opts.scrollTarget)[offPos]() &&
                        $(opts.scrollTarget)[offPos]()[opts.direction] ) ||
                        0;

  aniProps[scrollDir] = scrollTargetOffset + scrollerOffset + opts.offset;
  speed = opts.speed;

  // automatically calculate the speed of the scroll based on distance / coefficient
  if (speed === 'auto') {

    // if aniProps[scrollDir] == 0 then we'll use scrollTop() value instead
    speed = aniProps[scrollDir] || $scroller.scrollTop();

    // divide the speed by the coefficient
    speed = speed / opts.autoCoefficent;
  }

  aniOpts = {
    duration: speed,
    easing: opts.easing,
    complete: function() {
      opts.afterScroll.call(opts.link, opts);
    }
  };

  if (opts.step) {
    aniOpts.step = opts.step;
  }

  if ($scroller.length) {
    $scroller.stop().animate(aniProps, aniOpts);
  } else {
    opts.afterScroll.call(opts.link, opts);
  }
};

$.smoothScroll.version = version;
$.smoothScroll.filterPath = function(string) {
  return string
    .replace(/^\//,'')
    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
    .replace(/\/$/,'');
};

// default options
$.fn.smoothScroll.defaults = defaults;

function escapeSelector (str) {
  return str.replace(/(:|\.)/g,'\\$1');
}

})(jQuery);


/*!
 * jQuery Scrollspy Plugin
 * Author: @sxalexander
 * Licensed under the MIT license
 */


;(function ( $, window, document, undefined ) {

    $.fn.extend({
      scrollspy: function ( options ) {
        
          var defaults = {
            min: 0,
            max: 0,
            mode: 'vertical',
            buffer: 0,
            container: window,
            onEnter: options.onEnter ? options.onEnter : [],
            onLeave: options.onLeave ? options.onLeave : [],
            onTick: options.onTick ? options.onTick : []
          }
          
          var options = $.extend( {}, defaults, options );

          return this.each(function (i) {

              var element = this;
              var o = options;
              var $container = $(o.container);
              var mode = o.mode;
              var buffer = o.buffer;
              var enters = leaves = 0;
              var inside = false;
                            
              /* add listener to container */
              $container.bind('scroll', function(e){
                  var position = {top: $(this).scrollTop(), left: $(this).scrollLeft()};
                  var xy = (mode == 'vertical') ? position.top + buffer : position.left + buffer;
                  var max = o.max;
                  var min = o.min;
                  
                  /* fix max */
                  if($.isFunction(o.max)){
                    max = o.max();
                  }

                  /* fix max */
                  if($.isFunction(o.min)){
                    min = o.min();
                  }

                  if(max == 0){
                      max = (mode == 'vertical') ? $container.height() : $container.outerWidth() + $(element).outerWidth();
                  }
                  
                  /* if we have reached the minimum bound but are below the max ... */
                  if(xy >= min && xy <= max){
                    /* trigger enter event */
                    if(!inside){
                       inside = true;
                       enters++;
                       
                       /* fire enter event */
                       $(element).trigger('scrollEnter', {position: position})
                       if($.isFunction(o.onEnter)){
                         o.onEnter(element, position);
                       }
                      
                     }
                     
                     /* triger tick event */
                     $(element).trigger('scrollTick', {position: position, inside: inside, enters: enters, leaves: leaves})
                     if($.isFunction(o.onTick)){
                       o.onTick(element, position, inside, enters, leaves);
                     }
                  }else{
                    
                    if(inside){
                      inside = false;
                      leaves++;
                      /* trigger leave event */
                      $(element).trigger('scrollLeave', {position: position, leaves:leaves})

                      if($.isFunction(o.onLeave)){
                        o.onLeave(element, position);
                      }
                    }
                  }
              }); 

          });
      }

    })

    
})( jQuery, window );



// init slider on 'home page'
$('.wmuSlider').wmuSlider();

// init smooth scroll on links
$('.subnav-contain a').smoothScroll();
