import React from "react";

function UserProfile({ name, avatarSrc, activityStatus, description }) {
  return (
    <div className="p-4 text-center">
      <div className="inline-block rounded-full border border-[#DCDCDC] p-1">
        <img src={avatarSrc} className="h-20 w-20 rounded-full" alt={name} />
      </div>
      <h5 className="text-base text-black">{name}</h5>
      <p className="mb-5 text-xs text-[#7A7F9A] ">
        <i className="fa-solid fa-circle-dot p-2 text-xs text-[#40E0D0]"></i>
        {activityStatus}
      </p>
      <hr className="text-[#DCDCDC] p-2 "/>
      <div className="user-profile-desc text-left">
        <div className="text-muted">
          <p className="mb-4 text-[#7A7F9A]">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
