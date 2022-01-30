$( document ).ready(function() {
    $("#slide_menu").click(function(){
		$("nav ul").slideToggle();
	});
});

$( document ).ready(function() {
	$(window).resize(function(){
		if ($(window).width()>550){
			$("nav ul").removeAttr('style');
		};
	});
});