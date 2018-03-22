export class mainSearch {

  bikeCall(location) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let userLocation = location;
      //console.log(this.place);
      let proximity = 20;
      let url = `https://bikeindex.org/api/v3/search?/api_key=${process.env.API_KEY}&location=${userLocation}&stolenness=proximity&distance=${proximity}&per_page=100`;

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
  }

  colorCount() {
    return new Promise(function(resolve, reject) {
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
  }

  displayEachBikeColor(response, colorArr){
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
    //console.log(colorArr);
    body.bikes.forEach(function(element) {
      for(var index in colorArr) {
        if (index === element.frame_colors[0]) {
            colorArr[index]++;
            //console.log(colorArr);
          }
        }
      });
      return colorArr;
  }


  makeColorArray(response) {
    let body = JSON.parse(response);
    let colorArr = [];
    body.colors.forEach(function(element) {
          colorArr[element.name] = 0;
        });
    return colorArr;
  }
}
