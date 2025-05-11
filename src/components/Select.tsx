import { Select as Select_, type SelectProps } from "antd";
import { useState } from "react";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

type SelectType = {
  selectProps?: SelectProps;
};

export const Select = (props: SelectType) => {
  const { selectProps } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Select_
      style={{ flex: 1 }}
      open={isOpen}
      onDropdownVisibleChange={(open) => setIsOpen(open)}
      suffixIcon={isOpen ? <UpOutlined /> : <DownOutlined />}
      {...selectProps}
    />
  );
};
