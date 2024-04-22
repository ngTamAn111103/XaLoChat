import React from "react";
import Logo from "/public/images/logo.png";

export function Header({ heading, label, href = "#" }) {
  return (
    <div className="mb-6 flex flex-col items-center">
      <a className="mb-12 block" href={href}>
        <img src={Logo} alt={Logo} className="h-8" />
      </a>
      <h4 className="mb-2 text-center text-xl font-semibold">{heading}</h4>
      <p className="text-text-muted mb-6">{label}</p>
    </div>
  );
}
