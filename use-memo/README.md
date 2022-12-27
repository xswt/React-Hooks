# useMemo - React Hook JS
[Documentacion oficial useMemo][useMemoOficialLink] 

Este Hook de React nos permite optimizar los desarrollos y reducir el tiempo de carga. Para ello tenemos que tener claro primero de que elementos se compone:
```javascript

//Opción 1 donde importmaos useMemo
import { useMemo } from "react";
const showNumber = useMemo(() => {return handleControlNumero(valueTest)}, [valueTest]);

```

```javascript
//Opción 2 donde NO importmaos useMemo
const showNumber = React.useMemo(() => {return handleControlNumero(valueTest)}, [valueTest]);
```
                
* Import useMemo
  * No debemos olvidar que antes de poder hacer uso de cualquier Hook de React debemos importarlo o en su defecto escribir React.useMemo a la hora de usarlo.
* useMemo()
  * Es una función que se compone de dos valores  `useMemo(()=>{},[?])`:
    1. `()=>{}` El primero es la función que se va a ejecutar.
    1.  `[?]` El segundo es el valor que va tener como referencia para ver si ejecuta de nuevo la función o no.

Ahora que hemos visto como se estructura useMemo podemos entender un poco más su funcionamiento, este hook almacena en cache el valor de referencia `[?]` y cada vez que se renderiza de nuevo el componente va a comprar este valor de nuevo. Si el valor `[?]` es el mismo que antes del renderizado no lanza la función interna `()=>{}`, si por el contrario el valor de referencia es nuevo lanzara de nuevo la función `()=>{}`. 


[useMemoOficialLink]: https://reactjs.org/docs/hooks-reference.html#usememo
