$(document).ready(function() {

	// media query event handler
	if (matchMedia) 
	{
		var mq = window.matchMedia("(max-width: 768px)");
		mq.addListener(toogleParallax);
		toogleParallax(mq);
	}

	// media query change
	function toogleParallax(mq) 
	{
		if (mq.matches) 
		{
			// window width is less than 768px
			$(".plx-img")
				.removeClass("plx-img")
				.addClass("plx-img-inactive")
				.css("background-position-y", "")
			$(".plx-float")
				.removeClass("plx-float")
				.addClass("plx-float-inactive")
		}
		else 
		{
			// window width is at least 768px
			$(".plx-img-inactive")
				.removeClass("plx-img-inactive")
				.addClass("plx-img")
			$(".plx-float-inactive")
				.removeClass("plx-float-inactive")
				.addClass("plx-float")
		}
	}
})
