export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(benches) {
    let benchesObj = {};
    benches.forEach(bench => benchesObj[bench.id] = bench);

    console.log(benches);
    benches
      .filter(bench => !this.markers[bench.id])
      .forEach(newBench => this.createMarkerFromBench(newBench));

    console.log(this.markers);
  }

  createMarkerFromBench(bench) {
    const position = new google.maps.LatLng(bench.lat, bench.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      benchId: bench.id
    });

    console.log(marker);

    this.markers[marker.benchId] = marker;
  }
}