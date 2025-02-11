import React from "react";

function EventExampleWithParamAndEvent() {
    const msg = (param1, param2) => {
        alert(param1);
        alert(param2.type);
    }
    return (
        <button onClick={(event) => msg("Hi, Hello", event)}>Click Me!</button>
    );
}

export default EventExampleWithParamAndEvent;

/*
import './App.css';
import React from 'react';
import EventExampleWithParamAndEvent from './component/Class_16_11_Feb_2025/EventExampleWithParamAndEvent';

class App extends React.Component {
  render() {
    return (
      <div>
        <EventExampleWithParamAndEvent />
      </div>
    )
  }
}

export default App;

*/