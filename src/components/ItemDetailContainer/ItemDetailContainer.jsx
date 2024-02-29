import "./itemDetailContainer.css";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../commons/Spinner/Spinner";
import ItemDetail from "../ItemDetail/ItemDetail";
import CartContext from "../../context/CartContext";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { cartList } = useContext(CartContext);
  console.log(cartList);
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetail = async () => {
      const db = getFirestore();
      const itemRef = doc(db, "chocolates", id);

      try {
        const docSnapshot = await getDoc(itemRef);
        if (docSnapshot.exists()) {
          const itemData = docSnapshot.data();
          setProductDetail(itemData);
        } else {
          console.log("No existe el producto con el id proporcionado");
        }
      } catch (error) {
        console.error("Error al obtener los detalles del product:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProductDetail();
  }, [id]);

  if (isLoading) return <Spinner isLoading={isLoading} />;

  return (
    <div className="containerItemDetail">
      {productDetail && <ItemDetail {...productDetail} />}
    </div>
  );
};

export default ItemDetailContainer;
