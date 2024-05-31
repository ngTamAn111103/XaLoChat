import React from "react";

function UserProfile({
  name,
  description,
  avatarSrc,
  activityStatus,
  location,
}) {
  return (
    <div className="border-b border-[#DCDCDC] p-4 text-center">
      <div className="border border-[#DCDCDC] inline-block p-1 rounded-full">
        <img src={avatarSrc || "./images/avt.png"} className="h-20 w-20 rounded-full" alt={avatarSrc} />
      </div>
      <h5 className="text-base text-black">{name}</h5>
      <p className="mb-1 text-xs text-[#7A7F9A]">
        <i className="fa-solid fa-circle-dot text-xs text-[#40E0D0] p-2"></i>
        {activityStatus}
      </p>
    </div>
  );
}

export default UserProfile;
