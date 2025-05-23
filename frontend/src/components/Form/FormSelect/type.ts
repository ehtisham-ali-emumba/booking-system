import type { FieldValues, Path, UseFormReturn } from "react-hook-form";
import type { SelectType } from "../../Select/type";

export type FormSelectProps<T extends FieldValues> = {
  name: Path<T>;
  control: UseFormReturn<T>["control"];
  selectProps?: SelectType["selectProps"];
  label?: string;
};
