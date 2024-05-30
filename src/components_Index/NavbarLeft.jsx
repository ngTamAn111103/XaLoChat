import Logo from "/public/images/logo.e41f6087382055646c1c02d0a63583d5.svg";
import avatar from "/public/images/320186702_823742058729606_3659513607149413256_n.jpg";
import { NavbarItem } from "./side-menu/NavbarItem";
export function NavbarLeft({selectedButton, setSelectedButton}) {

  const handleClickButton = (selectedButtonName)=> { 
    setSelectedButton(selectedButtonName )
    console.log(selectedButton)
  }

  return (
    //mr-1 flex h-[100vh] min-h-[570px] min-w-[75px] max-w-[75px] flex-col items-center
    <div className="fixed z-10 left-0 right-0 bottom-0 lg:z-0 lg:static side-menu bg-white shadow-black lg:mr-1 flex lg:h-[100vh] lg:min-h-[570px] lg:min-w-[75px] lg:max-w-[75px] lg:flex-col lg:items-center">
      {/* phần trên của nav: Logo */}
      <div className="navbar-brand-box box-border text-center hidden lg:block lg:my-5">
        <a
          className="logo logo-dark h-[70px] items-center justify-center leading-[70px] decoration-0 outline-none"
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

      <div className="my-auto box-border grow">
        <ul className=" side-menu-nav nav-pills nav mb-0 mt-0 flex list-none lg:flex-col flex-wrap justify-around lg:justify-center pl-0">
          <NavbarItem onClickButton={()=>{handleClickButton("user")}} icon="fa-solid fa-user" id="profile" isPrimary={selectedButton=="user" ? true: false} />
          <NavbarItem onClickButton={()=>{handleClickButton("message")}} icon="fa-solid fa-message" isPrimary={selectedButton=="message" ? true: false} />
          <NavbarItem onClickButton={()=>{handleClickButton("group")}} icon="fa-solid fa-user-group" isPrimary={selectedButton=="group" ? true: false} />
          <NavbarItem onClickButton={()=>{handleClickButton("contacts")}} icon="fa-solid fa-address-book" isPrimary={selectedButton=="contacts" ? true: false}/>
          <NavbarItem onClickButton={()=>{handleClickButton("plus")}} icon="fa-solid fa-circle-plus" isPrimary={selectedButton=="plus" ? true: false} customClass={"hidden lg:list-item"}/>
        </ul>
      </div>
      {/* Phần cuối của nav */}
      <div className="box-border block grow">
        <ul className="side-menu-nav  nav mb-0 mt-0 box-border flex list-none flex-wrap justify-around lg:justify-center pl-0">
          <NavbarItem icon="fa-solid fa-gear" onClickButton={()=>{handleClickButton("setting")}} isPrimary={selectedButton=="setting" ? true: false}/>
          <NavbarItem icon="fa-solid fa-right-from-bracket" customClass={"hidden lg:list-item"}/>
          <li
            className={`mx-3 my-1  box-border list-item cursor-pointer rounded-xl`}
          >
            <a
              href="#"
              className="mx-auto my-0 mb-2 flex h-10 w-10 items-center justify-center rounded-lg border-0 bg-none p-0 text-xl	 font-medium leading-10 text-bs-sidebar-menu-item-color outline-none"
            >
              <img src={avatar} alt="" className="h-8 w-8 rounded-full" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
