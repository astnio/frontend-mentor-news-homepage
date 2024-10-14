const navButton = document.querySelector('.nav-menu-button');
const navButtonIcon = document.querySelector('.nav-menu-button-icon');
const navList = document.querySelector('.nav-list');
const navOverlay = document.querySelector('.nav-overlay');

let menuActive = false;

function updateMenu() {
  console.log(`Menu is active: ${menuActive}`);
  if (menuActive === false) {
    navList.style.transform = 'translateX(100%)';
    navOverlay.dataset.active = 'false';
    navButtonIcon.src = './assets/images/icon-menu.svg';
    navButton.style.position = 'absolute';
  } else if (menuActive === true) {
    navList.style.transform = 'translateX(0%)';
    navOverlay.dataset.active = 'true';
    navButtonIcon.src = './assets/images/icon-menu-close.svg';
    navButton.style.position = 'fixed';
  }
}

function adjustMenu() {
  const breakpoint = 1160;
  if (window.innerWidth >= breakpoint) {
    menuActive = false;
    navList.style.transform = 'translateX(0%)';
    navOverlay.dataset.active = 'false';
    navButtonIcon.src = './assets/images/icon-menu.svg';
    navButton.style.position = 'absolute';
  } else {
    if (!menuActive) {
      navList.style.transform = 'translateX(100%)';
    }
  }
}

navButton.addEventListener('click', () => {
  menuActive = !menuActive;
  updateMenu();
});

navOverlay.addEventListener('click', () => {
  menuActive = !menuActive;
  updateMenu();
});

window.addEventListener('resize', adjustMenu);

adjustMenu();
