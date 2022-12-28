import { useReducer } from 'react'; 

export const initialState = {
    count:0,
    nombre:"Guille"
}

export const  accionesRealizar = (state, action) => { 
    if(action ==='increment'){
      return  {...state , count: state.count + 1} ; //Si no indicamos el {...state,} solo nos devolveria el count y perderiamos el resto.
    }
    else{
        return  {count: state.count - 1} ; //En esta caso eliminamos el {...state,} para que veais lo que ocurre.
    }
  }


export const ObjectUseReducer = ()=>{
    const [numero, dispatch] = useReducer(accionesRealizar, initialState); 

    return (
      <>
        Nombre: {numero.nombre||"Has eliminado nombre del objeto numero"}
        <br></br>
        Count: {numero.count} <br/>
        <button onClick={() => dispatch('increment')}>+</button> 
        <button onClick={() => dispatch()}>-</button> 
        
      </>
    );
}