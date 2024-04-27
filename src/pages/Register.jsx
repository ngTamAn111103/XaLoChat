import React from "react";
import { useState } from "react";
import { Header } from "../components_auth/Header";
import { Input } from "../components_auth/Input";
import { Button } from "../components_auth/Button";
import { Footer } from "../components_auth/Footer";

export function Register() {
    // Thiết lập các useState() 
    const [formData, setFormData] = useState({
      password: '',
      email: '',
      confirm_password: '',
    });
    const [errors, setErrors] = useState({});

    //functions
    //onsubmit: kiểm tra sự kiện onSumit khi ấn form 
    const handleSubmit = (e) => { 
      console.log("called")
      e.preventDefault(); 
      errors.email = validateField('email', formData.email)["email"]; 
      errors.password = validateField('password', formData.password)["password"]; 
      errors.confirm_password = validateField('confirm_password', formData.confirm_password)["confirm_password"]; 
      setErrors({...errors, "confirm_password": errors.confirm_password, "password": errors.password, "email": errors.email })
    }

    //onChange: kiêm tra khi thay đổi
    const handleChange = (e) => {
      const { name, value } = e.target;
      // cập nhật đối tượng khi onChange 
      setFormData({
        ...formData,
        [name]: value
      });
      console.log(formData.name )
      // xác thực dữ liệu và cập nhật Lỗi
      const validationErrors = validateField(name, value);
      setErrors({
        ...errors,
        [name]: validationErrors[name]
      });
    };

    //validate các trường và thay đổi useState của error
    const validateField = (name, value) => {
      console.log("called: "+formData.confirm_password);
      const fieldErrors = {};
      if (name === 'confirm_password' && !value.trim()) {
        fieldErrors[name] = 'Confirm password is required';
      } else if (name === 'email' && !value.trim()) {
        fieldErrors[name] = 'Email is required';
      } else if (name === 'email' && !isValidEmail(value)) {
        fieldErrors[name] = 'Invalid email address';
      } else if (name === 'password' && !value.trim()) {
        fieldErrors[name] = 'Password is required';
      } else if (name === 'confirm_password' && formData.password!= formData.confirm_password) {
        fieldErrors[name] = 'Confirm password is wrong';
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
                    onBlur={(e)=>handleChange(e)}
                    value = {formData.email}
                    error={errors.email}
                    colorValidation="text-text-danger"
                  />
                    <Input
                      textLabel="Password"
                      htmlFor="password"
                      placeholder="Enter Password"
                      inputType="password"
                      icon="fa-solid fa-lock"
                      onChange={(e)=>handleChange(e)}
                      onBlur={(e)=>handleChange(e)}
                      error={errors.password}
                      colorValidation="text-text-danger"
                      value = {formData.password}
                    />
                  <Input
                    textLabel="Confirm password"
                    htmlFor="confirm_password"
                    placeholder="Confirm password"
                    inputType="password"
                    icon="fa-solid fa-lock"
                    onChange={(e)=>handleChange(e)}
                    onBlur={(e)=>handleChange(e)}
                    error={errors.confirm_password}
                    value = {formData.confirm_password}
                    colorValidation="text-text-danger"
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
            href="/"
          />
        </div>
      </div>
    </div>
  );
}
