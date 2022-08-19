//import logo from './logo.svg';
import "./App.css";

function App() {
  const contenido = { titulo: "Este es un título" };

  return (
    <div className="App">
      <h1>Hola mundo!</h1>
      <p>Esta es mi primera página en React.</p>
      <h2>{contenido.titulo}</h2>
    </div>
  );
}

export default App;
