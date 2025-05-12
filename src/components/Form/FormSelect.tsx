import React from "react";
import { Controller } from "react-hook-form";
import { Select, type SelectType } from "../Select";
import styled from "styled-components";
import { FieldLabel } from "./elements";

const ErrorText = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`;

type FormSelectProps = {
  name: string;
  control: any;
  selectProps?: SelectType["selectProps"];
  label?: string;
};

const FormSelect: React.FC<FormSelectProps> = ({
  name,
  control,
  selectProps,
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
            <Select
              {...field}
              selectProps={{
                ...selectProps,
                onChange: (value) => {
                  field.onChange(value); // Ensure onChange is handled
                },
                value: field.value, // Ensure value is controlled
              }}
            />
            {error && <ErrorText>{error.message}</ErrorText>}
          </>
        )}
      />
    </div>
  );
};

export default FormSelect;
