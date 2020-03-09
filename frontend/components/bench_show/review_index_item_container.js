import React from 'react';
import { connect } from 'react-redux';
import ReviewIndexItem from './review_index_item';

const mapStateToProps = ({entities: {users}}, { review }) => {
  console.log(users[review.author_id]);
  return ({
    author: users[review.author_id]
  });
};

export default connect(
  mapStateToProps
)(ReviewIndexItem);