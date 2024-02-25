import { useState } from "react";

// ---- CUSTOM HOOK
export const useCount = (initialState, min, max) => {
  // useState → Para modificar el número del contador
  const [value, setValue] = useState(initialState);

  // function para adicionar 1
  const add = () => {
    if (value < max) {
      setValue(value + 1);
    }
  };

  // function para sustraer 1
  const substract = () => {
    if (value > min) {
      setValue(value - 1);
    }
  };

  return { add, substract, value };
};
