import React from "react";
import { Outlet, Link } from "react-router-dom";

import { useState } from "react";

import { Header } from "../components_auth/Header";
import { Input } from "../components_auth/Input";
import { Button } from "../components_auth/Button";
import { Footer } from "../components_auth/Footer";

const RecoverPass = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setMessage('Vui lòng nhập một địa chỉ email hợp lệ.');
      return;
    }
    // Gửi yêu cầu khôi phục mật khẩu đến server (ở đây tạm thời chỉ hiển thị thông báo thành công)
    setMessage('Liên kết khôi phục mật khẩu đã được gửi đến email của bạn.');
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!email || !email.includes("@")) {
//       setMessage("Vui lòng nhập một địa chỉ email hợp lệ.");
//       return;
//     }
//     // Gửi yêu cầu khôi phục mật khẩu đến server (ở đây tạm thời chỉ hiển thị thông báo thành công)
//     setMessage("Liên kết khôi phục mật khẩu đã được gửi đến email của bạn.");
  };

  return (
    <div className="my-12 pt-12">
      <div className="container mx-auto">
        <div className="flex flex-col flex-wrap items-center justify-center">
          {/* Header */}
          <Header
            heading="Reset Password"
            label="Reset Password With Chatvia."
            href="/"
          />
          {/* body */}
          <div className="card mx-auto mb-6 flex max-w-lg rounded-lg bg-white p-8 shadow-md">
            <div className="flex flex-col items-center justify-center">
              <div className="p-4">
                <form onSubmit={handleSubmit}>
                  <div className="text-center mb-4 alert alert-success p-2 bg-[#cdf7ec] text-[#024540] rounded border border-[#9befd9] border-solid">
//                   <div className="alert alert-success mb-4 rounded  border border-solid border-[#9befd9] bg-[#cdf7ec] px-5 py-3 text-center text-[#024540]">

                    Enter your Email and instructions will be sent to you!
                  </div>
                  <Input
                    textLabel="Email"
                    htmlFor="email"
                    placeholder="Enter Email"
                    inputType="email"
                    icon="fa-solid fa-envelope"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button label="Reset" type="submit" />
                </form>
              </div>
            </div>
          </div>

          <Footer label1="Remember It ? " label2="Signin" href="/login" />
        </div>
      </div>
    </div>
  );
};

export default RecoverPass;
