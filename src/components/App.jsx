import React from "react";
import Formulario from "./Formulario";

let estaLogado = false;
// Alterar para TRUE, renderizar√° o <h1>

function App() {
  return (
    <div className="app">
      {estaLogado === false ? <Formulario /> : <h1 className="hello"> Hello People! </h1>}
    </div>
  )
}
export default App;