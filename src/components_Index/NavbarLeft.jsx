import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "/public/images/logo.e41f6087382055646c1c02d0a63583d5.svg";
import avatar from "/public/images/320186702_823742058729606_3659513607149413256_n.jpg";
import { NavbarItem } from "./side-menu/NavbarItem";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import { signOut } from "firebase/auth";
import { auth, db } from "../lib/firebase";
import { useUserStore } from "../lib/userStore";
import { doc, updateDoc } from "firebase/firestore";

export function NavbarLeft({ selectedButton, setSelectedButton }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { currentUser } = useUserStore();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  const handleClickButton = (selectedButtonName) => {
    setSelectedButton(selectedButtonName);
    // console.log(selectedButton);
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    
    signOut(auth)
      .then(async () => {
        // Cập nhật isOnline thành false trong Firestore
        if (currentUser && currentUser.ID) {
          const docRef = doc(db, "Profile", currentUser.ID);
          await updateDoc(docRef, {
            isOnline: false,
          });
        }
      })
      .then(() => {
        useUserStore.getState().fetchUserInfo(null);
        console.log("NavbarLeft.jsx: Đăng xuất thành công");
        

        // Chuyển hướng về trang đăng nhập sau khi đăng xuất thành công
        navigate("/login");
        toast.success("Đăng xuất thành công!",{
          position:"top-left"
        });
      })
      .catch((error) => {
        console.error("NavbarLeft.jsx: Lỗi đăng xuất:", error);
        toast.error("Đăng xuất thất bại. Vui lòng thử lại!", {
          position: "top-left"
        });
      });
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1024);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{ zIndex: 10 }}
      className="side-menu fixed bottom-0 left-0 right-0 z-10 flex bg-white shadow-black lg:static lg:z-0 lg:mr-1 lg:h-[100vh] lg:min-h-[570px] lg:min-w-[75px] lg:max-w-[75px] lg:flex-col lg:items-center"
    >
      <div className="navbar-brand-box box-border hidden text-center lg:my-5 lg:block">
        <a
          className="logo logo-dark h-[70px] items-center justify-center leading-[70px] decoration-0 outline-none"
          href="#"
        >
          <span className="logo-sm box-border leading-[69px]">
            <img
              src={Logo}
              alt="Logo"
              className="box-border h-[30px] align-middle leading-[70px]"
            />
          </span>
        </a>
      </div>
      <div className="my-auto box-border grow">
        <ul className="side-menu-nav nav-pills nav mb-0 mt-0 flex list-none flex-wrap justify-around pl-0 lg:flex-col lg:justify-center">
          <NavbarItem
            onClickButton={() => handleClickButton("user")}
            icon="fa-solid fa-user"
            id="profile"
            isPrimary={selectedButton === "user"}
            customClass={"hidden lg:list-item"}
          />
          <NavbarItem
            onClickButton={() => handleClickButton("message")}
            icon="fa-solid fa-message"
            isPrimary={selectedButton === "message"}
          />
          <NavbarItem
            onClickButton={() => handleClickButton("group")}
            icon="fa-solid fa-user-group"
            isPrimary={selectedButton === "group"}
          />
          <NavbarItem
            onClickButton={() => handleClickButton("contacts")}
            icon="fa-solid fa-address-book"
            isPrimary={selectedButton === "contacts"}
          />
          <NavbarItem
            onClickButton={() => handleClickButton("plus")}
            icon="fa-solid fa-circle-plus"
            isPrimary={selectedButton === "plus"}
          />
        </ul>
      </div>
      <div className="box-border block grow lg:grow-0">
        <ul className="side-menu-nav nav mb-0 mt-0 box-border flex list-none flex-wrap justify-around pl-0 lg:justify-center">
          <NavbarItem
            icon="fa-solid fa-gear"
            onClickButton={() => handleClickButton("setting")}
            isPrimary={selectedButton === "setting"}
            customClass={"hidden lg:list-item"}
          />
          <NavbarItem
            icon="fa-solid fa-right-from-bracket"
            customClass={"hidden lg:list-item"}
            onClickButton={handleLogout}
          />
          <li
            className="relative mx-3 my-1 box-border list-item cursor-pointer rounded-xl"
            ref={dropdownRef}
          >
            <button
              className="mx-auto my-0 mb-2 flex h-10 w-10 items-center justify-center rounded-lg border-0 bg-none p-0 text-xl font-medium leading-10 text-bs-sidebar-menu-item-color outline-none"
              onClick={toggleDropdown}
            >
              <img
                src={currentUser.Avatar}
                alt="Avatar"
                className="h-8 w-8 rounded-full"
              />
            </button>
            {isDropdownOpen && (
              //               <div className="z-index: 9999 absolute bottom-12 right-0 lg:left-0 w-40 rounded-md bg-white shadow-lg">
              <div
                className={`z-9999 absolute bottom-12 ${isMobile ? "right-1" : "left-1"} w-40 rounded-md bg-white shadow-lg`}
              >
                <div className="py-5">
                  <button
                    className="block w-full px-4 py-2 text-left text-sm hover:bg-[#F5F5F5]"
                    onClick={() => {
                      handleClickButton("user");
                      setIsDropdownOpen(false);
                    }}
                  >
                    Profile
                    <i className="fa-solid fa-address-card float-end p-1"></i>
                  </button>
                  <button
                    className="block w-full px-4 py-2 text-left text-sm hover:bg-[#F5F5F5]"
                    onClick={() => {
                      handleClickButton("setting");
                      setIsDropdownOpen(false);
                    }}
                  >
                    Setting
                    <i className="fa-solid fa-gear float-end p-1"></i>
                  </button>
                  <div className="border-t border-[#DCDCDC]"></div>
                  <button
                    className="block w-full px-4 py-2 text-left text-sm hover:bg-[#F5F5F5]"
                    onClick={handleLogout}
                  >
                    Log out
                    <i className="fa-solid fa-right-from-bracket float-end p-1"></i>
                  </button>
                </div>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
