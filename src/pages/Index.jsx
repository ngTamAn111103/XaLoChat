import { NavbarItem } from "../components_Index/side-menu/NavbarItem";
import Logo from "/public/images/logo.e41f6087382055646c1c02d0a63583d5.svg";
import { useEffect, useRef, useState } from "react";
import { Setting } from "../components_Index/Settings";

import FriendList from "../components_Index/chat-leftsidebar/FriendList";
import { NavbarLeft } from "../components_Index/NavbarLeft";
import Profile from "../components_Index/Profile";
import GroupList from "../components_Index/GroupList";
import ContactList from "../components_Index/Contacts/ContactList";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate, Outlet } from "react-router-dom";
import ChatContainer from "../components_Index/ChatContainer";
import CallModal from "../components_Index/side-menu/Modal";
import { fakeFriendList, fakeMessages, userProfile, profileDetails,profileSetting } from "./Test";
import Toast from "../general_component/Toast";
import { SearchFriend } from "../components_Index/search/SearchFriend";


 
export function Index() {
  const [showUserInfo, setUserInfo] = useState(false); //ấn để hiện phần thông tin user ẩn
  const [selectedButton, setSelectedButton] = useState("message"); //ẩn để chọn 1 bên của navbar
  const [clickedChat, setClickedChat] = useState(-1); //ấn để chọn tin nhắn và update vị trí được ấn
  const [showChat, setShowChat] = useState(fakeMessages["1"]);
  const [showFriendList, setshowFriendList] = useState(fakeFriendList);
  const [showSearch, setShowSearch] = useState(false); // hiển thị text tìm kiếm
  const searchRef = useRef(null); // useRef
  const chatRef = useRef(null)
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

  useEffect(() => {
    //setshowChat sau khi an vao 1 nguoi
    if (fakeMessages[`${clickedChat + 1}`]) {
      setShowChat(fakeMessages[`${clickedChat + 1}`]);
    } else {
      setShowChat("");
    }
    if (chatRef.current.classList.contains("left-full")) { 
       chatRef.current.classList.remove("left-full")
       chatRef.current.classList.add("left-0")
    }else { 
      chatRef.current.classList.add("left-full")
    }
  
  }, [clickedChat]);

  function handelBackButton() { 
    if (chatRef.current.classList.contains("left-full")) { 
      chatRef.current.classList.remove("left-full")
      chatRef.current.classList.add("left-0")
   }else { 
     chatRef.current.classList.add("left-full")
   }
  }
  // mặc định là hiện lên phần chat
  return (
    <>


      {/* Toàn bộ trang index */}
      <div className="layout-wrapper box-border flex bg-[#f5f7fb]">
        {/* Thanh navbar bên trái */}
        {/* <Toast status="success" content="lorem abc"></Toast> */}
        <Toast status="alert" content="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"></Toast>

        <NavbarLeft
          selectedButton={selectedButton}
          setSelectedButton={setSelectedButton}
        />

        {/* Thanh ở giữa*/}
        <div className="me-lg-1 me-1 h-full w-full bg-[#f5f7fb] drop-shadow-lg lg:min-w-[380px] lg:max-w-[380px]	">
          <div className="contain ">
              <Profile
              isActive={selectedButton === "user"}
              userProfile={userProfile}
              profileDetails={profileDetails}
            />

            <FriendList
              isActive={selectedButton == "message" ? true : false}
              clickedButton={clickedChat}
              setClickedButton={setClickedChat}
              friendlist={showFriendList}
            ></FriendList>
            <GroupList isActive={selectedButton == "group" ? true : false} />
            <ContactList
              isActive={selectedButton == "contacts" ? true : false}/> 
            <Setting
              isActive={selectedButton === "setting"}
              profileSetting={profileSetting}
              profileDetails={profileDetails}/>
            <SearchFriend
                  isActive={selectedButton == "plus" ? true : false}
                  clickedButton={clickedChat}
                  setClickedButton={setClickedChat}
                  friendlist={showFriendList}
                  />
          </div>
        </div>

        {/* Phần chat + thông tin cá nhân  */}

        <div ref={chatRef} className="user-chat fixed z-10 transition-all duration-300 left-full lg:left-0 right-0 h-screen flex-1 lg:relative lg:z-0 lg:block">
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
                          {/* an de tro ve */}
                          <div className="flex items-center">
                            <div className="block lg:hidden px-2" onClick={()=>handelBackButton()}>
                             <i className="fa-solid fa-angle-left"></i>
                            </div>
                            <div className="ml-0 mr-4">
                              <img
                                src={`images/${showFriendList[clickedChat]?.avatar}`}
                                alt=""
                                className="h-10 w-10 rounded-full"
                              />
                            </div>
                            <div className="flex-grow overflow-hidden">
                              <h5 className="mb-0 overflow-hidden text-ellipsis whitespace-nowrap text-base font-semibold text-bs-dark">
                                <a
                                  href="#"
                                  className="decoration-0 outline-none sm:hidden"
                                >
                                  {showFriendList[clickedChat]?.name.length > 14 ? showFriendList[clickedChat]?.name.substring(0,17) + "..." : showFriendList[clickedChat]?.name.substring(0,17)}
                                </a>
                                <a
                                  href="#"
                                  className="decoration-0 outline-none hidden sm:inline-block"
                                >
                                 {showFriendList[clickedChat]?.name}
                                </a>
                                <i className="fa-solid fa-circle ml-2 text-[10px] text-bs-success-rgb"></i>
                              </h5>
                            </div>
                          </div>
                        </div>
                        {/* Tìm kiếm, call, video, info, three dots */}
                        <div className="col-4 col-sm-8 ">
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
                            <li className="mr-7 hidden min-[450px]:inline-block">
                              <i
                                className="fa-solid fa-phone"
                                onClick={() => setShowModal(true)}
                              ></i>
                              {/* Component CallModal */}
                              <CallModal avatarSrc={"./images/avt.png"} name={"Patricia Smith"}></CallModal>
                            </li>
                            {/*======================= video ===============  */}
                            <li className="mr-7 hidden min-[450px]:inline-block">
                              <i
                                className="fa-solid fa-video"
                                onClick={() => setShowModal(true)}
                              ></i>
                              {/* Component CallModal  */}
                              <CallModal avatarSrc={"./images/avt.png"} name={"Patricia Smith"}></CallModal>
                            </li>
                            {/*======================= user ===============  */}
                            <li
                              className="mr-7 hidden sm:inline-block"
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
                                        className="block lg:hidden w-full px-4 py-2 text-left text-sm hover:bg-[#F5F5F5]"
                                        onClick={() => {
                                          setUserInfo(true);
                                        }}
                                      >
                                        View profile
                                        <i className="fa-solid fa-user float-end p-1"></i>
                                      </button>
                                      <button
                                        className="block w-full px-4 py-2 text-left text-sm hover:bg-[#F5F5F5]"
                                        onClick={() => {}}
                                      >
                                        Archive
                                        <i className="fa-solid fa-box-archive float-end p-1"></i>
                                      </button>
                                      <button
                                        className="block w-full px-4 py-2 text-left text-sm hover:bg-[#F5F5F5]"
                                        onClick={() => {}}
                                      >
                                        Muted
                                        <i className="fa-solid fa-volume-xmark float-end p-1"></i>
                                      </button>
                                      <button
                                        className="block w-full px-4 py-2 text-left text-sm hover:bg-[#F5F5F5]"
                                        onClick={() => {}}
                                      >
                                        Delete
                                        <i className="fa-solid fa-trash float-end p-1"></i>
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
                    <ChatContainer
                      messages={showChat}
                      friendInfo={showFriendList[clickedChat]}
                    />
                  </div>
                  </div>
              </div>
            </div>
            {/* phần thông tin user được ẩn đi */}
            <div

              className={`fixed z-[11] left-0 right-0 transition-all bg-white lg:static user-profile-sidebar ms-1 h-full basis-[23.5rem] overflow-auto ${showUserInfo ? "block" : "hidden"}`}

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
