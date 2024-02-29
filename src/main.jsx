import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBcrQSIbIYb6zR2uaNVnTnIpnRrF8vkPOc",
  authDomain: "eschocolates-ecommerce-1cd73.firebaseapp.com",
  projectId: "eschocolates-ecommerce-1cd73",
  storageBucket: "eschocolates-ecommerce-1cd73.appspot.com",
  messagingSenderId: "1093038002657",
  appId: "1:1093038002657:web:7186f623c60d38f3bdc2a0",
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
