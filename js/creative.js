(function($) {
    "use strict"; // Start of use strict

    $('a.brand-title').click(function(e) {
        e.preventDefault();
        $('html,body').stop().animate({ scrollTop: 0 }, 1250, 'easeInOutExpo');
    });

    $('a.page-scroll').bind('click', function(event) {
        var connect = $(this).attr('href');
        var position = $(connect).offset().top;
        $('body').stop().animate({
            scrollTop: position - 50
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });


    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });


    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);
    sr.reveal('.sr-coach', { 
        duration: 600 
    }, 50);

    $('.list-group-item > ul').hide();
    $('.list-group-item > h4').click(function() {
        $(this).parent().find('ul').slideToggle();
        $(this).parent().siblings().find('ul').slideUp();
    })

})(jQuery);
