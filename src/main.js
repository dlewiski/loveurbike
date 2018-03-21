import { bikeCall, colorCount } from './bike.js';

$(document).ready(function(){
  colorCount();
  $('#submit-location').submit(function(event){
  event.preventDefault();
  bikeCall($('#location').val());
  });
});
