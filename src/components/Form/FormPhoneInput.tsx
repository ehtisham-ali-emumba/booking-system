import React from "react";
import { Controller } from "react-hook-form";
import styled from "styled-components";
import { FieldLabel } from "./elements";
import PhoneInput from "../PhoneInput";

const ErrorText = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`;

type FormInputProps = {
  name: string;
  control: any;
  label?: string;
};

export const FormPhoneInput: React.FC<FormInputProps> = ({
  name,
  control,
  label = name,
}) => {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <FieldLabel>{label}</FieldLabel>
            <PhoneInput />
            {error && <ErrorText>{error.message}</ErrorText>}
          </>
        )}
      />
    </div>
  );
};
