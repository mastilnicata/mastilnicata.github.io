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

if(document.querySelector('.trigger'))
{
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
}


function activateTypewriter()
{
  //(Array.from(document.getElementsByClassName("animated-banner"))).forEach(function(banner){
    (Array.from(document.getElementsByClassName("typewriter"))).forEach(function(typewriter){
        var texts = typewriter
            .getElementsByClassName("typewritertexts")[0]
            .getElementsByTagName("span");
    
        var text=0; var char=0;
        var speed = 35;
        var prewait = 0; var prewwaittime = 500;
        var postwait = 0; var postwaittime = 2000;

        var textContentElement = typewriter.getElementsByClassName("textcontent");
        if(textContentElement.length > 0)
        {
            setInterval(function(){
                var curtext = texts[text].innerHTML;
                if((char < curtext.length) || (prewait <= prewwaittime))
                {
                    if(prewait <= prewwaittime)
                        prewait += speed;
                    else if (char < curtext.length)
                        textContentElement[0].innerHTML += curtext[char++];
                }
                else
                {
                    if(text < texts.length -1)
                    {
                        textContentElement[0].innerHTML += "<br/>";
                        char = 0;
                        text ++;
                    }
                    else
                    {
                        if(postwait <= postwaittime)
                            postwait += speed;
                        else
                        {
                            var content = textContentElement[0].innerHTML;
                            if(content.length > 0)
                                textContentElement[0].innerHTML = content.substr(0, content.length-2);
                            else
                            {
                                char = 0;
                                text = 0;
                                postwait = 0;
                                prewait = 0;
                            }
                        }
                    }
                }
            }, speed);
        }
    });
  //});
}

jQuery(window).load(function() {
    AOS.refreshHard();
});

jQuery
(document).ready(function($) {
    activateTypewriter();

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
    duration: 500,
    delay: 100,
    easing: 'ease-in-out',
    once: true
  });
