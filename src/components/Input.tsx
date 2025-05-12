import { Input as InputField, type InputProps } from "antd";

export type InputType = {
  inputProps?: InputProps;
};

export const Input: React.FC<InputType> = ({ inputProps }) => {
  return (
    <InputField
      {...inputProps}
      style={{
        fontSize: "16px",
        ...inputProps?.style,
      }}
    />
  );
};
