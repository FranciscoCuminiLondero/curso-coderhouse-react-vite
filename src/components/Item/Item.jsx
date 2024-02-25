import "./item.css";

function Item({ name, category, stock, img, description, id }) {
  return (
    <div className="item" key={id}>
      {/* <img src={img} alt={name} /> */}
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{`Disponible: ${stock}`}</p>
      <p>{category}</p>
    </div>
  );
}

export default Item;
