import { useState } from "react"

const ApplicationForm = () => {

    const[formData, setFormData] = useState({
        name: "",
        email: "",
        dob: "",
        address: "",
        phoneNumber: "",
    });

    const handleChange = (event) => {
        setFormData({formData, [event.target.name] : event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Data", formData);
    }

    return (
        <div style={styles.container}>
            
            <form onSubmit={handleSubmit} style={styles.formdiv}>

                <h2 style={styles.h2div}>ApplicationForm</h2>

                <div style={styles.element}>
                    <div style={styles.labeldiv}><label>Full Name:</label></div>
				    <input type="text" id="name" name="name" placeholder="Enter your full Name" required onChange={handleChange} style={styles.inputdiv} />
                </div>

                <div style={styles.element}>
				    <div style={styles.labeldiv}><label>Email id:</label></div>
				    <input type="email" id="email" name="email" placeholder="Enter your email id" required onChange={handleChange} style={styles.inputdiv} />
			    </div>

                <div style={styles.element}>
				    <div style={styles.labeldiv}><label>Date of birth:</label></div>
				    <input type="date" id="dob" name="dob" required onChange={handleChange} style={styles.inputdiv} />
			    </div>

                <div style={styles.element}>
				    <div style={styles.labeldiv}><label>Address:</label></div>
				    <textarea id="address" name="address" rows="4" placeholder="Enter your address" required 
                        onChange={handleChange} style={styles.textarea} ></textarea>
			    </div>
			
			    <div style={styles.element}>
				    <div style={styles.labeldiv}><label>Phone Number:</label></div>
				    <input type="text" id="phone" placeholder="Enter your phone number" required onChange={handleChange} style={styles.inputdiv} />
			    </div>

                <div style={styles.element}>
				    <button type="submit" style={styles.button}>Submit</button>
				    <button type="reset" style={styles.button}>Reset</button>
			    </div>
            </form>
        </div>
    );
}

const styles = {
    container: {width: "25%", marginLeft: "37%", alignItems: "center", fontFamily: "Arial, Helvetica, sans-serif"},
    formdiv: {background: "darksalmon", alignItems: "center", borderRadius: "20px", boxShadow: "3px 3px Crimson"},
    h2div: {fontFamily: "Verdana", fontStyle: "italic", marginLeft: "10%"},
    element: {background: "khaki", borderRadius: "10px", marginLeft: "20px", marginTop: "20px", marginBottonm: "10px", marginRight: "20px", padding: "5px 5px"},
    labeldiv: {marginBottom: "5px", fontWeight: "bold"},
    inputdiv: {padding: "12px 10px 10px 10px", width: "95%", boxShadow: "darkmagenta", borderRadius: "10px"},
    textarea: {width: "95%", padding: "12px 10px 10px 10px"},
    button: {width: "40%", padding: "12px 10px", backgroundColor: "cornflowerblue", marginLeft: "25px"}
};
export default ApplicationForm;


/*

import './App.css';
import React from 'react';
import ApplicationForm from './component/Class_17_16_Feb_2025/homework/ApplicationForm';

class App extends React.Component {
  render() {
    return (
      <div>
        <ApplicationForm />
      </div>
    )
  }
}

export default App;

*/