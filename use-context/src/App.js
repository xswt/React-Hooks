import { useContext } from "react";
import {  NombreContext } from "./provider/ContextApp";

function App() {


  const {nombre,llamadaConsole} = useContext(NombreContext)

  llamadaConsole() //Ejemplo de como se llama a una funcion que esta en el context
  return (
    <>
     Hola {nombre}
    </>
   
  );
}

export default App;
