import type { HondaAuto } from "../../atoms/hondaAutosAtom";

export const getHondaAutoSpecs = (auto: HondaAuto) => {
  const specs: { label: keyof HondaAuto; value: HondaAuto[keyof HondaAuto] }[] =
    [];
  Object.entries(auto).map(([key, value]) => {
    if (
      [
        "id",
        "name",
        "price",
        "modelYear",
        "desc",
        "imageSrc",
        "chipText",
        "engine",
        "fuelType",
        "color",
        "description",
      ].includes(key)
    )
      return; // Hide these keys in specifications
    specs.push({
      label: key as keyof HondaAuto,
      value: value,
    });
  });

  return specs;
};
