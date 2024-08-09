import React from 'react';
import useSpreadsheetStore from '../store/useSpreadsheetStore';

const CellFormatting = ({ cellIndex }) => {
  const { cells, updateCellFormatting } = useSpreadsheetStore();
  const cell = cells[cellIndex] || { format: { alignment: 'left', fontSize: '14px' } };

  const handleFormatChange = (e) => {
    const { name, value } = e.target;
    updateCellFormatting(cellIndex, { [name]: value });
  };

  return (
    <div className="p-4">
      <h3 className="text-lg font-bold mb-2">Cell Formatting</h3>
      <label className="block mb-2">
        Text Alignment:
        <select
          name="alignment"
          value={cell.format.alignment}
          onChange={handleFormatChange}
          className="ml-2 p-2 border border-gray-300 rounded"
        >
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
      </label>
      <label className="block mb-2">
        Font Size:
        <select
          name="fontSize"
          value={cell.format.fontSize}
          onChange={handleFormatChange}
          className="ml-2 p-2 border border-gray-300 rounded"
        >
          <option value="12px">12px</option>
          <option value="14px">14px</option>
          <option value="16px">16px</option>
          <option value="18px">18px</option>
        </select>
      </label>
    </div>
  );
};

export default CellFormatting;
