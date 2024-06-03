import React from "react";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { Timestamp, doc, setDoc } from "firebase/firestore";
import { auth, db } from "../lib/firebase";
import {toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Header } from "../components_auth/Header";
import { Input } from "../components_auth/Input";
import { Button } from "../components_auth/Button";
import { Footer } from "../components_auth/Footer";
import { useNavigate } from "react-router-dom";

export function Register() {
  // Thiết lập các useState()
  const [formData, setFormData] = useState({
    password: "admin@gmail.com",
    email: "admin@gmail.com",
    fullname: "",
    confirm_password: "admin@gmail.com",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false)
  // Chuyển về trang đăng nhập sau khi đăng ký thành công
  const navigate = useNavigate();

  //functions
  // TA: Back-end: Đăng ký với Auth
  const handleRegister = async (e) => {
    e.preventDefault();

    // Bật loading
    setLoading(true)

    // Lấy giá trị email từ state formData
    const { email, password, confirm_password, fullname} = formData;

    // Xử lý ngoại lệ:
    try {
      // Kiểm tra xác nhận mật khẩu không đúng
      if (password != confirm_password) {
        console.log("Confirm password fail!");
        toast.error("Confirm password fail!");

        return;
      } else {
        // Thực hiện hàm đăng ký user với Auth Firebase
        const res = await createUserWithEmailAndPassword(auth, email, password);
        if (res) {
          console.log("Create UserAuth thành công.");
          toast.success("Create UserAuth thành công.");

          // Thực hiện hàm thêm dữ liệu vào firestore
          await setDoc(doc(db, "Profile", res.user.uid), {
            ID: res.user.uid,
            Email : email,
            Fullname: fullname,
            Location: "Viet Nam",
            CreatedAt: Date(),
            UpdatedAt: Date(),
            Avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLFoDZq13cmMt74V-hRwqM3h4DhzBwd9ubFA&s",
            Blocked: [],
            Chatroom: [],
          });

          console.log("Create Profile thành công.");
          toast.success("Create Profile thành công.");
        }
        // Chuyển hướng đến trang đăng nhập
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
    finally{
      // Tắt loading
      setLoading(false)
    }
  };

  //onsubmit: kiểm tra sự kiện onSumit khi ấn form
  const handleSubmit = (e) => {
    // console.log("called");
    e.preventDefault();
    errors.email = validateField("email", formData.email)["email"];
    errors.password = validateField("password", formData.password)["password"];
    errors.confirm_password = validateField(
      "confirm_password",
      formData.confirm_password,
    )["confirm_password"];
    setErrors({
      ...errors,
      confirm_password: errors.confirm_password,
      password: errors.password,
      email: errors.email,
    });
  };

  //onChange: kiêm tra khi thay đổi
  const handleChange = (e) => {
    const { name, value } = e.target;
    // cập nhật đối tượng khi onChange
    setFormData({
      ...formData,
      [name]: value,
    });
    // console.log(formData.name);
    // xác thực dữ liệu và cập nhật Lỗi
    const validationErrors = validateField(name, value);
    setErrors({
      ...errors,
      [name]: validationErrors[name],
    });
  };

  //validate các trường và thay đổi useState của error
  const validateField = (name, value) => {
    // console.log("called: " + formData.confirm_password);
    const fieldErrors = {};
    if (name === "confirm_password" && !value.trim()) {
      fieldErrors[name] = "Confirm password is required";
    } else if (name === "email" && !value.trim()) {
      fieldErrors[name] = "Email is required";
    } else if (name === "email" && !isValidEmail(value)) {
      fieldErrors[name] = "Invalid email address";
    } else if (name === "password" && !value.trim()) {
      fieldErrors[name] = "Password is required";
    } else if (
      name === "confirm_password" &&
      formData.password != formData.confirm_password
    ) {
      fieldErrors[name] = "Confirm password is wrong";
    }
    return fieldErrors;
  };

  const isValidEmail = (email) => {
    // Basic email validation
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div className="py-24 bg-[#f7f7ff]">
     
      <div className="container mx-auto">
        <div className="flex flex-col flex-wrap items-center justify-center">
          {/* Header */}
          <Header
            heading="Register"
            label="Get your Chatvia account now."
            href="#"
          />
          {/* body */}
          <div className="card lg:mx-auto lg:mb-6 flex w-5/6 lg:w-auto rounded-lg bg-white lg:p-8 shadow-md">
            <div className="flex flex-col items-center justify-center w-full lg:w-auto">
              <div className="p-4 l w-full lg:w-auto">
                <form
                  // action="#"
                  method="post"
                  onSubmit={handleRegister}
                  // onSubmit={(e) => handleSubmit(e)}
                >
                  <Input
                    textLabel="Email"
                    htmlFor="email"
                    placeholder="Enter Email"
                    inputType="text"
                    icon="fa-solid fa-envelope"
                    onChange={(e) => handleChange(e)}
                    onBlur={(e) => handleChange(e)}
                    value={formData.email}
                    /*
                    onChange={(e) => handleChange(e)}
                    onMouseLeave={(e) => handleChange(e)}
                    value={formData.email}
                    */
                    error={errors.email}
                    colorValidation="text-text-danger"
                  />
                  <Input
                    textLabel="Full name"
                    htmlFor="fullname"
                    placeholder="Enter Full name"
                    inputType="text"
                    icon="fa-regular fa-user"
                    value={formData.fullname}
                    onChange={(e) => handleChange(e)}
                    onBlur={(e) => handleChange(e)}
              
                    /*
                    onChange={(e) => handleChange(e)}
                    onMouseLeave={(e) => handleChange(e)}
                    value={formData.email}
                    */
                   
                  />

                  <Input
                    textLabel="Password"
                    htmlFor="password"
                    placeholder="Enter Password"
                    inputType="password"
                    icon="fa-solid fa-lock"
                    onChange={(e) => handleChange(e)}
                    onBlur={(e) => handleChange(e)}
                    error={errors.password}
                    colorValidation="text-text-danger"
                    value={formData.password}
                  />
                  <Input
                    textLabel="Confirm password"
                    htmlFor="confirm_password"
                    placeholder="Confirm password"
                    inputType="password"
                    icon="fa-solid fa-lock"
                    onChange={(e) => handleChange(e)}
                    onBlur={(e) => handleChange(e)}
                    error={errors.confirm_password}
                    value={formData.confirm_password}
                    colorValidation="text-text-danger"
                  />

                  <Button label="Register" type="submit" loading={loading} />
                </form>
              </div>
            </div>
          </div>
          {/* Footer */}
          <Footer label1="Already have an account?" label2=" Signin" href="/" />

          {/*
          <Footer label1="Already have an account?" label2=" Signin" href="#" />
          */}
        </div>
      </div>
    </div>
  );
}
