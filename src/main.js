import { bikeCall, colorCount } from './bike.js';

let displayColors = function(colorArr2) {
  for(var index in colorArr2) {
    $(".test-output").append("<p>" + index + ": " + colorArr2[index] + "</p>");
  }
}


$(document).ready(function(){
  let colorArr = colorCount();
  $('#submit-location').submit(function(event){
    event.preventDefault();
    //bikeCall($('#location').val(), colorArr);
    // let displayColors = function(colorArr2) {
    //   for(var index in colorArr2) {
    //     $(".test-output").append("<p>" + index + ": " + colorArr2[index] + "</p>");
    //   }
    // }
    let promise = bikeCall($('#location').val(), colorArr);
    promise.then(function(response){
      let colorArr=displayEachBikeColor(response);
      displayColors(colorArr);
    });
    promise.error();


  });
});
