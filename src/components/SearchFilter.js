import React from 'react';
import useSpreadsheetStore from '../store/useSpreadsheetStore';

const SearchFilter = () => {
  const { searchQuery, setSearchQuery } = useSpreadsheetStore();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search..."
        className="p-2 border border-gray-300 rounded"
      />
    </div>
  );
};

export default SearchFilter;
