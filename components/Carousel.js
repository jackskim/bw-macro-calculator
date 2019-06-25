class Carousel {
  constructor(carouselElement){
    // Save the carouselElement DOM reference   
    this.carouselElement = carouselElement;

    // Get arrows
    this.leftArrow = document.querySelector('.left-arrow');
    this.rightArrow = document.querySelector('.right-arrow');

    // Get all the content
    this.allContent = document.querySelectorAll('.carousel .content');

    // Index tracker
    this.index = 0;

    // Add click handlers to arrows
    this.leftArrow.addEventListener('click', this.previous.bind(this)); 
    this.rightArrow.addEventListener('click', this.next.bind(this));

    // Display first content as a default
    this.allContent[this.index].classList.remove('hide');
  }

  increaseIdx(){
    if(this.index === this.allContent.length-1) {
      this.index = 0;
    } else {
      this.index = this.index + 1;
    }
  }

  decreaseIdx(){
    if(this.index === 0) {
      this.index = this.allContent.length -1;
    } else {
      this.index = this.index - 1;
    }
  }

  hideAll(){
    this.allContent.forEach( content => content.classList.add('hide'));
  }

  next(){
    // Hide all content
    this.hideAll();

    this.increaseIdx();

    // Get the correct content
    this.content = this.allContent[this.index]; 

    // Display it
    this.content.classList.remove('hide');
  }

  previous(){
    // Hide all content
    this.hideAll();

    this.decreaseIdx();

    // Get the correct content
    this.content = this.allContent[this.index];

    // Display It
    this.content.classList.remove('hide');
  }

}

let testimonialCarousel = new Carousel(document.querySelector('.section-testimonials .carousel'));
let recipeCarousel = new Carousel(document.querySelector('.section-recipes .carousel'))


