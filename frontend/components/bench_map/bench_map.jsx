/* global google:false */

import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import MarkerManager from "../../util/marker_manager";

class BenchMap extends Component {
  constructor() {
    super();
    this.mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13
    };
  }

  componentDidMount() {
    if (this.props.singleBench) {
      this.mapOptions.gestureHandling = "none";
    }

    const map = document.getElementById("map");
    this.map = new google.maps.Map(map, this.mapOptions);
    this.MarkerManager = new MarkerManager(
      this.map,
      this.handleMarkerClick.bind(this),
      this.props.singleBench,
      this.props.benchId
    );

    if (this.props.singleBench) {
      this.props.fetchBench(this.props.benchId).then(() => {
        const { benches, benchId } = this.props;
        this.map.setCenter({
          lat: benches[benchId].lat,
          lng: benches[benchId].lng
        });
      });
    } else {
      this.registerListeners();
      this.MarkerManager.updateMarkers(this.props.benches);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.singleBench) {
      const targetBench = Object.values(this.props.benches);
      this.MarkerManager.updateMarkers(targetBench);
    } else {
      this.MarkerManager.updateMarkers(this.props.benches);
    }
  }

  registerListeners() {
    google.maps.event.addListener(this.map, "idle", () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west }
      };
      this.props.updateFilter("bounds", bounds);
    });

    google.maps.event.addListener(this.map, "click", e => {
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
      pathname: "benches/new",
      search: `lat=${coords.lat}&lng=${coords.lng}`
    });
  }

  render() {
    return <div id="map" ref="map"></div>;
  }
}

export default withRouter(BenchMap);
