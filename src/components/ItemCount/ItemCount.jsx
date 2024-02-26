import "./itemCount.css";
import { useCount } from "../customHooks/useCount";
import Button from "../commons/Button/Button";

function Counter({ onAdd, stock }) {
  //Pasar el último parametro de useCount, como el stock del Item
  const { add, substract, value } = useCount(0, 0, stock);

  return (
    <>
      <div className="counterContainer">
        <button onClick={substract}>-</button>
        <p>{value}</p>
        <button onClick={add}>+</button>
      </div>
      <Button handleClick={() => onAdd(value)}>Agregar al carrito</Button>
    </>
  );
}

export default Counter;
