import "./itemDetailContainer.css";
import { getProductsById } from "../../serveMock/productMock";
import { useEffect, useState } from "react";
import Item from "../Item/Item";
import { useParams } from "react-router-dom";
import Spinner from "../commons/Spinner/Spinner";

const ItemDetailContainer = () => {
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
      {productDetail && <Item {...productDetail} />}
    </div>
  );
};

export default ItemDetailContainer;
