class Carousel {
  constructor(carouselElement){
    // Save the carouselElement DOM reference   
    this.carouselElement = carouselElement;

    // Get arrows
    this.leftArrow = document.querySelector('.left-arrow');
    this.rightArrow = document.querySelector('.right-arrow');

    // Get the testimonials
    this.testimonials = document.querySelectorAll('.carousel .testimonial');

    // Index tracker
    this.index = 0;

    // Add click handlers to arrows
    this.leftArrow.addEventListener('click', this.previous.bind(this)); 
    this.rightArrow.addEventListener('click', this.next.bind(this));

    // Display first testimonial as a default
    this.testimonials[this.index].classList.remove('hide');
  }

  increaseIdx(){
    if(this.index === this.testimonials.length-1) {
      this.index = 0;
    } else {
      this.index = this.index + 1;
    }
  }

  decreaseIdx(){
    if(this.index === 0) {
      this.index = this.testimonials.length -1;
    } else {
      this.index = this.index - 1;
    }
  }

  hideAll(){
    this.testimonials.forEach( testimonial => testimonial.classList.add('hide'));
  }

  next(){
    // Hide all testimonials
    this.hideAll();

    this.increaseIdx();

    // Get the correct testimonial
    this.testimonial = this.testimonials[this.index]; 

    // Display it
    this.testimonial.classList.remove('hide');
  }

  previous(){
    // Hide all testimonials
    this.hideAll();

    this.decreaseIdx();

    // Get the correct testimonial
    this.testimonial = this.testimonials[this.index];

    // Display It
    this.testimonial.classList.remove('hide');
  }

}

let testimonialCarousel = new Carousel(document.querySelector('.section-testimonials .carousel'));


