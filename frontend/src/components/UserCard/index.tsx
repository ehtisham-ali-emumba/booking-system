import React from "react";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { uiStrings } from "../../constants";
import { truncate } from "../../utils";
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
import type { UserCardProps } from "./type";

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

export { UserCard };
