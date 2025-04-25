import React, { useContext } from 'react';
import FormContext from './FormContext';


const formStyle = {
    width: '300px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    fontFamily: 'Arial'
};

function MyForm() {
    const { formData, handleChange, handleSubmit } = useContext(FormContext);

    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            <h2>My FORM</h2>
            <div>
                <label>Name:</label><br />
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
                <label>Email:</label><br />
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
                <label>Password:</label><br />
                <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default MyForm;