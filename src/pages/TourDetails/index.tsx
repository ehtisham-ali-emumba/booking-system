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
  Container2,
  InfoRow,
  TourTitle,
  InfoIcon,
  PriceText,
  InfoText,
  Padder,
  Wrapper,
  DescriptionText,
  InfoBox,
} from "./elements";
import { useTourQueryById } from "../../hooks/queries";
import Loader from "../../components/Loader";
import ErrorContainer from "../../components/ErrorContainer";
import type { Tour } from "../../types";
import { getPriceLabel } from "../../utils/priceUtils";
import ItinerarySchedule from "./ItinerarySchedule";
import { strings } from "../../constants/strings";

const HeaderTexts = ({ tour }: { tour: Tour }) => {
  return (
    <Container2>
      <TourTitle>{tour.name}</TourTitle>
      <InfoBox>
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
          <InfoText>{tour.duration} days</InfoText>
        </InfoRow>
      </InfoBox>
    </Container2>
  );
};

const Description = () => {
  return (
    <>
      <DescriptionText>{strings.tourDesc}</DescriptionText>
      <DescriptionText>{strings.tourDesc}</DescriptionText>
      <DescriptionText>{strings.tourDesc}</DescriptionText>
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
          <ItinerarySchedule />
        </Padder>
        <Flex justify="center">
          <Link to={`/book/tour/${tourId}`}>
            <Button style={{ alignSelf: "center", width: "200px" }}>
              {strings.bookNow}
            </Button>
          </Link>
        </Flex>
      </Wrapper>
      <Spacer marginTop="80px" />
    </Layout>
  );
};

export default TourDetails;
