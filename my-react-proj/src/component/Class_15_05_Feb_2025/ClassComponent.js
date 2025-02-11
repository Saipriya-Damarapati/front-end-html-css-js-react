import { Component } from "react";

// extends Component - to access the lifecycle of component
class ClassComponent extends Component {
    // render function is mandatory in class component
    render() {
        return <h1>I am from ClassComponent</h1>
    }
}

export default ClassComponent;

/*

import './App.css';
import React from 'react';
import ClassComponent from './component/Class_15_05_Feb_2025/ClassComponent';

class App extends React.Component {
  render() {
    return (
      <div>
        <ClassComponent />
      </div>
    )
  }
}

export default App;


*/