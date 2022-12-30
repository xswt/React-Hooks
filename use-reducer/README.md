# useReducer - React Hook JS
[Documentacion oficial useReducer][useReducerOficialLink] 

> "EJEMPLOS FUNCIONALES DE TODO LO EXPLICADO EN EL CÓDIGO DEL PROYECTO"

Este Hook de React se utiliza en vez del useState cuando el estado a gestionar es complejo o cuando hay muchas interacciones con el estado. Vamos a empezar viendo un ejemplo basico de como se configura e iremos profundizando en su uso.

Lo primero para configurarlo es conocer sus bases
```javascript
import { useReducer } from 'react'; //Importamos el useReducer

const initialState = 0

//Funcion que ejecuta en base a los dispach o disparadores (actions)
export const  accionesRealizar = (state, action) => { 
    if(action ==='increment'){return  state + 1}
    else{return  state - 1}
  }


export const UseReducerExample = ()=>{
    const [numero, dispatch] = useReducer(accionesRealizar, initialState); 
    //[variable, disparador(puede ser el nombre que quieras)] = useReducer(funcion para acciones (action), estadoInicial)

    return (
      <>
        Count: {numero} <br/>
        <button onClick={() => dispatch('increment')}>+</button> {/* Se le pasa el "action de increment" */}
        <button onClick={() => dispatch()}>-</button> {/* Se le puede no pasar el nombre de un action*/}
        
      </>
    );
}

```
                
* Import useReducer
  * No debemos olvidar que antes de poder hacer uso de cualquier Hook de React debemos importarlo o en su defecto escribir React.createContext a la hora de usarlo.
* Funcion de Acciones (actions)
  * `accionesRealizar` es una funcion que recibe dos parametros, el primero es el valor que maneja el useReducer en nuestro caso `numero` y el segundo `action` es la orden que lanza el `dispatch`.
  * Normalmente tendremos una logica dentro de la funcion que realizara una accion u otra en funcion del `action` que le pase el `dispatch`
* useReducer()
  * El useReducer se compone te 3 parametros pero para no complicar su entendimiento incial vamos a ver los dos principales y dejamos el tercero para mas adelante [Podeis verlo en la ultima sección][linkTercerParametro].
    ```javascript
    const [numero, dispatch] = useReducer(accionesRealizar, initialState); 
    ```
  * `numero` hace referencia a la variable/constante/Array/Objeto que vamos a utilizar en el resto del codigo y modificar con el useReducer. 
  * `dispatch` es el nombre que recibe el "disparador" lo llamaremos para realizar una `action` (accion) sobre el valor en nuestro caso **numero**. Dispatch es un nombre generico **PUEDES PONER EL NOMBRE QUE QUIERAS**, pero no repetirlo para dos useReducer
    ```javascript
    // ESTO ✔️
    const [numero, dispatchNumero] = useReducer(accionesRealizar, 0); 
    const [nombre, dispatchNombre] = useReducer(accionesRealizar, 0); 
    // ESTO ❌
    const [numero, dispatch] = useReducer(accionesRealizar, 0); 
    const [nombre, dispatch] = useReducer(accionesRealizar, 0); 
    ```
  * `accionesRealizar` es el primer parametro del useReducer y nos indica la funcion que va a gestionar las `action` (acciones) que lancemos con el `dispatch` (disparador).
  * `initialState` estado o valor inicial de nuestro `numero` (nombre de la variable que maneja el useReducer)
## Distintas formas de inicializar/modificar el initialState .
Tanto el `initialState` como el valor que maneja el useReducer `numero` (en nuestro ejemplo) pueden ser de cualquier tipo (Int,String,Array,Obj), lo unico que variará es la forma de tratarlo en la funcion de "acciones" `accionesRealizar`.

Veamos unos ejemplos:
  ```javascript
  //EJEMPLO CON INT 
      export const initialState = 0
      
      export const  accionesRealizar = (state, action) => { 
        if(action ==='increment'){ return  state + 1 }
        else{ return  state - 1 }
      }
      
      
  //EJEMPLO CON ARRAY 
      export const initialState = [0]
      
      export const  accionesRealizar = (state, action) => { 
        if(action ==='increment'){return  [state[0] + 1]}
        else{ return  [state[0] - 1] }
      }
      
      
   //EJEMPLO CON OBJETO
      export const initialState = {count:0}
      
      export const  accionesRealizar = (state, action) => { 
        if(action ==='increment'){ return {count: state.count + 1}}
        else{ return  {count: state.count - 1} }
      }
  ```
Todos ellos van a usar el mismo `useReducer` , el tipo que sea el elemento principal no afecta a la composicion del hook
  ```javascript
    const [numero, dispatch] = useReducer(accionesRealizar, initialState); 
  ```
Cuando el `initialState` es un objeto tenemos que tener en cuenta a la hora de devolverlo en el return del `accionesRealizar` que recuperemos todos sus valores si son necesarios con un spread `{...Obj}` , veamos un ejemplo:
  ```javascript
    export const initialState = {
        count:0,
        nombre:"Guille"
    }
    export const  accionesRealizar = (state, action) => { 
        if(action ==='increment'){
            //Si no indicamos el {...state,} solo nos devolveria el count y perderiamos el resto.
            return  {...state , count: state.count + 1} ; 
        }else{
            //En esta caso al eliminar el {...state,} no devolveremos el nombre.
            return  {count: state.count - 1} ; 
        }
  }
  ```  

## Carga dinamica del initialState - Tercer parametro del useReducer.
Como podeis leer en el titulo el tercer parametro del `useReducer` esta orientado a una carga dinamica del `initialState`. Por ejemplo cuando no sabemos lo que va a valer el estado inicial por venir informado en las props del componente. 

 ```javascript
    const [numero, dispatch] = useReducer(accionesRealizar, initialStateCount ,cargaDinamicaInitialState); 
 ```  
 * cargaDinamicaInitialState
    * Nos permite inicializar el valor de forma dinamica, por ejemplo usando un valor que nos llegue por props del componente. 
    * Le indicaremos una funcion en nuestro caso `cargaDinamicaInitialState`. Esta funcion recibe como parametro de forma **AUTOMATICA** lo que indicamos en el segundo  parametro del `useReducer` en este ejemplo seria `initialStateCount` (nombre de la propiedad que recibe nuestro componente).
      ### Fichero App.js llamando a nuestro componente
      ```javascript
        <DinamicInitialState initialStateCount={0}></DinamicInitialState>
      ```
      ### Fichero DinamicInitialState.jsx lo recibe como parametro
      ```javascript
        export const DinamicInitialState = ({initialStateCount})=>{...}
      ```      
----
Vamos a ver ahora la funcion que carga el `initialState` de forma dinamica.
  ```javascript
    const cargaDinamicaInitialState = (value)=>{
      return {count: value }
    }
  ```
 Como podemos apreciar vamos a recibir un parametro llamado `value` que corresponde con el segundo parametro del useReducer, en nuestro ejemplo seria `initialStateCount`. Todo lo que queda es inicializarlo como queramos, en nuestro ejemplo hemos inicializado un "object".
  
  


[linkTercerParametro]: https://github.com/xswt/React-Hooks/edit/master/use-reducer/README.md#carga-dinamica-del-initialstate---tercer-parametro-del-usereducer
[useReducerOficialLink]: https://reactjs.org/docs/hooks-reference.html#usereducer
