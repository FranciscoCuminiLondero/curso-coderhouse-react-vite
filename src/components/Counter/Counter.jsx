import "./counter.css";
import { useState } from "react";

const Counter = () => {
  // useState → Para modificar el número del contador
  const [value, setValue] = useState(0);

  // function para adicionar 1
  const add = () => {
    setValue(value + 1);
  };

  // function para sustraer 1
  const substract = () => {
    setValue(value - 1);
  };

  return (
    <div className="counterContainer">
      <p>{value}</p>
      <button onClick={substract}>-</button>
      <button onClick={add}>+</button>
    </div>
  );
};

export default Counter;
