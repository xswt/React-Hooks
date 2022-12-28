

import { useReducer } from 'react'; //Importamos el useReducer


export const  accionesRealizar = (state, action) => { //Funcion que ejecuta en base a los dispach o disparadores (actions)
    if(action ==='increment'){
      return  state + 1 ;
    }
    else{
        return  state - 1 ;
    }
  }


export const UseReducerExample = ()=>{
    const [numero, dispatch] = useReducer(accionesRealizar, 0); //[variable, disparador(puede ser el nombre que quieras)] = useReducer(funcion que controla las acciones (action), estadoInicial)

    return (
      <>
        Count: {numero} <br/>
        <button onClick={() => dispatch('increment')}>+</button> {/* Se le pasa el "action de increment" */}
        <button onClick={() => dispatch()}>-</button> {/* Se le puede no pasar el nombre de un action, se este modo usara el dafault o el else*/}
        
      </>
    );
}