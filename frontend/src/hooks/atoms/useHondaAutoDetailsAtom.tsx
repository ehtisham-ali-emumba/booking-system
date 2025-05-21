import { useAtom } from "jotai";
import { useCallback } from "react";
import { hondaAutosAtom, type HondaAuto } from "../../atoms/hondaAutosAtom";

export const useHondaAutoDetailsAtom = () => {
  const [hondaAutos, setHondaAutos] = useAtom(hondaAutosAtom);

  const getHondaAutoById = useCallback(
    (autoId: number) => {
      return hondaAutos.find((auto) => auto.id === autoId);
    },
    [hondaAutos]
  );

  const deleteHondaAutoAttribute = useCallback(
    (autoId: number, key: string) => {
      setHondaAutos((prevAutos) =>
        prevAutos.map((auto) => {
          if (auto.id !== autoId) return auto;
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { [key as keyof HondaAuto]: _, ...rest } = auto;
          return rest as HondaAuto;
        })
      );
    },
    [setHondaAutos]
  );

  const addOrEditHondaAutoAttribute = useCallback(
    (
      autoId: number,
      key: keyof HondaAuto | (string & {}),
      value: HondaAuto[keyof HondaAuto]
    ) => {
      setHondaAutos((prevAutos) =>
        prevAutos.map((auto) => {
          if (auto.id !== autoId) return auto;
          return { ...auto, [key]: value };
        })
      );
    },
    [setHondaAutos]
  );

  return {
    getHondaAutoById,
    deleteHondaAutoAttribute,
    addOrEditHondaAutoAttribute,
  };
};
