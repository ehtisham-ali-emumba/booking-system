import {
  Controller,
  useFormContext,
  useWatch,
  type FieldValues,
  type Path,
  type UseFormReturn,
} from "react-hook-form";
import styled from "styled-components";
import { FieldLabel } from "./elements";
import PhoneInput from "../PhoneInput";

const ErrorText = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`;

type FormPhoneInputProps<T extends FieldValues & { countryCode: string }> = {
  name: Path<T>;
  control: UseFormReturn<T>["control"];
  label?: string;
};

export const FormPhoneInput = <
  T extends FieldValues & { countryCode: string }
>({
  name,
  control,
  label = name,
}: FormPhoneInputProps<T>) => {
  const { setValue } = useFormContext();
  const countryCode = useWatch({
    control,
    name: "countryCode" as Path<T>,
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
