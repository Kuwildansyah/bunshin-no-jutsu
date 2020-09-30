import React, { Component,useState,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
    const [data, setData] = useState({});   

useEffect(() => {
  fetch(`http://127.0.0.1:8000/api/users/`)
  .then(res => res.json())
  .then(data => {
    setData(data.name),
    console.log(data)})
}, [data])
  return (
    <div className="App">
     <div className="background">
      <div className="hasil">
        {data.name}
      </div>
     </div>
    </div>
  )
}

export default App;
