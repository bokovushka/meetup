// menu
$(".sidebar-menu li").click(function () {
  $(".sidebar-menu li").removeClass("active");
  $(this).addClass("active");
});

// mobile menu
(function () {
  const header_burger = document.querySelector(".header_burger");
  const mobile_menu_link = document.querySelector(".sidebar-menu");
  const mobile_menu = document.querySelector(".menu");
  header_burger.addEventListener("click", () => {
    header_burger.classList.toggle("header_burger_active");
    mobile_menu_link.classList.toggle("mobile_menu_active");
    mobile_menu.classList.toggle("mobile_menu");
  });
})();

// search
$(".search").click(function () {
  $(".search").addClass("mobile-search");
  $(".search-close").show();
});

$(".search-close").click(function () {
  $(".search").removeClass("mobile-search");
  $(".search-close").hide();
});

$(".cp-course__description").click(function () {
  $(this).toggleClass("cp-course__description-active");
});

//svg to svg inline
$("img.img-svg").each(function () {
  var $img = $(this);
  var imgClass = $img.attr("class");
  var imgURL = $img.attr("src");
  $.get(
    imgURL,
    function (data) {
      var $svg = $(data).find("svg");
      if (typeof imgClass !== "undefined") {
        $svg = $svg.attr("class", imgClass + " replaced-svg");
      }
      $svg = $svg.removeAttr("xmlns:a");
      if (!$svg.attr("viewBox") && $svg.attr("height") && $svg.attr("width")) {
        $svg.attr(
          "viewBox",
          "0 0 " + $svg.attr("height") + " " + $svg.attr("width")
        );
      }
      $img.replaceWith($svg);
    },
    "xml"
  );
});

//acardion
$(document).ready(function () {
  //toggle the component with class panel
  $(".faq__question").click(function () {
    if ($(".faq__answer").is(":visible")) {
      $(".faq__answer").slideUp(300);
      $(".rmv-cls").removeClass("faq__block-active");
      $(".rmv-cls").removeClass("rmv-cls");
    }
    if ($(this).next(".faq__answer").is(":visible")) {
      $(this).next(".faq__answer").slideUp(300);
      $(this).closest(".faq__block").removeClass("faq__block-active");
    } else {
      $(this).next(".faq__answer").slideDown(300);
      $(this).addClass("rmv-cls");
      $(this).closest(".faq__block").toggleClass("faq__block-active");
      $(this).closest(".faq__block").addClass("rmv-cls");
    }
  });
  $(".faq__button").click(function () {
    if ($(".faq__answer").is(":visible")) {
      $(".faq__answer").slideUp(300);
      $(".rmv-cls").removeClass("faq__block-active");
      $(".rmv-cls").removeClass("rmv-cls");
    }
    if ($(this).prev(".faq__answer").is(":visible")) {
      $(this).prev(".faq__answer").slideUp(300);
      $(this).closest(".faq__block").removeClass("faq__block-active");
    } else {
      $(this).prev(".faq__answer").slideDown(300);
      $(this).addClass("rmv-cls");
      $(this).closest(".faq__block").toggleClass("faq__block-active");
      $(this).closest(".faq__block").addClass("rmv-cls");
    }
  });
});
