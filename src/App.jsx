import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import { auth } from "./lib/firebase.js";
import { onAuthStateChanged } from "firebase/auth";

import "./App.css";
import { Login } from "./pages/Login.jsx";
import { Register } from "./pages/Register.jsx";
import { Index } from "./pages/Index.jsx";
import RecoverPass from "./pages/RecoverPass.jsx";
import Profile from "./components_Index/Profile.jsx";

function App() {
  // TA: Backend

    // lấy user
    const user = false
    useEffect(() =>{
      const unSub = onAuthStateChanged(auth, (user) => {
        console.log(user);
      });
      return () =>{
        unSub();
      };
    },[]);
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/index" element={<Index />} />
          <Route path="/forget-password" element={<RecoverPass />} />
          <Route path="/profile" element={<Profile />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
