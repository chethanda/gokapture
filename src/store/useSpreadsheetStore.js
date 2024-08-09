import create from 'zustand';

const useSpreadsheetStore = create((set) => ({
  cells: Array.from({ length: 1000 }, () => ({
    value: '',
    format: { alignment: 'left', fontSize: '14px' },
    validation: { type: 'text' },
  })),
  searchQuery: '',
  currentPage: 1,
  rowsPerPage: 50,
  updateCell: (index, value) => set((state) => {
    const cell = state.cells[index];
    if (cell.validation.type === 'number' && isNaN(value)) return;
    const newCells = [...state.cells];
    newCells[index] = { ...newCells[index], value };
    return { cells: newCells };
  }),
  updateCellFormatting: (index, formatting) => set((state) => {
    const newCells = [...state.cells];
    newCells[index] = { ...newCells[index], format: { ...newCells[index].format, ...formatting } };
    return { cells: newCells };
  }),
  updateCellValidation: (index, validation) => set((state) => {
    const newCells = [...state.cells];
    newCells[index] = { ...newCells[index], validation };
    return { cells: newCells };
  }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setCurrentPage: (page) => set({ currentPage: page }),
}));

export default useSpreadsheetStore;
