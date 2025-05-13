import styled, { css } from "styled-components";
import { Typography, Card } from "antd";
import { colors } from "../../constants";
import { sizeMobile } from "../../utils";
import { strings } from "../../constants/strings";
import { itineraryData } from "./utils";

const { Title } = Typography;

const ItinerarySchedule = () => {
  return (
    <Container>
      <Title level={2}>{strings.itinerary}</Title>
      <ScrollContainer>
        {itineraryData.map((item, index) => (
          <StyledCard key={index}>
            <CardHeader>
              <TextDay>{item!.day}</TextDay>
              <WeatherInfo>
                {item!.weatherIcon}
                <TextWeather>{item!.temperature}</TextWeather>
              </WeatherInfo>
            </CardHeader>
            <ul>
              {item!.activities.map((activity, idx) => (
                <li key={idx}>
                  <TextDetail>{activity}</TextDetail>
                </li>
              ))}
            </ul>
          </StyledCard>
        ))}
      </ScrollContainer>
    </Container>
  );
};

export default ItinerarySchedule;

// Styled Components

const TextDay = styled.span`
  font-size: 22px;
  font-weight: 500 !important;
`;
const TextWeather = styled.span`
  font-size: 22px;
  font-weight: 500 !important;
`;
const TextDetail = styled.span`
  font-size: 15px;
`;
const Container = styled.div`
  padding: 20px;
  ${sizeMobile(css`
    padding: 0px;
  `)}
`;

const ScrollContainer = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding: 16px 0;

  /* Hide scrollbar for all browsers */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, and Edge */
  }
`;

const StyledCard = styled(Card)`
  min-width: 400px;
  flex: 0 0 auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  ${sizeMobile(css`
    min-width: 300px;
  `)}
  ul {
    padding-left: 20px;
    padding-top: 16px;
    margin: 0;
  }

  li {
    margin-bottom: 8px;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WeatherInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    font-size: 28px;
    color: ${colors.neutralGray};
  }
`;
