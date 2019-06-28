// MOBILE HAMBURGER MENU
class NavMenu {
    constructor(navigation) {
        this.navigation = navigation;
        this.menuButton = navigation.querySelector('.menu-button');
        this.links = navigation.querySelector('ul');

        this.menuButton.addEventListener('click', this.toggleMenu);
    }

    toggleMenu = () => {
        event.stopPropagation;
        this.links.classList.toggle('open');
        this.navigation.classList.toggle('open');
    }
}


// Get the menu
const navMenu = document.querySelector('.nav-bottom');
new NavMenu(navMenu);


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
  } else {
    navMenu.classList.remove('sticky');
  }
}
