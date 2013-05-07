var app = {
	initialize: function() {
		$.mobile.allowCrossDomainPages = true;
		$.mobile.defaultPageTransition = "none"; 
		$.mobile.phonegapNavigationEnabled = true; 
		$.mobile.pushStateEnabled = false; 
		$.mobile.transitionFallbacks='none';
	}
};

$('div.ui-page')
	.live('swipeleft', function(){
		var nextpage = $( this ).jqmData( "next" );
		if ( nextpage.length > 0 ){
			$.mobile.changePage( nextpage + '.html' )
		}
	})
	.live('swiperight', function(){
		var prevpage = $( this ).jqmData( "prev" );
		if ( prevpage.length > 0 ){
			$.mobile.changePage( prevpage + '.html' )
		}
	});