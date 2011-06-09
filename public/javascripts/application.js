var $$ = jQuery.noConflict();

$$(document).ready(function() {
	
	document.getElementById('diagram').addEventListener('dragover', function(e) { if (e.preventDefault) { e.preventDefault(); } return false; });
	document.getElementById('diagram').addEventListener('dragenter', function(e) { if (e.preventDefault) { e.preventDefault(); } return false; });
	document.getElementById('diagram').addEventListener('drop', function(e) { 
		var data = e.dataTransfer.getData("text").split(",");	
		moveShape(data[0], e.x, e.y, data[1], data[2]); 
	});
	
	$$(".shape").each(function() {
		document.getElementById(this.id).addEventListener('dragstart', function(e) { 
			var id = e.target.id.slice(e.target.id.indexOf("_") + 1);
			e.dataTransfer.setData("text", id + "," + e.offsetX + "," + e.offsetY ); 
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
	
	
function moveShape(id, x, y, offsetX, offsetY) {
	$$("#shape_" + id).css("left", x - offsetX + "px").css("top", y - offsetY + "px");
	$$.ajax("/shapes/" + id + ".json", { 
		type: "PUT", 
		data: "x=" + (x - offsetX) + "&y=" + (y - offsetY) 
	});	
}

		