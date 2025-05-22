import { Card, Typography } from "antd";
import styled, { css } from "styled-components";
import { Button } from "../Button";
import { colors } from "../../constants";

export const { Title, Paragraph, Text } = Typography;

export const StyledCard = styled(Card)`
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
  height: 100%;
  width: 350px;

  .ant-card-cover img {
    height: 240px;
  }
`;

export const CardTitle = styled(Title)`
  margin-top: 0 !important;
  margin-bottom: 4px !important;
`;

export const CardDescription = styled(Paragraph)`
  color: ${colors.text.secondary};
  font-size: 16px;
  margin-bottom: 16px !important;
`;

export const MetaInfoContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 25px;
  margin-bottom: 8px;
  ${StyledCard}:hover & {
    display: none;
  }
`;

export const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.background.badge};
  padding: 3px 16px;
  border-radius: 100px;
  gap: 8px;
`;

export const MetaText = styled(Text)`
  color: ${colors.text.secondary};
  font-size: 16px;
  font-weight: 500;
`;
export const UserNameText = styled(MetaText)`
  font-weight: 700;
  margin-top: 10px;
  font-size: 18px;
  color: ${colors.accentOrange};
`;

export const HoverButton = styled(Button)`
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

export const BookingActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 0 8px;
`;

export const StyledUserCard = styled(Card)`
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
  height: 100%;
  width: 280px;
  margin: 10px;
  height: 350px !important;
  .ant-card-body {
    padding: 0px !important;
  }
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const UserMetaText = styled(Text)`
  color: ${colors.text.light};
  font-size: 14px;
  font-weight: 500;
`;

export const UserMetaInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2px 16px;
  border-radius: 100px;
  gap: 8px;
`;

export const UserCardTitle = styled(Title)`
  margin-top: 0 !important;
  margin-bottom: 4px !important;
  background-color: ${colors.accentOrange};
  text-align: center;
  padding: 6px 0px;
  border-top-left-radius: 8px !important;
  border-top-right-radius: 8px !important;
  color: white !important;
`;

export const UserAvatar = styled.img`
  border-radius: 50%;
  width: 120px;
  height: 120px;
  object-fit: contain;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.16);
`;

export const UserAvatarContainer = styled.div`
  display: flex;
  margin: 20px 0px;
  height: 140px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const AutoMetaInfo = styled.div`
  display: flex;
  background-color: ${colors.background.badge};
  padding: 3px 16px;
  border-radius: 100px;
`;

export const CarChip = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: red;
  color: #fff;
  padding: 2px 12px;
  border-radius: 16px;
  font-size: 0.95rem;
  font-weight: 600;
  z-index: 2;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`;

type BaseCardType = {
  dimensions: {
    width: number;
    height: number;
  };
  imageHeight: number;
};
export const StyledBaseCard = styled(Card)<BaseCardType>`
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
  height: ${({ dimensions }) => dimensions.height}px;
  width: ${({ dimensions }) => dimensions.width}px;
  margin: 0 auto;
  position: relative;

  .ant-card-cover img {
    height: ${({ imageHeight }) => imageHeight}px;
  }
  .ant-card-body {
    padding: 8px 16px !important;
  }
`;

export const BaseCardImageWrapper = styled.div<{ imageHeight: number }>`
  position: relative;
  height: ${({ imageHeight }) => imageHeight}px;
  display: flex !important;
  align-items: center;
  flex: 1;
  justify-content: center;
  overflow: hidden;
`;
export const BaseCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  ${StyledBaseCard}:hover & {
    transform: scale(1.05);
  }
`;

export const BaseCardContent = styled.div``;

const upperText = css`
  position: absolute;
  top: 8px;
  transition: inherit;
`;
export const BaseCardUpperLeft = styled.div`
  ${upperText} left: 10px;
`;
export const BaseCardUpperRight = styled.div`
  ${upperText} right: 10px;
`;

export const FooterWrapper = styled.div`
  position: absolute;
  bottom: 8px;
  left: 0;
  right: 0;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AutoCardPriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: olive;
`;
