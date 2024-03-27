const footerYear = document.querySelector('.footer__year');
footerYear.textContent = new Date().getFullYear();

const navSubMenuBtns = document.querySelectorAll(
  '.nav__list-nested .nav__list-item'
);

navSubMenuBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const list = btn.nextElementSibling;
    const isOpened = list.getAttribute('aria-expanded') === 'true';

    list.setAttribute('aria-expanded', !isOpened);
  });
});

const navToggle = document.querySelector('.nav__btn-toggle');
const navToggleIcon = navToggle.querySelector('img');
const navList = document.querySelector('.nav__list');

navToggle.addEventListener('click', () => {
  const isOpened = navList.getAttribute('aria-expanded') === 'false';

  isOpened ? openNav() : closeNav();
});

const openNav = () => {
  navList.setAttribute('aria-expanded', 'true');
  navToggleIcon.src = 'assets/images/icons/close.svg';
};

const closeNav = () => {
  navList.setAttribute('aria-expanded', 'false');
  navToggleIcon.src = 'assets/images/icons/menu.svg';
};

const swiper = new Swiper('.swiper__images', {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  allowTouchMove: false,
});

const swiperSlider = new Swiper('.swiper__slider', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 10000,
  },
});

const swiperCertificates = new Swiper('.swiper__certificates', {
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 2200,
  },
  breakpoints: {
    550: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 26,
    },
  },
});
