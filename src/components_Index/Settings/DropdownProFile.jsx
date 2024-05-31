import React, { useState, useEffect, useRef } from 'react';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Everyone");
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative ms-2 rounded bg-[#E6EBF5] hover:bg-[#C4C8D0]">
      <button
        aria-haspopup="false"
        className="btn-sm w-20 text-xs"
        aria-expanded={isOpen ? "true" : "false"}
        onClick={toggleMenu}
      >
        {selectedOption} <i className="fa fa-chevron-down fa-2xs"></i>
      </button>
      <div
        ref={menuRef}
        tabIndex="-1"
        role="menu"
        aria-hidden={!isOpen}
        className={`absolute right-0 z-10 mt-2 ${
          isOpen ? 'block' : 'hidden'
        } w-36 rounded bg-white shadow-md `}
      >
        <button
          tabIndex="0"
          role="menuitem"
          className="text-[#495057] hover:bg-[#F5F5F5] focus:bg-[#F5F5F5] w-full text-xs py-2 px-4 focus:outline-none"
          onClick={() => handleOptionClick("Everyone")}
        >
          Everyone
        </button>
        <button
          tabIndex="0"
          role="menuitem"
          className="text-[#495057] hover:bg-[#F5F5F5] focus:bg-[#F5F5F5] w-full px-4 py-2 text-xs focus:outline-none"
          onClick={() => handleOptionClick("Selected")}
        >
          Selected
        </button>
        <button
          tabIndex="0"
          role="menuitem"
          className="text-[#495057] hover:bg-[#F5F5F5] focus:bg-[#F5F5F5]  w-full px-4 py-2 text-xs focus:outline-none"
          onClick={() => handleOptionClick("Nobody")}
        >
          Nobody
        </button>
      </div>
    </div>
  );
};

export default DropdownMenu;
