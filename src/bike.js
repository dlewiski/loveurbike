export function bikeCall(location) {
  let promise = new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    let userLocation = location;
    let proximity = 20;
    let url = `https://bikeindex.org/api/v3/search?/api_key=${process.env.API_KEY}&location=${location}&stolenness=proximity&distance=${proximity}&per_page=25`;

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

    // simpleBikeArray.forEach(function(element) {
    //   $(".output").append("<p>" + element + "</p>");
    // });
    return simpleBikeArray;
  }, function(error) {
    console.log(error.message);
  });
}

export function colorCount() {
  let promise = new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    let url = `https://bikeindex.org:443/api/v3/selections/colors/`;

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
    let colorArr = [];
    body.colors.forEach(function(element) {
          colorArr[element.name] = 0;
        });

    for(var index in colorArr) {
      $(".output").append("<p>" + index + ": " + colorArr[index] + "</p>");
    }

    return colorArr;
  }, function(error) {
    console.log(error.message);
  });
}
