
import './App.css';
import {useEffect, useState } from 'react';

function App() {
  const[text,setText] = useState(' ');

  // veration 1 => evry render 
  // useEffect(() => {
  //   console.log("UI REANDERING DONE");
  // })

  // veriation 2 => first time render
  // useEffect(() => {
  //   console.log('UI RENDERING');
  // },[]);

  // veriation 3 => on frist render + whenever dependency

  // verication  => cleaning 
  // in this useeffect return statment run first 
  useEffect(() => {
    console.log("Listner add ");
    return () => {
      console.log("listener removed")
    }
  })
  useEffect(() => {
    console.log("change observed");
  },[text]);

  function chnagehandler(event){
    console.log(text);
    setText(event.target.value);
  }
  return (
    <div className="App">
     <input type='text' onChange={chnagehandler}></input>
    </div>
  );
}

export default App;
