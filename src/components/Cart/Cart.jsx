import "./cart.css";
import { useContext, useState, useEffect } from "react";
import CartContext from "../../context/CartContext";
import Button from "../commons/Button/Button";
import ClearIcon from "@mui/icons-material/Clear";
import Counter from "../commons/Counter/Counter";
import DeleteIcon from "@mui/icons-material/Delete";
import Form from "../Form/Form";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartList, removeList, deleteItem, handleQuantityChange } =
    useContext(CartContext);
  const [showForm, setShowForm] = useState(false);

  const handleDeleteItem = (id) => {
    deleteItem({ id });
  };

  const calculateSubtotal = (item) => {
    return item.quantity * item.price;
  };

  const calculateTotals = () => {
    let subtotal = 0;
    cartList.forEach((item) => {
      subtotal += calculateSubtotal(item);
    });

    return subtotal;
  };

  const handleQuantityChangeAndUpdate = (id, newQuantity) => {
    if (newQuantity === 0) {
      deleteItem({ id });
    } else {
      handleQuantityChange(id, newQuantity);
    }
  };

  const handleFinishPurchase = () => {
    setShowForm(true);
  };

  useEffect(() => {
    if (cartList.length === 0) {
      setShowForm(false); // Oculta el formulario cuando se vacía el carrito
    }
  }, [cartList]);

  return (
    <div className="cartContainer">
      <div className="cartContent">
        <div className="content">
          <h2>TU CARRITO</h2>
          <ul>
            {cartList.map((item, index) => (
              <li key={index}>
                <ClearIcon onClick={() => handleDeleteItem(item.id)} />
                <img src={item.img} alt={item.name} />
                <p>{item.name}</p>
                <Counter
                  value={item.quantity}
                  stock={item.stock}
                  onSubtract={() =>
                    handleQuantityChangeAndUpdate(item.id, item.quantity - 1)
                  }
                  onAdd={() =>
                    handleQuantityChangeAndUpdate(item.id, item.quantity + 1)
                  }
                />
                <p>c/u $ {item.price}</p>
              </li>
            ))}
          </ul>
          {cartList.length > 0 ? (
            <div className="btnContainer">
              <Button className="btn btn-removeCart" onClick={removeList}>
                Vaciar carrito
                <DeleteIcon />
              </Button>
            </div>
          ) : (
            "Carrito Vacio"
          )}
        </div>
        <div className="detail">
          <h3>TOTALES</h3>
          <ul>
            {cartList.map((item, index) => (
              <li key={index}>
                <p>{item.name}</p>
                <p>{`${item.quantity} x $ ${item.price}`}</p>
                <p>$ {calculateSubtotal(item)}</p>
              </li>
            ))}
          </ul>
          <div className="detail__total">
            <h4>TOTAL</h4>
            <p>$ {calculateTotals()}</p>
          </div>
          {cartList.length > 0 && (
            <div className="btns-finish">
              <Link to="/">
                <Button>Seguir comprando</Button>
              </Link>
              <Button
                className="btn btn-checkout"
                onClick={handleFinishPurchase}
              >
                Terminar Compra
              </Button>
            </div>
          )}
        </div>
      </div>
      <div className="Form">{showForm && <Form />}</div>
    </div>
  );
};

export default Cart;
