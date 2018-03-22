// // google maps api key: AIzaSyCbdfFw_02ffQc7uhAsaEGzs2bMc2jOs5g
// // goold maps api request url: https://maps.googleapis.com/maps/api/js?libraries=visualization&callback=initMap
//
//
//   export function initApi(){
//     return new Promise(function(resolve, reject){
//       let request = new XMLHttpRequest();
//       let url = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCbdfFw_02ffQc7uhAsaEGzs2bMc2jOs5g&libraries=visualization`;
//
//       request.onload = function() {
//         if (this.status === 200) {
//           resolve(request.response);
//         } else {
//           reject(Error(request.statusText));
//         }
//       }
//       request.open("GET", url, true);
//       request.send();
//     });
//   }
//   export function initMap() {
//     let map = new google.maps.Map(document.getElementById('map'), {
//       zoom: 2,
//       center: {lat: -33.865427, lng: 151.196123},
//       mapTypeId: 'terrain'
//     });
//   }
//   window.initMap = initMap;
//
//
// // var map;
// //  function initMap() {
// //    map = new google.maps.Map(document.getElementById('map'), {
// //      zoom: 2,
// //      center: {lat: -33.865427, lng: 151.196123},
// //      mapTypeId: 'terrain'
// //    });
// //
// //    // Create a <script> tag and set the USGS URL as the source.
// //    var script = document.createElement('script');
// //
// //    // This example uses a local copy of the GeoJSON stored at
// //    // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
// //    script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
// //    document.getElementsByTagName('head')[0].appendChild(script);
// //
// //  }
// //
// //  function eqfeed_callback(results) {
// //    var heatmapData = [];
// //    for (var i = 0; i < results.features.length; i++) {
// //      var coords = results.features[i].geometry.coordinates;
// //      var latLng = new google.maps.LatLng(coords[1], coords[0]);
// //      heatmapData.push(latLng);
// //    }
// //    var heatmap = new google.maps.visualization.HeatmapLayer({
// //      data: heatmapData,
// //      dissipating: false,
// //      map: map
// //    });
// //  }
