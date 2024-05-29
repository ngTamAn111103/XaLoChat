import React, { useState } from "react";
import { Header } from "./chat-leftsidebar/Header";
import UserSetting from "./Settings/UserSetting";
import ProfileInfo from "./ProfileInfo";
import DropdownMenu from "./Settings/DropdownProFile";
import ToggleSwitch from "./Settings/ToggleSwitch";
export function Setting({isActive}) {
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
      <div className={isActive ? "block": "hidden"}>
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
                    className="flex items-center rounded bg-[#E6EBF5] px-3 py-1 text-xs hover:bg-[#C4C8D0]"
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
                <div className="py-3 pl-3">
                  <div className="flex items-center">
                    <div className="flex-grow overflow-hidden ">
                      <h5 className="text-xs font-medium">Profile photo</h5>
                    </div>
                    {/*Component tại đây*/}
                    <div className="pr-3">
                      <DropdownMenu />
                    </div>
                  </div>
                </div>

                <div className="border-t border-[#DCDCDC] py-3 pl-3">
                  <div className="flex items-center">
                    <div className="flex-grow overflow-hidden">
                      <h5 className="text-xs font-medium">Last seen</h5>
                    </div >
                    {/*Component tại đây*/}
                    <div className="pr-4">
                    <ToggleSwitch />
                    </div>
                  </div>
                </div>

                <div className="border-t border-[#DCDCDC] py-3 pl-3">
                  <div className="flex items-center">
                    <div className="flex-grow overflow-hidden">
                      <h5 className="text-xs font-medium">Status</h5>
                    </div>
                    {/*Component tại đây*/}
                    <div className="pr-3">
                      <DropdownMenu />
                    </div>
                  </div>
                </div>

                <div className="border-t border-[#DCDCDC] py-3 pl-3">
                  <div className="flex items-center">
                    <div className="flex-grow overflow-hidden">
                      <h5 className="text-xs font-medium">Read receipts</h5>
                    </div>
                    {/*Component tại đây*/}
                    <div className="pr-4">
                    <ToggleSwitch />
                    </div>
                  </div>
                </div>

                <div className="border-t border-[#DCDCDC] py-3 pl-3">
                  <div className="flex items-center">
                    <div className="flex-grow overflow-hidden">
                      <h5 className="text-xs font-medium">Groups</h5>
                    </div>
                    {/*Component tại đây*/}
                    <div className="pr-3">
                      <DropdownMenu />
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
                <div className="mt-4 pb-4 pl-5">
                  <div className="flex items-center">
                    <div className="flex-grow overflow-hidden">
                      <h5 className="mb-0 text-xs font-medium">
                        Show security notification
                      </h5>
                    </div>
                    {/*Component tại đây*/}
                    <div className="pr-4">
                    <ToggleSwitch />
                    </div>
                  </div>
                </div>
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
              <div className="mt-4 pl-5">
                <div className="card-body font-medium">
                  <div className="py-3">
                    <h5 className="mb-0 text-xs">
                      <a href="/dashboard" className="text-blue-500">
                        FAQs
                      </a>
                    </h5>
                  </div>
                  <div className="border-t border-[#DCDCDC] py-3">
                    <h5 className="mb-0 text-xs">
                      <a href="/dashboard" className="text-blue-500">
                        Contact
                      </a>
                    </h5>
                  </div>
                  <div className="border-t border-[#DCDCDC] py-3">
                    <h5 className="mb-0 text-xs">
                      <a href="/dashboard" className="text-blue-500">
                        Terms & Privacy policy
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
