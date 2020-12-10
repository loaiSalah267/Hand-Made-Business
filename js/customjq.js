$(document).ready(function () {

    //addClass active to the nav bar
    $('.headTop li a').click(function () {
        /*
        $('.headTop a').removeClass('active');

        $(this).addClass('active');
        */
        $(this).addClass('active').parent().siblings().find('a').removeClass('active')
    });

    //button to scroll to top

    $(window).scroll(function () {

        var button = $('.header span');

        if ($(window).scrollTop() >= 1000) {
            button.fadeIn(400);
        } else {
            button.fadeOut(400);
        }

    });

    $('.header span').click(function (e) {
        e.preventDefault();

        $('body, html').animate({

            scrollTop: 0
        }, 600);
    });

    // learn more

    $(".headMid h2").mouseenter(function () {

        $(".headMid h2").css("backgroundColor", "#C5A059")
        $(".headMid h2").css("color", "#FFF")
        $(".headMid h2").css("transition", "500ms")

    })
    $(".headMid h2").mouseleave(function () {

        $(".headMid h2").css("backgroundColor", "")
        $(".headMid h2").css("color", "#FFF")
        $(".headMid h2").css("transition", "500ms")
    })

    // Slide Toggle
    $('.headTop .form .list ul i').click(function () {

        $('.headTop .form .list .slider').slideToggle()
    });

    //img one
    $('.product .container .ProductImg.one').mouseenter(function () {

        $('.product .container .ProductImg .overlayimg .content.one').fadeOut(400)

    });

    $('.product .container .ProductImg.one').click(function () {

        $('.popimg.one').fadeIn(400)
    });

    $('.popimg span').click(function () {

        $('.popimg.one').fadeOut(400)
    });

    $('.product .container .ProductImg.one').mouseleave(function () {

        $('.product .container .ProductImg .overlayimg .content.one').fadeIn(400)
    });
    //img two
    $('.product .container .ProductImg.two').mouseenter(function () {

        $('.product .container .ProductImg .overlayimg .content.two').fadeOut(400)
    });

    $('.product .container .ProductImg.two').click(function () {

        $('.popimg.two').fadeIn(400)
    });

    $('.popimg span').click(function () {

        $('.popimg.two').fadeOut(400)
    });

    $('.product .container .ProductImg.two').mouseleave(function () {

        $('.product .container .ProductImg .overlayimg .content.two').fadeIn(400)
    });
    //img three
    $('.product .container .ProductImg.three').mouseenter(function () {

        $('.product .container .ProductImg .overlayimg .content.three').fadeOut(400)
    });

    $('.product .container .ProductImg.three').click(function () {

        $('.popimg.three').fadeIn(400)
    });

    $('.popimg span').click(function () {

        $('.popimg.three').fadeOut(400)
    });

    $('.product .container .ProductImg.three').mouseleave(function () {

        $('.product .container .ProductImg .overlayimg .content.three').fadeIn(400)
    });
    //img four
    $('.product .container .ProductImg.four').mouseenter(function () {

        $('.product .container .ProductImg .overlayimg .content.four').fadeOut(400)
    });
    $('.product .container .ProductImg.four').click(function () {

        $('.popimg.four').fadeIn(400)
    });

    $('.popimg span').click(function () {

        $('.popimg.four').fadeOut(400)
    });

    $('.product .container .ProductImg.four').mouseleave(function () {

        $('.product .container .ProductImg .overlayimg .content.four').fadeIn(400)
    });
    //img five
    $('.product .container .ProductImg.five').mouseenter(function () {

        $('.product .container .ProductImg .overlayimg .content.five').fadeOut(400)
    });

    $('.product .container .ProductImg.five').click(function () {

        $('.popimg.five').fadeIn(400)
    });

    $('.popimg span').click(function () {

        $('.popimg.five').fadeOut(400)
    });

    $('.product .container .ProductImg.five').mouseleave(function () {

        $('.product .container .ProductImg .overlayimg .content.five').fadeIn(400)
    });
    //img six
    $('.product .container .ProductImg.six').mouseenter(function () {

        $('.product .container .ProductImg .overlayimg .content.six').fadeOut(400)
    });
    $('.product .container .ProductImg.six').click(function () {

        $('.popimg.six').fadeIn(400)
    });

    $('.popimg span').click(function () {

        $('.popimg.six').fadeOut(400)
    });
    $('.product .container .ProductImg.six').mouseleave(function () {

        $('.product .container .ProductImg .overlayimg .content.six').fadeIn(400)
    });


});


$('.subscribeBar span').click(function () {
    $('.login').fadeIn(500)
})

$('.closelog').click(function () {
    $('.login').fadeOut(500)
})