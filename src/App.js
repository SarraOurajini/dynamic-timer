import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const App = (props) => {

  const ms=props.ms
  let h=Math.floor(ms/3600000)
  if (h<10) {h='0'+ h}
  let m=Math.floor((ms%3600000)/60000)
  if (m<10) {m='0'+ m}
  let s=Math.floor(((ms%3600000)%60000)/1000)
  if (s<10) {s='0'+ s}
   return (
  
      <div className="timer"> 
      <div className="times"><div className="timer"> {h}:</div> <div className="time">Hour</div> </div>
      <div className="times"><div className="timer"> {m}:</div> <div className="time">Minute</div> </div>
      <div className="times"><div className="timer"> {s}</div> <div className="time">Second</div> </div>
      </div>
      
   );
}

export default App;
