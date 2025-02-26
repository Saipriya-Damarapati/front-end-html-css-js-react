import { Component } from "react";

class LoginForm extends Component {

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
            <div>
                <h2>Login Page</h2>

                {this.state.error && <p>{this.state.error}</p>}

                <form onSubmit={this.handleSubmit}>
                  <input type="email" name="email" placeholder="Email" value={this.state.email} 
                  onChange={this.handleChange} />

                  <input type="password" name="password" placeholder="Password" value={this.state.password}
                  onChange={this.handleChange} />

                  <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;

/*

import './App.css';
import React from 'react';
import LoginForm from './component/Class_15_05_Feb_2025/LoginForm';

class App extends React.Component {
  render() {
    return (
      <div>
        <LoginForm />
      </div>
    )
  }
}

export default App;

*/