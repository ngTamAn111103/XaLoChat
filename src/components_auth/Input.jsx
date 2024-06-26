import React, { useEffect, useRef } from "react";

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
  onBlur,

  // validation
  validation = true,
  labelValidation = "",
  colorValidation = "text-text-danger",
  error,
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
            className="w-full lg:w-96 border border-solid border-border-input lg:px-4 py-2 focus:outline-none "
            value={value}
            onChange={onChange}
            autoFocus={isFocus}
            onBlur={onBlur}
            onKeyDown={onChange}
            
          />
        </div>

        {error ? <div className={`${colorValidation}`}>{error}</div> : ""}

        

        {!validation && (
          <span id="validation" className={`${colorValidation}`}>
            {labelValidation}
          </span>
        )}
      </div>
    </div>
  );
}
