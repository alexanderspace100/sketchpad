var gridSize = 64;
var squareSize = 550/gridSize;
var isBorder = false;
var penColor = "pink";

$(document).ready(function() {
  startGrid();
  effects();
});

function startGrid() {
    // create the rows
  for(i=0; i<gridSize*gridSize; i++) {
    $("#container").append("<div class='grid-square'></div>")
  }

  // Adjust the Size
  $(".grid-square").css("height", squareSize-2); // -2 to make up for the 1px border on each side.
  $(".grid-square").css("width", squareSize-2);

  // Set border/grid properly.
  if(isBorder) {
    $(".grid-square").css("border-color", "#4286f4");
  }
}

//mouse effects
function effects() {
$("div.grid-square").hover(function(){
  $(this).css("background-color",penColor);
});
}

// Reset Button
$("#clear-grid").click(function(){
  	$(".grid-square").remove();
  	startGrid();
});

// Grid Toggle Button
$("#borderbutton").click(function(){
	// If isBorder is true(on), we turn it off.
	if(isBorder) {
			//Toggle the grid off by changing it's border to transparent.
			$(".grid-square").css("border-color", "transparent");
			isBorder = false;
			$("button#borderbutton").html("Grid: Off");
	// Otherwise if border is false(off), we turn it on and put a border on all grid-squares.
	} else {
		$(".grid-square").css("border-color", "#4286f4");
		isBorder = true;
		$("button#borderbutton").html("Grid: On");
	}
});

// Resize Button
$("#resize").click(function(){
	$(".grid-square").remove();
 	gridSize = parseInt(prompt("Choose a pixel density. e.g 100 = 100x100 pixels dense. Go too high and the script may stop running!", "100"));
 	squareSize = 800/gridSize;
 	gridStart();
});
