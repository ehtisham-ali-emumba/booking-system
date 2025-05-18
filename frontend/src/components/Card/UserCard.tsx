import React from "react";
import {
  MailOutlined,
  PhoneOutlined,
  InfoCircleOutlined,
  EnvironmentOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import {
  StyledUserCard,
  UserCardTitle,
  UserInfoContainer,
  UserMetaInfo,
  UserMetaText,
  HoverButton,
  UserAvatar,
  UserAvatarContainer,
  UserNameText,
} from "./elements";
import { uiStrings } from "../../constants";
import { truncate } from "../../utils";
interface UserCardProps {
  fullName: string;
  userName: string;
  imageSrc: string;
  phone: string;
  email: string;
  city: string;
  country: string;
  className?: string;
  onClick?: () => void;
}

const UserCard: React.FC<UserCardProps> = ({
  fullName,
  userName,
  imageSrc,
  phone,
  email,
  city,
  country,
  className,
  onClick,
}) => {
  return (
    <StyledUserCard hoverable={false} className={className} onClick={onClick}>
      <UserCardTitle level={4}>{fullName}</UserCardTitle>
      <UserAvatarContainer>
        <UserAvatar src={imageSrc} />
        <UserNameText>{truncate(userName, 18, "...")}</UserNameText>
      </UserAvatarContainer>

      <>
        <UserInfoContainer>
          {email && (
            <UserMetaInfo>
              <MailOutlined />
              <UserMetaText>{truncate(email, 25, "...")}</UserMetaText>
            </UserMetaInfo>
          )}
          {phone && (
            <UserMetaInfo>
              <PhoneOutlined />
              <UserMetaText>{phone}</UserMetaText>
            </UserMetaInfo>
          )}
          {city && (
            <UserMetaInfo>
              <EnvironmentOutlined />
              <UserMetaText>{city}</UserMetaText>
            </UserMetaInfo>
          )}
          {country && (
            <UserMetaInfo>
              <GlobalOutlined />
              <UserMetaText>{country}</UserMetaText>
            </UserMetaInfo>
          )}
        </UserInfoContainer>
        <HoverButton>{uiStrings.viewDetails}</HoverButton>
      </>
    </StyledUserCard>
  );
};

// Flex layout wrapper for displaying multiple cards
const UserCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
`;

export { UserCard, UserCardWrapper };
