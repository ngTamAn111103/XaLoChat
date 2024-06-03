import React, { useState } from "react";
import { Header } from "./chat-leftsidebar/Header";
import UserSetting from "./Settings/UserSetting";
import ProfileInfo from "./ProfileInfo";
import DropdownMenu from "./Settings/DropdownProFile";
import ToggleSwitch from "./Settings/ToggleSwitch";
import { useUserStore } from "../lib/userStore";
import { ToastContainer } from "react-toastify";

export function Setting({ isActive, profileSetting, profileDetails}) {
  // State hooks để quản lý toggle và dropdown
  const [toggleOne, setToggleOne] = useState(false);
  const [toggleTwo, setToggleTwo] = useState(false);
  const [toggleThree, setToggleThree] = useState(false);
  const [toggleFour, setToggleFour] = useState(false);

  const [editedName, setEditedName] = useState("");

  const handleEditClick = () => {
    setEditedName(currentUser.Fullname);
  };

  const handleSaveClick = () => {
    // Cập nhật thông tin người dùng ở đây nếu cần
    setEditedName(""); // Đặt lại giá trị chỉnh sửa
  };

  // Thông tin của người dùng
  const { currentUser } = useUserStore();

  // Xử lý toggle cho các card
  const handleToggle = (toggleSetter, otherToggles) => {
    toggleSetter((prev) => !prev);
    otherToggles.forEach((setter) => setter(false));
  };
  
  return (
    <>
      <div className={isActive ? "block" : "hidden"}>
        
        <Header title={"Settings"} />
        {/* <ToastContainer/> */}
        {/* Component User Profile */}
        <UserSetting
          avatarSrc={currentUser.Avatar || "./images/avt.png"}
          name={currentUser.Fullname}
        />
        <div className="user-profile-desc h-[calc(100vh_-_300px)] max-h-full overflow-auto scroll-smooth p-4 focus:scroll-auto">
          <div className="custom-accordion">
            {/* Card Personal Info*/}
            <div className="card mb-2 rounded border border-[#DCDCDC] bg-white">
              <div
                className="cursor-pointer bg-[#49505708] p-1"
                onClick={() =>
                  handleToggle(setToggleOne, [
                    setToggleTwo,
                    setToggleThree,
                    setToggleFour,
                  ])
                }
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
                  {!editedName && ( // ản nút edit
                    <button
                      type="button"
                      className="flex items-center rounded bg-[#E6EBF5] px-3 py-1 text-xs hover:bg-[#C4C8D0]"
                      onClick={handleEditClick}
                    >
                      <i className="fa-solid fa-pen pr-2"></i>
                      Edit
                    </button>)}
                  </div>
                  <div className="mt-4 pl-4">
                    <ProfileInfo
                      label="Name"
                      value={editedName || currentUser.Fullname} // lưu tên người dùng khi họ đang chỉnh sửa
                      isEditing={!!editedName} // toán tử boolean
                      onSave={handleSaveClick} //lưu
                    />
                    <ProfileInfo
                      label="Email"
                      value={currentUser.Email}
                      isEditing={false}
                      onSave={() => {}}
                    />
                    <ProfileInfo
                      label="Time"
                      value={currentUser.UpdatedAt}
                      isEditing={false}
                      onSave={() => {}}
                    />
                    <ProfileInfo
                      label="Location"
                      value={currentUser.Location}
                      isEditing={false}
                      onSave={() => {}}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/*Card Privacy*/}
            <div className="card mb-2 rounded border border-[#DCDCDC] bg-white">
              <div
                className="cursor-pointer bg-[#49505708] p-1"
                onClick={() =>
                  handleToggle(setToggleTwo, [
                    setToggleOne,
                    setToggleThree,
                    setToggleFour,
                  ])
                }
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
                onClick={() =>
                  handleToggle(setToggleThree, [
                    setToggleOne,
                    setToggleTwo,
                    setToggleFour,
                  ])
                }
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
                onClick={() =>
                  handleToggle(setToggleFour, [
                    setToggleOne,
                    setToggleTwo,
                    setToggleThree,
                  ])
                }
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
