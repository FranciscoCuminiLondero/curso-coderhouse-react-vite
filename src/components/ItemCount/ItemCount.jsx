import "./itemCount.css";
import { useCount } from "../customHooks/useCount";
import Button from "../commons/Button/Button";

function Counter({ initial, onAdd, stock }) {
  const { add, substract, value } = useCount(initial, 0, stock);

  return (
    <>
      <div className="counterContainer">
        <span
          className="btn-add-sub"
          disabled={value === 0}
          onClick={substract}
        >
          -
        </span>
        <p className="counter">{value}</p>
        <span className="btn-add-sub" disabled={value === stock} onClick={add}>
          +
        </span>
      </div>
      <Button disabled={value === 0} handleClick={() => onAdd(value)}>
        Agregar al carrito
      </Button>
    </>
  );
}

export default Counter;
