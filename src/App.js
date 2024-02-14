
import './App.css';
import React, { useRef, useState } from 'react';
function App() {
  const [name, setName] = useState("geet");
const refElement = useRef();
function reset(){
  setName(" ");
  refElement.current.focus();
}
  return (
    <>
   <h1> Learning useRef</h1>
   <input ref= {refElement} type='text' value={name} onChange={(e)=> setName(e.target.value)}/>
   <button onClick={reset}>  Reset</button>
    </>
  );
}

export default App;
