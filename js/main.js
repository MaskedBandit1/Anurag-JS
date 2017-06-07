(function($) {

    "use strict";

    var htmlbody = $("html , body");
    var jswindow =$(window);
    
    /* ---------------------------------------------------
        1 - Preloading animate js
    ----------------------------------------------------- */
	setTimeout(function(){
        htmlbody.addClass('loaded');
    }, 3000);

	/* ---------------------------------------------------
        3 - Sticky Menu
    ----------------------------------------------------- */
    $("#menubar-area").sticky({topSpacing:0});
	
	/* ---------------------------------------------------
        4 - Hide menu after clicking on a link 
    ----------------------------------------------------- */
    $("ul.nav li a").on("click", function () {
        $("#myNavbar").collapse("hide");
    });
	
	/* ---------------------------------------------------
        5 - jquery scroll spy
    ----------------------------------------------------- */
    jswindow.on("scroll", function () {
        htmlbody.scrollspy({
            target: '#myNavbar',
            offset: 94
        }); 
    });
	
	/* ---------------------------------------------------
        6 - Jquery Smooth Scroll
    ----------------------------------------------------- */
    $("li.smooth-menu > a").on("click", function (event) {
        var $anchor = $(this);
        var headerH = '56';
        htmlbody.stop().animate({
            scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1200, 'easeInOutExpo');

        event.preventDefault();
    }); 
	
	/* ---------------------------------------------------
        7 - Wow Js Active Jquery
    ----------------------------------------------------- */
    var wow = new WOW(
        {
        boxClass:     'wow', 
        animateClass: 'animated',
        offset:       0,    
        mobile:       true, 
        live:         true,  
        callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null
        }
    );
    wow.init(); 
	
	/* ---------------------------------------------------
				8 - FunFact Countingup Jquery
    ----------------------------------------------------- */
    $('.counter').counterUp({
        delay:10,
        time:5000
    });
	
	/* ---------------------------------------------------
				9 - Owl Carousel Jquery
    ----------------------------------------------------- */
	$('.fadeOut').owlCarousel({
        items: 1,
		autoplay: true,
        autoPlaySpeed: 100,
        autoPlayTimeout:100,
        animateOut: 'fadeOut',
        loop: true,
        margin: 10,
    });

    /* ---------------------------------------------------
                10 - Mixit-up  Jquery
    ----------------------------------------------------- */
    var containerEl = document.querySelector('#mixit-container');

        var mixer = mixitup(containerEl, {
            animation: {
                effects: 'fade scale stagger(50ms)'
            },
            load: {
                filter: 'none' 
            }
        });

        containerEl.classList.add('mixitup-ready');

        mixer.show()
            .then(function() {

                mixer.configure({
                    animation: {
                        effects: 'fade scale'
                    }
                });
            });
			
	/* ---------------------------------------------------
                11 - Portfolio Lightbox Jquery
    ----------------------------------------------------- */			
		$( '.launch-overlay' ).simpleOverlay();
		
		
	/* ---------------------------------------------------
                12 - Scroll Down Jquery
    ----------------------------------------------------- */

    var scrolltop = $("#scrolltop")

	jswindow.on('scroll',function(){
		if($(this).scrollTop()>650){
			scrolltop.fadeIn();
		}else{
			scrolltop.fadeOut();
		}
	});
	
	scrolltop.on('click',function(){
		htmlbody.animate({scrollTop:0},1000);
	});
    

})(jQuery);