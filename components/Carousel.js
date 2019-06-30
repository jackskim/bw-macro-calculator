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
    this.prevIndex = this.allContent.length - 1;
    this.currIndex = 0;
    this.nextIndex = 1;

    // Add click handlers to arrows
    this.leftArrow.addEventListener('click', this.previous.bind(this)); 
    this.rightArrow.addEventListener('click', this.next.bind(this));

    // Select & identify content
    this.prevContent = this.allContent[this.prevIndex];
    this.currContent = this.allContent[this.currIndex];
    this.nextContent = this.allContent[this.nextIndex];

    // Display content in proper position
    this.prevContent.classList.remove('hide');
    this.currContent.classList.remove('hide');
    this.nextContent.classList.remove('hide');
    this.prevContent.classList.add('slide-left');
    this.currContent.classList.add('slide-middle');
    this.nextContent.classList.add('slide-right');
  }

  increaseIdx(){
    if(this.currIndex === this.allContent.length-1) {
      this.prevIndex++;
      this.currIndex = 0;
      this.nextIndex++;
    } else if(this.prevIndex === this.allContent.length-1) {
      this.prevIndex = 0;
      this.currIndex++;
      this.nextIndex++;
    } else if(this.nextIndex === this.allContent.length-1) {
      this.prevIndex++;
      this.currIndex++;
      this.nextIndex = 0;
    } else {
      this.prevIndex++;
      this.currIndex++;
      this.nextIndex++;
    }
  }

  decreaseIdx(){
    if(this.currIndex === 0) {
      this.prevIndex--;
      this.currIndex = this.allContent.length - 1;
      this.nextIndex--;
    } else if(this.prevIndex === 0) {
      this.prevIndex = this.allContent.length - 1;
      this.currIndex--;
      this.nextIndex--;
    } else if(this.nextIndex === 0) {
      this.prevIndex--;
      this.currIndex--;
      this.nextIndex = this.allContent.length - 1;
    } else {
      this.prevIndex--;
      this.currIndex--;
      this.nextIndex--;
    }
  }

  hideAll(){
    this.allContent.forEach( content => content.classList.add('hide'));
  }

  removeClasses(){
    this.prevContent.classList.remove('slide-left');
    this.currContent.classList.remove('slide-middle');
    this.nextContent.classList.remove('slide-right');
  }

  getContent(){
    this.prevContent = this.allContent[this.prevIndex];
    this.currContent = this.allContent[this.currIndex];
    this.nextContent = this.allContent[this.nextIndex];
  }

  displayContent(content, position){
    content.classList.add(position);
    content.classList.remove('hide');
  }

  next(){
    // Hide all content
    this.hideAll();

    // Remove current position classes
    this.removeClasses();

    this.increaseIdx();

    // Get the correct content
    this.getContent();

    // Display it
    this.displayContent(this.prevContent, 'slide-left');
    this.displayContent(this.currContent, 'slide-middle');
    this.displayContent(this.nextContent, 'slide-right');

  }

  previous(){
    // Hide all content
    this.hideAll();

    // Remove current position classes
    this.removeClasses();

    this.decreaseIdx();

    // Get the correct content
    this.getContent();

    // Display It
    this.displayContent(this.prevContent, 'slide-left');
    this.displayContent(this.currContent, 'slide-middle');
    this.displayContent(this.nextContent, 'slide-right');

  }

}

let testimonialCarousel = new Carousel(document.querySelector('.section-testimonials .carousel'));


