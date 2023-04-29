$(document).ready(function(){
	
	// Set up variables
	var slideIndex = 1;
	var slides = $("#slideshow img");
	var numSlides = slides.length;
	
	// Hide all slides except the first one
	slides.hide();
	slides.eq(slideIndex-1).show();
	
	// Add click event handlers to the image list
	$("#image-list a").click(function(event){
		event.preventDefault();
		var slideNum = $(this).parent().index();
		showSlide(slideNum+1);
	});
	
	// Define the function to show a slide
	function showSlide(n){
		slides.hide();
		slides.eq(n-1).fadeIn();
	}
	
	// Define the function to advance the slideshow
	function advanceSlide(){
		if(slideIndex == numSlides){
			slideIndex = 1;
		} else {
			slideIndex++;
		}
		showSlide(slideIndex);
	}
	
	// Set up the automatic advance of the slideshow
	var slideInterval = setInterval(advanceSlide, 3000);
});