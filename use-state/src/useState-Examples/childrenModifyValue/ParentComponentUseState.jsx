import { useState } from "react";
import { ChildrenComponentModify } from "./ChildrenComponentModify";

export const ParentComponentUseState = ()=>{
     
      const [countNumber, setCountNumber] = useState(0)
    
      return (
        <>
          useState<hr/>
          Numero: {countNumber}
          <br/>
          {/* Podemos pasar a los hijos tanto el valor del useState como su modificador y estos haran uso de ello */}
          <ChildrenComponentModify countNumber={countNumber} setCountNumber={setCountNumber}></ChildrenComponentModify>
        </>
      );
}

