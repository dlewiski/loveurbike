export function bikeCall() {
  let promise = new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    let location = "Portland, OR";
    let getElements;
    let proximity = 20;
    let url = `https://bikeindex.org/api/v3/search?/api_key=${process.env.API_KEY}&location=${location}&stolenness=proximity&distance=${proximity}&per_page=100`;

    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    }
    request.open("GET", url, true);
    request.send();


  });

  promise.then(function(response) {
    let body = JSON.parse(response);
    let simpleBikeArray = [];
    body.bikes.forEach(function(element) {
      let bikeColors = element.frame_colors[0];
      if (element.frame_colors.length > 1) {
        for (var i = 1; i < element.frame_colors.length; i++) {
          bikeColors = bikeColors + ", " + element.frame_colors[i];
        }
      }
      let bikeString = element.title + ", " + bikeColors + ", " + element.stolen_location;
      simpleBikeArray.push(bikeString);
    });

    simpleBikeArray.forEach(function(element) {
      $(".output").append("<p>" + element + "</p>");
    });
  }, function(error) {
    console.log(error.message);
  });


}
