import React, { useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

const App = () => {

    const [ counter, setCounter ] = useState(0)

    const fetchAPIData = () => {
        return axios.get('https://dog.ceo/api/breeds/image/random')
          .then(data => {
            // handle success
            console.log(data);
            return data.data.message;
          })
          .catch(err => {
            console.log(err);
          })
    }

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
          <button onClick={ () => {
          fetchAPIData();
          }}>Dogs!!  </button>

      </header>
    </div>
  );
}


export default App;
