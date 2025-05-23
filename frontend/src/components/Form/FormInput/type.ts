import type { FieldValues, Path, UseFormReturn } from "react-hook-form";
import type { InputType } from "../../Input/type";

export interface FormInputProps<T extends FieldValues> {
  name: Path<T>;
  control: UseFormReturn<T>["control"];
  inputProps?: InputType["inputProps"];
  label?: string;
}
