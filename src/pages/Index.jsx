import { NavbarItem } from "../components_Index/side-menu/NavbarItem";
import Logo from "/public/images/logo.e41f6087382055646c1c02d0a63583d5.svg";
import { useEffect, useRef, useState } from "react";
import { Setting } from "../components_Index/Settings";

import FriendList from "../components_Index/chat-leftsidebar/FriendList";
import { NavbarLeft } from "../components_Index/NavbarLeft";
import Profile from "../components_Index/Profile";
import GroupList from "../components_Index/GroupList";
import ContactList from "../components_Index/Contacts/ContactList";
import ChatContainer from "../components_Index/ChatContainer";
import fakeDate from "./Test";
import CallModal from "../components_Index/side-menu/Modal";

// Tạo mảng userProfile
const userProfile = {
  avatarSrc: "./images/avt.png",
  name: "Patricia Smith",
  activityStatus: "Active",
  description:
    "If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual.",
};

// Tạo mảng profileDetails
const profileDetails = [
  { label: "Name", value: "Patricia Smith" },
  { label: "Email", value: "adc@123.com" },
  { label: "Time", value: "11:40 AM" },
  { label: "Location", value: "California, USA" },
];

// Tạo mảng profileSetting
const profileSetting = {
  avatarSrc: "./images/avt.png",
  name: "Patricia Smith",
};

export function Index() {
  const [showUserInfo, setUserInfo] = useState(false); //ấn để hiện phần thông tin user ẩn
  const [selectedButton, setSelectedButton] = useState("message"); //ẩn để chọn 1 bên của navbar
  const [showChat, setShowChat] = useState(fakeDate);
  const [showSearch, setShowSearch] = useState(false); // hiển thị text tìm kiếm
  const searchRef = useRef(null); // useRef

  // Dropdown state
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Thêm sựu kiện khi click ra ngoài của thanh tiềm kiếm
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchRef, dropdownRef]);

  // mặc định là hiện lên phần chat
  return (
    <>
      {/* Toàn bộ trang index */}
      <div className="layout-wrapper box-border flex bg-[#f5f7fb]">
        {/* Thanh navbar bên trái */}
        <NavbarLeft
          selectedButton={selectedButton}
          setSelectedButton={setSelectedButton}
        />

        {/* Thanh ở giữa*/}
        <div className="me-lg-1 me-1 min-w-0 max-w-0 bg-[#f5f7fb] drop-shadow-lg md:min-w-[380px] md:max-w-[380px]">
          <div className="contain">
            <Profile
              isActive={selectedButton === "user"}
              userProfile={userProfile}
              profileDetails={profileDetails}
            />
            <FriendList isActive={selectedButton === "message"} />
            <GroupList isActive={selectedButton === "group"} />
            <ContactList isActive={selectedButton === "contacts"} />
            <Setting
              isActive={selectedButton === "setting"}
              profileSetting={profileSetting}
              profileDetails={profileDetails}
            />
          </div>
        </div>

        {/* Phần chat + thông tin cá nhân  */}
        <div className="user-chat relative h-screen flex-1">
          <div className="flex h-full flex-row">
            {/* phần chat */}
            <div className="userchat h-full flex-1 bg-text-danger">
              <div className="user-chat h-screen flex-1 overflow-hidden bg-white">
                <div className="flex h-full flex-row">
                  {/* phần chat */}
                  <div className="userchat relative w-full overflow-hidden">
                    {/* Header: Thông tin người dùng */}
                    <div className="border-b border-bs-border-color p-6">
                      <div className="flex flex-wrap items-center justify-between">
                        {/* Avt + Tên */}
                        <div className="col-8 col-sm-4">
                          <div className="flex items-center">
                            <div className="ml-0 mr-4">
                              <img
                                src="/images/422673745_1431738810981438_8560367173620224784_n.jpg"
                                alt=""
                                className="h-10 w-10 rounded-full"
                              />
                            </div>
                            <div className="flex-grow overflow-hidden">
                              <h5 className="mb-0 overflow-hidden text-ellipsis whitespace-nowrap text-base font-semibold text-bs-dark">
                                <a
                                  href="#"
                                  className="decoration-0 outline-none"
                                >
                                  Sử Thị Thuỷ Tiên
                                </a>
                                <i className="fa-solid fa-circle ml-2 text-[10px] text-bs-success-rgb"></i>
                              </h5>
                            </div>
                          </div>
                        </div>
                        {/* Tìm kiếm, call, video, info, three dots */}
                        <div className="col-4 col-sm-8">
                          <ul className="user-chat-nav chat-option mb-0 mt-0 list-none pl-0">
                            {/* ============== Tìm kiếm ================*/}
                            <li className="mr-7 inline-block">
                              <div className="relative" ref={searchRef}>
                                <button
                                  type="button"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  className="btn bg-transparent border-none"
                                  onClick={() => setShowSearch(!showSearch)} // toggle tìm kiếm
                                >
                                  <i className="fa-solid fa-magnifying-glass"></i>
                                </button>
                                {showSearch && (
                                  <div
                                    tabIndex="-1"
                                    role="menu"
                                    aria-hidden="true"
                                    className="absolute right-0 mt-1 w-64 rounded-md border border-[#DCDCDC] bg-white p-0 shadow-lg"
                                  >
                                    <div className="p-2">
                                      <input
                                        placeholder="Search.."
                                        type="text"
                                        className="form-control w-60 rounded-md bg-[#E6EBF5] p-2 focus:outline-none"
                                      />
                                    </div>
                                  </div>
                                )}
                              </div>
                            </li>
                            {/*======================= call ===============  */}
                            <li className="mr-7 inline-block">
                              <i
                                className="fa-solid fa-phone"
                                onClick={() => setShowModal(true)}
                              ></i>
                              {/* Component CallModal */}
                              <CallModal avatarSrc={"./images/avt.png"} name={"Patricia Smith"}></CallModal>
                            </li>
                            {/*======================= video ===============  */}
                            <li className="mr-7 inline-block">
                              <i
                                className="fa-solid fa-video"
                                onClick={() => setShowModal(true)}
                              ></i>
                              {/* Component CallModal  */}
                              <CallModal avatarSrc={"./images/avt.png"} name={"Patricia Smith"}></CallModal>
                            </li>
                            {/*======================= user ===============  */}
                            <li
                              className="mr-7 inline-block"
                              onClick={() => {
                                setUserInfo(true);
                              }}
                            >
                              <i className="fa-solid fa-user"></i>
                            </li>
                            {/*======================= three dots ===============  */}
                            <li className="mr-7 inline-block">
                              <div className="relative" ref={dropdownRef}>
                                <button
                                  className="font-size-18 text-muted"
                                  id="dropdownMenuButton"
                                  onClick={() => setShowDropdown(!showDropdown)}
                                >
                                  <i className="fa-solid fa-ellipsis-vertical"></i>
                                </button>
                                {showDropdown && (
                                  <div className="absolute right-0 mt-2 w-40 rounded-md bg-white text-[#495057] shadow-lg">
                                    <div className="py-1">
                                      <button
                                        className="block w-full px-4 py-2 text-left text-sm hover:bg-[#F5F5F5]"
                                        onClick={() => {}}
                                      >
                                        Archive
                                        <i class="fa-solid fa-box-archive float-end p-1"></i>
                                      </button>
                                      <button
                                        className="block w-full px-4 py-2 text-left text-sm hover:bg-[#F5F5F5]"
                                        onClick={() => {}}
                                      >
                                        Muted
                                        <i class="fa-solid fa-volume-xmark float-end p-1"></i>
                                      </button>
                                      <button
                                        className="block w-full px-4 py-2 text-left text-sm hover:bg-[#F5F5F5]"
                                        onClick={() => {}}
                                      >
                                        Delete
                                        <i class="fa-solid fa-trash float-end p-1"></i>
                                      </button>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* Chat container */}
                    <ChatContainer messages={showChat} />
                  </div>
                  {/* phần thông tin user được ẩn đi */}
                  <div className="user-profile-sidebar ms-1 hidden h-full basis-[23.5rem] bg-primary"></div>
                </div>
              </div>
            </div>
            {/* phần thông tin user được ẩn đi */}
            <div
              className={`user-profile-sidebar ms-1 h-full basis-[23.5rem] overflow-auto transition-all ${
                showUserInfo ? "block" : "hidden"
              }`}
            >
              <Profile
                isHeader={false}
                isActive={true}
                extend={
                  <div
                    className="button-cancel px-6 pb-2 pt-6 text-right text-xs text-[#7a7f9a]"
                    onClick={() => {
                      setUserInfo(!showUserInfo);
                    }}
                  >
                    <i className="fa-solid fa-x font-extrabold"></i>
                  </div>
                }
                userProfile={userProfile}
                profileDetails={profileDetails}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
