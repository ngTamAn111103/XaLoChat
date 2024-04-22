import React from "react";
import { useState } from "react";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
export function Register() {
    // Thiết lập các useState() 
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: ''
    });
    const [errors, setErrors] = useState({});

    //functions
    //onsubmit: kiểm tra sự kiện onSumit khi ấn form 
    const handleSubmit = (e) => { 
      console.log("called")
      e.preventDefault(); 
      errors.username = validateField('username', formData.username)["username"]; 
      errors.email = validateField('email', formData.email)["email"]; 
      errors.password = validateField('password', formData.password)["password"]; 
      setErrors({...errors, "username": errors.username, "password": errors.password, "email": errors.email })
    }

    //onChange: kiêm tra khi thay đổi
    const handleChange = (e) => {
      const { name, value } = e.target;
      // cập nhật đối tượng khi onChange 
      setFormData({
        ...formData,
        [name]: value
      });
      // xác thực dữ liệu và cập nhật Lỗi
      const validationErrors = validateField(name, value);
      setErrors({
        ...errors,
        [name]: validationErrors[name]
      });
    };

    //validate các trường và thay đổi useState của error
    const validateField = (name, value) => {
      const fieldErrors = {};
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
    <div className="my-12 py-12">
      <div className="container mx-auto">
        <div className="flex flex-col flex-wrap items-center justify-center">
          {/* Header */}
          <Header
            heading="Register"
            label="Get your Chatvia account now."
            href="#"
          />
          {/* body */}
          <div className="card mx-auto mb-6 flex max-w-lg rounded-lg bg-white p-8 shadow-md">
            <div className="flex flex-col items-center justify-center">
              <div className="p-4">
                <form action="#" method="post" onSubmit={(e)=> handleSubmit(e)}>

                  <Input
                    textLabel="Email"
                    htmlFor="email"
                    placeholder="Enter Email"
                    inputType="text"
                    icon="fa-solid fa-envelope"
                    onChange={(e)=>handleChange(e)}
                    onMouseLeave={(e)=>handleChange(e)}
                    value = {formData.email}
                    error={errors.email}
                    colorValidation="text-text-danger"
                  />
                  <Input
                    textLabel="Username"
                    htmlFor="username"
                    placeholder="Enter Username"
                    inputType="text"
                    icon="fa-solid fa-user"
                    onChange={(e)=>handleChange(e)}
                    onMouseLeave={(e)=>handleChange(e)}
                    error={errors.username}
                    value = {formData.username}
                    colorValidation="text-text-danger"
                  />
                  <Input
                    textLabel="Password"
                    htmlFor="password"
                    placeholder="Enter Password"
                    inputType="password"
                    icon="fa-solid fa-lock"
                    onChange={(e)=>handleChange(e)}
                    onMouseLeave={(e)=>handleChange(e)}
                    error={errors.password}
                    colorValidation="text-text-danger"
                    value = {formData.password}
                  />
  
                  <Button label="Register" type="submit" />
                </form>
              </div>
            </div>
          </div>
          {/* Footer */}
          <Footer
            label1="Already have an account?"
            label2=" Signin"
            href="#"
          />
        </div>
      </div>
    </div>
  );
}
