import React, { useState } from 'react';
import FormContext from './FormContext';


const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        setFormData({ name: '', email: '', password: '' });
    };

    return (
        <FormContext.Provider value={{ formData, handleChange, handleSubmit }}>
            {children}
        </FormContext.Provider>
    );
};

export default FormProvider;