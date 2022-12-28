import { useState } from "react";

export const ActualValueUseState = ()=>{
     
      const [countNumber, setCountNumber] = useState(0)
      
//----------------------------------------- Este ejemplo no funcionaria por que el countNumber no actualiza el valor hasta que 
//                                          se renderiza de nuevo el componente.
      // const handleSumNumberDos = ()=>{
      //   setCountNumber(countNumber+1)
      //   setCountNumber(countNumber+1)
      // }



//----------------------------------------- Para poder acceder al valor que tiene en cola por actualizar tenemos que utilizar la funcion 
//                                          interna que ofrece el "set" del useState como se muestra en el ejemplo.
      const handleSumNumberDos = ()=>{
        setCountNumber(countNumber+1)
        setCountNumber((valorDelStateActual)=>valorDelStateActual+1)
      }


    
      return (
        <>
          useState<hr/>
          Numero: {countNumber}
          <br/>
          <button onClick={()=>handleSumNumberDos()}>Sumar de dos en dos</button>
        </>
      );
}

