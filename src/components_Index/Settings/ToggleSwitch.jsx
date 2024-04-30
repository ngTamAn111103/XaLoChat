import React, { useState } from "react";

const ToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <label className="flex flex h-5 w-11 cursor-pointer items-center justify-center rounded-full bg-[#E3E1FC]">
        <div className="relative">
          <input
            type="checkbox"
            className="sr-only"
            checked={isChecked}
            onChange={handleToggle}
          />
          <div
            className={`toggle_line h-4 w-9 rounded-full border shadow-inner ${isChecked ? "border-none bg-[#7269EF]" : "bg-[#F7F7ff]"}`}
          ></div>
          <div
            className={`toggle_dot absolute inset-y-0.5 h-3 w-3 rounded-full shadow ${isChecked ? "translate-x-5 bg-[#fff]" : "translate-x-1 bg-[#A9A9A9]"}`}
          ></div>
        </div>
      </label>
    </>
  );
};

export default ToggleSwitch;
