import {
  Controller,
  type FieldValues,
  type Path,
  type UseFormReturn,
} from "react-hook-form";
import { Select, type SelectType } from "../Select";
import styled from "styled-components";
import { FieldLabel } from "./elements";

const ErrorText = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`;

type FormSelectProps<T extends FieldValues> = {
  name: Path<T>;
  control: UseFormReturn<T>["control"];
  selectProps?: SelectType["selectProps"];
  label?: string;
};

const FormSelect = <T extends FieldValues>({
  name,
  control,
  selectProps,
  label = name,
}: FormSelectProps<T>) => {
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
                  field.onChange(value);
                },
                value: field.value,
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
