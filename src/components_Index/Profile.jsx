import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import ProfileInfo from "./ProfileInfo";
import UserProfile from "./UserProfile";
import FileCard from "./FileCard";

function Profile() {
  const [toggleOne, setToggleOne] = useState(false);
  const [toggleTwo, setToggleTwo] = useState(false);

  const handleToggleOne = () => {
    setToggleOne(!toggleOne);
    if (toggleTwo) {
      setToggleTwo(false);
    }
  };

  const handleToggleTwo = () => {
    setToggleTwo(!toggleTwo);
    if (toggleOne) {
      setToggleOne(false);
    }
  };

  return (
    <div id="pills-user" className="tab-pane active bg-light text-[sans-serif] text-sm">
      <div className="px-4 pt-4">
        <div className="user-chat-nav float-end">
          <div className="dropdown">
            <a
              aria-haspopup="true"
              className="font-size-18 text-muted"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="bi bi-three-dots-vertical"></i>
            </a>
            <div
              tabIndex="-1"
              role="menu"
              aria-hidden="true"
              className="dropdown-menu dropdown-menu-end"
            >
              <button tabIndex="0" role="menuitem" className="dropdown-item">
                Edit
              </button>
              <button tabIndex="0" role="menuitem" className="dropdown-item">
                Action
              </button>
              <div tabIndex="-1" className="dropdown-divider"></div>
              <button tabIndex="0" role="menuitem" className="dropdown-item">
                Another action
              </button>
            </div>
          </div>
        </div>
        <h3 className="mb-0 text-lg text-black">My Profile</h3>
      </div>
      {/*Component User Profile*/}
      <UserProfile
        avatarSrc="./images/avt.png"
        name={"Patricia Smith"}
        activityStatus={"Active"}
      />
      <div className="user-profile-desc p-4">
        <div className="text-muted">
          <ProfileInfo p="If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual." />
        </div>
        <div id="profile-user-accordion-1" className="custom-accordion">
          {/* First Card */}
          <div className="card mb-2 border shadow-none">
            <div
              id="profile-user-headingOne"
              className="m-2"
              onClick={handleToggleOne}
            >
              <h6 className="font-size-14 m-0 fw-bolder text-sm">
                <i className="bi bi-person p-2"></i>
                About
                <i
                  className={`bi bi-chevron-${toggleOne ? "up" : "down"} fa-sm float-end pt-1`}
                ></i>
              </h6>
            </div>
            <div
              className={`${toggleOne ? "show" : "collapse"}`}
              id="collapseOne"
            >
              <div className="card-body">
                <div>
                  {/*Dùng component ProfileInfo*/}
                  <ProfileInfo label="Name" value="Patricia Smith" />
                </div>
                <div className="mt-4">
                  <ProfileInfo label="Email" value="adc@123.com" />
                </div>
                <div className="mt-4">
                  <ProfileInfo label="Time" value="11:40 AM" />
                </div>
                <div className="mt-4">
                  <ProfileInfo label="Location" value="California, USA" />
                </div>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="card mb-1 border shadow-none">
            <div
              id="profile-user-headingTwo"
              className="m-2"
              onClick={handleToggleTwo}
            >
              <h6 className="font-size-14 m-0 fw-bolder text-sm">
                <i className="bi bi-paperclip p-2"></i>
                Attached Files
                <i
                  className={`bi bi-chevron-${toggleTwo ? "up" : "down"} fa-sm float-end pt-1 `}
                ></i>
              </h6>
            </div>
            <div
              className={` ${toggleTwo ? "show" : "collapse"}`}
              id="collapseTwo"
            >
              <div className="card-body">
                {/*Dùng component FileCard*/}
                <FileCard
                  fileName="Admin-A.zip"
                  fileSize="12.5 MB"
                  iconClassName="fa-solid fa-file-lines"
                />
                <FileCard
                  fileName="User-A.zip"
                  fileSize="122 MB"
                  iconClassName="fa fa-file-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
