import { Flex } from "antd";
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
import { Link, useParams } from "react-router-dom";

import {
  MuseumContainer,
  InfoRow,
  MuseumTitle,
  InfoIcon,
  PriceText,
  InfoText,
  Padder,
  Wrapper,
  DescriptionText,
} from "./elements";
import { useTourQueryById } from "../../hooks/queries";
import Loader from "../../components/Loader";
import ErrorContainer from "../../components/ErrorContainer";
import type { Tour } from "../../types";
import { getPriceLabel } from "../../utils/priceUtils";

const HeaderTexts = ({ tour }: { tour: Tour }) => {
  return (
    <MuseumContainer>
      <MuseumTitle>{tour.name}</MuseumTitle>

      <Flex>
        <InfoRow>
          <InfoIcon>
            <EnvironmentOutlined />
          </InfoIcon>
          <InfoText>{tour.city}</InfoText>
        </InfoRow>

        <InfoRow>
          <InfoIcon>
            <DollarOutlined />
          </InfoIcon>
          <PriceText>{getPriceLabel(tour.price)}</PriceText>
        </InfoRow>

        <InfoRow>
          <InfoIcon>
            <ClockCircleOutlined />
          </InfoIcon>
          <InfoText>{tour.duration}</InfoText>
        </InfoRow>
      </Flex>
    </MuseumContainer>
  );
};

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
  const { tourId } = useParams<{ tourId: string }>();
  const { data: tour, isLoading, error } = useTourQueryById(tourId!);

  if (isLoading) return <Loader />;
  if (error) return <ErrorContainer message={error.message} />;
  if (!tour) return null;

  return (
    <Layout style={{ backgroundColor: "transparent" }}>
      <Wrapper>
        <Header style={{ backgroundColor: "transparent" }}>
          <HeaderTexts tour={tour} />
        </Header>
        <Spacer marginTop="80px" />
        <ImageGallery tour={tour} />
        <Spacer marginTop="40px" />
        <Description />
        <Padder>
          <WhatsIncluded />
        </Padder>
        <Flex justify="center">
          <Link to={`/book/tour/${tourId}`}>
            <Button style={{ alignSelf: "center", width: "200px" }}>
              Book Now
            </Button>
          </Link>
        </Flex>
      </Wrapper>
      <Spacer marginTop="80px" />
    </Layout>
  );
};

export default TourDetails;
