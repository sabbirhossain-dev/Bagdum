//fixed start//

$(window).scroll(function () {
    $scrollamout = $(window).scrollTop();

    if ($scrollamout > 10) {
        $(".menu").addClass("sticky")
    } else {
        $(".menu").removeClass("sticky")
    }

})

//fixed end//





//client-slider start//

$('.client-slider').slick({
    dots: true,
    infinite: true,
    autoplay:true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
    },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
    },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


//client-slider end//





//counter-part js start

$('.counter').counterUp({
    delay: 10,
    time: 1000
});


//counter-part js end
