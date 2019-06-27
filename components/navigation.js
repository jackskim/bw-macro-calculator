class NavMenu {
    constructor(navList) {
        this.menuButton = navList.querySelector('.menu-button');
        this.links = navList.querySelectorAll('li');

        this.menuButton.addEventListener('click', this.toggleMenu);
    }

    toggleMenu = () => {
        this.links.forEach(link => link.classList.toggle('open'));
    }
}

const navMenu = document.querySelector('.nav-bottom ul');
new NavMenu(navMenu);