import React from "react";

// accessing the properties from parent class
class Child extends React.Component {

    render() {
        return (
            <div>
                <h2>Weclome to this page {this.props.name}</h2>
                <p>{this.props.message}</p>
            </div>
        );
    }
}

export default Child;

/*

import './App.css';
import React from 'react';
import Child from './component/Class_16_11_Feb_2025/Child';

class App extends React.Component {
  render() {
    return (
      <div>
        <Child name="Saipriya" message="We are learning React"/>
      </div>
    )
  }
}

export default App;

*/