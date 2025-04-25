import React, {useState} from "react";

function MyForm() {
    const[formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange=(e)=>{
        const{name, value} = e.target;
        setFormData((prevData)=>(
            {
                ...prevData,[name]:value
            }
        ));
    };

    const handleSubmit=(e)=> {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({
            name: '',
            email: '',
            password: ''
        });
    }

    return(
        <form onSubmit={handleSubmit} style={formStyle}>
            <h2>Form</h2>
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
    )
}

const formStyle={
    width: '300px',
    margin: '40px auto',
    padding: '20px',
    border: '1px solid Red',
    borderRadius: '10px',
    fontFamily: 'Arial'
}

export default MyForm;