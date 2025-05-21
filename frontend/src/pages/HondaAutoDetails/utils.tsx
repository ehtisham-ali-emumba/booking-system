import type { HondaAuto } from "../../atoms/hondaAutosAtom";

export const getHondaAutoSpecs = (auto: HondaAuto) => {
  const specs: { label: string; value: string | number }[] = [];
  Object.entries(auto).map(([key, value]) => {
    if (["id", "name", "desc", "imageSrc", "chipText"].includes(key)) return; // Skip these keys
    specs.push({
      label: key.charAt(0).toUpperCase() + key.slice(1),
      value: value,
    });
  });

  return specs;
};
