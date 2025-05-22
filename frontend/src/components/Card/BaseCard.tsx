import React from "react";
import {
  StyledBaseCard,
  BaseCardImageWrapper,
  BaseCardImage,
  BaseCardContent,
  BaseCardUpperLeft,
  BaseCardUpperRight,
  FooterWrapper,
} from "./elements";
import { BaseLink } from "../StyledComponents";

interface BaseCardProps {
  imageSrc: string;
  onClick?: () => void;
  imageHeight: number;
  dimensions: {
    width: number;
    height: number;
  };
  imageStyles?: React.CSSProperties;
  footerStyles?: React.CSSProperties;
  renderLowerLeft?: () => React.ReactNode;
  renderLowerRight?: () => React.ReactNode;
  renderUpperLeft?: () => React.ReactNode;
  renderUpperRight?: () => React.ReactNode;
  renderContent?: () => React.ReactNode;
  url: string;
}

export const BaseCard: React.FC<BaseCardProps> = ({
  imageSrc,
  onClick,
  imageHeight = 200,
  dimensions = {
    width: 300,
    height: 415,
  },
  imageStyles = {},
  footerStyles = {},
  renderLowerLeft = () => null,
  renderLowerRight = () => null,
  renderUpperLeft = () => null,
  renderUpperRight = () => null,
  renderContent = () => null,
  url,
}) => {
  return (
    <BaseLink to={url} onClick={onClick}>
      <StyledBaseCard
        dimensions={dimensions}
        hoverable={false}
        cover={
          <BaseCardImageWrapper imageHeight={imageHeight}>
            <BaseCardImage src={imageSrc} style={imageStyles} />
          </BaseCardImageWrapper>
        }
      >
        <BaseCardContent>{renderContent()}</BaseCardContent>
        <BaseCardUpperLeft>{renderUpperLeft()}</BaseCardUpperLeft>
        <BaseCardUpperRight>{renderUpperRight()}</BaseCardUpperRight>
        <FooterWrapper style={footerStyles}>
          {renderLowerLeft()}
          {renderLowerRight()}
        </FooterWrapper>
      </StyledBaseCard>
    </BaseLink>
  );
};
