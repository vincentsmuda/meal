/*

	!COMPONENT! CAROUSEL

	Using Swiper (http://idangero.us/swiper/api/)
	$ npm install swiper

*/

(function(){
	
	var component = document.getElementsByClassName('carousel-COMPONENT'),
		carousels = [],
		class_base = 'carousel-COMPONENT',
		class_slide = class_base + '__slide',
		class_pagination = class_base + '__pagination';

	for (var i = 0, l = component.length; i < l; i++) {
		carousels[i] = new Swiper(component[i], {
		    
		    // Behavioural options
		    speed: 400,

		    // Point to elements in component
		    pagination: '.' + class_pagination,
		    prevButton: '.' + class_base + '__nav--prev',
		    nextButton: '.' + class_base + '__nav--next',
		    scrollbar: 	'.' + class_base + '__scrollbar',

		    // Class Mapping (BEM)
		    wrapperClass: 				class_base + '__wrapper',

		    slideClass: 	  			class_slide,
		    slideActiveClass: 			class_slide + '--active',
		    slideVisibleClass:  		class_slide + '--visible',
		    slideDuplicateClass:  		class_slide + '--duplicate',
		    slideNextClass:  			class_slide + '--next',
		    slidePrevClass:  			class_slide + '--prev',

		    bulletClass: 				class_base + '__bullet',
		    bulletActiveClass: 			class_base + '__bullet--active',
		    paginationHiddenClass: 		class_pagination + '--hidden',
		    paginationCurrentClass: 	class_pagination + '__current',
		    paginationTotalClass: 		class_pagination + '__total',
		    paginationProgressbarClass: class_pagination + '__progressbar',
		    buttonDisabledClass: 		class_base + '__nav--disabled'

		});
	};
		
})();