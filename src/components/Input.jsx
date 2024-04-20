import React, { useRef } from "react";


export function Input({
  // Label
  textLabel,
  htmlFor,
  // icon
  icon,
  // input
  placeholder,
  inputType = "text",
  isFocus=false,
  value,
  onChange,
  onMouseLeave,
  // validation
  validation=true,
  labelValidation="",
  colorValidation = "text-text-danger",
  error 
}) {
  
  return (
    <div className="mb-4">
      <label className="mb-2 block " htmlFor={htmlFor}>
        {textLabel}
      </label>

      <div className="mb-4 block">
        <div className="flex items-center">
          <span
            className="border border-solid border-border-input bg-bg-icon px-4 py-2"
            id="basic-addon3"
          >
            <i className={icon + " text-secondary-color opacity-80 "}></i>
          </span>
          <input
            id={htmlFor}
            name={htmlFor}
            placeholder={placeholder}
            type={inputType}
            className="w-full border border-solid border-border-input px-4 py-2 focus:outline-none "
            value={value}
            onChange={onChange}
            autoFocus={isFocus}
            onMouseLeave={onMouseLeave}
          />
        </div>
        {error ? <div className={`${colorValidation}`}>{error}</div> : ""}

        <span
          id="validation"
          className={`${colorValidation}
        ${validation ? "hidden" : ""}`}
        >
          {labelValidation}
        </span>
      </div>
    </div>
  );
}
