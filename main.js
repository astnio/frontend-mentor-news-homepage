const navButton = document.querySelector('.nav-menu-button');
const navButtonIcon = document.querySelector('.nav-menu-button-icon');
const navList = document.querySelector('.nav-list');
const navOverlay = document.querySelector('.nav-overlay');

let menuActive = false;

function adjustMenu() {
  const breakpoint = 1160;
  if (window.innerWidth >= breakpoint) {
    navList.style.transform = 'translateX(0%)';
    navOverlay.dataset.active = 'false';
    navButtonIcon.src = './assets/images/icon-menu.svg';
    navButton.style.position = 'absolute';
    menuActive = false;
  } else if (window.innerWidth <= breakpoint) {
    navList.style.transform = 'translateX(100%)';
  }
}

navButton.addEventListener('click', () => {
  menuActive = !menuActive;

  if (menuActive) {
    navList.style.transform = 'translateX(100%)';
    navOverlay.dataset.active = 'false';
    navButtonIcon.src = './assets/images/icon-menu.svg';
    navButton.style.position = 'absolute';
  } else if (!menuActive) {
    navList.style.transform = 'translateX(0%)';
    navOverlay.dataset.active = 'true';
    navButtonIcon.src = './assets/images/icon-menu-close.svg';
    navButton.style.position = 'fixed';
  }
});

window.addEventListener('resize', adjustMenu);
