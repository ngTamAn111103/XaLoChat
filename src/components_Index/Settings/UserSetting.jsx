import React, { useState } from "react";

function UserSetting({ name, avatarSrc }) {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Available");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <div className="relative border-b border-[#DCDCDC] p-4 text-center">
      <div className="relative inline-block rounded-full border border-[#DCDCDC] p-1">
        <img src={avatarSrc} className="h-20 w-20 rounded-full" alt={name} />
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
        className="font-sans text-sm block left-0 pb-1 text-[#7A7F9A]"
        aria-expanded={isOpen ? "true" : "false"}
        onClick={toggleMenu}
      >
        {selectedOption} <i className="fa fa-chevron-down fa-2xs"></i>
      </button>
      <div
        className={`absolute z-10 mt-2 ${isOpen ? 'block' : 'hidden'} w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
      >
        <button
          tabIndex="0"
          role="menuitem"
          className="text-gray-700 hover:bg-gray-100 focus:bg-gray-100 block w-full px-4 py-2 text-sm focus:outline-none"
          onClick={() => handleOptionClick("Available")}
        >
          Available
        </button>
        <button
          tabIndex="0"
          role="menuitem"
          className="text-gray-700 hover:bg-gray-100 focus:bg-gray-100 block w-full px-4 py-2 text-sm focus:outline-none"
          onClick={() => handleOptionClick("Busy")}
        >
          Busy
        </button>
      </div>
    </div>
    </div>
  );
}

export default UserSetting;
