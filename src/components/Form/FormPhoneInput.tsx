import React from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
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
  const { setValue } = useFormContext();
  const countryCode = useWatch({
    control,
    name: "countryCode",
  });

  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <FieldLabel>{label}</FieldLabel>
            <PhoneInput
              inputProps={{ ...field }}
              selectProps={{
                value: countryCode,
                onChange: (value) => setValue("countryCode", value),
              }}
            />
            {error && <ErrorText>{error.message}</ErrorText>}
          </>
        )}
      />
    </div>
  );
};
