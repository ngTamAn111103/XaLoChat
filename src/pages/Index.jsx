import { NavbarItem } from "../components_Index/side-menu/NavbarItem";
import Logo from "/public/images/logo.e41f6087382055646c1c02d0a63583d5.svg";
import FriendList from "../components_Index/chat-leftsidebar/FriendList";
import { SideMenu } from "../components_Index/side-menu/SideMenu";
export function Index() {
  return (
    <>
      {/* Toàn bộ trang index */}
      <div className="layout-wrapper box-border flex">

        {/* Thanh navbar bên trái, luôn luôn hiển thị trên trang chủ */}
        <SideMenu/>



        {/* chat-leftsidebar, phần giữa của trang index, có nhiều components  */}
        <div
          className="me-lg-1 max-w-0 min-w-0 md:max-w-[380px] md:min-w-[380px] me-1 bg-[#f7f7ff]"
        >
          <div className="contain">
            <FriendList/>
            
          </div>

          
        </div>
        {/* Phần chat: user-chat*/}

      </div>
    </>
  );
}
