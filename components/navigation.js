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

const navMenu = document.querySelector('.nav-bottom');
new NavMenu(navMenu);