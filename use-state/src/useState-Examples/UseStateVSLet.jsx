import { useState } from "react";

export const UseStateVSLet = ()=>{
     
//    Esta es la forma normal de definir y modificar un estado usando el Hook useState.
      const [countNumber, setCountNumber] = useState(0)

//    Al utilizar un let ni conseguimos que se actualice el numero en el html.
      let numberLet = 0

//    Para poder actualizar el valor que se muestra en el html utilizando el let necesitamos usar el document.getElementById
      const modifyLetValue = (id)=>{
        const elemento = document.getElementById(id)
         elemento.textContent = numberLet + 1
         numberLet++
      }

// Este ultimo plantea un importante problema, cada vez que modifiquemos el componente y se renderice de nuevo se inicializara
// el numberLet de nuevo a 0, sin embargo el useState mantiene el valor. Esto ocurre por que el useState solo se inicializa en 
// la primera carga del componente, en el resto de renderizados conserva el valor.

// Para probar esto ultimo vale con añadir una letra en el return , ir al navegador donde se muestra nuestra Aplicacion y dar al
// "+" del "Numero Document.getElement". Podreis ver como empieza de cero y el useState mantiene el numero anterior.

    
      return (
        <>
          useState<hr/>
          Numero useState: {countNumber}
          <br/>

          {/* USO DEL useState */}          
          <button onClick={()=>setCountNumber(countNumber + 1)}>+</button>
          
          <br/>
          {/* EJEMPLO DE SOLO LET */}
          Numero Let: {numberLet}
          <br/>
          <button onClick={()=>numberLet= numberLet + 1}>+</button>

          <br/>
          {/* EJEMPLO DE LET CON document.getElementById */}
          Numero Document.getElement: <span id="numberLet">0</span>
          <br/>
          <button onClick={()=>modifyLetValue("numberLet")}>+</button>
        </>
      );
}
