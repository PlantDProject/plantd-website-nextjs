$(window).scroll(function () {
    $(window).scrollTop() >= 20
        ? ($(".sticky").addClass("nav-sticky"), $(".head-white").addClass("d-none"), $(".head-dark").removeClass("d-none"))
        : ($(".sticky").removeClass("nav-sticky"), $(".head-white").removeClass("d-none"), $(".head-dark").addClass("d-none"));
});

$(".slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: !0,
    focusOnSelect: !0,
    touchThreshold: 100,
    arrows: !1,
    responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 1 } },
        { breakpoint: 991, settings: { slidesToShow: 2, slidesToScroll: 1 } },
        { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
});
$(".testi-slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: !0,
    focusOnSelect: !0,
    touchThreshold: 100,
    arrows: !1,
    responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 1 } },
        { breakpoint: 991, settings: { slidesToShow: 2, slidesToScroll: 1 } },
        { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
});
$(".slider-nav").on("afterChange", function (a, e, t) {
    posthog.capture("next-project-slide");
});
$(".testi-slider-nav").on("afterChange", function (a, e, t) {
    posthog.capture("next-testimonial-slide");
});
$(".mobile-slider-nav").on("afterChange", function (a, e, t) {
    posthog.capture("next-how-it-works-slide");
});
$(".mobile-slider-nav").slick({
    centerMode: !0,
    centerPadding: "60px",
    slidesToShow: 1,
    adaptiveHeight: !1,
    dots: !0,
    focusOnSelect: !0,
    touchThreshold: 100,
    arrows: !1,
    draggable: !0,
    responsive: [{ breakpoint: 575.68, settings: { adaptiveHeight: !0, centerPadding: "20px" } }],
});
$(".mobile-slider-nav-work").slick({
    centerMode: !0,
    centerPadding: "60px",
    slidesToShow: 1,
    adaptiveHeight: !1,
    dots: !1,
    focusOnSelect: !0,
    arrows: !1,
    draggable: !0,
    responsive: [{ breakpoint: 575.68, settings: { adaptiveHeight: !0, centerPadding: "30px" } }],
});
$(".detail-data1").addClass("active-content");
$(".slider.how-it-work-slider").on("afterChange", function (a, e, t, o) {
    posthog.capture("to-next-slide"),
        0 === t
            ? ($(".detail-data1").addClass("active-content"), $(".detail-data2, .detail-data3, .detail-data4, .detail-data5, .detail-data6").removeClass("active-content"))
            : 1 === t
                ? ($(".detail-data2").addClass("active-content"), $(".detail-data1, .detail-data3, .detail-data4, .detail-data5, .detail-data6").removeClass("active-content"))
                : 2 === t
                    ? ($(".detail-data3").addClass("active-content"), $(".detail-data2, .detail-data1, .detail-data4, .detail-data5, .detail-data6").removeClass("active-content"))
                    : 3 === t
                        ? ($(".detail-data4").addClass("active-content"), $(".detail-data2, .detail-data3, .detail-data1, .detail-data5, .detail-data6").removeClass("active-content"))
                        : 4 === t
                            ? ($(".detail-data5").addClass("active-content"), $(".detail-data2, .detail-data3, .detail-data4, .detail-data1, .detail-data6").removeClass("active-content"))
                            : 5 === t && ($(".detail-data6").addClass("active-content"), $(".detail-data2, .detail-data3, .detail-data4, .detail-data5, .detail-data1").removeClass("active-content"));
});
$(".mobile-slider-nav-work").on("afterChange", function (a, e, t, o) {
    posthog.capture("to-next-slide"),
        0 === t
            ? ($(".work-images1").addClass("active"),
                $(".work-images2, .work-images3, .work-images4").removeClass("active"),
                $(".arrow-abs1").removeClass("d-none"),
                $(".arrow-abs2, .arrow-abs3, .arrow-abs4").addClass("d-none"),
                $(".arrow1").addClass("hide-arrow"),
                $(".arrow2, .arrow3, .arrow4").removeClass("hide-arrow"),
                $(".mob-work-details1").removeClass("d-none"),
                $(".mob-work-details2, .mob-work-details3, .mob-work-details4").addClass("d-none"))
            : 1 === t
                ? ($(".work-images2").addClass("active"),
                    $(".work-images1, .work-images3, .work-images4").removeClass("active"),
                    $(".arrow-abs2").removeClass("d-none"),
                    $(".arrow-abs1, .arrow-abs3, .arrow-abs4").addClass("d-none"),
                    $(".arrow2").addClass("hide-arrow"),
                    $(".arrow1, .arrow3, .arrow4").removeClass("hide-arrow"),
                    $(".mob-work-details2").removeClass("d-none"),
                    $(".mob-work-details1, .mob-work-details3, .mob-work-details4").addClass("d-none"))
                : 2 === t
                    ? ($(".work-images3").addClass("active"),
                        $(".work-images2, .work-images1, .work-images4").removeClass("active"),
                        $(".arrow-abs3").removeClass("d-none"),
                        $(".arrow-abs2, .arrow-abs1, .arrow-abs4").addClass("d-none"),
                        $(".arrow3").addClass("hide-arrow"),
                        $(".arrow2, .arrow1, .arrow4").removeClass("hide-arrow"),
                        $(".mob-work-details3").removeClass("d-none"),
                        $(".mob-work-details2, .mob-work-details1, .mob-work-details4").addClass("d-none"))
                    : 3 === t &&
                    ($(".work-images4").addClass("active"),
                        $(".work-images2, .work-images3, .work-images1").removeClass("active"),
                        $(".arrow-abs4").removeClass("d-none"),
                        $(".arrow-abs2, .arrow-abs3, .arrow-abs1").addClass("d-none"),
                        $(".arrow4").addClass("hide-arrow"),
                        $(".arrow2, .arrow3, .arrow1").removeClass("hide-arrow"),
                        $(".mob-work-details4").removeClass("d-none"),
                        $(".mob-work-details2, .mob-work-details3, .mob-work-details1").addClass("d-none"));
});
$("a[data-slide]").click(function (a) {
    a.preventDefault();
    var e = $(this).data("slide");
    $(".slider-nav").slick("slickGoTo", e - 1);
});
$(".work-images1").click(function () {
    posthog.capture("to-plant-trees"),
        $(".work-images1").addClass("active"),
        $(".work-images2, .work-images3, .work-images4").removeClass("active"),
        $(".arrow-abs1").removeClass("d-none"),
        $(".arrow-abs2, .arrow-abs3, .arrow-abs4").addClass("d-none"),
        $(".arrow1").addClass("hide-arrow"),
        $(".arrow2, .arrow3, .arrow4").removeClass("hide-arrow"),
        $(".work-details1").removeClass("hide-easemode"),
        $(".work-details1").addClass("show-easemode"),
        $(".work-details2, .work-details3, .work-details4").addClass("hide-easemode");
});
$(".work-images2").click(function () {
    posthog.capture("to-offset-your-footprint"),
        $(".work-images2").addClass("active"),
        $(".work-images1, .work-images3, .work-images4").removeClass("active"),
        $(".arrow-abs2").removeClass("d-none"),
        $(".arrow-abs1, .arrow-abs3, .arrow-abs4").addClass("d-none"),
        $(".arrow2").addClass("hide-arrow"),
        $(".arrow1, .arrow3, .arrow4").removeClass("hide-arrow"),
        $(".work-details2").removeClass("hide-easemode"),
        $(".work-details2").addClass("show-easemode"),
        $(".work-details1, .work-details3, .work-details4").addClass("hide-easemode");
});
$(".work-images3").click(function () {
    posthog.capture("to-refer-and-earn"),
        $(".work-images3").addClass("active"),
        $(".work-images1, .work-images2, .work-images4").removeClass("active"),
        $(".arrow-abs3").removeClass("d-none"),
        $(".arrow-abs2, .arrow-abs1, .arrow-abs4").addClass("d-none"),
        $(".arrow3").addClass("hide-arrow"),
        $(".arrow2, .arrow1, .arrow4").removeClass("hide-arrow"),
        $(".work-details3").removeClass("hide-easemode"),
        $(".work-details3").addClass("show-easemode"),
        $(".work-details2, .work-details1, .work-details4").addClass("hide-easemode");
});
$(".work-images4").click(function () {
    posthog.capture("to-win-with-experiences"),
        $(".work-images4").addClass("active"),
        $(".work-images1, .work-images2, .work-images3").removeClass("active"),
        $(".arrow-abs4").removeClass("d-none"),
        $(".arrow-abs2, .arrow-abs3, .arrow-abs1").addClass("d-none"),
        $(".arrow4").addClass("hide-arrow"),
        $(".arrow2, .arrow3, .arrow1").removeClass("hide-arrow"),
        $(".work-details4").removeClass("hide-easemode"),
        $(".work-details4").addClass("show-easemode"),
        $(".work-details2, .work-details3, .work-details1").addClass("hide-easemode");
});
$("#detailBox1").click(function () {
    posthog.capture("to-next-detail-img"),
        $(".detailImg1").removeClass("d-none"),
        $(".detailImg2, .detailImg3, .detailImg4, .detailImg5, .detailImg6").addClass("d-none"),
        $(".detail-data1").addClass("active-content"),
        $(".detail-data2, .detail-data3, .detail-data4, .detail-data5, .detail-data6").removeClass("active-content");
});
$("#detailBox2").click(function () {
    posthog.capture("to-next-detail-img"),
        $(".detailImg2").removeClass("d-none"),
        $(".detailImg1, .detailImg3, .detailImg4, .detailImg5, .detailImg6").addClass("d-none"),
        $(".detail-data2").addClass("active-content"),
        $(".detail-data1, .detail-data3, .detail-data4, .detail-data5, .detail-data6").removeClass("active-content");
});
$("#detailBox3").click(function () {
    posthog.capture("to-next-detail-img"),
        $(".detailImg3").removeClass("d-none"),
        $(".detailImg1, .detailImg2, .detailImg4, .detailImg5, .detailImg6").addClass("d-none"),
        $(".detail-data3").addClass("active-content"),
        $(".detail-data1, .detail-data2, .detail-data4, .detail-data5, .detail-data6").removeClass("active-content");
});
$("#detailBox4").click(function () {
    posthog.capture("to-next-detail-img"),
        $(".detailImg4").removeClass("d-none"),
        $(".detailImg1, .detailImg2, .detailImg3, .detailImg5, .detailImg6").addClass("d-none"),
        $(".detail-data4").addClass("active-content"),
        $(".detail-data1, .detail-data3, .detail-data2, .detail-data5, .detail-data6").removeClass("active-content");
});
$("#detailBox5").click(function () {
    posthog.capture("to-next-detail-img"),
        $(".detailImg5").removeClass("d-none"),
        $(".detailImg1, .detailImg2, .detailImg4, .detailImg3, .detailImg6").addClass("d-none"),
        $(".detail-data5").addClass("active-content"),
        $(".detail-data1, .detail-data3, .detail-data4, .detail-data2, .detail-data6").removeClass("active-content");
});
$("#detailBox6").click(function () {
    posthog.capture("to-next-detail-img"),
        $(".detailImg6").removeClass("d-none"),
        $(".detailImg1, .detailImg2, .detailImg4, .detailImg5, .detailImg3").addClass("d-none"),
        $(".detail-data6").addClass("active-content"),
        $(".detail-data1, .detail-data3, .detail-data4, .detail-data5, .detail-data2").removeClass("active-content");
});

$(".contact-btn-close").on("click", function () {
    posthog.capture("modal-close"), $(".modal.success").hide(), $(".modal.error").hide(), $(".modal.error-modal").hide(), $(".signup-para").empty();
});
$(".modal").on("click", function () {
    posthog.capture("modal-close"), $(".modal.success").hide(), $(".modal.error").hide(), $(".modal.error-modal").hide(), $(".signup-para").empty();
});
$(".inner").click(function (a) {
    a.stopPropagation();
});
