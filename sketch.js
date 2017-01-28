var gridSize = 64;
var squareSize = 800/gridSize;
var isBorder = false;

$(document).ready(function() {
  startGrid();
});

function startGrid() {
    // rows
  for(i=0; i<gridSize*gridSize; i++) {
    $(".container").append("<div class='grid-square'></div>")
  }

  // Adjust the Size
  $(".grid-square").css("height", squareSize-2); // -2 to make up for the 1px border on each side.
  $(".grid-square").css("width", squareSize-2);

  // Set border/grid properly.
  if(isBorder) {
    $(".grid-square").css("border-color", "#4286f4");
  }
}
