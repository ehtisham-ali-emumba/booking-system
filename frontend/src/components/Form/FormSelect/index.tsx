import { Controller, type FieldValues } from "react-hook-form";
import { Select } from "../../Select";
import { FieldLabel } from "../elements";
import { ErrorText } from "./elements";
import type { FormSelectProps } from "./type";

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
