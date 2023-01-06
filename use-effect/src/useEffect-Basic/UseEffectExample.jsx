import { useEffect, useState } from "react";


export const UseEffectExample = () =>{

  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("Se ha renderizado el componente.")
  }) //Como no depende de nada se ejecuta siempre que se renderice el componente.

  
  return (
    <>
    {count}
    <button onClick={()=>setCount(count+1)}>+</button>  
    </>
  );
}