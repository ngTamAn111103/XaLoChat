import React from "react";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
export function Register() {
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
          <div class="card mx-auto mb-6 flex max-w-lg rounded-lg bg-white p-8 shadow-md">
            <div class="flex flex-col items-center justify-center">
              <div className="p-4">
                <form action="#">
                  <Input
                    textLabel="Username"
                    htmlFor="username"
                    placeholder="Enter username"
                    inputType="text"
                    icon="fa-solid fa-user"
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
                      <a href="">
                        <span className="opacity-60 hover:opacity-100">
                          Forgot password?
                        </span>
                      </a>
                    </div>
                  </div>

                  <Button label="Sign in" type="submit" />
                </form>
              </div>
            </div>
          </div>
          {/* Footer */}
          <Footer
            label1="Don't have an account ?"
            label2=" Sign up now"
            href="#"
          />
        </div>
      </div>
    </div>
  );
}
