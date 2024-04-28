import { NavbarItem } from "../components_Index/side-menu/NavbarItem";
import Logo from "/public/images/logo.e41f6087382055646c1c02d0a63583d5.svg";

import Profile from "../components_Index/Profile";

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
              <NavbarItem icon="fa-solid fa-user" isPrimary={true}/>
              <NavbarItem icon="fa-brands fa-rocketchat"/>
              <NavbarItem icon="fa-solid fa-user" />
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
                
    


        rounded-xl`}
              >
                <a
                  href="#"
                  className="
                  text-bs-sidebar-menu-item-color
                mx-auto 
                my-0 
                mb-2 
                block
                h-[56px] 
                w-[56px]
                rounded-lg
                border-0
                bg-none
                p-0	
                text-center	
                text-2xl
                font-medium
                leading-[56px]
                outline-none
               
                "
                >
                  <img src={Logo} alt="" className="rounded-full"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Thanh ở giữa*/}

        <div
          className="me-lg-1 md:max-w-[380px] md:min-w-[380px] me-1 bg-[#f7f7ff]"
        >

          <div 
          className="contain "
          >
            {/* <FriendList/> */}
            {/* <GroupList
              
            /> */}
            <ContactList></ContactList>
            <Profile/>

            
          </div>

          
        </div>
      </div>
    </>
  );
}

{/*
        {/* Phần chat: user-chat*/}

      </div>
    </>
  ) 
    
    
      

  
  
}*/}

