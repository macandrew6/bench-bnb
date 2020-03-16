import React from 'react';
import { connect } from 'react-redux';

const ReviewIndexItem = ({ review, author }) => {
  return (
    <div className="review-index-item">
      Rating: {review.rating}
      <br/>
      {review.body} - by {author.username}
    </div>
  );
};


export default ReviewIndexItem;