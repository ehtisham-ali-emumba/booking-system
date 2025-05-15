import {
  Controller,
  type FieldValues,
  type Path,
  type UseFormReturn,
} from "react-hook-form";
import { Input, type InputType } from "../Input";
import styled from "styled-components";
import { FieldLabel } from "./elements";

const ErrorText = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`;

interface FormInputProps<T extends FieldValues> {
  name: Path<T>;
  control: UseFormReturn<T>["control"];
  inputProps?: InputType["inputProps"];
  label?: string;
}

export const FormInput = <T extends FieldValues>({
  name,
  control,
  inputProps,
  label = name,
}: FormInputProps<T>) => {
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
