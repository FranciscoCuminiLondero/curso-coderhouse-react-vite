import "./itemListContainer.css";
import { useEffect, useState } from "react";
import {
  getProducts,
  getProductsByCategory,
} from "../../serveMock/productMock";
import { useParams } from "react-router-dom";
import Spinner from "../commons/Spinner/Spinner";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const asyncFunction = categoryId ? getProductsByCategory : getProducts;
      setIsLoading(true);

      try {
        const response = await asyncFunction(categoryId);
        setItems(response);
        setIsLoading(false);
      } catch (reject) {
        console.log(reject.menssage);
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [categoryId, setIsLoading]);

  if (isLoading) return <Spinner isLoading={isLoading} />;

  return (
    <div className="itemListContainer">
      <h2 className="title">{greeting}</h2>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
