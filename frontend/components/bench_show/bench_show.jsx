import React from 'react';
import BenchMap from '../bench_map/bench_map';
import BenchDetail from './bench_detail';
import { Link } from 'react-router-dom';

const BenchShow = ({ bench, fetchBench, benchId, reviews }) => {
  const benches = {
    [benchId]: bench
  };

  // console.log(reviews);

  return (
    <div className="bench-show-container">
      <div className="lefthalf-bench-show">
        <Link to='/'>Back to Benches</Link>
        <BenchMap 
          benches={benches}
          singleBench={true}
          benchId={benchId}
          fetchBench={fetchBench}
        />
      </div>
      <div className="righthalf-bench-show">
        <BenchDetail 
          bench={bench}
        />
      </div>
    </div>
  );
};

export default BenchShow;