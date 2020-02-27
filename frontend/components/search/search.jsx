import React from 'react';
import BenchMap from '../bench_map/bench_map';
import BenchIndex from './bench_index';

const Search = ({ benches, fetchBenches, updateFilter }) => {
  return (
    <div className="search-page-container">
      <BenchMap 
        benches={benches}
        updateFilter={updateFilter}
      />
      <BenchIndex 
        benches={benches}
        fetchBenches={fetchBenches}
      />
    </div>
  );
};

export default Search;