import React, { useCallback, useState } from "react";
import { Button, Spacer } from "../../components";
import { PlusOutlined } from "@ant-design/icons";
import { colors, uiStrings } from "../../constants";
import { CarSpecsContainer, SpecsTitle, Row } from "./elements";
import type { HondaAuto } from "../../atoms/hondaAutosAtom";
import { useHondaAutoDetailsAtom } from "../../hooks/atoms";
import { ModifyCarSpecModal } from "./ModifyCarSpecModal";
import { ConfirmationModal } from "../../components/ConfirmationModal";
import { CarSpecsGrid } from "./CarSpecsGrid";

type CarSpecsType = {
  auto: HondaAuto;
};

export const CarSpecifications: React.FC<CarSpecsType> = ({ auto }) => {
  const { id } = auto;
  const { addOrEditHondaAutoAttribute, deleteHondaAutoAttribute } =
    useHondaAutoDetailsAtom();

  const [modifyModalOpen, setModifyModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteSelectedAttr, setDeleteSelectedAttr] = useState<string | null>(
    null
  );
  const [editingKey, setEditingKey] = useState<string>("");
  const [editingValue, setEditingValue] = useState<string | number>("");
  const [isEditMode, setIsEditMode] = useState(false);

  const handleAddEditClick = useCallback(
    (isEditMode?: boolean, key = "", value?: string | number) => {
      setEditingKey(key);
      setEditingValue(value ?? "");
      setIsEditMode(!!isEditMode);
      setModifyModalOpen(true);
    },
    []
  );

  const onCloseModifyModal = useCallback(() => {
    setModifyModalOpen(false);
    setEditingKey("");
    setEditingValue("");
  }, []);

  const handleModifyModalSubmit = useCallback(
    (key: string, value: string) => {
      addOrEditHondaAutoAttribute(id, key, value);
      onCloseModifyModal();
    },
    [id, addOrEditHondaAutoAttribute, onCloseModifyModal]
  );

  const handleDeleteClick = useCallback((key: string) => {
    setDeleteSelectedAttr(key);
    setDeleteModalOpen(true);
  }, []);

  const onCloseDeleteModal = useCallback(() => {
    setDeleteModalOpen(false);
    setDeleteSelectedAttr(null);
  }, []);

  const handleDeleteSubmit = useCallback(() => {
    deleteHondaAutoAttribute(id, deleteSelectedAttr!);
    onCloseDeleteModal();
  }, [deleteHondaAutoAttribute, id, deleteSelectedAttr, onCloseDeleteModal]);

  return (
    <CarSpecsContainer>
      <Row>
        <SpecsTitle>{uiStrings.carSpecs}</SpecsTitle>
        <Button variant="icon-transparent" onClick={() => handleAddEditClick()}>
          <PlusOutlined style={{ color: colors.black, fontSize: 20 }} />
        </Button>
      </Row>
      <Spacer marginTop="20px" />
      <CarSpecsGrid
        auto={auto}
        handleAddEditClick={handleAddEditClick}
        handleDeleteClick={handleDeleteClick}
      />
      <ModifyCarSpecModal
        open={modifyModalOpen}
        initialKey={editingKey}
        initialValue={editingValue}
        onSubmit={handleModifyModalSubmit}
        onCancel={onCloseModifyModal}
        isEditMode={isEditMode}
      />
      <ConfirmationModal
        open={deleteModalOpen}
        onConfirm={handleDeleteSubmit}
        onCancel={onCloseDeleteModal}
        message={uiStrings.deleteSpecConfirmation}
      />
    </CarSpecsContainer>
  );
};
