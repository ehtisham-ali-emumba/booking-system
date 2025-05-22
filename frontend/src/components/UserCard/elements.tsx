import { Card, Typography } from "antd";
import styled from "styled-components";
import { Button } from "../Button";
import { colors } from "../../constants";

export const { Title, Paragraph, Text } = Typography;

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

export const HoverButton = styled(Button)`
  display: none;
  width: 100%;
  cursor: pointer;
  text-align: center;
  &:hover {
    background-color: #147dd6;
  }
  ${StyledUserCard}:hover & {
    display: block;
  }
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
export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
export const UserMetaInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2px 16px;
  border-radius: 100px;
  gap: 8px;
`;
export const UserMetaText = styled(Text)`
  color: ${colors.text.light};
  font-size: 14px;
  font-weight: 500;
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
export const UserNameText = styled(UserMetaText)`
  font-weight: 700;
  margin-top: 10px;
  font-size: 18px;
  color: ${colors.accentOrange};
`;
