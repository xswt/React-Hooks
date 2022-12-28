
export const ChildrenComponentModify = ({setCountNumber,countNumber})=>{
     
    
      return (
        <>
          <button onClick={()=>setCountNumber(countNumber + 1)}>+</button>
          <button onClick={()=>setCountNumber(countNumber - 1)}>-</button>
        </>
      );
}

