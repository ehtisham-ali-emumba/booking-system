import { DatePicker, Typography } from "antd";
import type { RangePickerProps } from "antd/es/date-picker";
import { useState } from "react";
import { Button } from "../Button";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { InlineSpacer } from "../Spacer";

const { Text } = Typography;

type DateType = {
  dateProps?: RangePickerProps;
  customText?: string;
};

const iconStyles = { style: { fontSize: "12px", color: "#bfbfbf" } };
export const CustomRangePicker: React.FC<DateType> = ({
  dateProps = {},
  customText = "Choose Here",
}) => {
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [dateText, setDateText] = useState("");
  const { onChange = () => {} } = dateProps;

  const handleToggle = () => {
    setIsPickerOpen((prev) => !prev);
  };

  const onChangeHandler = (dates: any, dateStrings: [string, string]) => {
    if (!dates) {
      setIsPickerOpen(false);
      setDateText("");
    } else {
      setIsPickerOpen(true);
      setDateText(`${dateStrings[0]} - ${dateStrings[1]}`);
    }
    onChange(dates, dateStrings);
  };
  return (
    <>
      <Button size="small" variant="secondary" onClick={handleToggle}>
        <Text
          style={{
            fontSize: "16px",
            fontWeight: "400",
            color: dateText ? "black" : "#bfbfbf",
          }}
        >
          {dateText || customText}
          <InlineSpacer marginLeft="5px" />
          {isPickerOpen ? (
            <UpOutlined {...iconStyles} />
          ) : (
            <DownOutlined {...iconStyles} />
          )}
        </Text>
      </Button>
      <DatePicker.RangePicker
        {...dateProps}
        open={isPickerOpen}
        onOpenChange={handleToggle}
        onChange={onChangeHandler}
        allowClear
        variant="borderless"
        suffixIcon={null}
        placeholder={["", ""]}
        components={{}}
        format="YYYY-MM-DD"
        style={{
          width: "0px",
          height: "0px",
          marginLeft: "-100px",
        }}
        size="small"
        separator={null}
      />
    </>
  );
};
