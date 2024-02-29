import "./itemListContainer.css";
import { useEffect, useState } from "react";
import {
  getProducts,
  getProductsByCategory,
} from "../../serveMock/productMock";
import { useParams } from "react-router-dom";
import Spinner from "../commons/Spinner/Spinner";
import ItemList from "../ItemList/ItemList";
import { collection, getDoc, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "chocolates");
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data());
      setItems(docs);
    });
  }, []);

  if (isLoading) return <Spinner isLoading={isLoading} />;

  return (
    <div>
      <h2 className="title">{greeting}</h2>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
