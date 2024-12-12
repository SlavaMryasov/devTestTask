import { forwardRef } from "react";
import { Input } from "./";
import MaskedInput from "react-input-mask";

import { formatCharsInput } from "../../maskFormat";

const getPlaceHolderMask = (mask) => {
  const charsEditableMask = Object.keys(formatCharsInput).join("");
  let placeholder = "";
  let shielding = false;

  for (let i = 0; i < mask.length; i++) {
    if (shielding) {
      shielding = false;
      placeholder += mask[i];
      continue;
    }

    if (mask[i] === "\\") {
      shielding = true;
      continue;
    }

    if (charsEditableMask.includes(mask[i])) {
      placeholder += "_";
      continue;
    }

    placeholder += mask[i];
  }

  return placeholder;
};

export const InputWithMask = forwardRef(
  ({ mask, value, onChange, placeholder, ...props }, ref) => {
    const generatedPlaceholder = placeholder || getPlaceHolderMask(mask);

    return (
      <MaskedInput
        {...props}
        mask={mask}
        value={value}
        onChange={onChange}
        formatChars={formatCharsInput}
        placeholder={generatedPlaceholder}
      >
        {(inputProps) => <Input {...inputProps} ref={ref} />}
      </MaskedInput>
    );
  }
);

InputWithMask.displayName = "InputWithMask";
