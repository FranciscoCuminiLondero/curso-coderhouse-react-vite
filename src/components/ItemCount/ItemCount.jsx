import "./itemCount.css";
import { useCount } from "../customHooks/useCount";
import Button from "../commons/Button/Button";

function Counter({ onAdd, stock }) {
  //Pasar el último parametro de useCount, como el stock del Item
  const { add, substract, value } = useCount(0, 0, stock);

  return (
    <>
      <div className="counterContainer">
        <button disabled={value === 0} onClick={substract}>
          -
        </button>
        <p>{value}</p>
        <button disabled={value === stock} onClick={add}>
          +
        </button>
      </div>
      <Button disabled={value === 0} handleClick={() => onAdd(value)}>
        Agregar al carrito
      </Button>
    </>
  );
}

export default Counter;
