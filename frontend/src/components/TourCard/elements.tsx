import { Card, Typography } from "antd";
import styled from "styled-components";
import { colors } from "../../constants";
import { Button } from "../Button";

export const { Title, Paragraph, Text } = Typography;

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
`;

export const StyledCard = styled(Card)`
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
  height: 100%;
  width: 350px;

  .ant-card-cover img {
    height: 240px;
  }
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
export const CardTitle = styled(Title)`
  margin-top: 0 !important;
  margin-bottom: 4px !important;
`;

export const CardDescription = styled(Paragraph)`
  color: ${colors.text.secondary};
  font-size: 16px;
  margin-bottom: 16px !important;
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
