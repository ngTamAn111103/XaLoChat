import Logo from "/public/images/logo.e41f6087382055646c1c02d0a63583d5.svg";
import avatar from "/public/images/320186702_823742058729606_3659513607149413256_n.jpg";
import { NavbarItem } from "./side-menu/NavbarItem";
export function NavbarLeft() {
  return (
    <div className="side-menu mr-1 flex h-[100vh] min-h-[570px] min-w-[75px] max-w-[75px] flex-col items-center bg-white shadow-black">
      {/* phần trên của nav: Logo */}
      <div className="navbar-brand-box box-border block text-center">
        <a
          className="logo logo-dark flex h-[70px]	 items-center	 justify-center leading-[70px] decoration-0 outline-none"
          href="#"
        >
          <span className=" logo-sm box-border leading-[69px] ">
            <img
              src={Logo}
              alt={Logo}
              className="box-border h-[30px] align-middle leading-[70px] "
            />
          </span>
        </a>
      </div>
      {/* Phần giữa của nav: Các thông tin */}

      <div className="my-auto box-border">
        <ul className=" side-menu-nav nav-pills nav mb-0 mt-0 flex list-none flex-col flex-wrap justify-center pl-0">
          <NavbarItem icon="fa-solid fa-user" id="profile" onClick={() => {console.log(Math.random());}}/>
          <NavbarItem icon="fa-solid fa-message" isPrimary={true} />

          <NavbarItem icon="fa-solid fa-user-group" />
          <NavbarItem icon="fa-solid fa-address-book" />

          <NavbarItem icon="fa-solid fa-circle-plus" />
        </ul>
      </div>
      {/* Phần cuối của nav */}
      <div className="box-border block">
        <ul className="side-menu-nav nav mb-0 mt-0 box-border flex list-none flex-wrap justify-center pl-0">
          <NavbarItem icon="fa-solid fa-gear" />
          <NavbarItem icon="fa-solid fa-right-from-bracket" />
          <li
            className={`mx-3 my-1 box-border list-item cursor-pointer rounded-xl`}
          >
            <a
              href="#"
              className="mx-auto my-0 mb-2 flex h-[56px] w-[56px] items-center justify-center rounded-lg border-0 bg-none p-0 	 text-2xl	 font-medium leading-[56px] text-bs-sidebar-menu-item-color outline-none"
            >
              <img src={avatar} alt="" className="h-8 w-8 rounded-full" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
