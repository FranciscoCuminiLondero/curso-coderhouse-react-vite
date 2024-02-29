import "./navBar.css";
import { useState, useEffect } from "react";
import { collection, getFirestore, getDocs } from "firebase/firestore";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBarContainer">
      <Link to={"/"}>
        <h1>E-commerce</h1>
      </Link>
      <ul className="navBarList">
        <li>
          <NavLink to="/category/electronica">Electrónica</NavLink>
        </li>
        <li>
          <NavLink to="/category/ropa">Ropa</NavLink>
        </li>
        <li>
          <NavLink to="/category/libros">Libros</NavLink>
        </li>
        <li>
          <NavLink to="/category/hogar">Hogar</NavLink>
        </li>
      </ul>
      <CartWidget number={0} />
    </div>
  );
};

export default NavBar;
