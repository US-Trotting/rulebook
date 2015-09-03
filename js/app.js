$( document ).bind( "mobileinit", function() {
	$.mobile.allowCrossDomainPages = true;
	$.mobile.defaultPageTransition = "none"; 
	$.mobile.phonegapNavigationEnabled = true; 
	$.mobile.pushStateEnabled = false; 
	$.mobile.transitionFallbacks='none';
});

$("body").on("swipeleft", function() {
	alert("swipeleft");
});

$("body").on("swiperight", function() {
	alert("swiperight");
});