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
import { uiStrings } from "../../constants";

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
  const durationNumber = parseInt(duration || "0", 10);
  const canDelete = durationNumber > 3;
  const conditionalText = canDelete
    ? uiStrings.wantToDeleteBooking
    : uiStrings.deleteLimitText({ title });

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
            message={conditionalText}
            hideConfirmButton={!canDelete}
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
            {uiStrings.details}
          </Button>
          <Button variant="primary" onClick={onUpdateBookingClick}>
            {uiStrings.update}
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
                <MetaText>
                  {duration} {uiStrings.days}
                </MetaText>
              </MetaInfo>
            )}
          </MetaInfoContainer>
          <HoverButton>{uiStrings.viewDetails}</HoverButton>
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
