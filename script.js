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

const minus = document.getElementById("qtyMinus");
const plus = document.getElementById("qtyPlus");
const input = document.getElementById("qtyInput");

minus.onclick = () => {
  let v = parseInt(input.value);
  if (v > 1) input.value = v - 1;
};
plus.onclick = () => {
  let v = parseInt(input.value);
  input.value = v + 1;
};

function changeImage(img) {
  document.getElementById("mainProductImage").src = img.src;

  // remove active class
  document.querySelectorAll(".thumb-img").forEach(el => el.classList.remove("active"));

  // add to selected image
  img.classList.add("active");
}

  (function () {
    // The collapse container
    var mainCollapse = document.getElementById('mainNavbar');
    var toggler = document.querySelector('.navbar-toggler');

    // Helper: hide collapse using Bootstrap Collapse API
    function hideNavbarCollapse() {
      if (!mainCollapse) return;
      // check if toggler is visible (means we are in collapsed/mobile view)
      var isTogglerVisible = toggler && window.getComputedStyle(toggler).display !== 'none';
      if (!isTogglerVisible) return;

      // Use Bootstrap's Collapse API to hide
      var bsCollapse = bootstrap.Collapse.getInstance(mainCollapse);
      if (!bsCollapse) {
        bsCollapse = new bootstrap.Collapse(mainCollapse, {toggle: false});
      }
      bsCollapse.hide();
    }

    // Close when any nav-link inside the collapse is clicked
    mainCollapse.addEventListener('click', function (e) {
      var target = e.target;
      // close only when clicking an actual link (a.nav-link or a.dropdown-item)
      if (target.matches('a.nav-link') || target.matches('a.dropdown-item') || target.closest('a.nav-link') || target.closest('a.dropdown-item')) {
        hideNavbarCollapse();
      }
    });
  })();

  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Show or hide the button based on scroll position
    window.onscroll = function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    };

    // Scroll to top functionality
    scrollToTopBtn.onclick = function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };