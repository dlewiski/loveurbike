import { mainSearch } from './bike.js';
import { missing } from './missing.js';
import './styles.css';

let displayColors = function(finishedArray) {
  $(".output div").remove();
  $(".output p").remove();
  for(var index in finishedArray) {
    $(".output").append("<p>" + index + ": " + finishedArray[index] + "</p>");
  }
}

let displayPics = function(body) {
  $(".output div").remove();
  $(".output p").remove();
  body.bikes.forEach(function(element) {
    if (element.large_img != null) {
      let date = new Date(element.date_stolen * 1000).toUTCString();

      $(".output").append('<div class="well"><img class="missing-bike" src="' + element.large_img + '" alt="missing bike id ' + element.id + '"/><p class="missing-bike">This is a ' + element.title + '. It was stolen from ' + element.stolen_location + ' on ' + date + '. If youve seen this bike, please contact the owner at <a href="https://bikeindex.org/bikes/' + element.id +  '">bike index.</a></div>');
    }

  });
}


$(document).ready(function(){
  $('#submit-location').submit(function(event){
    event.preventDefault();
    let newSearch = new mainSearch();
    //console.log(newSearch.place);
    let colorPromise = newSearch.colorCount()
    colorPromise.then(function(response){
      let colorArr = newSearch.makeColorArray(response)
      let promise = newSearch.bikeCall($('#location').val());
      promise.then(function(response){
        let stolenColors = newSearch.displayEachBikeColor(response, colorArr);
        displayColors(stolenColors);
      });
      //promise.error();
    });
  //  colorPromise.error();
  });

  //new submit
  $('#missing-location-submit').submit(function(event) {
    event.preventDefault();

    let missingSearch = new missing();
    

    let promise = missingSearch.apiCall($('#missing-location').val(), $('#missing-results').val());

    promise.then(function(otherResponse) {
      let body = JSON.parse(otherResponse);
      displayPics(body);

    });
  });
});
