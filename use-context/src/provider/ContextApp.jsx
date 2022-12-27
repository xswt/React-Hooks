import React, { createContext, useState } from 'react';


export const NombreContext = createContext(); 


export const ContextApp = (props) => {
    const [apellido, setapellido] = useState("lucia")
    const llamadaConsole = ()=>{console.log("Hola mundo console")}

  const valuesProvider = {
    nombre: 'guille', 
    apellido,  
    setapellido, 
    llamadaConsole 
  };

  return (
    <NombreContext.Provider value={valuesProvider}>
      {props.children}
    </NombreContext.Provider>
  );
}