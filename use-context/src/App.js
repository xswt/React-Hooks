import { useContext } from "react";
import {  NombreContext } from "./provider/ContextApp";

function App() {
  const {nombre,llamadaConsole} = useContext(NombreContext)
  llamadaConsole() 

  return (<> Hola {nombre} </> );
}

export default App;
