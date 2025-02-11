import { useState } from "react";

function Hooks() {

    const[count, setCount] = useState(0);

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count+1)}> Increment </button>
            <button onClick={() => setCount(count-1)}> Decrement </button>
        </div>
    );
}

export default Hooks;

/*

import './App.css';
import React from 'react';
import Hooks from './component/Class_16_11_Feb_2025/Hooks';

class App extends React.Component {
  render() {
    return (
      <div>
        <Hooks />
      </div>
    )
  }
}

export default App;

*/