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
		var nextPage = $(event.target).jqmData("next");
		if ( nextPage) {
			$("body").pagecontainer("change", nextPage + ".html", {transition: "slide"});
		}
	});
	
	hammertime.on("swiperight", function(e) {
		var prevPage = $(event.target).jqmData("prev");
		if ( prevPage ) {
			$("body").pagecontainer("change", prevPage + ".html", {transition: "slide", reverse: true});
		}
	});
});