import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import {
  SpecItem,
  SpecLabel,
  SpecValue,
  SpecActions,
  Divider,
} from "./elements";
import { deleteIconStyle, editIconStyle, getHondaAutoSpecs } from "./utils";
import type { HondaAuto } from "../../atoms/hondaAutosAtom";

type CarSpecsGridType = {
  auto: HondaAuto;
  handleAddEditClick: (
    isEditMode?: boolean,
    key?: string,
    value?: string | number
  ) => void;

  handleDeleteClick: (key: string) => void;
};
export const CarSpecsGrid: React.FC<CarSpecsGridType> = ({
  auto,
  handleAddEditClick,
  handleDeleteClick,
}) => {
  const carSpecs = getHondaAutoSpecs(auto);

  return (
    <>
      {carSpecs.map((spec, index) => (
        <div key={spec.label}>
          <SpecItem>
            <SpecLabel>{spec.label}</SpecLabel>
            <SpecValue>{spec.value}</SpecValue>
            <SpecActions>
              <EditOutlined
                style={editIconStyle}
                onClick={() =>
                  handleAddEditClick(true, spec.label, spec.value!)
                }
              />
              <DeleteOutlined
                style={deleteIconStyle}
                onClick={() => handleDeleteClick(spec.label)}
              />
            </SpecActions>
          </SpecItem>
          {index < carSpecs.length - 1 && <Divider />}
        </div>
      ))}
    </>
  );
};
