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


    return (
      <>
        Count: {numero.count} <br/>
        <button onClick={() => dispatch('increment')}>+</button> 
        <button onClick={() => dispatch()}>-</button> 
        
      </>
    );
}