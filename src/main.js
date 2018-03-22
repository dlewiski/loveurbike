import { bikeCall, colorCount, displayEachBikeColor, makeColorArray } from './bike.js';

let displayColors = function(colorArr2) {
  for(var index in colorArr2) {
    $(".test-output").append("<p>" + index + ": " + colorArr2[index] + "</p>");
  }
}


$(document).ready(function(){
  $('#submit-location').submit(function(event){
    event.preventDefault();
    //bikeCall($('#location').val(), colorArr);
    // let displayColors = function(colorArr2) {
    //   for(var index in colorArr2) {
    //     $(".test-output").append("<p>" + index + ": " + colorArr2[index] + "</p>");
    //   }
    // }
    let colorPromise = colorCount()
    colorPromise.then(function(response){
      let colorArr = makeColorArray(response)
      let promise = bikeCall($('#location').val());
      promise.then(function(response){
        let stolenColors=displayEachBikeColor(response, colorArr);
        displayColors(stolenColors);
      });
      promise.error();
    });
    colorPromise.error();
  });
});
