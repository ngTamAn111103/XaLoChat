import React, { useState, useRef, useEffect } from "react";
import ProfileInfo from "./ProfileInfo";
import UserProfile from "./UserProfile";
import FileCard from "./FileCard";
import { Header } from "./chat-leftsidebar/Header";


export function Profile({isHeader = true, extend}) {
  // State hooks để quản lý toggle và dropdown
  const [toggleOne, setToggleOne] = useState(false);
  const [toggleTwo, setToggleTwo] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Ref để xác định click ngoài dropdown
  const dropdownRef = useRef(null);

  // Xử lý toggle cho card 1
  const handleToggleOne = () => {
    setToggleOne(!toggleOne);
    // Đóng card 2 nếu đang mở
    if (toggleTwo) {
      setToggleTwo(false);
    }
  };

  // Xử lý toggle cho card 2
  const handleToggleTwo = () => {
    setToggleTwo(!toggleTwo);
    // Đóng card 1 nếu đang mở
    if (toggleOne) {
      setToggleOne(false);
    }
  };

  // Xử lý dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Xử lý click ngoài dropdown để đóng dropdown
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  // Sử dụng useEffect để thêm và loại bỏ sự kiện click ngoài dropdown
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <>
      {/*Thêm component Header vào nếu không truyền isHeader = false*/}
      {isHeader &&  <Header
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
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 rounded-md bg-white shadow-lg">
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
              )}
            </div>
          </div>
        }
      />}
      {/* thêm phần extend vào */}
      {
        extend
      }
      {/* Component User Profile */}
      <UserProfile
        avatarSrc="./images/avt.png"
        name={"Patricia Smith"}
        activityStatus={"Active"}
      />
      <div className="user-profile-desc p-4">
        <div className="text-muted">
          {/* Thêm ProfileInfo với prop value */}
          <ProfileInfo
            p="If several languages coalesce, the grammar of the resulting 
          language is more simple and regular than that of the individual."
          />
        </div>
        <div className="custom-accordion">
          {/* First Card */}
          <div className="card mb-2 rounded-md border border-[#DCDCDC] bg-white p-1">
            <div className="cursor-pointer" onClick={handleToggleOne}>
              <h6 className="flex items-center text-xs font-bold">
                <i className="far fa-user p-2 pl-4"></i>
                About
                {/* Thêm icon chevron cho toggle */}
                <i
                  className={`fas fa-chevron-${toggleOne ? "up" : "down"} fa-xs ml-auto pr-4`}
                ></i>
              </h6>
            </div>
            <div className={` ${toggleOne ? "block" : "hidden"}`}>
              <div className="card-body">
                <div className="mt-4 pl-4">
                  {/* Thêm thông tin người dùng */}
                  <ProfileInfo label={"Name"} value={"Patricia Smith"} />
                  <ProfileInfo label={"Email"} value={"adc@123.com"} />
                  <ProfileInfo label={"Time"} value={"11:40 AM"} />
                  <ProfileInfo label={"Location"} value={"California, USA"} />
                </div>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className=" mb-1 rounded-md border border-[#DCDCDC] bg-white p-1">
            <div className="cursor-pointer" onClick={handleToggleTwo}>
              <h6 className="flex items-center text-xs font-bold">
                <i className="fas fa-paperclip p-2 pl-4"></i>
                Attached Files
                {/* Thêm icon chevron cho toggle */}
                <i
                  className={`fas fa-chevron-${toggleTwo ? "up" : "down"} fa-xs ml-auto pr-4`}
                ></i>
              </h6>
            </div>
            <div className={` ${toggleTwo ? "block" : "hidden"} p-2 pb-6`}>
              <div className="card-body">
                {/* Thêm FileCard với thông tin tập tin */}
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
    </>
  );
}

export default Profile;
