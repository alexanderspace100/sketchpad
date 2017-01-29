var gridSize = 64;
var squareSize = 550/gridSize;
var isBorder = false;
var ourColor = "orange";
var colorSetting = "";

$(document).ready(function() {
  startGrid();
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

// add mouse hover effect
// $(".grid-square").mouseenter(function(){
  // if(colorSetting === "random") {
  //   ourColor = '#'+Math.random().toString(16).substr(2,6);
  //   $(this).css("opacity","1");
  // } else {
  //   $(this).css("opacity","1");
  // }
  // $(this).css("background-color", ourColor);
  // });

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
