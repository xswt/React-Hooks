import { useMemo, useState } from "react";

function App() {

  const [valueTest, setValueTest] = useState(0)
  
  const handleControlNumero = (value)=>{
    console.log("entra por cambio de valor")
    return value
  }

  const showNumber = useMemo(() => {return handleControlNumero(valueTest)}, [valueTest]);
  //Se ejecuta el "handleControlNumero" solo cuando varia el "valueTest" que se especifica entre corchetes. 
  //Que se actualice el estado no cuenta como cambio de valor, con el useEffect se mira solo que algo pase, aqui que el valor anterior
  //no sea el mismo que el nuevo. 



  return (
   <>
    Hola mundo {showNumber}
    <button onClick={()=>{console.log("cambio 5");setValueTest("5")}}>Cambiar a 5</button>
    <button onClick={()=>{console.log("cambio 3");setValueTest("3")}}>Cambiar a 3</button>
   </>
  );
}

export default App;
