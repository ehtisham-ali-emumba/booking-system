import React from "react";
import { BaseLink } from "../StyledComponents";
import {
  StyledBaseCard,
  BaseCardImageWrapper,
  BaseCardImage,
  BaseCardContent,
  BaseCardUpperLeft,
  BaseCardUpperRight,
  FooterWrapper,
} from "./elements";
import type { BaseCardProps } from "./type";

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
        imageHeight={imageHeight}
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
