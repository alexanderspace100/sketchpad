var gridSize = 64;
var squareSize = 550/gridSize;
var isBorder = false;
var penColor = "pink";

$(document).ready(function() {
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

  //mouse effects
  $("div.grid-square").hover(function(){
    $(this).css("background-color",penColor);
  });


	$('div.colorPick').click(function() {
    	var x = $(this).css('backgroundColor');
    	hexc(x);
	});

	function hexc(colorval) {
    	var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    	delete(parts[0]);
    	for (var i = 1; i <= 3; ++i) {
        	parts[i] = parseInt(parts[i]).toString(16);
        	if (parts[i].length == 1) parts[i] = '0' + parts[i];
    	}
    	penColor = '#' + parts.join('');
	};

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
  		$(".grid-square").css("border-color", "#c8c8c8");
  		isBorder = true;
  		$("button#borderbutton").html("Grid: On");
  	}
  });
});
