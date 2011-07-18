var topMargin = 50;
var bottomMargin = 25;
var rowHeight = 743;
var verticalGutter = 76;
var horizontalSpacing = 76;
var horizontalDivisions = 5;
var horizontalMax = 0;
var verticalMax = 0

$$(document).ready(function() {
	
	var canvas = document.getElementById("grid");
	var context = canvas.getContext("2d");
	var width = $$("body").width();
	var height = $$("body").height();
	
	canvas.width = width;
	canvas.height = height;
	
	var yPosition = topMargin;
	while(yPosition + rowHeight + bottomMargin < canvas.height)
	{
		var xPosition = 0;
		while(xPosition < canvas.width)
		{
			context.moveTo(xPosition, yPosition);
			context.lineTo(xPosition, yPosition + rowHeight);
			horizontalMax = xPosition - (horizontalSpacing * horizontalDivisions);
			xPosition += horizontalSpacing;
		}
		
		xPosition -= horizontalSpacing;
		
		context.moveTo(0, yPosition);
		context.lineTo(xPosition, yPosition);
		verticalMax = yPosition;
		yPosition += rowHeight;
		context.moveTo(0, yPosition);
		context.lineTo(xPosition, yPosition);
		yPosition += verticalGutter;
	}
	
	context.strokeStyle = "rgba(0, 0, 0, .15)";
	context.stroke();

	document.getElementById('grid').addEventListener('dragover', cancelEvent);
	document.getElementById('grid').addEventListener('dragenter', cancelEvent);
	document.getElementById('grid').addEventListener('drop', dropShape);

	$$(".shape").each(function() {
		
		document.getElementById(this.id).addEventListener('dragover', cancelEvent);
		document.getElementById(this.id).addEventListener('dragenter', cancelEvent);
		document.getElementById(this.id).addEventListener('drop', dropShape);
		
		document.getElementById(this.id).addEventListener('dragstart', function(e) { 
			$$(".shape:not(.container)").css('opacity', 0.2);
			var id = e.target.id.slice(e.target.id.indexOf("_") + 1);
			e.dataTransfer.setData("text", id + "," + e.offsetX + "," + e.offsetY ); 
		});
		document.getElementById(this.id).addEventListener('dragend', function(e) { 
			$$(".shape:not(.container)").css('opacity', 1.0);
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

function cancelEvent(e) { 
	if (e.preventDefault) 
		e.preventDefault(); 
	return false; 
}

function dropShape(e) {
	console.log('drop shape');
	var data = e.dataTransfer.getData("text").split(",");	
	moveShape(data[0], null, e.x, e.y, data[1], data[2]);
	e.stopPropogation();
	e.preventDefault();
	return true;
}

function moveShape(shape, parent, x, y, offsetX, offsetY) {

	var actualX = x - offsetX;
	var leftX = horizontalSpacing * Math.floor(parseFloat(actualX) / parseFloat(horizontalSpacing)); 
	var rightX = horizontalSpacing * Math.ceil(parseFloat(actualX) / parseFloat(horizontalSpacing)) 
	var correctedX = (actualX - leftX < rightX - actualX) ? leftX : rightX;
	correctedX = (correctedX < 0) ? 0 : correctedX; 
	correctedX = (correctedX > horizontalMax) ? horiztonalMax : correctedX; 

	var actualY = y - offsetY;
	var upperY = topMargin + (rowHeight + verticalGutter) * Math.floor(parseFloat(actualY - topMargin) / parseFloat(rowHeight + verticalGutter)); 
	var lowerY = topMargin + (rowHeight + verticalGutter) * Math.ceil(parseFloat(actualY - topMargin) / parseFloat(rowHeight + verticalGutter)); 
	var correctedY = (actualY - upperY < lowerY - actualY) ? upperY : lowerY;
	correctedY = (correctedY < topMargin) ? topMargin : correctedY; 
	correctedY = (correctedY > verticalMax) ? verticalMax : correctedY; 

	$$("#shape_" + shape).css("left", actualX + "px").css("top", actualY + "px").animate({left: correctedX + "px", top: correctedY + "px"}, 200);
	$$.ajax("/shapes/" + shape + ".json", { 
		type: "PUT", 
		data: "x=" + correctedX + "&y=" + correctedY + (parent == null ? "" : "&parent=" + parent)
	});	
}