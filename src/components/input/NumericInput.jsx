import { forwardRef } from "react";
import { Input } from "./";

export const NumericInput = forwardRef(({ value, onChange, ...props }, ref) => {
  return (
    <Input
      {...props}
      value={value}
      onChange={onChange}
      type="number"
      ref={ref}
    />
  );
});

NumericInput.displayName = "NumericInput";
