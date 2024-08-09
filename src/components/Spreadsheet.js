import React from 'react';
import useSpreadsheetStore from '../store/useSpreadsheetStore';
import useUndoRedo from '../utils/useUndoRedo';
import Pagination from './Pagination';

const Spreadsheet = () => {
  const { cells, updateCell, searchQuery, currentPage, rowsPerPage } = useSpreadsheetStore();
  const { state: undoState, setState: setUndoState, undo, redo } = useUndoRedo(cells);

  const handleCellChange = (index, e) => {
    updateCell(index, e.target.value);
    setUndoState([...undoState]);
  };

  const filteredCells = cells.filter((cell) =>
    cell.value.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const paginatedCells = filteredCells.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  return (
    <div>
      <div className="flex justify-between p-4">
        <button onClick={undo} className="p-2 bg-gray-300 rounded">Undo</button>
        <button onClick={redo} className="p-2 bg-gray-300 rounded">Redo</button>
      </div>
      <div className="grid grid-cols-10 gap-1">
        {paginatedCells.map((cell, index) => (
          <input
            key={index}
            type="text"
            value={cell.value}
            onChange={(e) => handleCellChange(index, e)}
            style={{
              textAlign: cell.format.alignment,
              fontSize: cell.format.fontSize,
            }}
            className="p-2 border border-gray-300"
          />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default Spreadsheet;
