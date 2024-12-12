import { Select as SelectAnt } from "antd";
import s from "./Select.module.css";
import { forwardRef } from "react";
import cn from "classnames";
export const Select = forwardRef(
  (
    {
      options = {},
      value,
      onChange,
      placeholder,
      theme,
      readOnly,
      onEndEditing,
      ...props
    },
    ref
  ) => {
    const { Option, OptGroup } = SelectAnt;
    const onBlurSelect = () => {
      if (!readOnly) return;
      onEndEditing && onEndEditing(value);
    };
    const handleChange = (val) => {
      if (readOnly) {
        console.log("Read-only: Selection not allowed");
        return;
      }
      onChange(val);
    };
    return (
      <SelectAnt
        {...props}
        readOnly={readOnly}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        showSearch
        className={cn(s.select, { [s.theme]: theme, [s.readOnly]: readOnly })}
        ref={ref}
        filterOption={(input, option) => {
          return option.value?.toLowerCase().includes(input.toLowerCase());
        }}
        onBlur={onBlurSelect}
      >
        {Array.isArray(options) ? (
          options.map((option) => (
            <Option key={option.value}>{option.label}</Option>
          ))
        ) : (
          <OptGroup key={options.groupId} label={options.label}>
            {options.items.map((option) => (
              <Option key={option.value}>{option.label}</Option>
            ))}
          </OptGroup>
        )}
      </SelectAnt>
    );
  }
);

Select.displayName = "Select";
