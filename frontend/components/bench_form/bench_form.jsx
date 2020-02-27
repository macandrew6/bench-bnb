import React, { Component } from 'react';

class BenchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      seating: 2
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    console.log(formData);
  }
  
  render() {
    const { lat, lng } = this.props;
    const { seating, description } = this.state;
    
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="description">Description
            <input 
              type="text"
              onChange={this.update('description')}
              value={description}
            />
          </label>
          <label htmlFor="number of seats">Number of Seats
            <input 
              min="0"
              type="number"
              onChange={this.update('seating')}
              value={seating}
            />
          </label>
          <label htmlFor="latitude">Latitude
            <input 
              type="number"
              disabled
              value={lat}
            />
          </label>
          <label htmlFor="longitude">Longitude
            <input 
              type="number"
              disabled
              value={lng}
            />
          </label>
          <button type="submit">Create Bench</button>
        </form>
      </div>
    );
  }
}

export default BenchForm;