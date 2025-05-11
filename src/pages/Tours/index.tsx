import { Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { TourCard, CardWrapper } from "../../components/Card";
import { Container } from "../../styles";
import styled from "styled-components";
import { attractions } from "./utils";

const Wrapper = styled(Container)`
  justify-content: flex-start;
`;
const { Title } = Typography;
export default function Tours() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div
        style={{
          marginTop: "150px",
          width: "100%",
          marginRight: "32px",
          paddingBottom: "82px",
        }}
      >
        <Title style={{ textAlign: "center", marginBottom: "40px" }}>
          Top Destinations At “Miami”
        </Title>
        <CardWrapper>
          {[...attractions, ...attractions, ...attractions].map(
            (attraction) => (
              <TourCard
                key={attraction.id}
                imageSrc={attraction.imageSrc}
                title={attraction.title}
                description={attraction.description}
                price={attraction.price}
                duration={attraction.duration}
                onClick={() => navigate(`/tour/${attraction.id}`)}
              />
            )
          )}
        </CardWrapper>
      </div>
    </Wrapper>
  );
}
