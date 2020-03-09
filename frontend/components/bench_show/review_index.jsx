import React from 'react';
import ReviewIndexItem from './review_index_item';

const ReviewIndex = ({ reviews }) => {
  return (
    <div>
      {
        reviews.map(review => (
          <ReviewIndexItem 
            key={review.id} 
            review={review}
          />
        ))
      }
    </div>
  );
};

export default ReviewIndex;