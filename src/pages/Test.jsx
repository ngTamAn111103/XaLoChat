import React, { useState } from 'react';

const FormValidationExample = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update form data
    setFormData({
      ...formData,
      [name]: value
    });
    // Validate form data
    const validationErrors = validateField(name, value);
    setErrors({
      ...errors,
      [name]: validationErrors[name]
    });
  };

  const validateField = (name, value) => {
    const fieldErrors = {};
    // Example validation logic
    if (name === 'username' && !value.trim()) {
      fieldErrors[name] = 'Username is required';
    } else if (name === 'email' && !value.trim()) {
      fieldErrors[name] = 'Email is required';
    } else if (name === 'email' && !isValidEmail(value)) {
      fieldErrors[name] = 'Invalid email address';
    } else if (name === 'password' && !value.trim()) {
      fieldErrors[name] = 'Password is required';
    }
    return fieldErrors;
  };

  const isValidEmail = (email) => {
    // Basic email validation
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <form>
      <div>
        <label>Username</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
        {errors.username && <div className="error">{errors.username}</div>}
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <div className="error">{errors.email}</div>}
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        {errors.password && <div className="error">{errors.password}</div>}
      </div>
    </form>
  );
};

export default FormValidationExample;
