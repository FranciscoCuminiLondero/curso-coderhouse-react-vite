import "./orderConfirmation.css";
import { useParams } from "react-router-dom";
import Button from "../commons/Button/Button";
import { Link } from "react-router-dom";

const OrderConfirmation = () => {
  const { orderId } = useParams();
  return (
    <div className="orderContainer">
      <h2>¡Gracias por tu compra!</h2>
      <p>Orden: {orderId}</p>
      <p>Nos pondremos en contacto contigo pronto.</p>
      <Link to={"/"}>
        <Button>Volver al inicio</Button>
      </Link>
    </div>
  );
};

export default OrderConfirmation;
