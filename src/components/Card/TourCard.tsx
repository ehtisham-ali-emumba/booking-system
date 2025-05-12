import React from "react";
import {
  DollarOutlined,
  ClockCircleOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import { Button } from "../Button";
import { getPriceLabel } from "../../utils/priceUtils";
import DeleteConfirmationModal from "../ConfirmationModal";
import {
  StyledCard,
  CardTitle,
  CardDescription,
  MetaInfoContainer,
  MetaInfo,
  MetaText,
  HoverButton,
  BookingActionsContainer,
} from "./elements";

interface TourCardProps {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  description: string;
  price?: string;
  duration?: string;
  className?: string;
  onClick?: () => void;
  hasBooking?: boolean;
  onDeleteBooking?: () => void;
  onUpdateBooking?: () => void;
}
const TourCard: React.FC<TourCardProps> = ({
  imageSrc,
  imageAlt = "TourCard Image",
  title,
  description,
  price,
  duration,
  className,
  onClick,
  hasBooking,
  onDeleteBooking = () => {},
  onUpdateBooking = () => {},
}) => {
  const onViewBookingClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClick?.();
  };
  const onUpdateBookingClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onUpdateBooking?.();
  };
  return (
    <StyledCard
      hoverable={false}
      cover={<img alt={imageAlt} src={imageSrc} />}
      className={className}
      onClick={onClick}
    >
      <CardTitle level={4}>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>

      {hasBooking ? (
        // New layout when booking exists
        <BookingActionsContainer>
          <DeleteConfirmationModal
            onConfirm={onDeleteBooking}
            message="Are you sure you want to delete this booking?"
          >
            {(onOpen) => (
              <Button
                variant="icon"
                shape="circle"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpen(); // Open the modal
                }}
                icon={<DeleteOutlined style={{ fontSize: 26 }} />}
              />
            )}
          </DeleteConfirmationModal>

          <Button variant="primary" onClick={onViewBookingClick}>
            Details
          </Button>
          <Button variant="primary" onClick={onUpdateBookingClick}>
            Update
          </Button>
        </BookingActionsContainer>
      ) : (
        <>
          <MetaInfoContainer>
            {price && (
              <MetaInfo>
                <DollarOutlined />
                <MetaText>{getPriceLabel(price)}</MetaText>
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
        </>
      )}
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
