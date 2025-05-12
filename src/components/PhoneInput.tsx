import React from "react";
import { Space, Select, Input, type InputProps, type SelectProps } from "antd";

export type PhoneInputProps = {
  inputProps?: InputProps;
  selectProps?: SelectProps;
};

const options = [
  {
    value: "+1",
    label: "+1 (USA)",
  },
  {
    value: "+86",
    label: "+86 (China)",
  },
  {
    value: "+92",
    label: "+92 (Pak)",
  },
];

const PhoneInput: React.FC<PhoneInputProps> = ({ inputProps, selectProps }) => {
  return (
    <Space.Compact style={{ width: "100%" }}>
      <Select defaultValue="+1" options={options} {...selectProps} />
      <Input type="number" {...inputProps} />
    </Space.Compact>
  );
};

export default PhoneInput;
