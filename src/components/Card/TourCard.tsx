import React from "react";
import { Card, Typography } from "antd";
import { DollarOutlined, ClockCircleOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { Button } from "../Button";
import { colors } from "../../constants";

const { Title, Paragraph, Text } = Typography;

// Define the props interface for our card component
interface AttractionCardProps {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  description: string;
  price?: string;
  duration?: string;
  className?: string;
  onClick?: () => void;
}

const StyledCard = styled(Card)`
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
  height: 100%;
  width: 350px;

  .ant-card-cover img {
    height: 240px;
  }
`;

const CardTitle = styled(Title)`
  margin-top: 0 !important;
  margin-bottom: 4px !important;
`;

const CardDescription = styled(Paragraph)`
  color: ${colors.text.secondary};
  font-size: 16px;
  margin-bottom: 16px !important;
`;

const MetaInfoContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 23px;
  ${StyledCard}:hover & {
    display: none;
  }
`;

const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.background.badge};
  padding: 8px 16px;
  border-radius: 100px;
  gap: 8px;
`;

const MetaText = styled(Text)`
  color: ${colors.text.secondary};
  font-size: 16px;
  font-weight: 500;
`;

const HoverButton = styled(Button)`
  display: none;
  width: 100%;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: #147dd6;
  }

  ${StyledCard}:hover & {
    display: block;
  }
`;

// Main Component
const TourCard: React.FC<AttractionCardProps> = ({
  imageSrc,
  imageAlt = "Attraction",
  title,
  description,
  price,
  duration,
  className,
  onClick,
}) => {
  return (
    <StyledCard
      hoverable={false}
      cover={<img alt={imageAlt} src={imageSrc} />}
      className={className}
      onClick={onClick}
    >
      <CardTitle level={4}>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>

      <MetaInfoContainer>
        {price && (
          <MetaInfo>
            <DollarOutlined />
            <MetaText>{price}</MetaText>
          </MetaInfo>
        )}

        {duration && (
          <MetaInfo>
            <ClockCircleOutlined />
            <MetaText>{duration}</MetaText>
          </MetaInfo>
        )}
      </MetaInfoContainer>
      <HoverButton>View Details</HoverButton>
    </StyledCard>
  );
};

// Grid layout for displaying multiple cards
const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
`;

export { TourCard, CardWrapper };
