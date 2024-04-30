import { NavbarItem } from "../components_Index/side-menu/NavbarItem";
import Logo from "/public/images/logo.e41f6087382055646c1c02d0a63583d5.svg";

import { Setting } from "../components_Index/Settings";

import FriendList from "../components_Index/chat-leftsidebar/FriendList";
import { NavbarLeft } from "../components_Index/NavbarLeft";
import Profile from "../components_Index/Profile";
import GroupList from "../components_Index/GroupList";
import ContactList from "../components_Index/Contacts/ContactList";

export function Index() {
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
            <FriendList />
            {/* <GroupList/> */}
            {/* <ContactList/> */}
            {/* <Setting/> */}
          </div>
        </div>

        {/* Phần chat + thông tin cá nhân  */}
        <div className="user-chat h-screen flex-1 overflow-hidden bg-white">
          <div className="flex h-full flex-row">
            {/* phần chat */}
            <div className="userchat relative w-full overflow-hidden">
              {/* Header: Thông tin người dùng */}
              <div className="border-b p-6 ">
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
                          <a href="#" className="decoration-0 outline-none	">
                            Sử Thị Thuỷ Tiên
                          </a>
                          <i class="fa-solid fa-circle text-bs-success-rgb ml-2 text-[10px]"></i>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 col-sm-8  ">
                    <ul className="user-chat-nav mb-0 mt-0 list-none pl-0 ">
                      <li className="mr-5 inline-block">
                        <i class="fa-solid fa-magnifying-glass"></i>
                      </li>
                      <li className="mr-5 inline-block">
                        <i class="fa-solid fa-phone"></i>
                      </li>
                      <li className="mr-5 inline-block">
                        <i class="fa-solid fa-video"></i>
                      </li>
                      <li className="mr-5 inline-block">
                        <i class="fa-solid fa-user"></i>
                      </li>
                      <li className="mr-5 inline-block">
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                      </li>
                    </ul>
                  </div>
                  {/* Tìm kiếm, call, video, info, three dots */}
                </div>
              </div>
              {/* Nội dung chat */}

              {/*  Input */}
            </div>
            {/* phần thông tin user được ẩn đi */}
            <div className="user-profile-sidebar ms-1 hidden h-full basis-[23.5rem] bg-primary"></div>
          </div>
        </div>
      </div>
    </>
  );
}
