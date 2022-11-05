import React from "react";
const Input = React.forwardRef(
  ({ label, name, error, note, required, type = "text", ...rest }, ref) => {
    return (
      <div className="flex flex-col text-right space-y-2">
        <label className="text font-black" htmlFor={name}>
          {label}
          {required && <span className="text-discount-percent"> * </span>}
        </label>
        <input
          ref={ref}
          required={required}
          name={name}
          id={name}
          type={type}
          className="appearance-none text-right text outline-transparent outline-2 rounded-md focus:border-2 border-btn-dark dark:border-btn-light dark:bg-white/5 bg-transparent px-4 h-10"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          aria-invalid={error ? "true" : "false"}
          {...rest}
        />
        {error ? (
          <p className="my-2 text-sm font-medium text-discount-percent">
            {error}
          </p>
        ) : (
          note && <p className="text-sm text-light font-semibold">{note}</p>
        )}
      </div>
    );
  }
);
export default Input;
