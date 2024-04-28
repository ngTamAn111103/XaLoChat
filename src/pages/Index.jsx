import { NavbarItem } from "../components_Index/NavbarItem";
import Logo from "/public/images/logo.e41f6087382055646c1c02d0a63583d5.svg";
import { Setting } from "../components_Index/Settings";

export function Index() {
  return (
    <>
      {/* Toàn bộ trang index */}
      <div className="layout-wrapper box-border flex">
        {/* Thanh navbar bên trái */}
        <div
          className="
        side-menu 
        shadow-black 
        mr-1 
        flex 
        h-[100vh] 
        min-h-[570px] 
        min-w-[75px]
        max-w-[75px]
        flex-col
        bg-white"
        >
          {/* phần trên của nav: Logo */}
          <div className="navbar-brand-box box-border block text-center">
            <a
              className="logo
            logo-dark 
            flex
            h-[70px]	
            items-center	
           justify-center
           leading-[70px]
           decoration-0
           outline-none
           
           

            "
              href="#"
            >
              <span
                className="
                logo-sm
                box-border
                leading-[69px]
                "
              >
                <img
                  src={Logo}
                  alt={Logo}
                  className="box-border
                    h-[30px]
                    align-middle
                    leading-[70px]
                    "
                />
              </span>
            </a>
          </div>
          {/* Phần giữa của nav: Các thông tin */}

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
              <NavbarItem icon="fa-solid fa-user"/>
              <NavbarItem icon="fa-brands fa-rocketchat"/>
              <NavbarItem icon="fa-solid fa-user" />
              <NavbarItem icon="fa-solid fa-user" />
              <NavbarItem icon="fa-solid fa-user" isPrimary={true}/>
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
              <li
                className={`mx-3 my-1 
      box-border
      list-item
      cursor-pointer	
    

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
          <div className="contain">
            <Setting/>
          </div>
          
        </div>
      </div>
    </>
  );
}