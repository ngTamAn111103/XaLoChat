import React, { useState, useRef, useEffect } from "react";

const FileCard = ({ fileName, fileSize, iconClassName, menuPosition = "top" }) => {
  const [showMenu, setShowMenu] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, [dropdownRef]);

  return (
    <div className="m-2 rounded-md border border-[#DCDCDC] ">
      <div className="flex items-center p-2">
        <div className="bg-[#E3E1FC] flex h-10 w-10 items-center justify-center rounded">
          <i className={`${iconClassName} text-lg text-primary`}></i>
        </div>
        <div className="pl-3 flex-grow overflow-hidden">
          <div className="text-left">
            <h5 className="mb-1 text-xs font-bold">{fileName}</h5>
            <p className="text-[#7A7F9A] mb-0 text-xs">{fileSize}</p>
          </div>
        </div>
        <div className="ml-4">
          <ul className="flex items-center space-x-2 p-2">
            <li>
              <a className="text-[#7A7F9A] p-2" href="/dashboard">
                <i className="fas fa-download"></i>
              </a>
            </li>
            <li className="relative" ref={dropdownRef}>
              <button
                className="focus:outline-none"
                aria-label="Options"
                aria-haspopup="true"
                onClick={() => setShowMenu(!showMenu)}
              >
                <i className="fas fa-ellipsis-h text-[#7A7F9A]"></i>
              </button>
              <div
                className={`absolute z-10 w-40 rounded-md bg-white shadow-lg ${
                  menuPosition === "bottom" ? "bottom-5" : "top-5"
                }`}
                style={{
                  right: 0,
                  maxHeight: showMenu ? "150px" : "0",
                  opacity: showMenu ? 1 : 0,
                  overflow: "hidden",
                  transition: showMenu
                    ? "max-height 0.3s ease-in, opacity 0.3s ease-in"
                    : "max-height 0.2s ease-out, opacity 0.2s ease-out",
                }}
              >
                <div className="py-1">
                  <button className="hover:bg-[#F5F5F5] block w-full px-4 py-2 text-left text-sm">
                    Action
                  </button>
                  <button className="hover:bg-[#F5F5F5] block w-full px-4 py-2 text-left text-sm">
                    Another Action
                  </button>
                  <div className="border-t border-[#DCDCDC]"></div>
                  <button className="hover:bg-[#F5F5F5] block w-full px-4 py-2 text-left text-sm">
                    Delete
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FileCard;
