$("nav div").click(function () {
  $("ul").slideToggle();
  $("ul ul").css("display", "none");
});

$("label").click(function () {
  $("ul").css("display", "none");
});

$("ul li").click(function () {
  $("ul ul").slideUp();
  // $(".nav-bar ul").slideToggle();
  $(this).find("ul").slideToggle();
});

$(window).resize(function () {
  if ($(window).width() > 768) {
    $("ul").removeAttr("style");
  }
});

$(window).scroll(function () {
  if ($(window).scrollTop() >= 50) {
    $("nav").addClass("fixed-nav");
    $("ul").addClass("negative-nav");
    $(".up-btn").css("display", "block");
    document.querySelector(".logo img").src = "./assets/png/fly-logo-negative.png";
  } else {
    $("nav").removeClass("fixed-nav");
    $("ul").removeClass("negative-nav");
    $(".up-btn").css("display", "none");
    document.querySelector(".logo img").src = "./assets/png/fly-logo.png";
  }

});

$("nav ul .logo").click(function () {
  if ($(window).scrollTop() >= 10 && $(window).width() < 768) {
    $("ul").slideToggle();
    $("ul ul").css("display", "none");
  }
});

$(document).ready(function () {

  $(".Modern-Slider").slick({
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    dots: true,
    pauseOnDotsHover: true,
    cssEase: 'linear',
    draggable: false,
    prevArrow: '<button class="PrevArrow"></button>',
    nextArrow: '<button class="NextArrow"></button>',
  });

});

let slideIndex = 1;

showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
};

function showDivs(n) {
  let i;

  let x = document.getElementsByClassName("mySlides");

  if (n > x.length) { slideIndex = 1 }

  if (n < 1) { slideIndex = x.length }

  for (i = 0; i < x.length; i++) x[i].style.display = "none";

  x[slideIndex - 1].style.display = "flex";
};

const modal = document.getElementById('modal-contact');
const btn = document.getElementById("open-modal-contact");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
