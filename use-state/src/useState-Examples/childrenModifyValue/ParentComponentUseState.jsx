import { useState } from "react";
import { ChildrenComponentModify } from "./ChildrenComponentModify";

export const ParentComponentUseState = ()=>{
     
      const [countNumber, setCountNumber] = useState(0)
    
      return (
        <>
          useState<hr/>
          Numero: {countNumber}
          <br/>
          <ChildrenComponentModify countNumber={countNumber} setCountNumber={setCountNumber}></ChildrenComponentModify>
        </>
      );
}

