import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class BenchIndexItem extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const benchId = this.props.bench.id;
    this.props.history.push(`/benches/${benchId}`);
  }
  
  render() {
    const { bench } = this.props;
    return (
      <div 
        onClick={this.handleClick}
        className="bench-index-item-container">
        <img src={bench.pictures[0]} alt="picture loading..." width="175" height="190" />
        <div className="bench-description">
          <h1>{bench.description}</h1>
          <p>longitude: {bench.lng}</p>
          <p>latitude: {bench.lat}</p>
          <p>seats: {bench.seating}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(BenchIndexItem);