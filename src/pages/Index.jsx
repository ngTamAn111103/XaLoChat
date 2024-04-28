import { NavbarItem } from "../components_Index/side-menu/NavbarItem";
import Logo from "/public/images/logo.e41f6087382055646c1c02d0a63583d5.svg";
import Profile from "../components_Index/Profile";
import ContactList from "../components_Index/Contacts/ContactList";
import FriendList from "../components_Index/chat-leftsidebar/FriendList";
import { NavbarLeft } from "../components_Index/NavbarLeft";

export function Index() {
  return (
    <>
      {/* Toàn bộ trang index */}
      <div className="layout-wrapper box-border flex">
        {/* Thanh navbar bên trái */}
       <NavbarLeft/>

        {/* Thanh ở giữa*/}
        <div className="me-lg-1 me-1 min-w-0 max-w-0 bg-[#f5f7fb] drop-shadow-lg md:min-w-[380px] md:max-w-[380px]	">
          <div className="contain ">
            <FriendList></FriendList>
          </div>
        </div>
      </div>
    </>
  );
}


