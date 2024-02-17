import "./cartWidget.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = ({ number }) => {
  const handleClick = (event) => {
    console.log(event);
  };

  return (
    <div className="cartContainer">
      <ShoppingCartIcon
        className="cartIcon"
        onClick={(event) => {
          handleClick(event);
        }}
      />
      <span className="cartNumber">{number}</span>
    </div>
  );
};

export default CartWidget;
