import "./counter.css";
import { useCount } from "../customHooks/useCount";

const Counter = () => {
  //Pasar el último parametro de useCount, como el stock del Item
  const { add, substract, value } = useCount(0, 0, 10);

  return (
    <div className="counterContainer">
      <p>{value}</p>
      <button onClick={substract}>-</button>
      <button onClick={add}>+</button>
    </div>
  );
};

export default Counter;
