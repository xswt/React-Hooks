import { useReducer } from 'react';

export const initialState = 0

export const  accionesRealizar = (state, action) => { 
    if(action ==='increment'){
      return  state + 1 ;
    }
    else{
        return  state - 1 ;
    }
  }


export const BasicUseReducer = ()=>{
    const [numero, dispatch] = useReducer(accionesRealizar, initialState); 

    return (
      <>
        Count: {numero} <br/>
        <button onClick={() => dispatch('increment')}>+</button> 
        <button onClick={() => dispatch()}>-</button> 
        
      </>
    );
}