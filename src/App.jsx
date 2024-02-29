import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { Routes, Route } from "react-router-dom";

function App() {
  const greeting = "Bienvenidos a mi Web";
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          exact
          path="/"
          element={<ItemListContainer greeting={greeting} />}
        />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart/" element={<Cart />} />
        <Route path="*" element={<div>ERROR: 404. La página no existe</div>} />
      </Routes>
    </>
  );
}

export default App;
