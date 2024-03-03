import "./counter.css";

const Counter = ({ value, stock, onSubtract, onAdd }) => {
  return (
    <div className="genericCounterContainer">
      <button disabled={value === 0} onClick={onSubtract}>
        -
      </button>
      <p className="value">{value}</p>
      <button disabled={value === stock} onClick={onAdd}>
        +
      </button>
    </div>
  );
};

export default Counter;
