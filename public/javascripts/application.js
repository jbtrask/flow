var $$ = jQuery.noConflict();

$$(document).ready(function() {
	
	$$(".shape").click(function(e) {
		$$.ajax("/shapes/10.json", { 
			type: "PUT", 
			data: "x=250&y=250&width=40&height=40"
		});
	});
	
	$$("#ajax_status").ajaxSend(function(event, jqXHR, ajaxOptions){
		$$("#update_result").hide();
		$$(this).show();		
	});
	
	$$("#ajax_status").ajaxComplete(function(event, jqXHR, ajaxOptions){
		$$("#update_result").html(jqXHR.responseText).fadeIn(2000);
		$$(this).fadeOut(400);		
	});
	
});  
			