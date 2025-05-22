import React from "react";
import { BrandCardTitle, BrandCardDescription, DropDownIcon } from "./elements";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Dropdown, type MenuProps } from "antd";
import { truncate } from "../../utils";
import {
  RatingContainer,
  ReviewCount,
  StarRating,
} from "../../pages/AutoDetails/elements";
import { BaseCard } from "./BaseCard";

interface BrandCardProps {
  id: number;
  name: string;
  description: string;
  imageSrc: string;
  onClick?: () => void;
  className?: string;
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

export const BrandCard: React.FC<BrandCardProps> = ({
  id,
  name,
  description,
  imageSrc,
  onClick,
  onEditClick,
  onDeleteClick,
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
      dimensions={{ width: 300, height: 365 }}
      imageHeight={170}
      imageSrc={imageSrc}
      imageStyles={{
        objectFit: "contain",
        height: 90,
        width: 90,
      }}
      url={`/brands/${id}/autos`}
      renderContent={() => (
        <>
          <BrandCardTitle level={4}>{truncate(name, 26, "...")}</BrandCardTitle>
          <BrandCardDescription>
            {truncate(description, 110, "...")}
          </BrandCardDescription>
        </>
      )}
      renderLowerLeft={() => (
        <RatingContainer>
          <StarRating>★★★★★</StarRating>
          <ReviewCount>(5)</ReviewCount>
        </RatingContainer>
      )}
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
    ></BaseCard>
  );
};
