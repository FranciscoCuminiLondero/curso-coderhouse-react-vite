import "./itemList.css";
import Item from "../Item/Item";

function ItemList({ items }) {
  return (
    <>
      {items.map((item) => {
        return <Item {...item} />;
      })}
    </>
  );
}

export default ItemList;
