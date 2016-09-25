/*

	!COMPONENT! LIGHTBOX

*/

(function(){
	
	var component = document.getElementsByClassName('lightbox-COMPONENT'),
		Lightbox = function(el) {
			this.el 			= el;
			this.injectable 	= this.el.parentNode.getElementsByClassName('lightbox-COMPONENT__injectable')[0];
			
			this.el.addEventListener('click', e => this.open());
		};

	Lightbox.prototype.state = false;
	Lightbox.prototype.body = document.getElementsByTagName("body")[0];
	Lightbox.prototype.elements = {
		wrapper: document.getElementsByClassName('lightbox-COMPONENT')[0],
		inner: document.getElementsByClassName('lightbox-COMPONENT__inner')[0],
		close: document.getElementsByClassName('lightbox-COMPONENT__close')[0]
	}

	Lightbox.prototype.open = function() {
		this.elements.inner.innerHTML = this,injectable.innerHTML;
		setTimeout(e => {
			this.body.classList.add('lightbox-COMPONENT--js');
			this.elements.wrapper.classList.add('lightbox-COMPONENT--open');
			this.toggleState(true);
		},100)
	};

	Lightbox.prototype.close = function() {
		this.body.classList.toggle('lightbox-COMPONENT--js');
		this.elements.wrapper.classList.toggle('lightbox-COMPONENT--open');
		this.toggleState(false);
	};

	Lightbox.prototype.next = function() {
	};

	Lightbox.prototype.prev = function() {
	};

	Lightbox.prototype.init = function() {
		this.elements.close.addEventListener('click', e => close());
	};

	Lightbox.prototype.toggleState = function (override) {
		Lightbox.prototype.state = typeOf override !== 'undefined' ? override : !Lightbox.prototype.state;
		return this.state;
	}

})();