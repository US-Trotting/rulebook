var gapReady = $.Deferred();
var jqmReady = $.Deferred();

document.addEventListener("deviceReady", deviceReady, false);

function deviceReady()
{
	gapReady.resolve();
}

$(document).one("mobileinit", function(){
	jqmReady.resolve();
});

//Run your App Logic only when both frameworks have loaded
$.when(gapReady, jqmReady).then(init);

// App Logic
function init()
{
	$.mobile.allowCrossDomainPages = true;
	$.mobile.defaultPageTransition = "none"; 
	$.mobile.phonegapNavigationEnabled = true; 
	$.mobile.pushStateEnabled = false; 
	$.mobile.transitionFallbacks='none';
	
	$( document ).on( "pagecreate", "[data-role='page'].page", function() {
		// Get the filename of the next page that we stored in the data-next attribute
		var	next = $(this).jqmData("next");
		// Get the filename of the previous page that we stored in the data-prev attribute
		var prev = $(this).jqmData("prev");
		
		$("body").unbind("swipeleft");
		$("body").unbind("swiperight");
		
		
		$("body").on("swipeleft", function(){
			if(next){
				$("body").pagecontainer("change", next + ".html", {transition: "slide"});
			}
		});
		
		$("body").on("swiperight", function(){
			if(prev){
				$("body").pagecontainer("change", prev + ".html", {transition: "slide", reverse: true});
			}
		});
	});
	
}