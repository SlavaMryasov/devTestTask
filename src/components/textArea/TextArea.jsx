import { forwardRef } from "react";
import { Input } from "antd";

export const TextArea = forwardRef(
  ({ readOnly, minRows = 1, maxRows = 20, ...props }, ref) => {
    return (
      <Input.TextArea
        {...props}
        autoSize={{
          minRows: readOnly ? 1 : minRows,
          maxRows: maxRows,
        }}
        ref={ref}
      />
    );
  }
);

TextArea.displayName = "TextArea";
