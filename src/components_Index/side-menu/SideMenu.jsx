import React from "react";
import Logo from "/public/images/logo.e41f6087382055646c1c02d0a63583d5.svg";
import { NavbarItem } from "./NavbarItem";

export function SideMenu() {
  return (
    <>
      <div
        className="side-menu shadow-blackh-full flex min-h-[100vh] min-w-[75px] max-w-[75px] flex-col bg-white drop-shadow-md"
      >
        {/* phần trên của nav: Logo */}
        <div className="navbar-brand-box box-border block text-center">
          <a
            className="logo logo-dark flex h-[70px]	 items-center	 justify-center leading-[70px] decoration-0 outline-none"
            href="#"
          >
            <span className=" logo-sm box-border leading-[69px]">
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
          <ul
            className=" side-menu-nav nav-pills nav mb-0 mt-0 flex list-none flex-col flex-wrap justify-center pl-0"
            role="tablist"
          >
            <NavbarItem icon="fa-solid fa-user" id="profile" />
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
              className={`mx-3 my-1 box-border list-item cursor-pointer	rounded-xl`}
            >
              <a
                href="#"
                className=" mx-auto my-0 mb-2 block h-[50px] w-[50px] rounded-lg border-0 bg-none p-0 text-center	 text-2xl	 font-medium leading-[56px] text-bs-sidebar-menu-item-color outline-none"
              >
                <img src="public/images/431912501_925105525820272_2123710852259907915_n.jpg" alt="" className="rounded-full" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
