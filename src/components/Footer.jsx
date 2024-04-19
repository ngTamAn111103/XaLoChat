import React from "react";
import { Outlet, Link } from "react-router-dom";

export function Footer({ label1, label2, href = "#" }) {
  return (
    <div className="mt-10 text-center">
      <p className="mb-4">
        {label1}

        <Link className="font-normal text-primary" to="/register">
          {label2}
        </Link>
      </p>
      <p>
        © 2024 Chatvia. Crafted with{" "}
        <i className="fa-solid fa-heart text-red-500"></i> by Themesbrand
      </p>
    </div>
  );
}
