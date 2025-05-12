import React from "react";
import { Controller } from "react-hook-form";
import { Input, type InputType } from "../Input";
import styled from "styled-components";
import { FieldLabel } from "./elements";

const ErrorText = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`;

type FormInputProps = {
  name: string;
  control: any;
  inputProps?: InputType["inputProps"];
  label?: string;
};

export const FormInput: React.FC<FormInputProps> = ({
  name,
  control,
  inputProps,
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
            <Input
              inputProps={{
                ...field,
                ...inputProps,
              }}
            />
            {error && <ErrorText>{error.message}</ErrorText>}
          </>
        )}
      />
    </div>
  );
};
