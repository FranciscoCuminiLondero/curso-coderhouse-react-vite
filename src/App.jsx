import NavBar from "./components/NavBar/NavBar";
import Counter from "./components/Counter/Counter";
import Increase from "./components/Increase/Increase";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function App() {
  const greeting = "Bienvenidos a mi Web";
  return (
    <>
      <NavBar greeting={greeting} />
      <Counter />
      <Increase>
        <ArrowUpwardIcon
          onClick={() => {
            alert("Es para subir al inicio");
          }}
        />
      </Increase>
    </>
  );
}

export default App;
