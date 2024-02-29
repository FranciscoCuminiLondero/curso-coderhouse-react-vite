import "./item.css";
import Button from "../commons/Button/Button";
import { Link } from "react-router-dom";

function Item({ name, category, stock, img, description, id }) {
  return (
    <div className="item" key={id}>
      <h3>{name}</h3>
      {<img src={img} alt={name} />}
      <p>{description}</p>
      <p>{`Disponible: ${stock}`}</p>
      <p>{category}</p>
      <Link key={id} to={`/item/${id}`}>
        <Button>Ver más</Button>
      </Link>
    </div>
  );
}

export default Item;
