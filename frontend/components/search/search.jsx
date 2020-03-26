import React from "react";
import BenchMap from "../bench_map/bench_map";
import BenchIndex from "./bench_index";
import FilterForm from "./filter_form";
import LoadingIcon from "../loading/loading_icon";

const Search = ({ benches, minSeating, maxSeating, loading, updateFilter }) => {
  return (
    <div>
      {loading && <LoadingIcon className="search-page-container" />}
      <div className="search-page-container">
        <BenchMap
          benches={benches}
          updateFilter={updateFilter}
          singleBench={false}
        />
        <div>
          <FilterForm
            updateFilter={updateFilter}
            minSeating={minSeating}
            maxSeating={maxSeating}
          />
          <BenchIndex benches={benches} />
        </div>
      </div>
    </div>
  );
};

export default Search;
