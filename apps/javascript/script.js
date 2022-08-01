
// Ubah kalau scroll
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 100,
  autoplay : true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: true,

  grabCursor: true,
  // Navigation arrows
  navigation: {
    nextEl: ".swipper-button-next",
    prevEl: ".swipper-button-prev",
  },
  breakpoints: {
    200: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView : 2
    },
    1400 : {
      slidesPerView : 3,
      spaceBetween: 10
    }
  },
});

// Accordion

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


