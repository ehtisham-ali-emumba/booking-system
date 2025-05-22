import React, { useCallback, useMemo, useState } from "react";
import { Button, Input, Spacer } from "../../components";
import { uiStrings } from "../../constants/uiStrings";
import { Box, Container, InputContainer } from "./elements";
import { PlusOutlined } from "@ant-design/icons";
import { colors } from "../../constants";
import { useHondaAutosAtom } from "../../hooks/atoms/useHondaAutosAtom";
import { CarUpdateModal, type CarUpdateFormValues } from "./CarUpdateModal";
import { CarGrid } from "./CarGrid";
import { ConfirmationModal } from "../../components/ConfirmationModal";
import { useParams } from "react-router-dom";
import { useBrandsAtom } from "../../hooks/atoms/useBrandsAtom";
import { checkBrandExists } from "../Brands/utils";
import ErrorContainer from "../../components/ErrorContainer";
import { searchAutosByNameYearAndBodyType } from "./utils";

export const HondaAutos = () => {
  const { brandId } = useParams<{ brandId: string }>();

  const [search, setSearch] = useState("");
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editingCarId, setEditingCarId] = useState<number | null>(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteCarId, setDeleteCarId] = useState<number | null>(null);

  const { hondaAutos } = useHondaAutosAtom();
  const { brands } = useBrandsAtom();
  const { addHondaAuto, updateHondaAuto, deleteHondaAuto } =
    useHondaAutosAtom();

  const filteredAutosBySearch = useMemo(
    () => searchAutosByNameYearAndBodyType(hondaAutos, search),
    [search, hondaAutos]
  );

  const handleEditClick = useCallback((carId: number) => {
    setEditingCarId(carId);
    setEditModalOpen(true);
  }, []);

  const onCloseEditModal = useCallback(() => {
    setEditingCarId(null);
    setEditModalOpen(false);
  }, []);

  const handleCarUpdateSubmit = useCallback(
    (values: CarUpdateFormValues) => {
      updateHondaAuto(values);
      onCloseEditModal();
    },
    [updateHondaAuto, onCloseEditModal]
  );

  const handleDeleteClick = useCallback((carId: number) => {
    setDeleteCarId(carId);
    setDeleteModalOpen(true);
  }, []);

  const onCloseDeleteModal = useCallback(() => {
    setDeleteModalOpen(false);
    setDeleteCarId(null);
  }, []);

  const handleDeleteSubmit = useCallback(() => {
    deleteHondaAuto(deleteCarId!);
    onCloseDeleteModal();
  }, [deleteHondaAuto, deleteCarId, onCloseDeleteModal]);

  const isBrandExists = useMemo(
    () => checkBrandExists(Number(brandId), brands),
    [brands, brandId]
  );

  if (!isBrandExists)
    return <ErrorContainer message={uiStrings.brandNotExists} />;

  return (
    <Container>
      <Box>
        <Spacer marginTop="80px" />
        <InputContainer>
          <Input
            inputProps={{
              placeholder: uiStrings.carSearchPlaceholder,
              style: { maxWidth: "280px" },
              value: search,
              onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                setSearch(e.target.value),
            }}
          />
          <Button
            variant="icon-transparent"
            onClick={() => addHondaAuto(Number(brandId))}
          >
            <PlusOutlined style={{ color: colors.accentOrange }} />
          </Button>
        </InputContainer>
        <CarGrid
          hondaAutos={filteredAutosBySearch}
          handleEditClick={handleEditClick}
          handleDeleteClick={handleDeleteClick}
        />
      </Box>
      <CarUpdateModal
        open={editModalOpen}
        editingCarId={editingCarId}
        onOk={handleCarUpdateSubmit}
        onCancel={onCloseEditModal}
      />
      <ConfirmationModal
        open={deleteModalOpen}
        onConfirm={handleDeleteSubmit}
        onCancel={onCloseDeleteModal}
        message={uiStrings.deleteAutoConfirmation}
      />
    </Container>
  );
};
