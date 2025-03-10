import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function RouteExample() {

  return(
    <Router>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about"> About</Link> | 
        <Link to="/contact"> Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </Router>
  );

}

export default RouteExample;

/*

import './App.css';
import React from 'react';
import RouteExample from './component/Class_20_04_Mar_2025/RouteExample';

class App extends React.Component {
  render() {
    return (
      <div>
        <RouteExample />
      </div>
    )
  }
}

export default App;

*/