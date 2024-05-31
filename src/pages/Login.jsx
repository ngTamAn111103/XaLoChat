import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

import { Outlet, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useUserStore } from "../lib/userStore";

import { Header } from "../components_auth/Header";
import { Input } from "../components_auth/Input";
import { Button } from "../components_auth/Button";
import { Footer } from "../components_auth/Footer";
import { toast } from "react-toastify";
import { auth } from "../lib/firebase";
export function Login() {
  
  // Khởi tạo mặc định usernmae có @gmail.com
  const [username, setUsername] = useState("admin@gmail.com");
  const [loading, setLoading] = useState(false);

  


  const handleLogin = async (e) => {
    e.preventDefault();

    // bật loading
    setLoading(true);

    // Lấy data người dùng nhập
    const formData = new FormData(e.target);
    const { password } = Object.fromEntries(formData);
    

    try {
      await signInWithEmailAndPassword(auth, username, password)
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      // Tắt loading
      setLoading(false);
    }
  };
  // mặc đinh true
  let isValidationUsername = true;
  // Username không có @gmail.com
  if (!username.includes("@gmail.com")) {
    // false
    isValidationUsername = false;
  }

  return (
    <div className="my-12 py-12">
      <div className="container mx-auto">
        <div className="flex flex-col flex-wrap items-center justify-center">
          {/* Header */}
          <Header
            heading="Sign in"
            label="Sign in to continue to Chatvia."
            href="#"
          />
          {/* body */}
          <div className="card mx-auto mb-6 flex max-w-lg rounded-lg bg-white p-8 shadow-md">
            <div className="flex flex-col items-center justify-center">
              <div className="p-4">
                <form method="post" onSubmit={handleLogin}>
                  <Input
                    textLabel="Username"
                    htmlFor="username"
                    placeholder="Enter username"
                    inputType="text"
                    icon="fa-solid fa-user"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    validation={isValidationUsername}
                    isFocus={true}
                    labelValidation="Please Enter Your Username"
                  />
                  <Input
                    textLabel="Password"
                    htmlFor="password"
                    placeholder="Enter password"
                    inputType="password"
                    icon="fa-solid fa-lock"
                  />
                  {/* Nhớ mật khẩu + Quên mật khẩu */}
                  <div className=" mb-6 flex justify-between">
                    <div className="">
                      <input
                        type="checkbox"
                        name="rememberme"
                        id="rememberme"
                        className="mx-1
                        cursor-pointer"
                      />
                      <label htmlFor="rememberme" className="">
                        Remember me
                      </label>
                    </div>
                    <div className="">
                      <a href="#">
                        <span className="opacity-60 hover:opacity-100">
                          Forgot password?
                        </span>
                      </a>
                    </div>
                  </div>
                  {/* <Link to="/index"> */}
                    <Button label="Sign in" type="submit" loading={loading} />
                  {/* </Link> */}
                </form>
              </div>
            </div>
          </div>
          {/* Footer */}
          <Footer
            label1="Don't have an account ?"
            label2=" Sign up now"
            href="/register"
          />
        </div>
      </div>
    </div>
  );
}
