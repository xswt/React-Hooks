import { useReducer } from 'react'; //Importamos el useReducer
import { initialState_FullExample } from './initialStates/FullExample-initialStates';
import { accionesNumero } from './reducers/FullExample-reducer';




export const FullExample = () => {
    const [numero, dispatch] = useReducer(accionesNumero, initialState_FullExample);


    return (
        <>
            Count: {numero}
            <button onClick={() => dispatch('increment')}>+</button>
            <button onClick={() => dispatch('decrement')}>-</button>
        </>
    );
}