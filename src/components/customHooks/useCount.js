import { useState } from "react";

export const useCount = (initialState, min, max) => {
  const [value, setValue] = useState(initialState);

  const add = () => {
    if (value < max) {
      setValue(value + 1);
    }
  };

  const substract = () => {
    if (value > min) {
      setValue(value - 1);
    }
  };

  return { add, substract, value };
};
