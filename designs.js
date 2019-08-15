// Choose the color
// Choose the size

// When the user pics the size call makeGrid

function makeGrid() {
	console.log("makeGrid is running!")
	
	// Select the size
	
	var canvas, cell, gridHeight, gridWidth, rows;
	
	canvas = $('#pixel_canvas');
	gridHeight = $('#input_height').val();
	gridWidth = $('#input_width').val();
	
	canvas.children().remove()
	
	for (x = 0; x < gridHeight; x++) {
	canvas.append('<tr></tr>');
	}
	
	rows = $('tr');
	
	for (y = 0; y < gridWidth; y++) {
	rows.append('<td></td>');
	} 
	
	cell = canvas.find('td');
	
	// Change the color when td is clicked by the user
	cell.click(function() {
		// Select color input
		console.log("changeColor is running!");
		var color;
		color = $("#colorPicker").val();
		$(this).attr('bgcolor', color);
	});
	
}

// When the user chooses the size call makeGrid
var submitQuery;

submitQuery = $('input[type="submit"]')

submitQuery.click(function(event) {
  event.preventDefault();
  makeGrid();
});

