import React from 'react';
import ReviewIndex from './review_index';

const BenchDetail = ({ bench, reviews }) => {
  return (
    <div className="bench-details-container">
      <h3>{bench.description}</h3>
      <div>Rating: {bench.average_rating || 'No reviews yet'} ({reviews.length} reviews)</div>
      <div>{bench.seating} seats</div>
      <div>Latitude: {bench.lat}</div>
      <div>Longitude: {bench.lng}</div>
      Reviews:
      <ReviewIndex reviews={reviews}/>
    </div>
  );
};

export default BenchDetail;