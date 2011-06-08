var $$ = jQuery.noConflict();

$$(document).ready(function() {
	$$(".shape").click(function(e) {
		
		
		
		alert(e.target.style.top);
	});
});
