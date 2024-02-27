import "./itemDetailContainer.css";
import { getProductsById } from "../../serveMock/productMock";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../commons/Spinner/Spinner";
import ItemDetail from "../ItemDetail/ItemDetail";
import CartContext from "../../context/CartContext";

const ItemDetailContainer = () => {
  const { itemsCart } = useContext(CartContext);
  console.log(itemsCart);
  const { itemId } = useParams();
  const [productDetail, setProductDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProductsById(itemId)
      .then((response) => setProductDetail(response))
      .finally(() => {
        setIsLoading(false);
      });
  }, [itemId]);

  if (isLoading) return <Spinner isLoading={isLoading} />;

  return (
    <div className="containerItemDetail">
      {productDetail && <ItemDetail {...productDetail} />}
    </div>
  );
};

export default ItemDetailContainer;
