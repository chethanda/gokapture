import React from 'react';
import useSpreadsheetStore from '../store/useSpreadsheetStore';

const Pagination = () => {
  const { currentPage, rowsPerPage, setCurrentPage } = useSpreadsheetStore();
  const totalPages = Math.ceil(1000 / rowsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-4 flex justify-center">
      <button
        onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
        className="px-4 py-2 bg-gray-300 rounded"
      >
        Previous
      </button>
      <span className="mx-4">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
        className="px-4 py-2 bg-gray-300 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
