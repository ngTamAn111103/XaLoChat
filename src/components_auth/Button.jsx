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
                  relative
                  ${loading ? "bg-primary-loading hover:bg-primary-loading" : "bg-primary"}
                text-white
                hover:bg-bg-btn-hover
                `}
      >
        {loading ? <img src="images/loading.svg" className="w-10 h-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/> : label}
       </button>
    </div>
  );
}
