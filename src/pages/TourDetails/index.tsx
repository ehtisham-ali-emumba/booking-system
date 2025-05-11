import styled from "styled-components";
import { Typography, Flex } from "antd";
import {
  EnvironmentOutlined,
  ClockCircleOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import { Header, Layout } from "../../styles";
import { ImageGallery } from "./ImageGallery";
import { Spacer } from "../../components/Spacer";
import { Button } from "../../components";
import WhatsIncluded from "./WhatsIncluded";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

const Container = styled.div`
  margin-top: 100px;
`;

const Padder = styled.div`
  padding: 20px;
`;
const MuseumContainer = styled.div``;

const MuseumTitle = styled(Title)`
  color: #1c223b;
  font-weight: 700;
  font-size: 42px;
  line-height: 1.2;
  margin-bottom: 24px !important;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  margin-left: 32px;
  margin-bottom: 16px;
`;

const InfoIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6e7490;
  background-color: rgb(245, 245, 247);
  border-radius: 50%;
  padding: 4px;
  font-size: 18px;
`;

const InfoText = styled(Text)`
  color: #6e7490;
  font-size: 16px;
  margin-left: 4px;
`;

const PriceText = styled(Text)`
  color: #6e7490;
  font-size: 16px;
`;

// Museum text component
const HeaderTexts = () => {
  return (
    <MuseumContainer>
      <MuseumTitle>Pérez Art Museum Miami</MuseumTitle>

      <Flex>
        <InfoRow>
          <InfoIcon>
            <EnvironmentOutlined />
          </InfoIcon>
          <InfoText>Miami</InfoText>
        </InfoRow>

        <InfoRow>
          <InfoIcon>
            <DollarOutlined />
          </InfoIcon>
          <PriceText>$50 - $200</PriceText>
        </InfoRow>

        <InfoRow>
          <InfoIcon>
            <ClockCircleOutlined />
          </InfoIcon>
          <InfoText>3 Days</InfoText>
        </InfoRow>
      </Flex>
    </MuseumContainer>
  );
};

const DescriptionText = styled.p`
  text-align: center;
  margin: 0 20px;
  font-size: 16px;
  line-height: 1.5;
`;

const Description = () => {
  return (
    <>
      <DescriptionText>
        The Pérez Art Museum Miami (PAMM) is a modern and contemporary art
        museum located in Miami, Florida. It is dedicated to collecting and
        exhibiting international art of the 20th and 21st centuries, with a
        particular focus on works from the Americas, Europe, and Africa.
      </DescriptionText>
      <DescriptionText>
        The Pérez Art Museum Miami (PAMM) is a modern and contemporary art
        museum located in Miami, Florida. It is dedicated to collecting and
        exhibiting international art of the 20th and 21st centuries, with a
        particular focus on works from the Americas, Europe, and Africa.
      </DescriptionText>
      <DescriptionText>
        The Pérez Art Museum Miami (PAMM) is a modern and contemporary art
        museum located in Miami, Florida. It is dedicated to collecting and
        exhibiting international art of the 20th and 21st centuries, with a
        particular focus on works from the Americas, Europe, and Africa.
      </DescriptionText>
    </>
  );
};

const TourDetails = () => {
  return (
    <Layout style={{ backgroundColor: "transparent" }}>
      <Container>
        <Header style={{ backgroundColor: "transparent" }}>
          <HeaderTexts />
        </Header>
        <Spacer marginTop="80px" />
        <ImageGallery />
        <Spacer marginTop="40px" />
        <Description />
        <Padder>
          <WhatsIncluded />
        </Padder>
        <Flex justify="center">
          <Link to="/book/tour">
            <Button style={{ alignSelf: "center", width: "200px" }}>
              Book Now
            </Button>
          </Link>
        </Flex>
      </Container>
      <Spacer marginTop="80px" />
    </Layout>
  );
};

export default TourDetails;
