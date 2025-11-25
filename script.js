document.addEventListener('DOMContentLoaded', function () {
  const carousel = new bootstrap.Carousel(document.getElementById('cardCarousel'), {
    interval: 3000,
    ride: 'carousel'
  });
});

document.querySelectorAll('.circle').forEach(circle => {
  const percent = circle.getAttribute('data-percent');
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const progress = circle.querySelector('.progress');

  progress.style.strokeDasharray = circumference;
  progress.style.strokeDashoffset = circumference - (percent / 100) * circumference;
});

var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    let btn = document.getElementById("topBtn");

    window.onscroll = function () {
        if (document.documentElement.scrollTop > 200) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    };

    function topFunction() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    