import "./itemList.css";
import Item from "../Item/Item";

function ItemList({ items }) {
  return (
    <div>
      {items.map((item) => {
        return <Item {...item} />;
      })}
    </div>
  );
}

export default ItemList;
