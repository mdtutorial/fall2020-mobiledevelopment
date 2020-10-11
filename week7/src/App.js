import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
      setCount (prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount( prevCount => prevCount - 1 );
  };
  return (
    <div>
      <div>
        <button onClick = {handleIncrement}> + </button>
          <p>Sit Ups {count}</p>
          <p>Crunches {count}</p>
        <button onClick = {handleDecrement}> - </button>
      </div>
      <button onClick = {() => setCount (0)}> Reset </button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
