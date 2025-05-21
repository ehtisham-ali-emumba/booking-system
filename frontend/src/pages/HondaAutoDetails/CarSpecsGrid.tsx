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
import {
  FixedSizeList as List,
  type ListChildComponentProps,
} from "react-window";

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

  const Row = ({ index, style }: ListChildComponentProps) => {
    const spec = carSpecs[index];
    return (
      <div style={style} key={spec.label}>
        <SpecItem>
          <SpecLabel>{spec.label}</SpecLabel>
          <SpecValue>{spec.value}</SpecValue>
          <SpecActions>
            <EditOutlined
              style={editIconStyle}
              onClick={() => handleAddEditClick(true, spec.label, spec.value!)}
            />
            <DeleteOutlined
              style={deleteIconStyle}
              onClick={() => handleDeleteClick(spec.label)}
            />
          </SpecActions>
        </SpecItem>
        {index < carSpecs.length - 1 && <Divider />}
      </div>
    );
  };

  return (
    <List height={350} itemCount={carSpecs.length} itemSize={56} width="100%">
      {Row}
    </List>
  );
};
