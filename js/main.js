$(document).ready(function(){
	var navHeight = $("#header").height();

	activateLink();

	if($(window).scrollTop() > 300){
		$("#header, .dropdown-btn").addClass("scrolled");
		$(".scroll-to-top").fadeIn('fast');
	}
	else{
		$("#header, .dropdown-btn").removeClass("scrolled");
		$(".scroll-to-top").fadeOut('fast');
	}

	$(window).scroll(function(){
		if($(window).scrollTop() > 300){
			$("#header, .dropdown-btn").addClass("scrolled");
			$(".scroll-to-top").fadeIn('fast');
		}
		else{
			$("#header, .dropdown-btn").removeClass("scrolled");
			$(".scroll-to-top").fadeOut('fast');
		}

		activateLink();
	});

	$(".dropdown-btn").click(function(){
		$(".dropdown-nav").slideToggle('fast');
		if($(window).scrollTop() < 300){
			$("#header, .dropdown-btn").toggleClass("scrolled");
		}
	});

	$(".action-link, .nav-link").click(function(e){
		e.preventDefault();
		var hash = $(this).attr('href');
		$("html, body").animate({scrollTop:$(hash).offset().top - navHeight-30}, 2000, 'swing');
	});

	function activateLink(){

		$(".navbar .nav-link").each(function(){
			var curLink = $(this);
			var ref = $(curLink.attr("href"));

			if($(window).scrollTop() >= ref.offset().top - navHeight - 100 && $(window).scrollTop() < ref.offset().top + ref.height()){
				$(".navbar .nav-link").removeClass("active");
				curLink.addClass("active");
			}
			else{
				curLink.removeClass("active");
			}
		});
	}
});

