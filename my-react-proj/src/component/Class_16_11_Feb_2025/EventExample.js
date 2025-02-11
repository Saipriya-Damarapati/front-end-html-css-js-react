import React from "react";

function EventExample() {
    const msg = () => {
        alert("Welcome");
    }

    return (
        <button onClick={msg}> Click Me! </button>
    );
}

export default EventExample;


/*

import './App.css';
import React from 'react';
import EventExample from './component/Class_16_11_Feb_2025/EventExample';

class App extends React.Component {
  render() {
    return (
      <div>
        <EventExample />
      </div>
    )
  }
}

export default App;

*/