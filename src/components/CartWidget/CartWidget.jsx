import "./cartWidget.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = ({ number }) => {
  const handleClick = () => {
    alert("¡Todavía no funciona!");
  };

  return (
    <div className="cartContainer">
      <ShoppingCartIcon className="cartIcon" onClick={handleClick} />
      <span className="cartNumber">{number}</span>
    </div>
  );
};

export default CartWidget;
