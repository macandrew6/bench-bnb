import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends Component {
  constructor() {
    super();
  }
  
  // update
  
  // submitreview
  
  render() {
    return (
      <div>
        <input type="text" placeholder="write a review here"/>
        I am review form
      </div>
    );
  }
}

export default withRouter(ReviewForm);