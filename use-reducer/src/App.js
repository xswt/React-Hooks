import { UseReducer } from "./useReducer-Basic/UseReducer";
// import { DinamicInitialState } from "./useReducer-Examples/dinamic/DinamicInitialState";
// import { ArrayUseReducer } from "./useReducer-Examples/basics/ArrayUseReducer";
// import { BasicUseReducer } from "./useReducer-Examples/basics/BasicUseReducer";
// import { ObjectUseReducer } from "./useReducer-Examples/basics/ObjectUseReducer";


function App() {


  return (
    <>
     useReducer <hr></hr><br></br>
     <UseReducer></UseReducer>
     {/* ------- Otros ejemplos de como usar useReducer con distintos initialStates -------- */}
     {/* <ArrayUseReducer></ArrayUseReducer> */}
     {/* <BasicUseReducer></BasicUseReducer> */}
     {/* <ObjectUseReducer></ObjectUseReducer> */}
     {/* <DinamicInitialState initialStateCount={0}></DinamicInitialState> */}
    </>
  );
}

export default App;
