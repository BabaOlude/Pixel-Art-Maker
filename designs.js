// Choose the color
// Choose the size
var height, width, color;

// When the user pics the size call makeGrid
$('#sizePicker').submit(function (event){
  event.preventDefault();
  height = $('#inputHeight').val();
  width = $('#inputWeight').val();
  makeGrid(height, width);
//height will be logged in the console
});

function makeGrid(x, y) {
  $('tr').remove();
	
// Your code goes here!
  for(var i=1; i <= x; i++){
     $(#pixelCanvas').append('<tr id=table' + i + '></tr>');
     for(var j = 1; j <= y; j++){
	$('#table' + i).append('<td></td>');
     }
  }
  // Choose color and add it to the gride
  $('td').click(function addColor(){
     color = $('#colorPicker').val();
     if ($(this).attr('style')){
	$(this).removeAttr('style');
     }  else{
	$(this).attr('style','background-color:' + color);
     }
	  
  });
	
}
	
