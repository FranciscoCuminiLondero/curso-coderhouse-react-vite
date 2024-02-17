import "./navBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <div className="navBar">
      <h1>Navbar</h1>
      <CartWidget number={0} />
    </div>
  );
};

export default NavBar;
