import { useState } from "react";

export const UseStateExample = ()=>{
     
      const [countNumber, setCountNumber] = useState(0)
    
      return (
        <>
          useState<hr/>
          Numero: {countNumber}
          <br/>
          <button onClick={()=>setCountNumber(countNumber + 1)}>+</button>
          <button onClick={()=>setCountNumber(countNumber - 1)}>-</button>
        </>
      );
}

