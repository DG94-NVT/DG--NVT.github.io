$(document).ready(function() {
    /* main-menu */
    $(".menu-active").click(function(e) {
        e.preventDefault();
        $('.menu-res').addClass("active");
        $('.menu-overlay').addClass("active");
        $(".close-menu").addClass("rotate");
    });

    $('.menu-overlay').click(function() {
        $(this).removeClass("active");
        $('.menu-res').removeClass("active");
        $(".close-menu").removeClass("rotate");
    });
    $('.close-menu').click(function() {
        $(".menu-overlay").removeClass("active");
        $('.menu-res').removeClass("active");
        $(this).removeClass("rotate");
    });

    $(".nav__link").click(function(e) {
        e.preventDefault();
        $(this).find(".rotate-icon ").toggleClass("active");
        $(this).parent("li").find(".sub-menu").slideToggle();

    });

    /* fixed menu on scroll */
    $(window).scroll(function() {
        var scroll_top = $(window).scrollTop();
        var header_hight = $(".header").height();

        if (scroll_top > header_hight) {
            $(".header").addClass("fixed");
        } else {
            $(".header").removeClass("fixed");
        }
    });

    /* fancybox gallery */
    // $(".gallery-slide__link").fancybox();
})

$(".language-item").click(function() {
    var language = $(this).text();
    $(".current-language").text(language);


})


/* ---- list room ----- */

$(function() {

    $('#checkin').daterangepicker({
        singleDatePicker: true,
        autoUpdateInput: true,
        autoApply: true,
        locale: {
            cancelLabel: 'Clear',
            format: 'DD/MM/YYYY'
        },
    });

    // $('input[name="departure"]').on('apply.daterangepicker', function(ev, picker) {
    //     $(this).val(picker.startDate.format('DD/MM/YYYY'));
    // });

    // $('input[name="departure"]').on('cancel.daterangepicker', function(ev, picker) {
    //     $(this).val('');
    // });

    $('#checkout').daterangepicker({
        singleDatePicker: true,
        autoUpdateInput: true,
        autoApply: true,
        locale: {
            cancelLabel: 'Clear',
            format: 'DD/MM/YYYY'
        }
    });

    // $('input[name="departure"]').on('apply.daterangepicker', function(ev, picker) {
    //     $(this).val(picker.startDate.format('DD/MM/YYYY'));
    // });

    // $('input[name="departure"]').on('cancel.daterangepicker', function(ev, picker) {
    //     $(this).val('');
    // });

    /* gallery page */
    // function fadeInUP() {
    //     $(".tab-pane").each(function(index, element) {
    //         if ($(this).hasClass("active")) {
    //             $(this).find(".gallery-slide__item").addClass("fadeInUP");
    //         } else {
    //             $(this).find(".gallery-slide__item").removeClass("fadeInUP");
    //         }
    //     });
    // };
    // fadeInUP();

    // $(".tab-control .nav-link").click(function() {
    //     fadeInUP();
    // })


});