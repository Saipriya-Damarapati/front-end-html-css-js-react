import React, { useState } from 'react';

const RegistrationForm = () => {
    const[formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({formData, [e.target.name] : e.target.value});
    };

    // validations can be added as required
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Registered user: ", formData);
        alert("Registration successful")
    }

    return (
        <div>
            <h2>Registration Form</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>

                <div>
                    <label>Email</label>
                    <input type="text" name="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>

                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    );
}

export default RegistrationForm;

/*
import './App.css';
import React from 'react';
import RegistrationForm from './component/Class_17_16_Feb_2025/RegistrationForm';

class App extends React.Component {
  render() {
    return (
      <div>
        <RegistrationForm />
      </div>
    )
  }
}

export default App;

*/