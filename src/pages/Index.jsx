import { NavbarItem } from "../components_Index/side-menu/NavbarItem";
import Logo from "/public/images/logo.e41f6087382055646c1c02d0a63583d5.svg";

import { Setting } from "../components_Index/Settings";

import FriendList from "../components_Index/chat-leftsidebar/FriendList";
import { NavbarLeft } from "../components_Index/NavbarLeft";
import Profile from "../components_Index/Profile";
import GroupList from "../components_Index/GroupList";
import ContactList from "../components_Index/Contacts/ContactList";
import { useState } from "react";

export function Index() {
  const [selectedButton,setSelectedButton ] = useState("message")
  // mặc định là hiện lên phần chat  

  return (
    <>
      {/* Toàn bộ trang index */}
      <div className="layout-wrapper box-border flex ">
        {/* Thanh navbar bên trái */}

        <NavbarLeft selectedButton={selectedButton} setSelectedButton={setSelectedButton}/>

        {/* Thanh ở giữa*/}
        <div className="me-lg-1 me-1 min-w-0 max-w-0 bg-[#f5f7fb] drop-shadow-lg md:min-w-[380px] md:max-w-[380px]	">
          <div className="contain ">
            <Profile isActive={selectedButton=="user"? true: false}/>
            <FriendList isActive={selectedButton=="message"? true: false}></FriendList>
            <GroupList isActive={selectedButton=="group"? true: false}/>
            <ContactList isActive={selectedButton=="contacts"? true: false}/>
            <Setting isActive={selectedButton=="setting"? true: false}/>
          </div>
        </div>

        {/* Phần chat + thông tin cá nhân  */}
        <div className="user-chat h-screen flex-1 overflow-hidden bg-white">
          <div className="flex h-full flex-row">
            {/* phần chat */}
            <div className="userchat relative w-full overflow-hidden">
              {/* Header: Thông tin người dùng */}
              <div className="border-b  border-bs-border-color p-6">
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
                          <i class="fa-solid fa-circle ml-2 text-[10px] text-bs-success-rgb"></i>
                        </h5>
                      </div>
                    </div>
                  </div>
                  {/* Tìm kiếm, call, video, info, three dots */}

                  <div className="col-4 col-sm-8  ">
                    <ul className="user-chat-nav mb-0 mt-0 list-none pl-0 ">
                      <li className="mr-7 inline-block">
                        <i class="fa-solid fa-magnifying-glass"></i>
                      </li>
                      <li className="mr-7 inline-block">
                        <i class="fa-solid fa-phone"></i>
                      </li>
                      <li className="mr-7 inline-block">
                        <i class="fa-solid fa-video"></i>
                      </li>
                      <li className="mr-7 inline-block">
                        <i class="fa-solid fa-user"></i>
                      </li>
                      <li className="mr-7 inline-block">
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Chat container */}
              <div className="chat-conversation p-5">
                <div class="flex h-[calc(100vh_-_120px)] flex-col">
                  {/* Hiển thị đoạn chat */}
                  <div class=" flex-1 overflow-y-scroll">
                    <div class="px-4 py-2">
                      {/* Người nhận */}
                      {/* Thông tin người nhận */}
                      <div class="mb-2 flex items-center">
                        <img
                          class="mr-2 h-8 w-8 rounded-full"
                          src="/images/422673745_1431738810981438_8560367173620224784_n.jpg"
                          alt="User Avatar"
                        />
                        <div class="font-medium">Tiên</div>
                      </div>
                      {/* Người nhận gửi tin nhắn */}
                      <div class="mb-2 w-fit max-w-sm rounded-lg bg-primary p-2 text-white shadow">
                        Nhớ anh quá
                      </div>
                      <div class="mb-2 w-fit max-w-sm rounded-lg bg-primary p-2 text-white shadow">
                        Đang làm gì đó?
                      </div>
                      <div class="mb-2 w-fit max-w-sm rounded-lg bg-primary p-2 text-white shadow">
                        Đi ăn chung không?
                      </div>
                      {/* End người nhận */}
                      {/* Người gửi */}
                      <div class="mb-2 flex items-center justify-end">
                        <div class=" mr-2 max-w-sm rounded-lg bg-primary p-2 text-white shadow">
                          Đang chạy đồ án FE2{" "}
                        </div>
                      </div>
                      <div class="mb-2 flex items-center justify-end">
                        <div class=" mr-2 max-w-sm rounded-lg bg-primary p-2 text-white shadow">
                          Đi :))
                        </div>
                      </div>
                      {/* End người gửi */}
                      {/* Người nhận */}
                      {/* Thông tin người nhận */}
                      <div class="mb-2 flex items-center">
                        <img
                          class="mr-2 h-8 w-8 rounded-full"
                          src="/images/422673745_1431738810981438_8560367173620224784_n.jpg"
                          alt="User Avatar"
                        />
                        <div class="font-medium">Tiên</div>
                      </div>
                      {/* Người nhận gửi tin nhắn */}
                      <div class="mb-2 w-fit max-w-sm rounded-lg bg-primary p-2 text-white shadow">
                        Nhớ anh quá
                      </div>
                      <div class="mb-2 w-fit max-w-sm rounded-lg bg-primary p-2 text-white shadow">
                        Đang làm gì đó?
                      </div>
                      <div class="mb-2 w-fit max-w-sm rounded-lg bg-primary p-2 text-white shadow">
                        Đi ăn chung không?
                      </div>
                      {/* End người nhận */}
                      {/* Người gửi */}
                      <div class="mb-2 flex items-center justify-end">
                        <div class=" mr-2 max-w-sm rounded-lg bg-primary p-2 text-white shadow">
                          Đang chạy đồ án FE2{" "}
                        </div>
                      </div>
                      <div class="mb-2 flex items-center justify-end">
                        <div class=" mr-2 max-w-sm rounded-lg bg-primary p-2 text-white shadow">
                          Đi :))
                        </div>
                      </div>
                      {/* End người gửi */}
                      {/* Người nhận */}
                      {/* Thông tin người nhận */}
                      <div class="mb-2 flex items-center">
                        <img
                          class="mr-2 h-8 w-8 rounded-full"
                          src="/images/422673745_1431738810981438_8560367173620224784_n.jpg"
                          alt="User Avatar"
                        />
                        <div class="font-medium">Tiên</div>
                      </div>
                      {/* Người nhận gửi tin nhắn */}
                      <div class="mb-2 w-fit max-w-sm rounded-lg bg-primary p-2 text-white shadow">
                        Nhớ anh quá
                      </div>
                      <div class="mb-2 w-fit max-w-sm rounded-lg bg-primary p-2 text-white shadow">
                        Đang làm gì đó?
                      </div>
                      <div class="mb-2 w-fit max-w-sm rounded-lg bg-primary p-2 text-white shadow">
                        Đi ăn chung không?
                      </div>
                      {/* End người nhận */}
                      {/* Người gửi */}
                      <div class="mb-2 flex items-center justify-end">
                        <div class=" mr-2 max-w-sm rounded-lg bg-primary p-2 text-white shadow">
                          Đang chạy đồ án FE2{" "}
                        </div>
                      </div>
                      <div class="mb-2 flex items-center justify-end">
                        <div class=" mr-2 max-w-sm rounded-lg bg-primary p-2 text-white shadow">
                          Đi :))
                        </div>
                      </div>
                      {/* End người gửi */}
                      {/* Người nhận */}
                      {/* Thông tin người nhận */}
                      <div class="mb-2 flex items-center">
                        <img
                          class="mr-2 h-8 w-8 rounded-full"
                          src="/images/422673745_1431738810981438_8560367173620224784_n.jpg"
                          alt="User Avatar"
                        />
                        <div class="font-medium">Tiên</div>
                      </div>
                      {/* Người nhận gửi tin nhắn */}
                      <div class="mb-2 w-fit max-w-sm rounded-lg bg-primary p-2 text-white shadow">
                        Nhớ anh quá
                      </div>
                      <div class="mb-2 w-fit max-w-sm rounded-lg bg-primary p-2 text-white shadow">
                        Đang làm gì đó?
                      </div>
                      <div class="mb-2 w-fit max-w-sm rounded-lg bg-primary p-2 text-white shadow">
                        Đi ăn chung không?
                      </div>
                      {/* End người nhận */}
                      {/* Người gửi */}
                      <div class="mb-2 flex items-center justify-end">
                        <div class=" mr-2 max-w-sm rounded-lg bg-primary p-2 text-white shadow">
                          Đang chạy đồ án FE2{" "}
                        </div>
                      </div>
                      <div class="mb-2 flex items-center justify-end">
                        <div class=" mr-2 max-w-sm rounded-lg bg-primary p-2 text-white shadow">
                          Đi :))
                        </div>
                      </div>
                      {/* End người gửi */}
                      {/* Người nhận */}
                      {/* Thông tin người nhận */}
                      <div class="mb-2 flex items-center">
                        <img
                          class="mr-2 h-8 w-8 rounded-full"
                          src="/images/422673745_1431738810981438_8560367173620224784_n.jpg"
                          alt="User Avatar"
                        />
                        <div class="font-medium">Tiên</div>
                      </div>
                      {/* Người nhận gửi tin nhắn */}
                      <div class="mb-2 w-fit max-w-sm rounded-lg bg-primary p-2 text-white shadow">
                        Nhớ anh quá
                      </div>
                      <div class="mb-2 w-fit max-w-sm rounded-lg bg-primary p-2 text-white shadow">
                        Đang làm gì đó?
                      </div>
                      <div class="mb-2 w-fit max-w-sm rounded-lg bg-primary p-2 text-white shadow">
                        Đi ăn chung không?
                      </div>
                      {/* End người nhận */}
                      {/* Người gửi */}
                      <div class="mb-2 flex items-center justify-end">
                        <div class=" mr-2 max-w-sm rounded-lg bg-primary p-2 text-white shadow">
                          Đang chạy đồ án FE2{" "}
                        </div>
                      </div>
                      <div class="mb-2 flex items-center justify-end">
                        <div class=" mr-2 max-w-sm rounded-lg bg-primary p-2 text-white shadow">
                          Đi :))
                        </div>
                      </div>
                      {/* End người gửi */}
                    </div>
                  </div>
                  {/*  Input */}
                  <div className="chat-input-section">
                    {/* form send */}
                    <div class="bg-gray-100 px-4 py-2">
                      <div class="flex items-center">
                        <input
                          class="mr-2 w-full rounded-full border px-4 py-2"
                          type="text"
                          placeholder="Type your message..."
                        />
                        <button class="bg-blue-500 hover:bg-blue-700 rounded-full px-4 py-2 font-medium text-white">
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* phần thông tin user được ẩn đi */}
            <div className="user-profile-sidebar ms-1 hidden h-full basis-[23.5rem] bg-primary"></div>
          </div>
        </div>
      </div>
    </>
  );
}
