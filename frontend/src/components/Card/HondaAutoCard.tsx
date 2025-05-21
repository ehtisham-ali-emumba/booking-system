import React from "react";
import styled from "styled-components";
import {
  StyledHondaAutoCard,
  HondaAutoCardTitle,
  HondaAutoCardDescription,
  HondaAutoMetaInfoContainer,
  HondaAutoMetaText,
  PriceWrapper,
  PriceText,
  CarChip,
  CarImageWrapper,
  CarImage,
  DropDownIcon,
} from "./elements";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Dropdown, type MenuProps } from "antd";
import { truncate } from "../../utils";

interface HondaAutoCardProps {
  name: string;
  id: number;
  modelYear: number;
  price: number;
  engine: string;
  fuelType: string;
  color: string;
  imageSrc: string;
  onClick?: () => void;
  className?: string;
  description: string;
  chipText?: string;
  onEditClick?: (id: number) => void;
  onDeleteClick?: (id: number) => void;
}

const items: MenuProps["items"] = [
  {
    label: "Edit",
    key: "edit",
    icon: <EditOutlined />,
  },
  {
    label: "Delete",
    key: "delete",
    icon: <DeleteOutlined />,
    danger: true,
  },
];

export const HondaAutoCard: React.FC<HondaAutoCardProps> = ({
  id,
  name,
  modelYear,
  price,
  engine,
  description,
  fuelType,
  color,
  imageSrc,
  onClick,
  className,
  chipText = "",
  onEditClick,
  onDeleteClick,
}) => {
  const handleMenuClick: MenuProps["onClick"] = (info) => {
    info.domEvent.stopPropagation();
    if (info.key === "edit") onEditClick?.(id);
    else if (info.key === "delete") onDeleteClick?.(id);
  };
  return (
    <StyledHondaAutoCard
      hoverable={false}
      className={className}
      onClick={onClick}
      cover={
        <CarImageWrapper>
          {chipText && <CarChip>{chipText}</CarChip>}
          <CarImage
            alt={name}
            src={imageSrc}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </CarImageWrapper>
      }
    >
      <HondaAutoCardTitle level={4}>
        {truncate(`${name} (${modelYear})`, 26, "...")}
      </HondaAutoCardTitle>
      <HondaAutoCardDescription>
        {truncate(description, 60, "...")}
      </HondaAutoCardDescription>
      <HondaAutoMetaInfoContainer>
        <HondaAutoMetaText>{engine}</HondaAutoMetaText>
        <HondaAutoMetaText>{fuelType}</HondaAutoMetaText>
        <HondaAutoMetaText>{color}</HondaAutoMetaText>
      </HondaAutoMetaInfoContainer>
      <PriceWrapper>
        <PriceText>$ {price.toLocaleString()}</PriceText>

        <Dropdown
          menu={{ items, onClick: handleMenuClick }}
          trigger={["click"]}
        >
          <span
            onClick={(e) => e.stopPropagation()}
            style={{ cursor: "pointer" }}
          >
            <DropDownIcon />
          </span>
        </Dropdown>
      </PriceWrapper>
    </StyledHondaAutoCard>
  );
};
