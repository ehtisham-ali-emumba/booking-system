import { Spacer } from "../../components";
import { ContentWrapper } from "../../styles";
import { uiStrings } from "../../constants";
import {
  Box,
  Container,
  CarContainer,
  CarImage,
  CarImageContainer,
  CarInfo,
  CarTitle,
  Manufacturer,
  ManufacturerName,
  RatingContainer,
  StarRating,
  ReviewCount,
  Price,
  CurrencySymbol,
} from "./elements";
import { useParams } from "react-router-dom";
import ErrorContainer from "../../components/ErrorContainer";
import { useHondaAutoDetailsAtom } from "../../hooks/atoms";
import type { HondaAuto } from "../../atoms/hondaAutosAtom";
import { CarSpecifications } from "./CarSpecifications";
import {
  HondaAutoMetaInfoContainer,
  HondaAutoMetaText,
} from "../../components/Card/elements";

const CarHeader: React.FC<{ auto: HondaAuto }> = ({ auto }) => {
  const { name, modelYear, price, imageSrc, engine, fuelType, color } = auto;
  return (
    <CarContainer>
      <CarImageContainer>
        <CarImage src={imageSrc} alt={`${name} - ${modelYear}`} />
      </CarImageContainer>

      <CarInfo>
        <CarTitle>
          {name} - {modelYear}
        </CarTitle>
        <Manufacturer>
          {uiStrings.by}:{" "}
          <ManufacturerName href="#">{uiStrings.hondaAutos}</ManufacturerName>
        </Manufacturer>

        <RatingContainer>
          <StarRating>★★★★★</StarRating>
          <ReviewCount>(5)</ReviewCount>
        </RatingContainer>
        <HondaAutoMetaInfoContainer>
          <HondaAutoMetaText>{engine}</HondaAutoMetaText>
          <HondaAutoMetaText>{fuelType}</HondaAutoMetaText>
          <HondaAutoMetaText>{color}</HondaAutoMetaText>
        </HondaAutoMetaInfoContainer>
        <Price>
          <CurrencySymbol>$ {price}</CurrencySymbol>
        </Price>
      </CarInfo>
    </CarContainer>
  );
};

export const HondaAutoDetails = () => {
  const { hondaAutoId } = useParams<{ hondaAutoId: string }>();

  const { getHondaAutoById } = useHondaAutoDetailsAtom();
  const autoDetails = getHondaAutoById(Number(hondaAutoId));

  if (!autoDetails)
    return <ErrorContainer message={uiStrings.hondaAutoNotFound} />;

  return (
    <Container>
      <ContentWrapper>
        <Box>
          <Spacer marginTop="80px" />
          <CarHeader auto={autoDetails} />
          <Spacer marginTop="20px" />
          <CarSpecifications auto={autoDetails} />
        </Box>
      </ContentWrapper>
    </Container>
  );
};
