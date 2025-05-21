import { atomWithStorage } from "jotai/utils";
import { hondaAutos } from "../pages/HondaAutos/utils";

export type HondaAuto = {
  id: number;
  name: string;
  modelYear: number;
  price: number;
  engine: string;
  transmission: string;
  fuelType: string;
  color: string;
  chipText?: string;
  imageSrc: string;
  description: string;
  mileage: string;
  fuelCapacity: string;
};

export const hondaAutosAtom = atomWithStorage<HondaAuto[]>(
  "hondaAutos",
  hondaAutos
);
