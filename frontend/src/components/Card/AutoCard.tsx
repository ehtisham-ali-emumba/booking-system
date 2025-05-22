import React from "react";
import {
  AutoCardTitle,
  AutoCardDescription,
  AutoMetaInfoContainer,
  AutoMetaText,
  PriceText,
  BaseChip,
  DropDownIcon,
} from "./elements";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Dropdown, type MenuProps } from "antd";
import { truncate } from "../../utils";
import { BaseCard } from "./BaseCard";

interface AutoCardProps {
  name: string;
  id: number;
  brandId: number;
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

export const AutoCard: React.FC<AutoCardProps> = ({
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
  chipText = "",
  onEditClick,
  onDeleteClick,
  brandId,
}) => {
  const handleMenuClick: MenuProps["onClick"] = (info) => {
    info.domEvent.preventDefault();
    info.domEvent.stopPropagation();
    if (info.key === "edit") onEditClick?.(id);
    else if (info.key === "delete") onDeleteClick?.(id);
  };

  return (
    <BaseCard
      onClick={onClick}
      dimensions={{ width: 300, height: 415 }}
      imageHeight={200}
      imageSrc={imageSrc}
      url={`/brands/${brandId}/autos/${id}`}
      renderContent={() => (
        <>
          <AutoCardTitle level={4}>
            {truncate(`${name} (${modelYear})`, 26, "...")}
          </AutoCardTitle>
          <AutoCardDescription>
            {truncate(description, 60, "...")}
          </AutoCardDescription>
          <AutoMetaInfoContainer>
            <AutoMetaText>{engine}</AutoMetaText>
            <AutoMetaText>{fuelType}</AutoMetaText>
            <AutoMetaText>{color}</AutoMetaText>
          </AutoMetaInfoContainer>
        </>
      )}
      renderUpperRight={() =>
        chipText ? <BaseChip>{chipText}</BaseChip> : null
      }
      renderLowerLeft={() => <PriceText>$ {price.toLocaleString()}</PriceText>}
      renderLowerRight={() => (
        <Dropdown
          menu={{ items, onClick: handleMenuClick }}
          trigger={["click"]}
        >
          <span
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            style={{ cursor: "pointer" }}
          >
            <DropDownIcon />
          </span>
        </Dropdown>
      )}
    />
  );
};
