# useContext - React Hook JS
[Documentacion oficial useContext][useMemoOficialLink] 

Este Hook de React nos permite crear y manejar un "contexto" (espacio comun y accesible para componentes), se recomienda su uso cuando estamos compartiendo y modificando valores entre hijos/componentes que no estan directamente relacionados o que nos obligan a pasar el cambio por muchos componentes. Para ello tenemos que tener claro primero de que elementos se compone:
1. Creacion del context
2. Envolver con el context (provider) a los hijos que van a tener acceso
3. Uso del useContext llamando a nuestro context creado

## ContexApp.jsx (fichero donde creamos el context y sus valores)
En este fichero es donde crearemos el "Context" `NombreContext` , donde definiremos que variables se pasan a los que puedan acceder al "context" `valuesProvider`.
```javascript
import React, { createContext, useState } from 'react';

export const NombreContext = createContext(); 

export const ContextApp = (props) => {
//-----------------------------------------------------------------1º PARTE------------------------------
    const [apellido, setapellido] = useState("Martinez")
    const llamadaConsole = ()=>{console.log("Hola mundo console")}
//-----------------------------------------------------------------2º PARTE------------------------------    
  const valuesProvider = {
    nombre: 'Juan', //Se puede pasar un valor normal fijo/variable/const
    apellido,  //Se puede pasar el valor de un useState
    setapellido, //Se puede pasar el set del useState
    llamadaConsole //Se pueden enviar funciones definidas previamente
  };
//-----------------------------------------------------------------3º PARTE------------------------------
  return (
    <NombreContext.Provider value={valuesProvider}>
      {props.children}
    </NombreContext.Provider>
  );
}
```
                
* Import createContext
  * No debemos olvidar que antes de poder hacer uso de cualquier Hook de React debemos importarlo o en su defecto escribir React.createContext a la hora de usarlo.
* ContextApp()
  * Esta funcion sera el `Provider` o la "caja" que envolvera a todos los componentes que puedan acceder al "context" y se compone de 3 partes:
    1. `1º PARTE` Donde meteremos toda la logica,variables,constantes o hooks que vaya a utilizar el "context".
    1. `2º PARTE` Aqui solo tendremos una constante compuesta por un objeto `valuesProvider` que recogera todos lo que es accesible desde los "children" (componentes que tienen acceso al "context".
    1. `3º PARTE` El `return` del "context", basicamente lo que hace es envolver con un provider `NombreContext.Provider` a unos futuros `children` e indica los valores a los que tendran acceso `value={valuesProvider}`.
    
 ## Index.jsx (fichero donde envolvemos con el context los hijos que vayan a darle uso)
 En este caso hemos puesto nuestro "context" en el Index.js por que queremos que todo lo que use `<App/>` pueda acceder a los valores del mismo.
 
 ```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ContextApp } from './provider/ContextApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextApp> {/* Se pone el provider que engloba a App y todo lo que se ponga dentro de este componente. */}
      <App />
    </ContextApp>
);

reportWebVitals();
```

Lo unico que tenemos que destacar en este fichero es el `<ContextApp>` que corresponde con el nombre del primer fichero, donde se crea y define el "context". Tenemos que ponerlo en el Index.js para darle acceso a todo lo que envuelva a las etiquetas

 

```javascript
    <ContextApp> 
        <ComponenteHijo1 />
    </ContextApp>
        <ComponenteHijo2/>
```
Como se muestra en el ejemplo `<ComponenteHijo1/>` tendra acceso al "context" pero `<ComponenteHijo2/>` al estar fuera no.
 
 
 ## App.jsx (fichero donde usaremos el context)
 
 ```javascript
import { useContext } from "react";
import {  NombreContext } from "./provider/ContextApp";

function App() {
  const {nombre,llamadaConsole} = useContext(NombreContext)
  llamadaConsole() 

  return (<> Hola {nombre} </> );
}

export default App;
```
* Import useContext
  * No debemos olvidar que antes de poder hacer uso de cualquier Hook de React debemos importarlo o en su defecto escribir React.useContext a la hora de usarlo.
* useContext()
  * En este caso tenemos `useContext(NombreContext)` haciendo referencia al NombreContext que hemos definido en el primer fichero `ContextApp.jsx`.
  * A la hora de utilizar sus valores tenemos dos opciones puesto que nosotros estamos accediendo a un objeto `valuesProvider`:
    * Podriamos meter el objeto en una constante `const objValuesProvider = useContext(NombreContext)`  y luego utilizar alguno de sus valores con `objValuesProvider.nombre`
    * Podriamos desestructurar el objeto y seleccionar solo los valores que vayamos a usar `const {nombre,llamadaConsole} = useContext(NombreContext)`
  Ambas opciones son validas, todo dependera de si vamos a utilizar todos los valores del objeto o solo alguno de ellos. Si solo vamos a utilizar `nombre` no tendria sentido pasar un objeto que puede tener X variables/constantes y cargar datos innecesarios. 
* Usar datos del "context"
  * Una vez que tenemos acceso a `NombreContext` solo nos queda hacer uso de lo que necesitemos como si se tratase de una funcion/variable/constante cualquiera como mostramos aqui:
   ```javascript
  const {nombre,llamadaConsole} = useContext(NombreContext)
  llamadaConsole()  //Ejemplo de como se llama a una funcion que esta en el context.

  return (<> Hola {nombre} </> ); //Uso de una constante del context.
   ```



[useMemoOficialLink]: https://reactjs.org/docs/hooks-reference.html#usecontext
