const popup = document.getElementById('popup');
const openButtons = document.querySelectorAll('.button, .header-button, .hero-btn');
const closeBtn = document.querySelector('.close-popup');
const form = document.getElementById('joinForm');
const successPopup = document.getElementById('successPopup');
const errorPopup = document.getElementById('errorPopup');
const successCloseBtn = successPopup?.querySelector('.close-popup');

openButtons.forEach(button => {
    button.addEventListener('click', () => {
      popup.classList.add('active');
      document.body.classList.add('menu-open');
    });
  });
  
  // закриття
  closeBtn.addEventListener('click', () => {
    popup.classList.remove('active');
    document.body.classList.remove('menu-open');
  }); 
  
//   Клік поза формою
//   popup.addEventListener('click', (e) => {
//     if (e.target === popup) popup.classList.remove('active');
//     document.body.classList.remove('menu-open');
//   });
//   console.log(form)
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Зупиняє перезавантаження або перехід
  
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
  
      try {
        const savedForms = JSON.parse(localStorage.getItem('contactForms')) || [];
        savedForms.push(data);
        localStorage.setItem('contactForms', JSON.stringify(savedForms));
  
        document.getElementById('popup').classList.remove('active');
        document.getElementById('successPopup').classList.add('active');
        form.reset();
      } catch (err) {
        document.getElementById('errorPopup').classList.add('active');
      }
    });
  }

  if (successCloseBtn) {
    successCloseBtn.addEventListener('click', () => {
      successPopup.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  }



let swiperInstance;

function initSwiper() {
  if (window.innerWidth > 480 && !swiperInstance) {
    swiperInstance = new Swiper(".info-right", {
      slidesPerView: 1,
      spaceBetween: 100,
      navigation: {
        nextEl: ".info-button-next",
        prevEl: ".info-button-prev",
      },
    });
  } else if (window.innerWidth <= 480 && swiperInstance) {
    swiperInstance.destroy(true, true); // повністю знищуємо свайпер
    swiperInstance = undefined;
  }
}

initSwiper();
window.addEventListener("resize", initSwiper);


let whySwiper;

function initWhySwiper() {
  if (window.innerWidth > 480 && !whySwiper) {
    // Ініціалізуємо слайдер, якщо ширина > 480
    whySwiper = new Swiper('.why-swiper', {
      slidesPerView: 3,
      loop: true,
      slidesPerGroup: 1,
      spaceBetween: 24,
      navigation: {
        nextEl: '.why-button-next',
        prevEl: '.why-button-prev',
      }
    });
  } else if (window.innerWidth <= 480 && whySwiper) {
    // Знищуємо слайдер на мобілці
    whySwiper.destroy(true, true);
    whySwiper = undefined;
  }
}

// Запускаємо при завантаженні
initWhySwiper();

// Перевіряємо при зміні розміру вікна
window.addEventListener('resize', initWhySwiper);

const burger = document.querySelector('.burger');
const burgerClose = document.querySelector('.burger-close');
const headerMenu = document.querySelector('.header-menu');
const headerLinks = document.querySelectorAll('.header-link');
const menuOverlay = document.querySelector('.menu-overlay');
  
if (burger && burgerClose && headerMenu && menuOverlay) {
  burger.addEventListener('click', () => {
    headerMenu.classList.add('open');
    menuOverlay.classList.add('active');
    document.body.classList.add('menu-open');
  });

  burgerClose.addEventListener('click', () => {
    headerMenu.classList.remove('open');
    menuOverlay.classList.remove('active');
    document.body.classList.remove('menu-open');
  });

  menuOverlay.addEventListener('click', () => {
    headerMenu.classList.remove('open');
    menuOverlay.classList.remove('active'); // ховаємо затемнення
    document.body.classList.remove('menu-open');
  }); 

  headerLinks.forEach(link => {
    link.addEventListener('click', () => {
      headerMenu.classList.remove('open');
      menuOverlay.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  });
}