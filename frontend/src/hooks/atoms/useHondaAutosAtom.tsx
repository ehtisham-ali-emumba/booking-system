import { useAtom } from "jotai";
import { useCallback } from "react";
import { hondaAutosAtom, type HondaAuto } from "../../atoms/hondaAutosAtom";
import { hondaAutosMoreData } from "../../pages/HondaAutos/utils";

export const useHondaAutosAtom = () => {
  const [hondaAutos, setHondaAutos] = useAtom(hondaAutosAtom);

  const deleteHondaAuto = useCallback(
    (id: number) => {
      const updatedHondaAutos = hondaAutos.filter((auto) => auto.id !== id);
      setHondaAutos(updatedHondaAutos);
    },
    [hondaAutos]
  );

  const deleteAutosByBrandId = useCallback(
    (brandId: number) => {
      const updatedHondaAutos = hondaAutos.filter(
        (auto) => auto.brandId !== brandId
      );
      setHondaAutos(updatedHondaAutos);
    },
    [hondaAutos]
  );

  const addHondaAuto = useCallback(
    (brandId: number) => {
      if (isNaN(brandId)) {
        console.error("Invalid brandId:", brandId);
        return;
      }
      setHondaAutos((prevHondaAutos) => [
        ...prevHondaAutos,
        { ...hondaAutosMoreData[0], id: prevHondaAutos.length + 1, brandId },
      ]);
    },
    [setHondaAutos]
  );

  const updateHondaAuto = useCallback(
    (updatedHondaAuto: Partial<HondaAuto>) => {
      setHondaAutos((prevHondaAutos) =>
        prevHondaAutos.map((auto) =>
          auto.id === updatedHondaAuto.id
            ? { ...auto, ...updatedHondaAuto }
            : auto
        )
      );
    },
    [setHondaAutos]
  );

  return {
    hondaAutos,
    deleteHondaAuto,
    addHondaAuto,
    updateHondaAuto,
    deleteAutosByBrandId,
  };
};
