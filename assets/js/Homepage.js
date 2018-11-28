$(document).ready(function() {


	/* Get element by class name returns a list with one element */ 
	document.getElementsByClassName("prev")[0].onclick = function() {plusSlides(-1)};
	document.getElementsByClassName("next")[0].onclick = function() {plusSlides(1)};

	var slideIndex = 1;
	showSlides(slideIndex);

	function plusSlides(n) {
		showSlides(slideIndex += n);
		console.log(slideIndex);
	} 

	function currentSlide(n) {
  		showSlides(slideIndex = n);
	}

	function showSlides(n){
		var i;
		var slides = document.getElementsByClassName("pics-slideshow");

		if (n > slides.length) {slideIndex = 1} 
  		if (n < 1) {slideIndex = slides.length}

  		//doesn't display any image
  		for (i = 0; i < slides.length; i++) {
      		slides[i].style.display = "none";  
  		}

  		//this displays the slideIndex image, but 
  		slides[slideIndex-1].style.display = "block"; 

	}

	


});