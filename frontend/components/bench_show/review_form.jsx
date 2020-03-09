import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends Component {
  constructor() {
    super();
    this.state = {
      body: '',
      rating: 5
    };
    
    this.navigateToBenchShow = this.navigateToBenchShow.bind(this);
    this.handleSubmitReview = this.handleSubmitReview.bind(this);
  }

  navigateToBenchShow() {
    const url = `/benches/${this.props.match.params.benchId}`;
    this.props.history.push(url);
  }
  
  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  }
  
  handleSubmitReview(e) {
    e.preventDefault();
    const benchId = parseInt(this.props.match.params.benchId);
    const review = Object.assign({}, this.state, {bench_id: benchId});
    this.props.createReview(review);
    this.navigateToBenchShow();
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmitReview}>
          Rating:
          <br/>
          <input 
            type="number" 
            value={this.state.rating}
            onChange={this.update('rating')}/>
          <br/>
          Comment:
          <br/>
          <textarea 
            type="text" 
            cols="30"
            rows="10"
            value={this.state.body}
            onChange={this.update('body')}
            placeholder="write a review here"/>
          <br/>
          <button type="submit">Submit Review</button>
        </form>
        <button onClick={this.navigateToBenchShow}>Cancel</button>
      </div>
    );
  }
}

export default withRouter(ReviewForm);