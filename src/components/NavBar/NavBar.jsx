import "./navBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">
      <Link to={"/"}>
        <h1>E-commerce</h1>
      </Link>
      <ul>
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
