$(function () {
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

    $('.form').on('submit', function (e) {
        var requiredInp = $(".required_input");
        if (!this.checkValidity()) {
            e.preventDefault();
            if (requiredInp.val() == '') {
                requiredInp.addClass("error_input");
                $(".error_input").attr("placeholder", "Поле обязательно для заполнения");
            }
            requiredInp.each(function () {
                $(this).on("focus", function () {
                    $(this).removeAttr("placeholder");
                    $(this).removeClass("error_input");
                })
            })
        }
    });

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

    $(".more_info").on("click", function () {
        $(".more_info_content").show();
        $(this).hide();
    })
});