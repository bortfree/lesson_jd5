$(function() {

	$(".toggle-mnu").click(function(){
		$(this).toggleClass("on");
		$(".main-menu").slideToggle();
	});

	
	$(".section_4 h2"). waypoint(function(){

		$(".section_4 .card").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.removeClass("card-off").addClass("card-on");
			}, 150*index);
		});
	});

	$(".section_5"). waypoint(function(){

		$(".section_5 .tc_item").each(function(index) {
			var ths = $(this);
			setTimeout(function() {
				var myAnimation = new DrawFillSVG({
					elementId: "tc-svg-" + index
				});
				ths.removeClass("").addClass("");
			}, 500*index);
		} );
		this.destroy();
	} );


	$(".slider").owlCarousel({
		items : 1,
		nav : true,
		navText : "",
		loop : true,
		autoplay : true,
		autoplayHoverPause : true,
		fluidSpeed : 600,
		autoplaySpeed : 600,
		navSpeed : 600,
		dotsSpeed : 600,
		dragEndSpeed : 600
	});


	


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
