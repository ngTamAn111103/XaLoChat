import React, {  useEffect, useRef } from "react";

export function Input({
  // Label
  textLabel,
  htmlFor,
  // icon
  icon,
  // input
  placeholder,
  inputType = "text",
  isFocus = false,
  value,
  onChange,

  // validation
  validation = true,
  labelValidation = "",
}) {
  // Focus vào đầu của @gmail.com
  const ref = useRef();
  useEffect(() => {

    // const codeInput = document.querySelector( `#${htmlFor}`)
    // codeInput.setSelectionRange(0, 0);
    if (isFocus) {
      ref.current.setSelectionRange(0, 0);
    }
  }, []);
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
            ref={ref}
            name={htmlFor}
            placeholder={placeholder}
            type={inputType}
            className="w-full border border-solid border-border-input px-4 py-2 focus:outline-none "
            value={value}
            onChange={onChange}
            autoFocus={isFocus}
          />
          
        </div>
        {!validation && (
          <span id="validation" className={"text-text-danger"}>
            {labelValidation}
          </span>
        )}
      </div>
    </div>
  );
}
