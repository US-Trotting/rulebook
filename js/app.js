var app = {
	initialize: function() {
		var self = this;
		
		$.mobile.allowCrossDomainPages = true;
		$.mobile.defaultPageTransition = "none"; 
		$.mobile.phonegapNavigationEnabled = true; 
		$.mobile.pushStateEnabled = false; 
		$.mobile.transitionFallbacks='none';
	}
};

$(document).on("pageinit", "[data-role='page'].page", function(){
	var page = "#" + $( this ).attr( "id" ),
		// Get the filename of the next page that we stored in the data-next attribute
		next = $( this ).jqmData( "next" ),
		// Get the filename of the previous page that we stored in the data-prev attribute
		prev = $( this ).jqmData( "prev" );

		if(next){
			$(page).on("swipeleft", function(){
				$.mobile.changePage( next + '.html', {transition: "slide"})
			});
		};

		if(prev){
			$(page).on("swiperight", function(){
				$.mobile.changePage( prev + '.html', {transition: "slide", reverse: true})
			});
		};
});