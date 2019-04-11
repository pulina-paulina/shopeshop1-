//слайдер в шапке (первый способ как на курсах)
/*
var slider=document.querySelector("slider");
var slider_point=document.querySelector("slider_point");
var sliderList = document.querySelector('.slider_list');


slider_point.querySelectorAll("slider_point").forEach(function(elem, index){
	elem.addEventListener('click', function(){
		slider_points.querySelector('.current').classList.remove('current');
		slider.querySelector('.slider_item_show').classList.remove('slider_item_show');

		this.classList.add('current');
		var slider = sliderList.children[index]; //не поняла 
		slider.classList.add('slider_item_show');
	});
});*/

//slider2 (спозов 2)


var slides = document.querySelectorAll('#slide2_list .slider2_item');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);
 
function nextSlide() {
    slides[currentSlide].className ='slider2_item';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slider2_item showing';
}



