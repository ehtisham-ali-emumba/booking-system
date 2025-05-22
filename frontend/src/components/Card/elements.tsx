import { Card, Typography } from "antd";
import styled from "styled-components";
import { Button } from "../Button";
import { colors } from "../../constants";
import { MoreOutlined } from "@ant-design/icons";

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

// honda auto card

export const StyledHondaAutoCard = styled(Card)`
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
  height: 415px;
  width: 300px;
  margin: 0 auto;
  .ant-card-cover img {
    height: 240px;
  }
  .ant-card-body {
    padding: 8px 16px !important;
  }
`;

export const HondaAutoCardTitle = styled(Title)`
  margin-top: 0 !important;
  margin-bottom: 4px !important;
  color: ${colors.text.primary};
  font-size: 18px !important;
`;

export const BrandCardTitle = styled(Title)`
  margin-top: 0 !important;
  margin-bottom: 4px !important;
  color: ${colors.text.primary};
  font-size: 22px !important;
  text-align: center;
`;

export const HondaAutoCardDescription = styled(Paragraph)`
  color: ${colors.text.secondary};
  font-size: 14px;
  min-height: 90px;
`;

export const HondaAutoMetaInfoContainer = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-bottom: 14px;
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

export const HondaAutoMetaInfo = styled.div`
  display: flex;
  background-color: ${colors.background.badge};
  padding: 3px 16px;
  border-radius: 100px;
`;

export const HondaAutoMetaText = styled(Text)`
  color: ${colors.text.primary};
  font-size: 14px;
  font-weight: 500;
  background-color: ${colors.chip};
  padding: 4px 16px;
  border-radius: 50px;
`;

export const PriceText = styled(Text)`
  font-size: 20px;
  margin-top: 5px;
  font-weight: 700;
  color: ${colors.text.primary};
`;
// Chip styled component
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

// Image wrapper to position the chip
export const CarImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const BrandImage = styled.img`
  width: 90px !important;
  height: 90px !important;
  border-radius: 200px;
  object-fit: contain;
  transition: transform 0.3s ease;
  ${StyledHondaAutoCard}:hover & {
    transform: scale(1.05);
  }
`;

export const DropDownIcon = styled(MoreOutlined)({
  fontSize: "30px",
  color: "black",
});

export const CarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  ${StyledHondaAutoCard}:hover & {
    transform: scale(1.05);
  }
`;

// Image wrapper to position the chip
export const BrandImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 170px;
  display: flex !important;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const StyledBrandCard = styled(Card)`
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
  height: 365px;
  width: 300px;
  margin: 0 auto;
  .ant-card-cover img {
    height: 240px;
  }
  .ant-card-body {
    padding: 8px 16px !important;
  }
`;
