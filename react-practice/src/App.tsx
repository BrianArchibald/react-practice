import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

    const [ counter, setCounter ] = useState(0)

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

      </header>
    </div>
  );
}

export default App;
