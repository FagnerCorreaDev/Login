import React from "react";
import Input from "./Input";

function Formulario() {
  return (
    <div className="formulario">
      <form>
        <Input
          type="text"
          placeholder="Usuário"
        />
        <Input
          type="password"
          placeholder="Password"
        />
        <button type="submit"> Login </button>
      </form>
    </div>

  )
}
export default Formulario;