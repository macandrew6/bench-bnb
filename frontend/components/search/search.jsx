import React from 'react';
import BenchMap from '../bench_map/bench_map';
import BenchIndex from './bench_index';
import FilterForm from './filter_form';

const Search = ({ benches, minSeating, maxSeating, fetchBenches, updateFilter }) => {
  return (
    <div className="search-page-container">
      <BenchMap 
        benches={benches}
        updateFilter={updateFilter}
      />
      <div>
        <FilterForm 
          updateFilter={updateFilter}
          minSeating={minSeating}
          maxSeating={maxSeating}
        />
        <BenchIndex 
          benches={benches}
          fetchBenches={fetchBenches}
        />
      </div>
    </div>
  );
};

export default Search;