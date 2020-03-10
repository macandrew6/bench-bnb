import React from 'react';
import { connect } from 'react-redux';

const ReviewIndexItem = ({ review, author }) => {
  return (
    <div>
      Rating: {review.rating}
      <br/>
      {review.body} - by {author.username}
    </div>
  );
};


export default ReviewIndexItem;