import { Input, InputWithMask, NumericInput } from "./components/input";
import { TextArea } from "./components/textArea";
import { Select } from "./components/select";

export const UniversalInput = ({
  type,
  mask,
  minRows,
  maxRows,
  options,
  ...props
}) => {
  switch (type) {
    case "select":
      return <Select {...props} options={options} />;

    case "numeric":
      return <NumericInput {...props} />;

    case "mask":
      return <InputWithMask {...props} mask={mask} />;

    case "textArea":
      return <TextArea minRows={minRows} maxRows={maxRows} {...props} />;

    default:
      return <Input {...props} />;
  }
};
