import React from "react";

function ProfileInfo({ p="", label="", value=""}) {
  return (
    <>
      <p className="text-[#7A7F9A] mb-4">{p}</p>
      <p className="text-[#7A7F9A] mb-1">{label}</p>
      <h5 className="font-bold font-sans text-xs mb-4">{value}</h5>
    </>
  );
}

export default ProfileInfo;
