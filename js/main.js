$(".news__inner-body-slider").slick({
  dots: false,
  infinite: true,
  speed: 500,
  autoplaySpeed: 7000,
  autoplay: true,
  prevArrow: $(".prev"),
  nextArrow: $(".next"),
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 940,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".special__inner-slider").slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  fade: true,
  adaptiveHeight: true,
  cssEase: "linear",
  prevArrow: $(".prevS"),
  nextArrow: $(".nextS"),
  arrows: true,
  autoplaySpeed: 6000,
  autoplay: true,
});
$(".academy__inner-slider").slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  fade: true,
  adaptiveHeight: true,
  cssEase: "linear",
  prevArrow: $(".prevA"),
  nextArrow: $(".nextA"),
  arrows: true,
  autoplaySpeed: 6000,
  autoplay: true,
});
$(".magic__inner-slider").slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  fade: true,
  adaptiveHeight: true,
  cssEase: "linear",
  autoplaySpeed: 6000,
  autoplay: true,
});

$(".special__inner-slider2").slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  fade: true,
  adaptiveHeight: true,
  cssEase: "linear",
  prevArrow: $(".prevS2"),
  nextArrow: $(".nextS2"),
  arrows: true,
  autoplaySpeed: 6000,
  autoplay: true,
});
var wow = new WOW({
  boxClass: "wow",
  animateClass: "animated",
  offset: 0,
  mobile: true,
  live: true,
  scrollContainer: null,
  resetAnimation: true,
});
wow.init();
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;

menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
};
window.onclick = function (event) {
  if (event.target == menu) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");

    body.classList.remove("active");
  }
};
// window.onscroll = function () {
//   scrollFunc();
// };
// let intro = document.getElementById("intro");
// let header = document.getElementById("header");

// let sticky = intro.offsetTop;
// function scrollFunc() {
//   if (window.pageYOffset >= sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }
