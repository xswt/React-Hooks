import { useState } from "react";

export const UseStateExample = ()=>{
     
      const [nombre, setNombre] = useState('Paula')
    
      return (
        <>
          useState<hr/>
          Nombre: {nombre}
          <br/>
          <button onClick={()=>setNombre("Guille")}>Guille</button>
          <button onClick={()=>setNombre("Acrux")}>Acrux</button>
        </>
      );
}

