import React from 'react';
import Spreadsheet from './components/Spreadsheet';
import SearchFilter from './components/SearchFilter';
import CellFormatting from './components/CellFormatting';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <SearchFilter />
      <Spreadsheet />
      <CellFormatting cellIndex={0} />
    </div>
  );
};

export default App;
