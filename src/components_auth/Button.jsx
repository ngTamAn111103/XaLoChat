import React from "react";

export function Button({ label, type = "button" }) {
  return (
    <div className="d-grid">
      <button
        type={type}
        className="waves-effect waves-light btn btn-primary d-block w-100
                  h-10
                  w-full rounded-md
                  bg-primary
                text-white
                hover:bg-bg-btn-hover
                "
      >
        {label}
      </button>
    </div>
  );
}