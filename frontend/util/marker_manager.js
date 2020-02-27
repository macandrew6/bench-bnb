/* global google:false */

export default class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(benches) {
    let benchesObj = {};
    benches.forEach(bench => {
      benchesObj[bench.id] = bench;
    });

    benches
      .filter(bench => !this.markers[bench.id])
      .forEach(newBench => this.createMarkerFromBench(newBench, this.handleClick));

    Object.keys(this.markers) //review this line of code
      .filter(benchId => !benchesObj[benchId])
      .forEach(benchId => this.removeMarker(this.markers[benchId]));

      console.log(this.markers)
  }

  createMarkerFromBench(bench) {
    const position = new google.maps.LatLng(bench.lat, bench.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      benchId: bench.id
    });

    marker.addListener('click', () => this.handleClick(bench));
    this.markers[marker.benchId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.benchId].setMap(null);
    delete this.markers[marker.benchId];
  }
}