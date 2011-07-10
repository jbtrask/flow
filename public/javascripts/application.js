var $$ = jQuery.noConflict();
/* 
$$(document).ready(function() {
	
	document.getElementById('diagram').addEventListener('dragover', function(e) { if (e.preventDefault) { e.preventDefault(); } return false; });
	document.getElementById('diagram').addEventListener('dragenter', function(e) { if (e.preventDefault) { e.preventDefault(); } return false; });
	document.getElementById('diagram').addEventListener('drop', function(e) { 
		console.log('diagram drop');
		var data = e.dataTransfer.getData("text").split(",");	
		moveShape(data[0], null, e.x, e.y, data[1], data[2]); 
	});
	
	$$(".shape").each(function() {
		document.getElementById(this.id).addEventListener('dragstart', function(e) { 
			$$(".shape:not(.container)").css('opacity', 0.2);
			var id = e.target.id.slice(e.target.id.indexOf("_") + 1);
			e.dataTransfer.setData("text", id + "," + e.offsetX + "," + e.offsetY ); 
		});
		document.getElementById(this.id).addEventListener('dragend', function(e) { 
			$$(".shape:not(.container)").css('opacity', 1.0);
		});
	});
	
	$$(".container").each(function() {
		document.getElementById(this.id).addEventListener('dragover', function(e) { if (e.preventDefault) { e.preventDefault(); } return false; });
		document.getElementById(this.id).addEventListener('dragenter', function(e) { if (e.preventDefault) { e.preventDefault(); } return false; });
		document.getElementById(this.id).addEventListener('drop', function(e) { 
			console.log('container drop');
			var data = e.dataTransfer.getData("text").split(",");	
			var id = e.target.id.slice(e.target.id.indexOf("_") + 1);
			if(id != data[0])
			{	alert('dropped ' + data[0] + ' onto ' + id);
				moveShape(data[0], id, 0, 0, 0, 0);
				e.stopPropagation();
				return true;
			}
			
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
	
	
function moveShape(shape, parent, x, y, offsetX, offsetY) {
	$$("#shape_" + shape).css("left", x - offsetX + "px").css("top", y - offsetY + "px");
	$$.ajax("/shapes/" + shape + ".json", { 
		type: "PUT", 
		data: "x=" + (x - offsetX) + "&y=" + (y - offsetY) + (parent == null ? "" : "&parent=" + parent)
	});	
}
*/

		