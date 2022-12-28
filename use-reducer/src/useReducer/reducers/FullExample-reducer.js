export const accionesNumero = (state, action) => { 
    switch (action) { 
        case 'increment':
            return state = state + 1;
        case 'decrement':
            return state = state - 1;
        default:
            throw new Error();
    }
}