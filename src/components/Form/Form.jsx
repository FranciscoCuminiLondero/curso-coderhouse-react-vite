import "./form.css";
import { useContext, useState } from "react";
import Button from "../commons/Button/Button";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import CartContext from "../../context/CartContext";
import SendIcon from "@mui/icons-material/Send";

const Form = () => {
  const { cartList, removeList } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const db = getFirestore();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const ordersCollection = collection(db, "orden");
    const items = cartList.map(({ id, name, quantity, price }) => ({
      id,
      name,
      quantity,
      price,
    }));

    const order = {
      buyer: {
        name,
        email,
        phone,
      },
      items,
    };

    try {
      const docRef = await addDoc(ordersCollection, order);
      setOrderId(docRef.id);
      removeList();
      navigate(`/order-confirmation/${docRef.id}`);
    } catch (error) {
      console.error("Error al agregar la orden:", error);
    }
  };

  return (
    <div className="formContainer">
      <h2>¡Ya casi lo tenés!</h2>
      <h4>Completá los siguientes datos:</h4>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre y Apellido</label>
        <input
          id="name"
          type="text"
          onChange={(event) => setName(event.target.value)}
          required
        />
        <label htmlFor="email">Correo Electrónico</label>
        <input
          id="email"
          type="email"
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <label htmlFor="phone">Teléfono</label>
        <input
          id="phone"
          type="tel"
          onChange={(event) => setPhone(event.target.value)}
          required
        />
        <Button type="submit" className="btn submit">
          Enviar
          <SendIcon />
        </Button>
      </form>
    </div>
  );
};

export default Form;
