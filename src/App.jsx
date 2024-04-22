import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/Login.jsx";
import { Register } from "./pages/Register.jsx";
import { Index } from "./pages/Index.jsx";
import RecoverPass from "./pages/RecoverPass.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/index" element={<Index />} />
          <Route path="/forget-password" element={<RecoverPass />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
