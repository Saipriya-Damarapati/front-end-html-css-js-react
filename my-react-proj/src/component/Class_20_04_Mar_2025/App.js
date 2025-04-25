import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./component/Class_20_04_Mar_2025/Home";
import About from "./component/Class_20_04_Mar_2025/About";
import Contact from "./component/Class_20_04_Mar_2025/Contact";

function App() {

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

export default App;