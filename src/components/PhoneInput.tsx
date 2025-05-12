import React from "react";
import { Space, Select, Input } from "antd";
export type PhoneInputProps = {};

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

const PhoneInput: React.FC<PhoneInputProps> = ({}) => {
  return (
    <Space.Compact style={{ width: "100%" }}>
      <Select defaultValue="+1" options={options} />
      <Input />
    </Space.Compact>
  );
};

export default PhoneInput;
