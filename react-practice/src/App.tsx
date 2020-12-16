import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

const fetchAPIData = () => {
    // return axios.get('https://dog.ceo/api/breeds/image/random')
    return axios.get('https://randomuser.me/api')
      .then(data => {
        // handle success
        console.log(data);
        return JSON.stringify(data);
      })
      .catch(err => {
        console.log(err);
      })
}

export default function App () {

  const [ counter, setCounter ] = useState(0)

  useEffect(() => {
    const randomData = await

      }, []);


  return (
    <div className="App">
      <header className="App-header">
          <h2> {counter} </h2>

          <button onClick={ () => {
          setCounter(counter + 1);
          }}> Add 1 </button>

          <br></br>
          <button onClick={ () => {
          setCounter(0);
          }}> Reset </button>

          <br></br>


      </header>
    </div>
  );
}
