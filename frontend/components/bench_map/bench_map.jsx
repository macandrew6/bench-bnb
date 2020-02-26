import React, { Component } from 'react';

import MarkerManager from '../../util/marker_manager';

export default class BenchMap extends Component {
  componentDidMount() {
    // set the map to show SF
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13
    };

    // wrap this.mapNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);

    this.registerListeners();
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
    if(prevProps.benches !== this.props.benches) {
      this.MarkerManager.updateMarkers(this.props.benches);
    }
  }

  render() {
    return (
      <div id="map-container" ref={ map => this.mapNode = map }>
        
      </div>
    );
  }
}
