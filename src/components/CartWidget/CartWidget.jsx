import "./cartWidget.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartContext from "../../context/CartContext";
import { useContext } from "react";
import { sumQuantities } from "../utils/sumQuantitiesCart";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cartList } = useContext(CartContext);
  console.log(cartList);

  return (
    <div className="cartContainer">
      <Link to="/cart/">
        <ShoppingCartIcon className="cartIcon" />
      </Link>
      <span className="cartNumber">{sumQuantities(cartList)}</span>
    </div>
  );
};

export default CartWidget;
