import React, { useReducer } from 'react';
import './App.css';
import {state, reducer} from './components/ApplicationState';
import ShowCount from './components/ShowCount';
import DecreaseCount from './components/DecreaseCount';

function App() {

  const [currentState, dispatch] = useReducer(reducer, state);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => { dispatch({"type": "increment"}) } }>Increase Speed</button>
        <ShowCount currentState={currentState} />
        <DecreaseCount dispatch={dispatch} />
      </header>
    </div>
  );
}

export default App;
