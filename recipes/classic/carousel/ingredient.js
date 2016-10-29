/*

	!COMPONENT! CAROUSEL

	Using Lory.js (http://meandmax.github.io/lory/)
	$ npm install lory.js

*/

(function(){

	/**
	 *
	 *	Initial variable setup
	 * 
	 */
	
	var class_base = 'carousel-COMPONENT',
			class_base_e = class_base + '__',
			class_frame = class_base_e + 'frame',
			class_container = class_base_e + 'slides',
			class_slide = class_base_e + 'slide',
			class_button_prev = class_base_e + 'prev',
      class_button_next = class_base_e + 'next'
			class_pagination = class_base_e + 'pagination',
			class_pagination_dot = class_base_e + 'dot',
			class_pagination_dot_active = class_pagination_dot + '--active',
			component = document.getElementsByClassName(class_base),
			carousels = [],
			pagination_list_item = document.createElement('li');
		
	/**
	 *
	 *	Class decleration
	 * 
	 */

	function Carousel (carousel) {
		this.slides = carousel.getElementsByClassName(class_slide);
		this.slide_count = slides.length;
		this.active_dot = 0;
		this.pagination_container = carousel.querySelector(class_pagination);
		this.pagination_dots = [];
		this.paginationSetCallbacks();
		this.carousel = lory(carousel, {
      infinite: 1,
      enableMouseEvents: true,
      classNamePrevCtrl: class_button_prev,
      classNameNextCtrl: class_button_next,
      classNameFrame: class_frame,
			classNameSlideContainer: 
    });
    this.prototype.carousels.push(this.carousel);
	}

	// Array to put all like carousels
	Carousel.prototype.carousels = [];

	// initializes Pagination
	Carousel.prototype.paginationInitialize = function (e) {
		for (var i = 0; i < this.slide_count; i++) {
      var dot = pagination_list_item.cloneNode();
      dot.classList.add(class_pagination_dot);
      if(i === 0) dot.classList.add(class_pagination_dot_active);
      this.pagination_container.appendChild(dot);
      this.pagination_dots.push(dot);
    }
	}

	// Adds Pagination dot events (click)
	Carousel.prototype.paginationAddEvents = function (e) {
		for (var i = 0; i < this.slide_count; i++) {
      this
      	.pagination_dots[i]
      	.addEventListener('click', () => 
          this.carousel.slideTo(i);
        );
    }
	}

	// Adds Pagination slide change event
	Carousel.prototype.paginationOnSlideChange = function (e) {
		this.paginationChange(e.detail.currentSlide - 1);
	}

	// Adds Pagination dot events (click)
	Carousel.prototype.paginationOnResize = function () {
		this.paginationChange(0);
	}

	// Changes the pagination current index
	Carousel.prototype.paginationChange = function (i) {
		this.paginationRemoveActive();
    this.active_dot = i;
    this.paginationAddActive();
	}

	// removes active state from current dot
	Carousel.prototype.paginationRemoveActive = function () {
		this
      .pagination_dots[this.active_dot]
    	.classList
    	.remove(class_pagination_dot_active);
	}

	// add active state to current dot
	Carousel.prototype.paginationAddActive = function () {
    this
      .pagination_dots[this.active_dot]
    	.classList
    	.add(class_pagination_dot_active);
	}

	// Init callback events
	Carousel.prototype.paginationSetCallbacks = function () {
		this.carousel.addEventListener('before.lory.init', this.paginationInitialize);
    this.carousel.addEventListener('after.lory.init', this.paginationAddEvents); 
    this.carousel.addEventListener('after.lory.slide', this.paginationOnSlideChange); 
    this.carousel.addEventListener('on.lory.resize', this.paginationOnResize);
	}

	/**
	 *
	 *	Initiate the !COMPONENT Carousels
	 * 
	 */

	for (var i = 0, l = component.length; i < l; i++) {
		new Carousel(component[i]);
	}
	
})();