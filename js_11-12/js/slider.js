(function($) {
	
	$.fn.carousel = function() {

		var left = $('.carousel__arrow-left');
		var right = $('.carousel__arrow-right');

		var elementList = $('.carousel-list');

		var pixelOffset = 125;
		var currentLeftValue = 0;
		var elementsCount = elementList.find('li').length;
		var minimumOffset = - ((elementsCount - 5) * pixelOffset);
		var maximumOffset = 0;

		function goLeft () {
			if (currentLeftValue != maximumOffset) {
				currentLeftValue += pixelOffset;
				elementList.animate({left: currentLeftValue + "px"}, 1000);
			}
		}

		function goRight () {
			if (currentLeftValue != minimumOffset) {
				currentLeftValue -= pixelOffset;
				elementList.animate({left: currentLeftValue + "px"}, 1000);
			}
		}

		right.on('click', goRight);
		left.on('click', goLeft);
		
		return this;
	}


}) (jQuery);