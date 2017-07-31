$(function(){

	var carouselList = $('#js-carousel ul');
	var basicInterval = setInterval(changeSlide, 3000);

	function changeSlide(){
		carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide); 
	}

	function moveFirstSlide(){
		var firstItem = $('#js-carousel').find('li:first');
		var lastItem = $('#js-carousel').find('li:last');

		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	}

//Cicrcle left

	var circleLeft = $('.circle--left');
	var circleRight = $('.circle--right');

	circleLeft.on('click', movePrevSlide);

	function movePrevSlide(){
		var firstItem = $('#js-carousel').find('li:first'); //dlaczego kiedy wyciągam te zmienne poza funkcję, slider źle się przewija?
		var lastItem = $('#js-carousel').find('li:last');

		firstItem.before(lastItem);
		carouselList.css({marginLeft:-400});

		carouselList.animate({'marginLeft':0}, 500, clearInterval(basicInterval));
		setInterval(changeSlide, 3000);
	}


	

//Circle right

	circleRight.on('click', function(){
		carouselList.animate({marginLeft:-400}, 500, moveSlideNext);
	})

	function moveSlideNext(){

	var firstItem = $('#js-carousel').find('li:first');
	var lastItem = $('#js-carousel').find('li:last');

		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
		clearInterval(basicInterval);
		setInterval(changeSlide, 3000);
	}

//Kontrolki 1. Gdy jest slide[0], li kontrolki [0] ma być niebieski. Gdy kolejny slajd - kolejna kontrolka 

	function changeControlColor(){

		var firstControl = $('controls ul').find('li:first').css('background', 'blue');
		var coloredControl = firstControl.eq(0);
		
	}	
	
	function changeSlideWithControlItem(){
		
	}
})