import { Button, Spacer } from "../../components";
import { ContentWrapper } from "../../styles";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { colors } from "../../constants";
import {
  Box,
  Container,
  CarContainer,
  CarImage,
  CarImageContainer,
  CarInfo,
  CarSpecsContainer,
  CarTitle,
  SpecsTitle,
  Manufacturer,
  ManufacturerName,
  RatingContainer,
  StarRating,
  ReviewCount,
  Price,
  CurrencySymbol,
  SpecItem,
  SpecLabel,
  SpecValue,
  SpecActions,
  Divider,
  Row,
} from "./elements";

const CarSpecsList = ({ carSpecs }) => {
  return (
    <CarSpecsContainer>
      <Row>
        <SpecsTitle>Car Specifications</SpecsTitle>
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

const CarDetails = () => {
  const specifications = [
    { label: "Model", value: "Toyota Camry XSE" },
    { label: "Year", value: "2023" },
    { label: "Fuel Type", value: "Hybrid (Petrol + Electric)" },
    { label: "Engine", value: "2.5L 4-Cylinder" },
    { label: "Transmission", value: "CVT Automatic" },
    { label: "Drive Type", value: "Front-Wheel Drive" },
    { label: "Mileage", value: "16,850 km" },
    { label: "Color", value: "Celestial Silver Metallic" },
  ];

  return <CarSpecsList carSpecs={specifications} />;
};

const CarHeader = () => {
  return (
    <CarContainer>
      <CarImageContainer>
        <CarImage
          src="https://cdn.pixabay.com/photo/2019/08/04/23/28/honda-4384888_1280.jpg"
          alt="The Great Moghuls car"
        />
      </CarImageContainer>

      <CarInfo>
        <CarTitle>The Great Moghuls - Art, Architecture And Opulence</CarTitle>
        <Manufacturer>
          By: <ManufacturerName href="#">Susan Stronge</ManufacturerName>
        </Manufacturer>

        <RatingContainer>
          <StarRating>★★★★★</StarRating>
          <ReviewCount>(0)</ReviewCount>
        </RatingContainer>

        <Price>
          <CurrencySymbol>Rs</CurrencySymbol> 19,995.00
        </Price>
      </CarInfo>
    </CarContainer>
  );
};

export const HondaAutoDetails = () => {
  return (
    <Container>
      <ContentWrapper>
        <Box>
          <Spacer marginTop="80px" />
          <CarHeader />
          <Spacer marginTop="20px" />
          <CarDetails />
        </Box>
      </ContentWrapper>
    </Container>
  );
};
