import React, { useState } from "react";

function FormCreation () {
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            // use of spread operator 
            ...formData,
            [e.target.name] : e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //alert("Submitted details for \n Name:  ${formData.name} \n Email: ${formData.email} \n Message: ${formData.message}");
        alert("Submitted details for \n Name: " + formData.name + "\n Email: " + formData.email + "\n Message: " + formData.message);
    
    };

    return(
        <div>
            <h2>Simple React Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>

                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div>
                    <label>Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default FormCreation;

/*
import './App.css';
import React from 'react';
import FormCreation from './component/Class_21_10_Mar_2025/FormCreation';

class App extends React.Component {
  render() {
    return (
      <div>
        <FormCreation />
      </div>
    )
  }
}

export default App;

*/