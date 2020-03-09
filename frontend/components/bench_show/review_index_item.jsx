import React from 'react';
import { connect } from 'react-redux';

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

const mapStateToProps = ({ entities: { users } }, { review }) => {
  return {
    author: users[review.author_id]
  };
};

export default connect(mapStateToProps)(ReviewIndexItem);


// export default ReviewIndexItem;