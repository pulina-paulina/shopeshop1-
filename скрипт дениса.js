/*---------popup'ы----------*/

var link_map = document.querySelector(".map");
var big_map = document.querySelector(".box_popup_map");
var map_close = document.querySelector(".popup_map_close");
var overlay = document.querySelector(".overlay");

link_map.addEventListener("click", function(evt) {
  evt.preventDefault();
  big_map.classList.add("map_show");
  overlay.classList.add("overlay_show");
});

map_close.addEventListener("click", function() {
  big_map.classList.remove("map_show");
  overlay.classList.remove("overlay_show");
});

overlay.addEventListener("click", function() {
  big_map.classList.remove("map_show");
  overlay.classList.remove("overlay_show");
});

/*---------форма---------*/

var link_message = document.querySelector(".open_form");
var form_message = document.querySelector(".form_message_box");
var message_close = document.querySelector(".popup_message_close");
var overlay = document.querySelector(".overlay");

/*переменные внутри формы*/
var username = form_message.querySelector("[name=user_name]");
var message = form_message.querySelector(".form_message");
var email = form_message.querySelector("[name=user_email]");
var text_messag = form_message.querySelector("[name=user_massage]");

var user_name = localStorage.getItem(".username");





link_message.addEventListener("click", function(evt) {
  evt.preventDefault();
  form_message.classList.add("form_show");
  overlay.classList.add("overlay_show");
  username.focus();
});

message_close.addEventListener("click", function(evt) {
  evt.preventDefault();
  form_message.classList.remove("form_show");
  overlay.classList.remove("overlay_show");

});

overlay.addEventListener("click", function() {
  form_message.classList.remove("form_show");
  overlay.classList.remove("overlay_show");
});

/*внутри формы*/

message.addEventListener("submit", function(evt) {

  if (!username.value || email.value || text_messag.value) {
    evt.preventDefault();
    consol.log("Заполните поля форм");

  } else {
    localStorage.setItem("username", username.value);
  }
});


/*---ESC---*/

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (big_map.classList.contains("map_show")) {
      evt.preventDefault();
      big_map.classList.remove("map_show");
      overlay.classList.remove("overlay_show");
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (form_message.classList.contains("form_show")) {
      evt.preventDefault();
      form_message.classList.remove("form_show");
      overlay.classList.remove("overlay_show");
    }

  }
});

/*-слайдер-*/
var sliders = document.querySelector('.sliders');
var sliderControlPoints = sliders.querySelector('.slider_controls_point');
var sliderList = sliders.querySelector('.slider_list');
var sliderControlArrows = sliders.querySelector('.slider_controls_arrows');

sliderControlPoints.querySelectorAll('button').forEach(function(elem, index){
	elem.addEventListener('click', function(){
		sliderControlPoints.querySelector('.current').classList.remove('current');
		sliders.querySelector('.slider_item_show').classList.remove('slider_item_show');

		this.classList.add('current');
		var slider = sliderList.children[index];
		slider.classList.add('slider_item_show');
	});
});

/*
elem.nextElementSibling - следующий элемент за elem
*/

sliderControlArrows.querySelectorAll('button').forEach(function(elem){
	elem.addEventListener('click', function(){
		var current = sliders.querySelector('.slider_item_show');	// текущий отображаемый слайд
		var indexOfNext = -1;

		if (this.classList.contains('next')){
			var next = current.nextElementSibling;			// следующий слайдер
			if (!next) next = sliderList.children[0];		// если текущий последний -> за ним ничего нет -> берём первый 
	
			var slidersArray = Array.prototype.slice.call(sliderList.children);		// массив слайдов. Эта строчка нужна, чтобы определить индекс слайда
			indexOfNext = slidersArray.indexOf(next);								// индекс следующего слайда. Чтобы активировать точку
		}
		else if (this.classList.contains('previous')){
			var next = current.previousElementSibling;									// предыдущий слайдер
			if (!next) next = sliderList.children[sliderList.children.length -1];		// если текущий первый -> за ним ничего нет -> берём последний 
	
			var slidersArray = Array.prototype.slice.call(sliderList.children);		// массив слайдов. Эта строчка нужна, чтобы определить индекс слайда
			indexOfNext = slidersArray.indexOf(next);								// индекс следующего слайда. Чтобы активировать точку
		}

		sliderControlPoints.querySelector('.current').classList.remove('current');	// отключаем текущую точку
		sliderControlPoints.children[indexOfNext].classList.add('current');			// включаем точку, соответствующую след. слайду

		current.classList.remove('slider_item_show');
		next.classList.add('slider_item_show');
	});
});


/*-
e-event=evt
forEach (для каждого) - перебор
elem - текущий элемент цикла
target (цель) - когда event=click, target-кликнутый элемент
this (этот) - обрабатываемый элемент в обработчике
getAttribute - получение атрибута
*/

var headlineList = document.querySelector('.headline_list');

headlineList.querySelectorAll('a').forEach(function(elem){
	elem.addEventListener('click', function(e){
		e.preventDefault();
	
		headlineList.querySelector('.current').classList.remove('current');
		document.querySelector('.sections_item_show').classList.remove('sections_item_show');
	
		var clickedElem = this;
		var blockId = clickedElem.getAttribute('href');
		var block = document.querySelector(blockId);

		clickedElem.classList.add('current');
		block.classList.add('sections_item_show');
	});	
});