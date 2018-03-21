export function bikeCall() {
  let promise = new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    let location = 97227;
    let getElements;
    let proximity = 20;
    let url = `https://bikeindex.org/api/v3/search?/api_key=${process.env.API_KEY}&location=${location}&stolenness=proximity&distance=${proximity}`;

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
    console.log(body.bikes[0].title);
    body.bikes.forEach(function(element) {
      simpleBikeArray.push(element.title);
    });

    simpleBikeArray.forEach(function(element) {
      $(".output").append("<p>" + element + "</p>");
    });
  }, function(error) {
    console.log(error.message);
  });


}
