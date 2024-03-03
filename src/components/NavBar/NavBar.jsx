import "./navBar.css";
import { useState, useEffect } from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import { collection, getFirestore, getDocs } from "firebase/firestore";

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = () => {
      const db = getFirestore();
      const itemsCollectionRef = collection(db, "chocolates");

      getDocs(itemsCollectionRef)
        .then((querySnapshot) => {
          const uniqueCategories = new Set();

          querySnapshot.forEach((doc) => {
            const category = doc.data().category;
            uniqueCategories.add(category);
          });

          setCategories(Array.from(uniqueCategories));
        })
        .catch((error) => {
          console.error("Error al obtener las categorías:", error);
        });
    };

    fetchCategories();
  }, []);

  return (
    <div className="navBarContainer">
      <Link to={"/"}>
        <div className="logo">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/eschocolates-ecommerce-1cd73.appspot.com/o/logo-eschocolates.png?alt=media&token=f518175b-7d76-4ed4-8849-5debe341de2d"
            alt="logo E.S. Chocolates"
          />
        </div>
      </Link>
      <ul className="navBarList">
        {categories.map((category, index) => (
          <li key={index}>
            <NavLink to={`/category/${category}`}>{category}</NavLink>
          </li>
        ))}
      </ul>
      <CartWidget number={0} />
    </div>
  );
};

export default NavBar;
