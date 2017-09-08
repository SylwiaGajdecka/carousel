$(function(){

	var carouselList = $('#js-carousel ul');
	var basicInterval = setInterval(changeSlide, 3000);

	function setTime(){
		basicInterval = setInterval(changeSlide, 3000)
	}

	function changeSlide(){
		carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
	}

	function moveFirstSlide(){
		var firstItem = $('#js-carousel').find('li:first');
		var lastItem = $('#js-carousel').find('li:last');

		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
		changeControl(); 
	}

//Cicrcle left

	var circleLeft = $('.circle--left');
	var circleRight = $('.circle--right');

	circleLeft.on('click', movePrevSlide);

	function movePrevSlide(){
		var firstItem = $('#js-carousel').find('li:first'); 
		var lastItem = $('#js-carousel').find('li:last');

		firstItem.before(lastItem);
		carouselList.css({marginLeft:-400});

		carouselList.animate({'marginLeft':0}, 500, clearInterval(basicInterval));
		setTime();
		changeControl(); 
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
		setTime();
		changeControl(); 
	}
//Kontrolki 
	var controls = $('.js-controlItem');
	var slide = $('.picture');

	controls.each(function(index, element){ //przypisanine data- z nr indeksów do kontrolek
		$(element).data('control', index);
	})

	slide.each(function(index, element){ //przypisanie data- z nr indeksów do slidów
		$(element).data('slide', index);
	})

	function changeControl() {
        var dataSlide = $('li').first().data('slide'); //wyciągam index slajdu pierwszego
        var control = controls.eq(dataSlide);

        console.log(dataSlide);

        controls.css({'background': 'rgba(255, 255, 255, .5)'}); //koloruję wszystkie kółka
        control.css('background', 'white'); //koloruję kółko o indeksie równym indeksowi slidu
 	}
 //Przypisanie handlerów na kontrolki
 	$('li').click(function(){
 		controls.css({'background': 'rgba(255, 255, 255, .5)'});
 		$(this).css('background', 'white');  //naciśnięcie kontrolki - zmiana jej koloru
 		var activeControlIndex = $(this).index();

 		moveSlideControl(activeControlIndex);
 	})
 //1. naciśnięcie kontrolki - zmiana slidu: naciskam kontrolkę nr 0 - zmienia się slajd na nr 0
 	function moveSlideControl(activeControlIndex){
		var firstItem = $('#js-carousel').find('li:first'); 
		var lastItem = $('#js-carousel').find('li:last');

		console.log(activeControlIndex);

		firstItem.before(lastItem);
		carouselList.css({marginLeft:-400*activeControlIndex});

		carouselList.animate({'marginLeft':0}, 500, clearInterval(basicInterval));
		setTime();
		changeControl(); 
 	}
})