import { useEffect } from "react";


export const ReturnUseEffect = () =>{

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("ejemplo");
    }, 1000);
    return () => clearInterval(timer);//importante para eliminar el proceso que mantiene en cola
  }, []);

  return (
   <>Activado</>
  );
}