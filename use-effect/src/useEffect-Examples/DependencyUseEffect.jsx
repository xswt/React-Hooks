import { useEffect, useState } from "react";


export const DependencyUseEffect = () =>{

  const [count, setCount] = useState(0)
  const [refresh, setRefresh] = useState(false)


  useEffect(() => {
    console.log("Se lanza cada vez que se modifique count")
  },[count]) //Se ejecuta solo cuando se modifica el estadod e count y en la primera carga.

  


  return (
    <>
    {count}
    <button onClick={()=>setCount(count+1)}>+</button>
    <button onClick={()=>{setRefresh(!refresh)}}>Refrescar componente</button>
    
    </>
  );
}