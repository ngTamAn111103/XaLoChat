import React from "react";

export function Button({ label, type = "button", loading = false }) {
  return (
    <div className="d-grid">
      <button
        disabled={loading}
        type={type}
        className={`waves-effect waves-light btn btn-primary d-block w-100
                  h-10
                  w-full rounded-md
                  
                  ${loading ? "bg-primary-loading hover:bg-primary-loading" : "bg-primary"}
                text-white
                hover:bg-bg-btn-hover
                `}
      >
        {loading ? "Loading" : label}
       </button>
    </div>
  );
}
