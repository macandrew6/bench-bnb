import React, { Component } from 'react';

class BenchForm extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="description">Description
            <input type="text"/>
          </label>
          <label htmlFor="number of seats">Number of Seats
            <input type="number"/>
          </label>
          <label htmlFor="latitude">Latitude
            <input type="number"/>
          </label>
          <label htmlFor="longitude">Longitude
            <input type="number"/>
          </label>
        </form>
      </div>
    );
  }
}

export default BenchForm;