import React, { useState } from "react";
import { Header } from "./chat-leftsidebar/Header";
import UserSetting from "./Settings/UserSetting";
import ProfileInfo from "./ProfileInfo";
export function Setting() {
  // State hooks để quản lý toggle và dropdown
  const [toggleOne, setToggleOne] = useState(false);
  const [toggleTwo, setToggleTwo] = useState(false);
  const [toggleThree, setToggleThree] = useState(false);
  const [toggleFour, setToggleFour] = useState(false);

  // Xử lý toggle cho card 1
  const handleToggleOne = () => {
    setToggleOne(!toggleOne);
    // Đóng các card khác nếu đang mở
    if (toggleTwo) {
      setToggleTwo(false);
    }
    if (toggleThree) {
      setToggleThree(false);
    }
    if (toggleFour) {
      setToggleFour(false);
    }
  };

  // Xử lý toggle cho card 2
  const handleToggleTwo = () => {
    setToggleTwo(!toggleTwo);
    // Đóng các card khác nếu đang mở
    if (toggleOne) {
      setToggleOne(false);
    }
    if (toggleThree) {
      setToggleThree(false);
    }
    if (toggleFour) {
      setToggleFour(false);
    }
  };

  // Xử lý toggle cho card 3
  const handleToggleThree = () => {
    setToggleThree(!toggleThree);
    // Đóng các card khác nếu đang mở
    if (toggleOne) {
      setToggleOne(false);
    }
    if (toggleTwo) {
      setToggleTwo(false);
    }
    if (toggleFour) {
      setToggleFour(false);
    }
  };

  // Xử lý toggle cho card 4
  const handleToggleFour = () => {
    setToggleFour(!toggleFour);
    // Đóng các card khác nếu đang mở
    if (toggleOne) {
      setToggleOne(false);
    }
    if (toggleTwo) {
      setToggleTwo(false);
    }
    if (toggleThree) {
      setToggleThree(false);
    }
  };

  return (
    <>
      <Header title={"Settings"} />

      {/* Component User Profile */}
      <UserSetting avatarSrc={"./images/avt.png"} name={"Patricia Smith"} />
      <div className="user-profile-desc p-4">
        <div className="custom-accordion">
          {/* Card Personal Info*/}
          <div className="card mb-2 rounded border border-[#DCDCDC] bg-white">
            <div
              className="cursor-pointer bg-[#49505708] p-1"
              onClick={handleToggleOne}
            >
              <h6 className="ml-2 flex items-center p-2 text-xs font-bold ">
                Personal Info
                {/* Thêm icon chevron cho toggle */}
                <i
                  className={`fas fa-chevron-${toggleOne ? "up" : "down"} fa-xs ml-auto pr-2`}
                ></i>
              </h6>
            </div>
            <div className={` ${toggleOne ? "block" : "hidden"}`}>
              <div className="card-body">
                <div className="float-right pr-5">
                  <button
                    type="button"
                    className="flex items-center rounded bg-[#E6EBF5] px-3 py-1 text-xs"
                  >
                    <i className="fa-solid fa-pen pr-2">_</i>
                    Edit
                  </button>
                </div>

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
          {/*Card Privacy*/}
          <div className="card mb-2 rounded border border-[#DCDCDC] bg-white">
            <div
              className="cursor-pointer bg-[#49505708] p-1"
              onClick={handleToggleTwo}
            >
              <h6 className="ml-2 flex items-center p-2 text-xs font-bold ">
                Privacy
                {/* Thêm icon chevron cho toggle */}
                <i
                  className={`fas fa-chevron-${toggleTwo ? "up" : "down"} fa-xs ml-auto pr-2`}
                ></i>
              </h6>
            </div>
            <div className={` ${toggleTwo ? "block" : "hidden"} p-2 pb-6`}>
              <div className="card-body">
                <div className="pl-3">
                  <div className="flex items-center">
                    <div className="flex-grow overflow-hidden">
                      <h5 className="text-xs font-medium">Profile photo</h5>
                    </div>
                    <div className="relative ms-2">
                      <button
                        aria-haspopup="true"
                        className="btn btn-light btn-sm w-20 text-xs sm:w-24 sm:text-sm md:w-28 md:text-base lg:w-32 lg:text-lg xl:w-36 xl:text-xl"
                      >
                        Everyone <i className="fa fa-chevron-down fa-xs"></i>
                      </button>
                      <div
                        tabIndex="-1"
                        role="menu"
                        aria-hidden="true"
                        className="border-gray-200 absolute right-0 z-10 mt-2 hidden w-36 rounded border bg-white shadow-md"
                      >
                        <button
                          tabIndex="0"
                          role="menuitem"
                          className="text-gray-800 hover:bg-gray-100 focus:bg-gray-100 text-2xs block w-full px-4 py-2 focus:outline-none"
                        >
                          Everyone
                        </button>
                        <button
                          tabIndex="0"
                          role="menuitem"
                          className="text-gray-800 hover:bg-gray-100 focus:bg-gray-100 block w-full px-4 py-2 text-sm focus:outline-none"
                        >
                          Selected
                        </button>
                        <button
                          tabIndex="0"
                          role="menuitem"
                          className="text-gray-800 hover:bg-gray-100 focus:bg-gray-100 block w-full px-4 py-2 text-sm focus:outline-none"
                        >
                          Nobody
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Card Security*/}
          <div className="card mb-2 rounded border border-[#DCDCDC] bg-white">
            <div
              className="cursor-pointer bg-[#49505708] p-1"
              onClick={handleToggleThree}
            >
              <h6 className="ml-2 flex items-center p-2 text-xs font-bold ">
                Security
                <i
                  className={`fas fa-chevron-${toggleThree ? "up" : "down"} fa-xs ml-auto pr-2`}
                ></i>
              </h6>
            </div>
            <div className={` ${toggleThree ? "block" : "hidden"}`}>
              <div className="card-body">
                <div className="mt-4 pl-4">{/* Thêm nội dung của card */}</div>
              </div>
            </div>
          </div>

          {/*Card Help*/}
          <div className="card mb-2 rounded border border-[#DCDCDC] bg-white">
            <div
              className="cursor-pointer bg-[#49505708] p-1"
              onClick={handleToggleFour}
            >
              <h6 className="ml-2 flex items-center p-2 text-xs font-bold ">
                Help
                <i
                  className={`fas fa-chevron-${toggleFour ? "up" : "down"} fa-xs ml-auto pr-2`}
                ></i>
              </h6>
            </div>
            <div className={` ${toggleFour ? "block" : "hidden"}`}>
              <div className="card-body">
                <div className="mt-4 pl-4">{/* Thêm nội dung của card */}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
