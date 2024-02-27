import "./cartWidget.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartContext from "../../context/CartContext";
import { useContext } from "react";
import { sumQuantities } from "../utils/sumQuantitiesCart";

const CartWidget = () => {
  const { itemsCart } = useContext(CartContext);
  console.log(itemsCart);
  const handleClick = () => {
    alert("¡Todavía no funciona!");
  };

  return (
    <div className="cartContainer">
      <ShoppingCartIcon className="cartIcon" onClick={handleClick} />
      <span className="cartNumber">{sumQuantities(itemsCart)}</span>
    </div>
  );
};

export default CartWidget;
