import React from 'react';
import BenchIndexItem from './bench_index_item';

const BenchIndex = ({ benches }) => {
  return (
    <div>
      {benches.map(bench => (
        <BenchIndexItem key={bench.id} bench={bench} />
      ))}
    </div>
  );
};

export default BenchIndex;