$(function () {
    // slick slide activate
    $(".banner__slider_content").slick({
        slidesToshow: 1,
        slideToScroll: 1,
        arrows: true,
        infinite: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [{
            breakpoint: 1024,
            settings: {
                dots: true,
                arrows: false,
            }
        }]
    });

    //active category

    $(".main_category p ").on("click", function () {
        $(this).toggleClass("active_category");
    });

    // Validate form
    $('.form').on('submit', function (e) {
        var requiredInp = $(".required_input");
        if (!this.checkValidity()) {
            e.preventDefault();
            requiredInp.each(function () {
                if ($(this).val() == '') {
                    $(this).addClass("error_input");
                    $(".error_input").attr("placeholder", "Поле обязательно для заполнения");
                }
                $(this).on("focus", function () {
                    $(this).removeAttr("placeholder");
                    $(this).removeClass("error_input");
                })
            })
        }
    });

    // Popup form
    $("#callback").on("click", function (e) {
        e.preventDefault();
        $(".feedback__form_content").animate({
            opacity: "1"
        }, 1000);
        $(".feedback__form_content").css("visibility", "visible");
        $(".feedback__form_overlay").show();
    });

    $(".feedback__form_close, .feedback__form_overlay").on("click", function () {
        $(".feedback__form_content").css("visibility", "hidden");
        $(".feedback__form_content").animate({
            opacity: "0"
        }, 1000);
        $(".feedback__form_overlay").hide();
    });
    // mobile button more info
    $(".more_info").on("click", function () {
        $(".more_info_content").show();
        $(this).hide();
    })
});