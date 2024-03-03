import "./itemDetail.css";
import { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import Button from "../commons/Button/Button";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";

const ItemDetail = ({ name, category, stock, img, description, id, price }) => {
  const { addToCart } = useContext(CartContext);
  const [productQuantity, setProductQuantity] = useState(0);

  const handleOnAdd = (quantity) => {
    setProductQuantity(quantity);
    const item = {
      id,
      price,
      name,
      stock,
      img,
      quantity,
    };
    addToCart(item);
  };

  return (
    <div className="itemDetail" key={id}>
      <div className="itemDetail__img">
        <img src={img} alt={name} />
      </div>
      <div className="itemDetail__info">
        <p className="info__category">{category}</p>
        <h3 className="info__title">{name}</h3>
        <p className="info__price">$ {price}</p>
        <p className="info__description">{description}</p>
        <p className="info__stock">{`Cant. disponible: ${stock}`}</p>

        {productQuantity > 0 ? (
          <div>
            <Link to="/">
              <Button>Seguir comprando</Button>
            </Link>
            <Link to="/cart/">
              <Button className="btn btn-checkout">Terminar Compra</Button>
            </Link>
          </div>
        ) : (
          <ItemCount onAdd={handleOnAdd} stock={stock} initial={0} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
