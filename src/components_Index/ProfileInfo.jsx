import React from "react";

function ProfileInfo({ p, label, value }) {
  return (
    <>
      <p className="text-muted mb-4 text-[#7A7F9A]">{p}</p>
      <p className="text-muted mb-1">{label}</p>
      <h5 className="font-size-14 fw-bolder text-sm">{value}</h5>
    </>
  );
}

export default ProfileInfo;
