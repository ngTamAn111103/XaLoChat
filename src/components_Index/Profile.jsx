import React, { useState, useRef, useEffect } from "react";
import ProfileInfo from "./ProfileInfo";
import UserProfile from "./UserProfile";
import FileCard from "./FileCard";
import { Header } from "./chat-leftsidebar/Header";
import { useUserStore } from "../lib/userStore";
export function Profile({
  isHeader = true,
  extend,
  isActive,
  userProfile,
  profileDetails,
}) {
  // Thông tin của người dùng
  const { currentUser } = useUserStore();
  const [toggleOne, setToggleOne] = useState(false);
  const [toggleTwo, setToggleTwo] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownStyles, setDropdownStyles] = useState({
    opacity: 0,
    transform: "translateY(10px)",
    transition: "opacity 0.3s ease, transform 0.3s ease",
  });

  const dropdownRef = useRef(null);

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

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    setDropdownStyles((prevStyles) => ({
      ...prevStyles,
      opacity: dropdownOpen ? 0 : 1,
      transform: dropdownOpen ? "translateY(10px)" : "translateY(0)",
    }));
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
      setDropdownStyles((prevStyles) => ({
        ...prevStyles,
        opacity: 0,
        transform: "translateY(10px)",
      }));
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <>
      <div className={isActive ? "absolute block h-full lg:w-[360px]" : "hidden"}>
        {isHeader && (
          <Header
            title={"My Profile"}
            extend={
              <div className="user-chat-nav float-right">
                <div className="relative" ref={dropdownRef}>
                  <button
                    className="font-size-18 text-muted"
                    id="dropdownMenuButton"
                    onClick={toggleDropdown}
                  >
                    <i className="fas fa-ellipsis-v"></i>
                  </button>
                  <div
                    className="absolute right-0 mt-2 w-40 rounded-md bg-white shadow-lg"
                    style={dropdownStyles}
                  >
                    <div className="py-1">
                      <button
                        className="block w-full px-4 py-2 text-left text-sm hover:bg-[#F5F5F5]"
                        onClick={() => {}}
                      >
                        Edit
                      </button>
                      <button
                        className="block w-full px-4 py-2 text-left text-sm hover:bg-[#F5F5F5]"
                        onClick={() => {}}
                      >
                        Action
                      </button>
                      <div className="border-t border-[#DCDCDC]"></div>
                      <button
                        className="block w-full px-4 py-2 text-left text-sm hover:bg-[#F5F5F5]"
                        onClick={() => {}}
                      >
                        Another action
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            }
          />
        )}
        {extend}
        <UserProfile
          avatarSrc={userProfile ? userProfile.avatarSrc : ""}
          name={userProfile ? userProfile.name : ""}
          activityStatus={userProfile ? userProfile.activityStatus : ""}
          description={userProfile ? userProfile.description : ""}
        />

        <div className="user-profile-desc px-4 pt-4">
          <div className="custom-accordion h-[calc(100vh_-_400px)] max-h-full overflow-auto scroll-smooth focus:scroll-auto">
            <div className="card mb-2 rounded-md border border-[#DCDCDC] bg-white p-1">
              <div className="cursor-pointer" onClick={handleToggleOne}>
                <h6 className="flex items-center text-xs font-bold">
                  <i className="far fa-user p-2 pl-4"></i>
                  About
                  <i
                    className={`fas fa-chevron-${toggleOne ? "up" : "down"} fa-xs ml-auto pr-4`}
                  ></i>
                </h6>
              </div>
              <div className={` ${toggleOne ? "block" : "hidden"}`}>
                <div className="card-body">
                <div className="mt-4 pl-4">
                    <ProfileInfo label={"Name"} value={currentUser.Fullname} />
                    <ProfileInfo label={"Email"} value={currentUser.Email} />
                    <ProfileInfo label={"Time"} value={currentUser.updatedAt} />
                    <ProfileInfo
                      label={"Location"}
                      value={currentUser.Location}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className=" mb-1 rounded-md border border-[#DCDCDC] bg-white p-1">
              <div className="cursor-pointer" onClick={handleToggleTwo}>
                <h6 className="flex items-center text-xs font-bold">
                  <i className="fas fa-paperclip p-2 pl-4"></i>
                  Attached Files
                  <i
                    className={`fas fa-chevron-${toggleTwo ? "up" : "down"} fa-xs ml-auto pr-4`}
                  ></i>
                </h6>
              </div>
              <div className={` ${toggleTwo ? "block" : "hidden"} p-2 pb-6`}>
                <div className="card-body">
                  <FileCard
                    fileName={"Admin-A.zip"}
                    fileSize={"12.5 MB"}
                    iconClassName={"fas fa-file-lines"}
                  />
                  <FileCard
                    fileName={"User-A.zip"}
                    fileSize={"122 MB"}
                    iconClassName={"fas fa-file-image"}
                  />
                  <FileCard
                    fileName={"User-A.zip"}
                    fileSize={"122 MB"}
                    iconClassName={"fas fa-file-image"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
