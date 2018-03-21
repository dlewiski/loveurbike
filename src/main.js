import { bikeCall, colorCount } from './bike.js';

$(document).ready(function(){
  let colorArr = colorCount();
  $('#submit-location').submit(function(event){
  event.preventDefault();
  bikeCall($('#location').val(), colorArr);
  });
});
