import React from "react";

function UserProfile({
  name,
  description,
  avatarSrc,
  activityStatus,
  location,
}) {
  return (
    <div className="text-center p-4 border-bottom">
        <div className="d-flex justify-content-center mb-4">
          <img
            src={avatarSrc}
            className="rounded-circle avatar-lg img-thumbnail"
            style={{ maxWidth: "96px" }}
            alt={name}
          />
        </div>
        <h5 className="font-size-16 text-truncate mb-1">{name}</h5>
        <p className="text-muted text-truncate mb-1">
        <i className="fa-solid fa-circle-dot text-success p-2"></i>
          {activityStatus}
        </p>
      </div>
  );
}

export default UserProfile;
