function EventExampleWithParam() {
    
    const msg = (param) => {
        alert("Welcome... " + param)
    }

    return (
        <button onClick={() => msg("Saipriya")}> Click Me! </button>
    );
}

export default EventExampleWithParam;

/*

import './App.css';
import React from 'react';
import EventExampleWithParam from './component/Class_16_11_Feb_2025/EventExampleWithParam';

class App extends React.Component {
  render() {
    return (
      <div>
        <EventExampleWithParam />
      </div>
    )
  }
}

export default App;

*/