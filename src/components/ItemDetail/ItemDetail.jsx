import "./itemDetail.css";
import { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import Button from "../commons/Button/Button";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";

const ItemDetail = ({ name, category, stock, img, description, id, price }) => {
  const { addItems } = useContext(CartContext);
  const [productQuantity, setProductQuantity] = useState(0);

  const handleOnAdd = (quantity) => {
    setProductQuantity(quantity);
    const item = {
      price,
      name,
      quantity,
    };
    addItems(item);
  };

  return (
    <div className="itemDetail" key={id}>
      {/* <img src={img} alt={name} /> */}
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{`Disponible: ${stock}`}</p>
      <p>{category}</p>
      {productQuantity > 0 ? (
        <div>
          <Link to="/">
            <Button>Seguir comprando</Button>
          </Link>
          <Link to="/cart/">
            <Button>Terminar Compra</Button>
          </Link>
        </div>
      ) : (
        <ItemCount onAdd={handleOnAdd} stock={stock} />
      )}
    </div>
  );
};

export default ItemDetail;
