import "./itemDetail.css";
import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import Button from "../commons/Button/Button";
import { Link } from "react-router-dom";

const ItemDetail = ({ name, category, stock, img, description, id }) => {
  const [itemAddedCart, setItemAddedCart] = useState(0);
  const handleOnAdd = (quantity) => {
    setItemAddedCart(quantity);
  };

  return (
    <div className="itemDetail" key={id}>
      {/* <img src={img} alt={name} /> */}
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{`Disponible: ${stock}`}</p>
      <p>{category}</p>
      {itemAddedCart > 0 ? (
        <Link to="/cart/">
          <Button>Terminar Compra</Button>
        </Link>
      ) : (
        <ItemCount onAdd={handleOnAdd} stock={stock} />
      )}
    </div>
  );
};

export default ItemDetail;
