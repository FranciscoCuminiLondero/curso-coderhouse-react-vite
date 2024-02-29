import { useState } from "react";
import Button from "../commons/Button/Button";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Form = () => {
  // simulación de carrito
  const cart = [
    { name: "producto", price: 500 },
    { name: "producto2", price: 550 },
  ];

  const [orderId, setOrderId] = useState(null);
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);

  const db = getFirestore();

  const handleSubmit = (event) => {
    event.preventDefault();
    const ordersCollection = collection(db, "orden");
    const order = {
      buyer: {
        name,
        email,
      },
      items: cart,
    };

    addDoc(ordersCollection, order).then(({ id }) => {
      setOrderId(id);
    });
  };
  return (
    <>
      <h2>Completa los siguientes datos</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre y Apellido</label>
        <input
          id="name"
          type="text"
          onChange={(event) => setName(event.target.value)}
        />
        <label htmlFor="email">Correo Electrónico</label>
        <input
          id="email"
          type="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <Button type="submit">Enviar</Button>
      </form>

      <h3>Orden Id: {orderId}</h3>
    </>
  );
};

export default Form;
