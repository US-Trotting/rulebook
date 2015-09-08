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
		var nextPage = $(event.target).jqmData("next") + ".html";
		$("body").pagecontainer("change", nextPage, {transition: "slide"});
	});
	
	hammertime.on("swiperight", function(e) {
		var prevPage = $(event.target).jqmData("prev") + ".html";
		$("body").pagecontainer("change", prevPage, {transition: "slide", reverse: true});
	});
});