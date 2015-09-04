$( document ).bind( "mobileinit", function() {
	$.mobile.allowCrossDomainPages = true;
	$.mobile.defaultPageTransition = "none"; 
	$.mobile.phonegapNavigationEnabled = true; 
	$.mobile.pushStateEnabled = false; 
	$.mobile.transitionFallbacks='none';
});

$(document).on("pagecreate", function(event) {
	$(event.target).hammer().unbind("swipeleft");
	$(event.target).hammer().unbind("swiperight");
	
	$(event.target).hammer().bind("swipeleft", function() {
		var nextPage = $(event.target).jqmData("next");
		$("body").pagecontainer("change", nextPage + ".html", {transition: "slide"});
	});
	
	$(event.target).hammer().bind("swiperight", function() {
		var prevPage = $(event.target).jqmData("prev");
		$("body").pagecontainer("change", prevPage + ".html", {transition: "slide", reverse: true});
	});
})