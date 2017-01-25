$(document).ready(function(){
  //builds the grid
  var buildSketch = function(size){
    var numRows =  size;
    var numCols =  size;

    for (var i = 0; i < numRows; i++){
      $(".container").append("<div class='row'></div>");
    };
})
