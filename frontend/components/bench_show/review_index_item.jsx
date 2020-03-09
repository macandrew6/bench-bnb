import React from 'react';

const ReviewIndexItem = ({ review, author }) => {
  // need to attach the author to each review
  console.log(author);
  return (
    <div>
      Rating: {review.rating}
      <br/>
      {review.body} - by 
    </div>
  );
};

export default ReviewIndexItem;