import "./itemList.css";
import Item from "../Item/Item";
import { Link } from "react-router-dom";

function ItemList({ items }) {
  return (
    <div>
      {items.map((item) => {
        return (
          <Link key={item.id} to={`/item/${item.id}`}>
            <Item {...item} />
          </Link>
        );
      })}
    </div>
  );
}

export default ItemList;
