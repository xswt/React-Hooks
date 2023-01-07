import { useState } from "react"
import { ReturnUseEffect } from "./ReturnUseEffect"

export const ParentReturn = () => {

const [loadComponent, setLoadComponent] = useState(true)


return(
    <>
    {loadComponent?<ReturnUseEffect></ReturnUseEffect>:"Desactivado"}
    <button onClick={()=>{setLoadComponent(!loadComponent)}}>{loadComponent?"Desactivar":"Activar"}</button>
    </>
)

}