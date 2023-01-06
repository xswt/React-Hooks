import { useEffect, useState } from "react";


export const OneRenderUseEffect = () =>{
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("Solo se ejecuta en el primer renderizado")
  },[]) //Se le añade la dependencia pero en blanco.


  return (
    <>
    useEffect<hr/>
    {count}
    <button onClick={()=>setCount(count+1)}>+</button>
    </>
  );
}