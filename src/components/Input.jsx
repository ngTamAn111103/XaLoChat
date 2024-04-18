import React from "react";

export function Input({
  textLabel,
  htmlFor,
  icon,
  placeholder,
  inputType = "text",
}) {
  return (
    <div className="mb-4">
      <label className="mb-2 block " htmlFor={htmlFor}>
        {textLabel}
      </label>

      <div className="mb-4 block">
        <div className="flex items-center">
          <span
            className="border-border-input bg-bg-icon border border-solid px-4 py-2"
            id="basic-addon3"
          >
            <i className={icon + " text-secondary-color opacity-80 "}></i>
          </span>
          <input
            id={htmlFor}
            name={htmlFor}
            placeholder={placeholder}
            type={inputType}
            className="border-border-input w-full border border-solid px-4 py-2 focus:outline-none "
            aria-invalid="false"
          />
        </div>
      </div>
    </div>
  );
}
