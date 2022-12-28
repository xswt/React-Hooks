import { useReducer } from 'react'; 




export const  accionesRealizar = (state, action) => { 
    if(action ==='increment'){
      return  {...state , count: state.count + 1} ;
    }
    else{
        return  {...state , count: state.count - 1} ;
    }
  }

const cargaDinamicaInitialState = (value)=>{
  return {count: value }
}

export const DinamicInitialState = ({initialStateCount})=>{
    const [numero, dispatch] = useReducer(accionesRealizar, initialStateCount ,cargaDinamicaInitialState); 
    /*
     useReducer tiene un tercer parametro que nos permite inicializar el valor de forma dinamica, por ejemplo usando 
     un valor que nos llegue por props del componente.

     Le indicaremos una funcion en nuestro casi "cargaDinamicaInitialState". Esta funcion recibe como parametro de forma 
     automatica lo que indicamos en el segundo parametro del useReducer en este ejemplo seria "initialStateCount".

     Tras eso en la funcion de "cargaDinamicaInitialState" inicializamos el objeto/Array/const con el value (parametro).
    */

    return (
      <>
        Count: {numero.count} <br/>
        <button onClick={() => dispatch('increment')}>+</button> 
        <button onClick={() => dispatch()}>-</button> 
        
      </>
    );
}