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
  CurrencySymbol,
} from "./elements";
import { useParams } from "react-router-dom";
import ErrorContainer from "../../components/ErrorContainer";
import { useHondaAutoDetailsAtom } from "../../hooks/atoms";
import type { HondaAuto } from "../../atoms/hondaAutosAtom";
import { CarSpecifications } from "./CarSpecifications";
import {
  AutoMetaInfoContainer,
  AutoMetaText,
} from "../../components/Card/elements";
import { useMemo } from "react";
import { useBrandsAtom } from "../../hooks/atoms/useBrandsAtom";
import { checkBrandExists } from "../Brands/utils";

const CarHeader: React.FC<{ auto: HondaAuto }> = ({ auto }) => {
  const { brandId, name, modelYear, price, imageSrc, engine, fuelType, color } =
    auto;
  const { getBrandById } = useBrandsAtom();
  const brand = getBrandById(brandId);
  const brandName = brand?.name || uiStrings.unknownBrand;

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
          <ManufacturerName to={`/brands/${brandId}/autos`}>
            {brandName}
          </ManufacturerName>
        </Manufacturer>

        <RatingContainer>
          <StarRating>★★★★★</StarRating>
          <ReviewCount>(5)</ReviewCount>
        </RatingContainer>
        <AutoMetaInfoContainer>
          <AutoMetaText>{engine}</AutoMetaText>
          <AutoMetaText>{fuelType}</AutoMetaText>
          <AutoMetaText>{color}</AutoMetaText>
        </AutoMetaInfoContainer>

        <CurrencySymbol>$ {price}</CurrencySymbol>
      </CarInfo>
    </CarContainer>
  );
};

export const AutoDetails = () => {
  const { autoId, brandId } = useParams<{ autoId: string; brandId: string }>();

  const { brands } = useBrandsAtom();
  const { getHondaAutoById } = useHondaAutoDetailsAtom();
  const autoDetails = getHondaAutoById(Number(autoId), Number(brandId));
  const isBrandExists = useMemo(
    () => checkBrandExists(Number(brandId), brands),
    [brands, brandId]
  );

  if (!isBrandExists)
    return <ErrorContainer message={uiStrings.brandNotExists} />;

  if (!autoDetails) return <ErrorContainer message={uiStrings.autoNotFound} />;

  return (
    <Container>
      <ContentWrapper>
        <Box>
          <Spacer marginTop="80px" />
          <CarHeader auto={autoDetails} />
          <Spacer marginTop="20px" />
          <CarSpecifications auto={autoDetails} />
          <div style={{ minHeight: "50px" }} />
        </Box>
      </ContentWrapper>
    </Container>
  );
};
