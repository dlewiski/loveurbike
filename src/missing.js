export class missing {

  apiCall(location, results) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let userLocation = location;
      let numResults = parseInt(results);
      console.log(numResults)
      let proximity = 10;
      let url = `https://bikeindex.org/api/v3/search?/api_key=${process.env.API_KEY}&location=${userLocation}&stolenness=proximity&distance=${proximity}&per_page=${numResults}`;

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


}
