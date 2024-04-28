import React from "react";

function UserSetting({ name, avatarSrc }) {
  return (
    <div className="relative border-b border-[#DCDCDC] p-4 text-center">
      <div className="relative inline-block rounded-full border border-[#DCDCDC] p-1">
        <img src={avatarSrc} className="h-24 w-24 rounded-full" alt={name} />
        <button
          type="button"
          className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#E6EBF5] p-0"
        >
          <i className="fa-solid fa-pen fa-xs"></i>
        </button>
      </div>
      <h5 className="pt-4 text-base text-black">{name}</h5>
      {/*Dropdown*/}
      <div className="relative mb-1 inline-block pb-3">
        <button
          aria-haspopup="true"
          className="text-muted block pb-1 text-[#7A7F9A]"
          aria-expanded="false"
        >
          Available  <i className="fa fa-chevron-down fa-2xs"></i>
        </button>
        <div className="absolute right-0 z-10 mt-2 hidden w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <button
            tabIndex="0"
            role="menuitem"
            className="text-gray-700 hover:bg-gray-100 focus:bg-gray-100 block w-full px-4 py-2 text-sm focus:outline-none"
          >
            Available
          </button>
          <button
            tabIndex="0"
            role="menuitem"
            className="text-gray-700 hover:bg-gray-100 focus:bg-gray-100 block w-full px-4 py-2 text-sm focus:outline-none"
          >
            Busy
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserSetting;
