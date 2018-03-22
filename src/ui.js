export class userDisplay{

  displayColors(finishedArray) {
    $(".output div").remove();
    $(".output p").remove();
    for(var index in finishedArray) {
      $(".output").append("<p>" + index + ": " + finishedArray[index] + "</p>");
    }
  }

  displayPics(body) {
    $(".output div").remove();
    $(".output p").remove();
    body.bikes.forEach(function(element) {
      if (element.large_img != null) {
        let date = new Date(element.date_stolen * 1000).toUTCString();

        $(".output").append('<div class="well"><img class="missing-bike" src="' + element.large_img + '" alt="missing bike id ' + element.id + '"/><p class="missing-bike">This is a ' + element.title + '. It was stolen from ' + element.stolen_location + ' on ' + date + '. If youve seen this bike, please contact the owner at <a href="https://bikeindex.org/bikes/' + element.id +  '">bike index.</a></div>');
      }
    });
  }
}
