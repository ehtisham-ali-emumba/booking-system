import React, { useCallback, useState } from "react";
import { Button, Input, Spacer } from "../../components";
import { uiStrings } from "../../constants/uiStrings";
import { Box, Container, InputContainer } from "./elements";
import { PlusOutlined } from "@ant-design/icons";
import { colors } from "../../constants";
import { useHondaAutosAtom } from "../../hooks/atoms/useHondaAutosAtom";
import { CarUpdateModal, type CarUpdateFormValues } from "./CarUpdateModal";
import { CarGrid } from "./CardGrid";

export const HondaAutos = () => {
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingCarId, setEditingCarId] = useState<number | null>(null);

  const { addHondaAuto, updateHondaAuto } = useHondaAutosAtom();

  const handleEditClick = useCallback((carId: number) => {
    setEditingCarId(carId);
    setModalOpen(true);
  }, []);

  const handleCarUpdateSubmit = (values: CarUpdateFormValues) => {
    updateHondaAuto(values);
  };

  return (
    <Container>
      <Box>
        <Spacer marginTop="80px" />
        <InputContainer>
          <Input
            inputProps={{
              placeholder: uiStrings.carSearchPlaceholder,
              style: { maxWidth: "320px" },
              value: search,
              onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                setSearch(e.target.value),
            }}
          />
          <Button variant="icon-transparent" onClick={addHondaAuto}>
            <PlusOutlined style={{ color: colors.accentOrange }} />
          </Button>
        </InputContainer>
        <CarGrid handleEditClick={handleEditClick} />
      </Box>
      <CarUpdateModal
        open={modalOpen}
        editingCarId={editingCarId}
        onOk={handleCarUpdateSubmit}
        onCancel={() => setModalOpen(false)}
      />
    </Container>
  );
};
