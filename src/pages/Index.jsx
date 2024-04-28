import { NavbarItem } from "../components_Index/side-menu/NavbarItem";
import Logo from "/public/images/logo.e41f6087382055646c1c02d0a63583d5.svg";
import FriendList from "../components_Index/chat-leftsidebar/FriendList";
import { SideMenu } from "../components_Index/side-menu/SideMenu";
import FriendList from "../components_Index/FriendList";
import ContactList from "../components_Index/Contacts/ContactList";

export function Index() {
  return(
    <>
{/* Toàn bộ trang index */}
      <div className="layout-wrapper box-border flex">

        {/* Thanh navbar bên trái, luôn luôn hiển thị trên trang chủ */}
        <SideMenu/>

          <div className="my-auto box-border">
            <ul
              className="
            side-menu-nav 
            nav-pills
            nav
            mb-0
            mt-0
            flex
            list-none
            flex-col
            flex-wrap
            justify-center
            pl-0"
            >
              <NavbarItem icon="fa-solid fa-user" />
              <NavbarItem icon="fa-solid fa-user"  />
              <NavbarItem icon="fa-solid fa-user" isPrimary={true}/>
              <NavbarItem icon="fa-solid fa-user" />
              <NavbarItem icon="fa-solid fa-user" />
            </ul>
          </div>
          {/* Phần cuối của nav */}
          <div className="box-border block">
            <ul
              className="side-menu-nav
               nav 
               mb-0 
               mt-0 
               box-border
                flex 
                list-none 
                flex-wrap
                justify-center
                pl-0"
            >
              <NavbarItem icon="fa-solid fa-user" />
              <NavbarItem icon="fa-solid fa-user" />
            </ul>
                
    


        {/* chat-leftsidebar, phần giữa của trang index, có nhiều components  */}
        <div
          className="me-lg-1 max-w-0 min-w-0 md:max-w-[380px] md:min-w-[380px] me-1 bg-[#f5f7fb] drop-shadow-lg	"
        >
          <div 
          className="contain "
          >
            {/* <FriendList/> */}
            {/* <GroupList
              
            /> */}
            <ContactList></ContactList>
            
          </div>

          
        </div>
        {/* Phần chat: user-chat*/}

      </div>
    </>
  ) 
    
    
      

  
  
}
