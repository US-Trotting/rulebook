$( document ).bind( "mobileinit", function() {
	$.mobile.allowCrossDomainPages = true;
	$.mobile.defaultPageTransition = "none"; 
	$.mobile.phonegapNavigationEnabled = true; 
	$.mobile.pushStateEnabled = false; 
	$.mobile.transitionFallbacks='none';
});

$(document).on("pagecreate", function(event) {
	var hammertime = Hammer(event.target);
	
	hammertime.on("swipeleft", function(e) {
		alert(event.target);
		console.log(e.target);
	});
	
	hammertime.on("swiperight", function(e) {
		alert(event.target);
		console.log(e.target);
	});
});