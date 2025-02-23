import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserProvider = ({children}) => {
  const[name, setName] = useState("");

  return (
    <UserContext.Provider value={{name, setName}}>
      {children}
    </UserContext.Provider>
  );
}

const WelcomeMessage = () => {
  const {name} = useContext(UserContext);
  return <h2>{name ? `Hello, ${name}` : "Hello Guest!"}</h2>;
}

const NameInput = () => {
  const {setName} = useContext(UserContext);
  return (
    <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)}
     style={{padding: "5px", margin: "10px"}} />
  );
}

const QuoteDisplay = () => {
  const[quote, setQuote] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => setQuote(data.content));
  }, []);

  return <p><strong>Random Quote:</strong>{quote}</p>
}

const MoreHooks = () => {
  return (
    <UserProvider>
      <div style={{textAlign: "center", padding: "20px"}}>
        <h1>Welcome to my simple react webpage</h1>
        <NameInput />
        <WelcomeMessage />
        <QuoteDisplay />
      </div>
    </UserProvider>
  );
}

export default MoreHooks;

/*

import './App.css';
import React from 'react';
import MoreHooks from './component/Class_18_17_Feb_2025/MoreHooks';

class App extends React.Component {
  render() {
    return (
      <div>
        <MoreHooks />
      </div>
    )
  }
}

export default App;

*/