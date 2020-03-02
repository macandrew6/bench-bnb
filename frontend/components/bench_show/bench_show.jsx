import React from 'react';
import BenchMap from '../bench_map/bench_map';
import { Link } from 'react-router-dom';

// why when i refresh this page do i lose connection with the store
// still not sure why this happens

const BenchShow = ({ bench, fetchBench, benchId }) => {
  console.log(bench);
  const benches = {
    [benchId]: bench
  };
  return (
    <div>
      <Link to='/'>Back to Benches</Link>
      <BenchMap 
        benches={benches}
        singleBench={true}
        benchId={benchId}
        fetchBench={fetchBench}
      />
    </div>
  );
};

export default BenchShow;