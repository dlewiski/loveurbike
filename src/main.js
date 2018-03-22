import { mainSearch } from './bike.js';
import { missing } from './missing.js';
import { userDisplay } from './ui.js';
import './styles.css';

let display = new userDisplay;


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
        display.displayColors(stolenColors);
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
      display.displayPics(body);
    }, function(error) {
      $('.output').append("<p>Error ERROR!! RED ALERT!!!</p>");
    });
  });
});
