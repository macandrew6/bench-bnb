import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends Component {
  constructor() {
    super();
    
    this.navigateToBenchShow = this.navigateToBenchShow.bind(this);
  }

  navigateToBenchShow() {
    const url = `/benches/${this.props.match.params.benchId}`;
    this.props.history.push(url);
  }
  
  // update
  
  // submitreview
  
  render() {
    return (
      <div>
        <input type="text" placeholder="write a review here"/>
        <button onClick={this.navigateToBenchShow}>Cancel</button>
      </div>
    );
  }
}

export default withRouter(ReviewForm);