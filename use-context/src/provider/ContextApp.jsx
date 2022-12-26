import React, { useState } from 'react';


export const NombreContext = React.createContext(); // Nombre del contexto que tendremos que usar cuando queramos acceder desde otro fichero hijo

// Provider que envolvera a las screen que vayan a hacer uso del context.
export const ContextApp = (props) => {
    const [apellido, setapellido] = useState("lucia")
    const llamadaConsole = ()=>{console.log("Hola mundo console")}
// valuesProvider es un objeto donde se define todo lo que se va a mandar a los hijos del context.
  const valuesProvider = {
    nombre: 'guille', //Se puede pasar un valor normal fijo/variable/const
    apellido,  //Se puede pasar el valor de un useState
    setapellido, //Se puede pasar el set del useState
    llamadaConsole //Se pueden enviar funciones definidas previamente
  };

  return (
    <NombreContext.Provider value={valuesProvider}>
      {props.children}
    </NombreContext.Provider>
  );
}