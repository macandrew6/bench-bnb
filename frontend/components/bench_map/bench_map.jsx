import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import MarkerManager from '../../util/marker_manager';

class BenchMap extends Component {
  constructor() {
    super();
    this.mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13
    };
  }
  
  componentDidMount() {
    const map = document.getElementById('map');
    this.map = new google.maps.Map(map, this.mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));

    if (this.props.singleBench) {
      this.props.fetchBench(this.props.benchId);
    } else {
      this.registerListeners();
      this.MarkerManager.updateMarkers(this.props.benches);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.singleBench) {
      const { benches, benchId } = this.props;
      this.mapOptions.center.lat = benches[benchId].lat;
      this.mapOptions.center.lng = benches[benchId].lng; //centers the marker
      this.mapOptions.gestureHandling = 'none'; //disables dragging

      // this.map.setCenter({ lat: benches[benchId].lat, lng: benches[benchId].lng }); //also works but can't set mapOptions
      this.map = new google.maps.Map(this.refs.map, this.mapOptions); //reassigns the map
      this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this)); //reassigns the markersManager

      const targetBench = Object.values(this.props.benches);
      this.MarkerManager.updateMarkers(targetBench);
    } else {
      this.MarkerManager.updateMarkers(this.props.benches);
    }
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

    google.maps.event.addListener(this.map, 'click', (e) => {
      let coords = {
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
      };
      this.handleClick(coords);
    });
  }

  handleMarkerClick(bench) {
    this.props.history.push(`benches/${bench.id}`);
  }

  handleClick(coords) {
    this.props.history.push({
      pathname: 'benches/new',
      search: `lat=${coords.lat}&lng=${coords.lng}`
    });
  }

  render() {
    return (
      <div id="map" ref="map">
        
      </div>
    );
  }
}

export default withRouter(BenchMap);
