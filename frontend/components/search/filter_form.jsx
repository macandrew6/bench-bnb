import React from 'react';

const FilterForm = ({ updateFilter }) => {
  const handleFilterChange = (filter) => e => {
    updateFilter(filter, e.target.value);
  };

  return (
    <div>
      <input 
        type="number" 
        placeholder="min-seating" 
        onChange={handleFilterChange('minSeating')}
      />
      <input 
        type="number" 
        placeholder="max-seating" 
        onChange={handleFilterChange('maxSeating')}
      />
    </div>
  );
};

export default FilterForm; 