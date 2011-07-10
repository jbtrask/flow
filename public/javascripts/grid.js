$$(document).ready(function() {
	
	var topMargin = 50;
	var bottomMargin = 25;
	var rowHeight = 100;
	var verticalGutter = 76;
	var horizontalSpacing = 76;
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
			xPosition += horizontalSpacing;
		}
		
		xPosition -= horizontalSpacing;
		
		context.moveTo(0, yPosition);
		context.lineTo(xPosition, yPosition);
		yPosition += rowHeight;
		context.moveTo(0, yPosition);
		context.lineTo(xPosition, yPosition);
		yPosition += verticalGutter;
	}
	
	context.strokeStyle = "rgba(0, 0, 0, .15)";
	context.stroke();
});