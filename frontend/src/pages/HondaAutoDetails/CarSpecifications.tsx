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

export const CarSpecifications: React.FC<{ auto: HondaAuto }> = ({ auto }) => {
  const carSpecs = getHondaAutoSpecs(auto);

  return (
    <CarSpecsContainer>
      <Row>
        <SpecsTitle>{uiStrings.carSpecs}</SpecsTitle>
        <Button variant="icon-transparent">
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
              <EditOutlined style={{ fontSize: 20 }} />
              <DeleteOutlined style={{ fontSize: 20, color: "red" }} />
            </SpecActions>
          </SpecItem>
          {index < carSpecs.length - 1 && <Divider />}
        </div>
      ))}
    </CarSpecsContainer>
  );
};
