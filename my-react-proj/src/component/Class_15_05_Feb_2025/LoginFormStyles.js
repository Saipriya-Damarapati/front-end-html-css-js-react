import { Component } from "react";

class LoginFormStyles extends Component {

  // setState for class component
  // useState for functional component
  // props - used to pass data from parent to child component
  // props are read only or immutable
  // child component cannot modify the props

    constructor(props) {
      super(props);
      this.state = {
        email: "",
        password: "",
        error: "",
      };
    }

    // handleChange and handleSubmit functions
    handleChange = (event) => {
      this.setState({[event.target.name] : [event.target.value]});
    };

    handleSubmit = (event) => {
      // prevents the page reload by default
      event.preventDefault();

      const{email, password} = this.state;

      if(!email || !password) {
        this.setState({error: "Email and Password fields are mandatory"});
        return;
      }

      this.setState({error: ""});
      console.log("Logging in with : ", {email, password});
    };

    render() {
        return (
            <div style={varStyles.container}>
                <h2>Login Page</h2>

                {this.state.error && <p style={varStyles.error}>{this.state.error}</p>}

                <form onSubmit={this.handleSubmit} style={varStyles.form}>
                  <input type="email" name="email" placeholder="Email" value={this.state.email} 
                  onChange={this.handleChange} style={varStyles.input} />

                  <input type="password" name="password" placeholder="Password" value={this.state.password}
                  onChange={this.handleChange} style={varStyles.input} />

                  <button type="submit" style={varStyles.button}>Login</button>
                </form>
            </div>
        );
    }
}


// to use styles at html tags level
const varStyles = {
  container: {width: "200px", margin: "auto", padding: "20px", textAlign: "center", border: "1px solid black"},
  form: {display: "flex", flexDirection: "column", gap: "10px"},
  input: {padding: "8px", fontsize: "16px", border: "2px solid brown"},
  button: {padding: "10px", fontsize: "16px", border: "2px solid green", background: "salmon"},
  error: {color: "red", fontsize: "16px"}
}

export default LoginFormStyles;

/*

import './App.css';
import React from 'react';
import LoginFormStyles from './component/Class_15_05_Feb_2025/LoginFormStyles';

class App extends React.Component {
  render() {
    return (
      <div>
        <LoginFormStyles />
      </div>
    )
  }
}

export default App;


*/