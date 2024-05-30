import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";

import { auth } from "./lib/firebase.js";
import { onAuthStateChanged } from "firebase/auth";

import "./App.css";
import { Login } from "./pages/Login.jsx";
import { Register } from "./pages/Register.jsx";
import { Index } from "./pages/Index.jsx";
import RecoverPass from "./pages/RecoverPass.jsx";
import Profile from "./components_Index/Profile.jsx";
import { useUserStore } from "./lib/userStore.js";

function App() {
  // TA: Backend

  const { currentUser, isLoading, fetchUserInfo } = useUserStore();

  // theo dõi trạng thái xác thực của người dùng
  useEffect(() => {
    // onAuthStateChanged: một hàm lắng nghe từ Firebase Authentication
    // Nó sẽ được gọi mỗi khi trạng thái xác thực của người dùng thay đổi (ví dụ: đăng nhập, đăng xuất, thay đổi thông tin người dùng).
    const unSub = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(`App.jsx: user.uid = ${user.uid}`);
        fetchUserInfo(user.uid); // Fetch thông tin user nếu đã đăng nhập
      } else {
        fetchUserInfo(null); // Nếu chưa đăng nhập, currentUser sẽ là null
      }
    });
    return () => {
      unSub();
    };
  }, [fetchUserInfo]);

  if (isLoading) {
    return <div className="loading">Loading</div>;
  }

  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Login />} />
           */}
                   <Route
          path="/"
          element={currentUser ? <Navigate to="/index" /> : <Login />}
        />

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
