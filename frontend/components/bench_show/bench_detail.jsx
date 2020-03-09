import React from 'react';
import ReviewIndex from './review_index';

const BenchDetail = ({ bench, reviews }) => {
  return (
    <div>
      <ul>
        <li>Description: {bench.description}</li>
        <li>Seats: {bench.seating}</li>
        <li>Latitude: {bench.lat}</li>
        <li>Longitude: {bench.lng}</li>
      </ul>
      Reviews:
      <ReviewIndex reviews={reviews}/>
    </div>
  );
};

export default BenchDetail;