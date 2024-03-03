import "./item.css";
import { Link } from "react-router-dom";

function Item({ name, stock, img, id }) {
  const isAvailable = stock > 0;
  return (
    <div className="item" key={id}>
      <Link key={id} to={`/item/${id}`}>
        {<img src={img} alt={name} />}
        <h3>{name}</h3>
        <p>
          <span className={isAvailable ? "available" : "not-available"}>
            {isAvailable ? "Disponible" : "No disponible"}
          </span>
        </p>
      </Link>
    </div>
  );
}

export default Item;
