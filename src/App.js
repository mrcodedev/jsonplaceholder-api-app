import "./App.css";
import Items from "./components/Items/Items";

function App() {
  return (
    <div>
      <Items title="Comentarios" endpoint="comments" type="item" id="1" />
      <Items title="Fotos" endpoint="photos" type="item" id="2" />
      <Items title="Todos" endpoint="todos" type="item" id="3" />
    </div>
  );
}

export default App;
