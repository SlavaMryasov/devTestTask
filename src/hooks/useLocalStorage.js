import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(() => {
    const localStorageItem = localStorage.getItem(key);
    return localStorageItem ? JSON.parse(localStorageItem) : initialValue;
  });

  const updateState = (newValue) => {
    setState((prevState) => {
      const updatedState =
        typeof newValue === "function" ? newValue(prevState) : newValue;

      localStorage.setItem(key, JSON.stringify(updatedState));
      return updatedState;
    });
  };

  return [state, updateState];
};
