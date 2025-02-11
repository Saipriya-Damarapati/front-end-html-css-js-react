import './App.css';
import React from 'react';

// class components - First, Second inside App.js example
// render function is mandatory in class component
class App extends React.Component {
  render() {
    return (
      <div>
        <First />
        <Second />
      </div>
    )
  }
}

class First extends React.Component {
  render() {
    return(
      <div>
        <h1>Hi Weclome</h1>
      </div>
    )
  }
}

class Second extends React.Component {
  render() {
    return(
      <div>
        <p>Welcome to React Components</p>
      </div>
    )
  }
}

export default App;
