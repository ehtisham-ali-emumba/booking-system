import React from "react";
import {
  DollarOutlined,
  ClockCircleOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Button } from "../Button";
import { getPriceLabel } from "../../utils/priceUtils";
import { ConfirmationModal } from "../ConfirmationModal";
import { uiStrings } from "../../constants";
import { truncate } from "../../utils";
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
import type { TourCardProps } from "./type";

const TourCard: React.FC<TourCardProps> = ({
  imageSrc,
  imageAlt = uiStrings.tourCardImg,
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
      <CardDescription>{truncate(description, 24, "...")}</CardDescription>
      {hasBooking ? (
        <BookingActionsContainer>
          <ConfirmationModal
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
                  onOpen();
                }}
                icon={<DeleteOutlined style={{ fontSize: 26 }} />}
              />
            )}
          </ConfirmationModal>
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

export { TourCard };
