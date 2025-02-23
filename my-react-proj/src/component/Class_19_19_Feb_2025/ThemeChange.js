import React, { createContext, useContext, useState } from "react";

// usage of context apis
// having global level data like users, themes

const ThemeContext = createContext();
const UserContext = createContext();

const ThemeProvider = ({children}) => {
    const[theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

const UserProvider = ({children}) => {
    const[user] = useState({name: "Thejo", class: "I-Grade"});

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
}

const Navbar = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    const user = useContext(UserContext);

    return (
        <nav style= {
            {
                padding: "10px",
                textAlign: "center",
                background: theme === "light" ? "#f0f0f0" : "#222",
                color: theme === "light" ? "#000" : "#fff",
            }
        }>
            <h2>Welcome, {user.name}</h2>
            <p>Class: {user.class}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </nav>
    );
}

const ThemeChange = () => {
    return (
        <ThemeProvider>
            <UserProvider>
                <div style={{textAlign: "center", padding: "20px"}}>
                    <Navbar />
                    <h1>Simple react webpage using Context API</h1>
                    <p>This is a react application with global state management</p>
                </div>
            </UserProvider>
        </ThemeProvider>
    );
}

export default ThemeChange;

/*

import './App.css';
import React from 'react';
import ThemeChange from './component/Class_19_19_Feb_2025/ThemeChange';

class App extends React.Component {
  render() {
    return (
      <div>
        <ThemeChange />
      </div>
    )
  }
}

export default App;

*/