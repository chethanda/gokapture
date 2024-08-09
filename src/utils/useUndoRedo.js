import { useState } from 'react';

const useUndoRedo = (initialState) => {
  const [history, setHistory] = useState([initialState]);
  const [index, setIndex] = useState(0);

  const setState = (newState) => {
    const newHistory = history.slice(0, index + 1);
    newHistory.push(newState);
    setHistory(newHistory);
    setIndex(newHistory.length - 1);
  };

  const undo = () => {
    setIndex(Math.max(index - 1, 0));
  };

  const redo = () => {
    setIndex(Math.min(index + 1, history.length - 1));
  };

  return {
    state: history[index],
    setState,
    undo,
    redo,
  };
};

export default useUndoRedo;
