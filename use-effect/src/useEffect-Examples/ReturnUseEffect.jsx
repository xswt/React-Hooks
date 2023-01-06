import { useEffect, useState } from "react";


export const ReturnUseEffect = () =>{
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      console.log("ejemplo");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading?"Cargando...":"Cargado"}
    </div>
  );
}