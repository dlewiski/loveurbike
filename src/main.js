import { mainSearch } from './bike.js';

let displayColors = function(finishedArray) {
  for(var index in finishedArray) {
    $(".output").append("<p>" + index + ": " + finishedArray[index] + "</p>");
  }
}


$(document).ready(function(){
  $('#submit-location').submit(function(event){
    event.preventDefault();
    let newSearch = new mainSearch($('#location').val());
    let colorPromise = newSearch.colorCount()
    colorPromise.then(function(response){
      let colorArr = newSearch.makeColorArray(response)
      let promise = newSearch.bikeCall();
      promise.then(function(response){
        let stolenColors = newSearch.displayEachBikeColor(response, colorArr);
        displayColors(stolenColors);
      });
      //promise.error();
    });
  //  colorPromise.error();
  });
});
