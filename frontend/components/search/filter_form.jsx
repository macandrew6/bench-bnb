import React from 'react';

const FilterForm = ({ updateFilter, minSeating, maxSeating }) => {

  const handleFilterChange = (filter) => e => {
    updateFilter(filter, e.currentTarget.value);
  };

  return (
    <div>
      <h4>Number of Seats:</h4>
      Minimum
      <input 
        className="min-max-input"
        type="number" 
        placeholder="min-seating" 
        value={minSeating}
        onChange={handleFilterChange('minSeating')}
      />
      Maximum
      <input 
        className="min-max-input"
        type="number" 
        placeholder="max-seating" 
        value={maxSeating}
        onChange={handleFilterChange('maxSeating')}
      />
    </div>
  );
};

export default FilterForm; 