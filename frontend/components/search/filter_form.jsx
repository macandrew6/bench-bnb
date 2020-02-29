import React from 'react';

const FilterForm = ({ updateFilter, minSeating, maxSeating }) => {

  const handleFilterChange = (filter) => e => {
    updateFilter(filter, e.currentTarget.value);
  };

  return (
    <div>
      <input 
        type="number" 
        placeholder="min-seating" 
        value={minSeating}
        onChange={handleFilterChange('minSeating')}
      />
      <input 
        type="number" 
        placeholder="max-seating" 
        value={maxSeating}
        onChange={handleFilterChange('maxSeating')}
      />
    </div>
  );
};

export default FilterForm; 