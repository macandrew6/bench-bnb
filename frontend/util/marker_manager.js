/* global google:false */

export default class MarkerManager {
  constructor(map, handleClick, isSingleBench) {
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
    this.isSingleBench = isSingleBench;
  }

  updateMarkers(benches) {
    let benchesObj = {};
    benches.forEach(bench => {
      benchesObj[bench.id] = bench;
    });

    benches
      .filter(bench => !this.markers[bench.id])
      .forEach(newBench => this.createMarkerFromBench(newBench, this.handleClick));

    Object.keys(this.markers)
      .filter(benchId => !benchesObj[benchId])
      .forEach(benchId => this.removeMarker(this.markers[benchId]));
  }

  createMarkerFromBench(bench) {
    const position = new google.maps.LatLng(bench.lat, bench.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      benchId: bench.id
    });

    if (!this.isSingleBench) {
      marker.addListener('click', () => this.handleClick(bench));
    } 

    this.markers[marker.benchId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.benchId].setMap(null);
    delete this.markers[marker.benchId];
  }
}