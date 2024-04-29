import { NavbarItem } from "../components_Index/side-menu/NavbarItem";
import Logo from "/public/images/logo.e41f6087382055646c1c02d0a63583d5.svg";
import { useState } from "react";
import { Setting } from "../components_Index/Settings";


import FriendList from "../components_Index/chat-leftsidebar/FriendList";
import { NavbarLeft } from "../components_Index/NavbarLeft";
import Profile from "../components_Index/Profile";
import GroupList from "../components_Index/GroupList";
import ContactList from "../components_Index/Contacts/ContactList";

export function Index() {
  const [showUserInfo, setUserInfo] = useState(false)
  return (
    <>
      {/* Toàn bộ trang index */}
      <div className="layout-wrapper box-border flex">
        {/* Thanh navbar bên trái */}

        <NavbarLeft />


        {/* Thanh ở giữa*/}
        <div className="me-lg-1 me-1 min-w-0 max-w-0 bg-[#f5f7fb] drop-shadow-lg md:min-w-[380px] md:max-w-[380px]	">
          <div className="contain ">
            {/* <Profile /> */}
            {/* <FriendList></FriendList> */}
            {/* <GroupList/> */}
            <ContactList/>
               <Setting/>
          </div>

        </div>

        {/* Phần chat + thông tin cá nhân  */}
      <div className="user-chat flex-1 h-screen relative">
        <div className="flex flex-row h-full">
          {/* phần chat */}
          <div className="userchat h-full flex-1 bg-text-danger">

          </div>
          {/* phần thông tin user được ẩn đi */}
          <div className={`user-profile-sidebar basis-[23.5rem] h-full transition-all overflow-auto ms-1 ${showUserInfo? "block" : "hidden"}`}>
            <Profile isHeader={false} extend={
            <div className="button-cancel px-6 pt-6 pb-2 text-right text-xs text-[#7a7f9a]" 
              onClick={()=> {
                setUserInfo(!showUserInfo)  
               }}
            >
              <i class="fa-solid fa-x font-extrabold"></i>
              </div>}/>
            
          </div>
          <button className="test-btn bottom-[30px] absolute right-[50%] bg-primary p-4 rounded-lg text-white" onClick={(e)=>{
            setUserInfo(!showUserInfo)
          }}>
            Click to show
          </button>
        </div>
      </div>

      </div>
    </>
  );
}


