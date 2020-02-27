import React, { Component } from 'react';

import MarkerManager from '../../util/marker_manager';

const mapOptions = {
  center: { lat: 37.7758, lng: -122.435 }, // this is SF
  zoom: 13
};

export default class BenchMap extends Component {
  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);

    this.registerListeners();
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west }
      };
      this.props.updateFilter('bounds', bounds);
    });
  }

  componentDidUpdate(prevProps) {
    // if(prevProps.benches !== this.props.benches) {
      this.MarkerManager.updateMarkers(this.props.benches);
    // }
  }

  render() {
    return (
      <div id="map" ref="map">
        
      </div>
    );
  }
}
