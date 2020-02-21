import React from 'react';

const BenchIndexItem = ({ bench }) => {
  return (
    <div>
      <h1>{bench.description}</h1>
      <p>longitude: {bench.lng}</p>
      <p>latitude: {bench.lat}</p>
    </div>
  );
};

export default BenchIndexItem;