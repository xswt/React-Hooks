import { useMemo, useState } from "react";

function App() {

  const [valueTest, setValueTest] = useState(0)//useState que usaremos como valor de referencia.
  
  const handleControlNumero = (value)=>{ //Funcion que ejecutará useMemo si el valor de referencia es nuevo.
    console.log("Cambio de valor referencia a",value)
  }

  useMemo(() => {handleControlNumero(valueTest)}, [valueTest]); //useMemo con sus dos valores ()=>{} y [valueTest]
  



  return (
   <>
    Valor de test actual {valueTest} <br></br>
    {/* Modificamos valueTest e imprimimos por consola */}
    <button onClick={()=>{console.log("cambio 5");setValueTest("5")}}>Cambiar a 5</button>
    <button onClick={()=>{console.log("cambio 3");setValueTest("3")}}>Cambiar a 3</button>
   </>
  );
}

export default App;
