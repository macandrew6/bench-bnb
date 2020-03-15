import React from 'react';
import ReviewIndex from './review_index';

const BenchDetail = ({ bench, reviews }) => {
  return (
    <div className="bench-details-container">
      <div>Rating: {bench.average_rating || 'No reviews yet'} ({reviews.length} reviews)</div>
      <div>{bench.seating} seats</div>
      <div>Latitude: {bench.lat}</div>
      <div>Longitude: {bench.lng}</div>
      <br/>
      Reviews:
      <ReviewIndex reviews={reviews}/>
    </div>
  );
};

export default BenchDetail;