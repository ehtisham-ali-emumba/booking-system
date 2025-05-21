import { useAtom } from "jotai";
import { useCallback } from "react";
import { hondaAutosAtom, type HondaAuto } from "../../atoms/hondaAutosAtom";
import { hondaAutoData } from "../../pages/HondaAutos/utils";

export const useHondaAutosAtom = () => {
  const [hondaAutos, setHondaAutos] = useAtom(hondaAutosAtom);

  const deleteHondaAuto = useCallback(
    (id: number) => {
      const updatedHondaAutos = hondaAutos.filter((auto) => auto.id !== id);
      setHondaAutos(updatedHondaAutos);
    },
    [hondaAutos]
  );

  const addHondaAuto = useCallback(() => {
    setHondaAutos((prevHondaAutos) => [
      ...prevHondaAutos,
      { ...hondaAutoData[0], id: prevHondaAutos.length + 1 },
    ]);
  }, [setHondaAutos]);

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

  return { hondaAutos, deleteHondaAuto, addHondaAuto, updateHondaAuto };
};
