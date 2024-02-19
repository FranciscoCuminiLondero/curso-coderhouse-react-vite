import "./navBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = ({ greeting }) => {
  return (
    <div className="navBar">
      <h1>{greeting}</h1>
      <CartWidget number={0} />
    </div>
  );
};

export default NavBar;
