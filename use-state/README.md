# useState - React Hook JS
[Documentacion oficial useState][useStateOficialLink] 

> "EJEMPLOS FUNCIONALES DE TODO LO EXPLICADO EN EL CÓDIGO DEL PROYECTO"

Este Hook de React nos permite mantener un estado interno en el componente (equivalente a una variable). Iremos viendo las [ventajas que tiene][useStateVSVanilla]  frente a lo que conocemos como variables en JS, vamos a ver un ejemplo básico:

```javascript
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
```
                
* Import useState
  * No debemos olvidar que antes de poder hacer uso de cualquier Hook de React debemos importarlo o en su defecto escribir React.useState a la hora de usarlo.
* useState()
  ```javascript
    const [nombreVariable, modificadorVariable] = useState(valorInicial)
  ```
  * useState se compone de 3 partes:
    1. `nombreVariable`  siempre que queramos usar/pintar su valor deberemos escribir este nombre en el codigo. En nuestro ejemplo de código seria `nombre`
    2. `modificadorVariable` es lo que nos permite cambiar el valor de la variable, es una funcion y como tal deberemos poner entre "()" el valor que queremos que tenga la `variable` en nuestro ejemplo seria `setNombre("Guille")`. Estamos llamando al "modificador" y le pasamos el nuevo valor que será "Guille".
    3. `valorInicial` en el primer renderizado del componente nuestro estado `nombre` cogera el valor por defecto que hayamos especificado, de no haber especificado nada lo tomara como `undefined`, en nuestro ejemplo el valor por defecto seria "Paula" `useState('Paula')`.

Tanto el `nombreVariable` como el `modificadorVariable` se le puede pasar a cualquier funcion como parametro, esto incluye la posibilidad de pasarselo a un componente como property:
  ```javascript
    import { useState } from "react";
    import { ChildrenComponentModify } from "./ChildrenComponentModify";

    export const ParentComponentUseState = ()=>{
     
          const [countNumber, setCountNumber] = useState(0)
    
          return (
            <>
              useState<hr/>
              Numero: {countNumber}
              <br/>
              {/* Podemos pasar a los hijos tanto el valor del useState como su modificador y estos haran uso de ello */}
              <ChildrenComponentModify countNumber={countNumber} setCountNumber={setCountNumber}></ChildrenComponentModify>
            </>
          );
    }
  ```
 
 ## Acceder al valor del useState antes del renderizado
 
 Algo importante del useState es saber acceder a su valor actual sin tener que esperar al renderizado del componente. Cuando modificamos el valor del state este no se vera reflejado en nuestra app hasta que se haya renderizado de nuevo el componente. 
 ```javascript
 /*      IMPORTANTE: Esto es un ejemplo para la explicacion, poner este codigo implicaria un renderizado en bucle.    
 Al modificar el valor forzamos un renderizado del componente que volveria a lanzar la funcion de modificar el valor etc... */
 
    const [countNumber, setCountNumber] = useState(500)
    
    const modificarValor = () =>{
      setCountNumber(20)
      console.log(countNumber) //Si mostramos el numero el resultado en consola sera de 500.
    }
    
    modificarValor();
 ```
Como vemos en el ejemplo a pesar de modificar el valor con el `setCountNumber(20)` en consola nos sigue saliendo el 500. Esto ocurre por que el `useState` almacena en cola ese cambio y lo realiza al renderizar. Hay muchas ocasiones donde nos vamos a encontrar con la necesidad de acceder al valor que tiene en "cola" sin esperar a que se renderice, para ello vamos tendremos que acceder a la funcion interna del `useState`.
  ```javascript
    setCountNumber((valorEnCola)=>{console.log(valorEnCola)})
  ```
Si ponemos un arrow function (funcion flecha) dentro del `useState` este nos pasa automaticamente por parametro el valor que tiene por actualizar en cola (el mas nuevo de ellos) y esto nos permitiria poder jugar con el valor bueno sin necesidad de esperar al renderizado. 

Veamos un ejemplo funcional completo:
```javascript
 import { useState } from "react";

export const ActualValueUseState = ()=>{
     
      const [countNumber, setCountNumber] = useState(0)
      
//----------------------------------------- Este ejemplo no funcionaria por que el countNumber
//                                          no actualiza el valor hasta que se renderiza de
//                                          nuevo el componente.
      // const handleSumNumberDos = ()=>{                                                               
      //   setCountNumber(countNumber+1)                                                                
      //   setCountNumber(countNumber+1)                                                                
      // }
      
/*     LO QUE REALMENTE LEE EL CODIGO ❌:
       setCountNumber(0 + 1) --> el nuevo valor es 1 
       setCountNumber(0 + 1) --> el nuevo valor es 1  
*/

//----------------------------------------- Para poder acceder al valor que tiene en cola por 
//                                          actualizar tenemos que utilizar la funcion interna
//                                          como se muestra en el ejemplo.

      const handleSumNumberDos = ()=>{                                                                
        setCountNumber(countNumber+1)
        setCountNumber((valorDelStateActual)=>valorDelStateActual+1)
      }
      
/*     LO QUE REALMENTE LEE EL CODIGO ✔️:
       setCountNumber(0 + 1) --> el nuevo valor es 1 
       setCountNumber( (1) => 1 + 1) --> el nuevo valor es 2  
*/

      return (
        <>
          useState<hr/>
          Numero: {countNumber}
          <br/>
          <button onClick={()=>handleSumNumberDos()}>Sumar de dos en dos</button>
        </>
      );
}  
```

## Ventajas del useState vs let/JS vanilla
Como hemos mencionado al principio este Hook de React nos ofrece una enorme ventaja frente a las variables que solemos usar en JS. Vamos a verlo con un sencillo ejemplo funcional:
  ```javascript
        import { useState } from "react";
      
      export const UseStateVSLet = ()=>{
      
      //    EJEMPLO 1
            const [countNumber, setCountNumber] = useState(0)
      //    EJEMPLO 2
            let numberLet = 0
      //    EJEMPLO 3
            const modifyLetValue = (id)=>{
              const elemento = document.getElementById(id)
               elemento.textContent = numberLet + 1
               numberLet++
            }   
      
      return (
              <>
                useState<hr/>
                Numero useState: {countNumber}
                <br/>
            
                {/* EJEMPLO 1 */}          
                <button onClick={()=>setCountNumber(countNumber + 1)}>+</button>
            
                <br/>
                {/* EJEMPLO 2 */}
                Numero Let: {numberLet}
                <br/>
                <button onClick={()=>numberLet= numberLet + 1}>+</button>
            
                <br/>
                {/* EJEMPLO 3 */}
                Numero Document.getElement: <span id="numberLet">0</span>
                <br/>
                <button onClick={()=>modifyLetValue("numberLet")}>+</button>
              </>
        );
      }

  ```
  
* `EJEMPLO 1` Esta es la forma normal de definir y modificar un estado usando el Hook useState.
* `EJEMPLO 2` Al utilizar un let ni conseguimos que se actualice el numero en el html.
* `EJEMPLO 3` Para poder actualizar el valor que se muestra en el html utilizando el let necesitamos usar el document.getElementById

El `EJEMPLO 3` pese a ser lo mas proximo al `useState` tiene un gran "problema", cada vez que modifiquemos el componente y se renderice de nuevo se inicializara el numberLet de nuevo a 0, sin embargo el useState mantiene el valor. Esto ocurre por que el useState solo se inicializa en la primera carga del componente, en el resto de renderizados conserva el valor.

Para probar esto ultimo con el ejemplo valdria con añadir una letra en el return , ir al navegador donde se muestra nuestra Aplicacion y dar al `+` del `EJEMPLO 3`. Podreis ver como empieza de cero y el useState mantiene el numero anterior. (obviamente tenemos que tener la APP levantada)



[useStateVSVanilla]: https://github.com/xswt/React-Hooks/edit/master/use-state/README.md#ventajas-del-usestate-vs-letjs-vanilla
[useStateOficialLink]: https://reactjs.org/docs/hooks-reference.html#usestate
