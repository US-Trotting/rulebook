$( document ).bind( "mobileinit", function() {
	$.mobile.allowCrossDomainPages = true;
	$.mobile.defaultPageTransition = "none"; 
	$.mobile.phonegapNavigationEnabled = true; 
	$.mobile.pushStateEnabled = false; 
	$.mobile.transitionFallbacks='none';
});

$(document).on("pagecreate", function(event) {
	$(event.target).on("swipeleft", function() {
		var nextPage = $(event.target).jqmData("next");
		$("body").pagecontainer("change", nextPage + ".html", {transition: "slide"});
	});
	$(event.target).on("swiperight", function() {
		var prevPage = $(event.target).jqmData("prev");
		$("body").pagecontainer("change", prevPage + ".html", {transition: "slide", reverse: true});
	});
})