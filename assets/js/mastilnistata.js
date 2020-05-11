//fix the heights of carousels.
//source: https://snook.ca/archives/javascript/normalize-bootstrap-carousel-heights
function normalizeSlideHeights() {
    //alert("normalizing");
    $('.carousel').each(function(){
      var items = $('.carousel-item', this);
      // reset the height
      items.css('min-height', 0);
      // set the height
      var maxHeight = Math.max.apply(null, 
          items.map(function(){
              return $(this).outerHeight()}).get() );
      items.css('min-height', maxHeight + 'px');
    })
}

(new IntersectionObserver(function(e,o){
    if (e[0].intersectionRatio > 0){
        document.documentElement.removeAttribute('class');
        document.querySelector(".navbar").classList.replace("navbar-dark","navbar-light");
        //document.querySelector("#brand-logo").src="<?php bloginfo('template_url'); ?>/images/brand24x24.png"
    } else {
        document.documentElement.setAttribute('class','stuck');
        document.querySelector(".navbar").classList.replace("navbar-light","navbar-dark");
        //document.querySelector("#brand-logo").src="<?php bloginfo('template_url'); ?>/images/brand24x24-white.png"
    };
})).observe(document.querySelector('.trigger'));

jQuery(window).load(function() {
    AOS.refreshHard();
});

jQuery
(document).ready(function($) {
    $('*[class*="m-aos"]').each(function(){
        var aosdata = /m-aos\-(\S*)/g.exec(this.className);
        if(aosdata.length > 1)
        {
            $(this).attr("data-aos", aosdata[1]);
        }
    });

    var deviceAgent = navigator.userAgent.toLowerCase();
    if (deviceAgent.match(/(iphone|ipod|ipad)/)) {
        $("html").addClass("ios");
        $("html").addClass("mobile");
    }
    if (navigator.userAgent.search("MSIE") >= 0) {
        $("html").addClass("ie");
    } else if (navigator.userAgent.search("Chrome") >= 0) {
        $("html").addClass("chrome");
    } else if (navigator.userAgent.search("Firefox") >= 0) {
        $("html").addClass("firefox");
    } else if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
        $("html").addClass("safari");
    } else if (navigator.userAgent.search("Opera") >= 0) {
        $("html").addClass("opera");
    }

    normalizeSlideHeights();

    $(window).on('resize', function(){
        normalizeSlideHeights();
    });
});

AOS.init({
    duration: 1000,
    delay: 200,
    easing: 'ease-in-out',
    once: true
  });
