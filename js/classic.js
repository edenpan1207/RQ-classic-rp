(function($) {
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


})(jQuery);
