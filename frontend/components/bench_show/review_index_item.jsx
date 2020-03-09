import React from 'react';
import { connect } from 'react-redux';

const ReviewIndexItem = (props) => {
  // need to attach the author to each review
  console.log(props);
  return (
    <div>
      Rating: {props.review.rating}
      <br/>
      {props.review.body} - by {props.author.username}
    </div>
  );
};

const mapStateToProps = ({ entities: { users } }, { review }) => {
  console.log(users);
  return {
    author: users[review.author_id]
  };
};

export default connect(mapStateToProps)(ReviewIndexItem);


// export default ReviewIndexItem;