// MOBILE HAMBURGER MENU
class NavMenu {
    constructor(navigation) {
        this.navigation = navigation;
        this.menuButton = navigation.querySelector('.menu-button');
        this.links = navigation.querySelector('ul');

        this.menuButton.addEventListener('click', this.toggleMenu.bind(this));
    }

    toggleMenu() {
        event.stopPropagation;
        this.links.classList.toggle('open');
        this.navigation.classList.toggle('open');
    }
}


// Get the menu
const navMenu = document.querySelector('.nav-bottom');
new NavMenu(navMenu);

// Get the navigation
const navBar = document.querySelector('.nav');
const navTop = navBar.querySelector('.nav-top');


// STICKY NAV
// When the user scrolls, execute stickyNav
window.onscroll = function() {
  stickyNav();
};


// Get the offset position of the navbar
const sticky = navMenu.offsetTop;

// Add the sticky class to the navbar when you reach its scroll
// position.  Remove it when you leave the scroll position
function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navMenu.classList.add('sticky');
    navBar.classList.remove('transparent');
    navTop.classList.add('colored');
  } else {
    navMenu.classList.remove('sticky');
    navTop.classList.remove('colored');
    navBar.classList.add('transparent');
  }
}
