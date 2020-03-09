import React from 'react';
import ReviewIndexItemContainer from './review_index_item_container';

const ReviewIndex = ({ reviews }) => {
  return (
    <div>
      {
        reviews.map(review => (
          <ReviewIndexItemContainer 
            key={review.id} 
            review={review}
          />
        ))
      }
    </div>
  );
};

export default ReviewIndex;