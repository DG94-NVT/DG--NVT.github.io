$(document).ready(function() {
    $('.banner__slide').owlCarousel({
        items: 1,
        loop: true,
        // margin: 10,
        autoplay: true,
        // autoplayTimeout: 3000,
        // autoplaySpeed: 1000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        slideSpeed: 300,
        paginationSpeed: 400
    })

    /* room-suite__slide */

    $('.room-suite__slide').owlCarousel({
        items: 1,
        loop: true,
        // margin: 10,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplaySpeed: 500,

    })

    /* offer-box__slide */

    $('.offer-box__slide').owlCarousel({
        items: 1,
        loop: true,
        // margin: 10,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 500,

    })


    /* gallery slide */

    $('.gallery-slide').owlCarousel({
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 500,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }

    })

    /* review slide */

    $('.review__slide').owlCarousel({
        items: 1,
        slideBy: 1,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 600,
        smartSpeed: 800,

        navText: ['<span class="fal fa-long-arrow-left"> </span>', '<span class="fal fa-long-arrow-right"> </span>'],
        responsiveClass: true,
        responsive: {
            0: {
                nav: false
            },
            992: {
                nav: true
            },
            1000: {
                nav: true
            }
        }
    })

    $('.slider-avatar').owlCarousel({
        items: 1,
        loop: true,
        center: true,
        margin: 10,
        autoplay: true,
        nav: false,
        dots: false,
        URLhashListener: true,
        autoplayHoverPause: true,
        startPosition: 'URLHash'
    });

    $('.slider-thumb').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        navText: ['<span class="fas fa-chevron-left fa-2x"></span>', '<span class="fas fa-chevron-right fa-2x"></span>'],
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 4
            },
            1000: {
                items: 4
            }
        }

    })

    $('.serv-slide').owlCarousel({
        loop: true,
        margin: 40,
        nav: false,
        dots: false,
        navText: ['<span class="fas fa-chevron-left fa-2x"></span>', '<span class="fas fa-chevron-right fa-2x"></span>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3,
                mouseDrag: false,
            }
        }

    })

})