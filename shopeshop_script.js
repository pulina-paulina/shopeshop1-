//слайдер в шапке (первый способ как на курсах)

var slider = document.querySelector(".slider");
var slider_points = slider.querySelectorAll(".slider_point");
var sliderList = document.querySelector('.slider_list');


slider_points.forEach(function (elem, index) {
	elem.addEventListener('click', function () {
		slider.querySelector('.current').classList.remove('current');
		slider.querySelector('.slider_item_show').classList.remove('slider_item_show');

		this.classList.add('current');
		var slideToShow = sliderList.children[index]; //не поняла 
		slideToShow.classList.add('slider_item_show');
	});
});

//slider2 (способ 2)


var slider2 = document.querySelector('.slider2');
var slides = slider2.querySelectorAll('#slide2_list .slider2_item');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 2000);
slider2.querySelector('.pagination_last').textContent = slides.length;

function nextSlide() {
	slides[currentSlide].classList.remove('showing');
	currentSlide = (currentSlide + 1) % slides.length;
	slides[currentSlide].classList.add('showing');

	slider2.querySelector('.pagination_now').textContent = currentSlide + 1;
}



