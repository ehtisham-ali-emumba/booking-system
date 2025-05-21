import React, { useCallback, useState } from "react";
import { Button, Spacer } from "../../components";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { colors, uiStrings } from "../../constants";
import {
  CarSpecsContainer,
  SpecsTitle,
  SpecItem,
  SpecLabel,
  SpecValue,
  SpecActions,
  Divider,
  Row,
} from "./elements";
import type { HondaAuto } from "../../atoms/hondaAutosAtom";
import { getHondaAutoSpecs } from "./utils";
import { useHondaAutoDetailsAtom } from "../../hooks/atoms";
import { ModifyCarSpecModal } from "./ModifyCarSpecModal";

type CarSpecsType = {
  auto: HondaAuto;
};

export const CarSpecifications: React.FC<CarSpecsType> = ({ auto }) => {
  const { id } = auto;
  const { addOrEditHondaAutoAttribute, deleteHondaAutoAttribute } =
    useHondaAutoDetailsAtom();

  const [modalOpen, setModalOpen] = useState(false);
  const [editingKey, setEditingKey] = useState<string>("");
  const [editingValue, setEditingValue] = useState<string | number>("");
  const [isEditMode, setIsEditMode] = useState(false);

  const carSpecs = getHondaAutoSpecs(auto);

  const handleAddEditClick = useCallback(
    (isEditMode?: boolean, key = "", value?: string | number) => {
      setEditingKey(key);
      setEditingValue(value ?? "");
      setIsEditMode(!!isEditMode);
      setModalOpen(true);
    },
    []
  );

  const handleModalOk = useCallback(
    (key: string, value: string) => {
      addOrEditHondaAutoAttribute(id, key, value);
      setModalOpen(false);
    },
    [addOrEditHondaAutoAttribute]
  );

  return (
    <CarSpecsContainer>
      <Row>
        <SpecsTitle>{uiStrings.carSpecs}</SpecsTitle>
        <Button variant="icon-transparent" onClick={() => handleAddEditClick()}>
          <PlusOutlined style={{ color: colors.black, fontSize: 20 }} />
        </Button>
      </Row>
      <Spacer marginTop="20px" />
      {carSpecs.map((spec, index) => (
        <div key={spec.label}>
          <SpecItem>
            <SpecLabel>{spec.label}</SpecLabel>
            <SpecValue>{spec.value}</SpecValue>
            <SpecActions>
              <EditOutlined
                style={{ fontSize: 20 }}
                onClick={() =>
                  handleAddEditClick(true, spec.label, spec.value!)
                }
              />
              <DeleteOutlined
                style={{ fontSize: 20, color: "red" }}
                onClick={() => deleteHondaAutoAttribute(auto.id, spec.label)}
              />
            </SpecActions>
          </SpecItem>
          {index < carSpecs.length - 1 && <Divider />}
        </div>
      ))}
      <ModifyCarSpecModal
        open={modalOpen}
        initialKey={editingKey}
        initialValue={editingValue}
        onSubmit={handleModalOk}
        onCancel={() => setModalOpen(false)}
        isEditMode={isEditMode}
      />
    </CarSpecsContainer>
  );
};
