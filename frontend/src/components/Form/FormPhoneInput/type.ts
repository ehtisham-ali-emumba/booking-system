import type { FieldValues, Path, UseFormReturn } from "react-hook-form";

export type FormPhoneInputValues = FieldValues & { countryCode: string };

export type FormPhoneInputProps<T extends FormPhoneInputValues> = {
  name: Path<T>;
  control: UseFormReturn<T>["control"];
  label?: string;
};
