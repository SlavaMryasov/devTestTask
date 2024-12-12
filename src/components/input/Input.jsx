import { Input as AntInput } from "antd";
import { forwardRef } from "react";
import s from "./Input.module.css";

export const Input = forwardRef(
  ({ value, onChange, placeholder, ...props }, ref) => {
    console.log(props);
    return (
      <AntInput
        {...props}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        ref={ref}
        className={s.input}
      />
    );
  }
);

Input.displayName = "Input";
