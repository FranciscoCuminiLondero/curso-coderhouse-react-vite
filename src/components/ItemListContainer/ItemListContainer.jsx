import "./itemListContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../commons/Spinner/Spinner";
import ItemList from "../ItemList/ItemList";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { category } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const db = getFirestore();
    const itemsCollectionRef = collection(db, "chocolates");
    let itemsQuery;

    if (category) {
      itemsQuery = query(itemsCollectionRef, where("category", "==", category));
    } else {
      itemsQuery = itemsCollectionRef;
    }

    getDocs(itemsQuery)
      .then((querySnapshot) => {
        const fetchedProducts = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(fetchedProducts);
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [category]);

  if (isLoading) return <Spinner isLoading={isLoading} />;

  return (
    <>
      <h2 className="title">{greeting}</h2>
      <div className="itemListContainer">
        <div className="itemList">
          <ItemList items={items} />
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
