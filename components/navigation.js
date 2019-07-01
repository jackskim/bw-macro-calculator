// MOBILE HAMBURGER MENU
class NavMenu {
    constructor(navigation) {
        this.navigation = navigation;
        this.menuButton = navigation.querySelector('.menu-button');
        this.links = navigation.querySelector('ul');

        this.menuButton.addEventListener('click', this.toggleMenu.bind(this));

        document.addEventListener('click', event => {
          event.stopPropagation();
          if (navBottom.querySelector('ul').classList.contains('open')) {
            this.links.classList.remove('open');
            this.navigation.classList.remove('open');
          }
        });
    }

    toggleMenu(event) {
        event.stopPropagation();
        this.links.classList.toggle('open');
        this.navigation.classList.toggle('open');
    }
}

// Get the menu
const navBottom = document.querySelector('.nav-bottom');
new NavMenu(navBottom);

// Get the navigation
const navBar = document.querySelector('.nav');
const navTop = navBar.querySelector('.nav-top');


// STICKY NAV
// When the user scrolls, execute stickyNav
window.onscroll = function() {
  stickyNav();
};


// Get the offset position of the navbar
const sticky = navBottom.offsetTop;

// Add the sticky class to the navbar when you reach its scroll
// position.  Remove it when you leave the scroll position
function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navBottom.classList.add('sticky');
    navBar.classList.remove('transparent');
    navTop.classList.add('colored');
  } else {
    navBottom.classList.remove('sticky');
    navTop.classList.remove('colored');
    navBar.classList.add('transparent');
  }
}
