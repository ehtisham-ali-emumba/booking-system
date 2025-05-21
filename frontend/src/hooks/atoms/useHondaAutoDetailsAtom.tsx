import { useAtom } from "jotai";
import { useCallback } from "react";
import { hondaAutosAtom } from "../../atoms/hondaAutosAtom";

export const useHondaAutoDetailsAtom = () => {
  const [hondaAutos, setHondaAutos] = useAtom(hondaAutosAtom);

  const getHondaAutoById = useCallback(
    (autoId: number) => {
      return hondaAutos.find((auto) => auto.id === autoId);
    },
    [hondaAutos]
  );

  return { getHondaAutoById };
};
