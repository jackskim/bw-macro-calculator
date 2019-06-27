// When the user scrolls, execute stickyNav
window.onscroll = function() {
  stickyNav();
};

// Get the navbar
const navbar = document.querySelector('.nav-bottom');

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll
// position.  Remove it when you leave the scroll position
function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}
