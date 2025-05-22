import React from "react";
import {
  StyledBrandCard,
  BrandCardTitle,
  HondaAutoCardDescription,
  PriceWrapper,
  BrandImageWrapper,
  BrandImage,
  DropDownIcon,
} from "./elements";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Dropdown, type MenuProps } from "antd";
import { truncate } from "../../utils";
import {
  RatingContainer,
  ReviewCount,
  StarRating,
} from "../../pages/HondaAutoDetails/elements";

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
  className,
  onEditClick,
  onDeleteClick,
}) => {
  const handleMenuClick: MenuProps["onClick"] = (info) => {
    info.domEvent.stopPropagation();
    if (info.key === "edit") onEditClick?.(id);
    else if (info.key === "delete") onDeleteClick?.(id);
  };
  return (
    <StyledBrandCard
      hoverable={false}
      className={className}
      onClick={onClick}
      cover={
        <BrandImageWrapper>
          <BrandImage src={imageSrc} />
        </BrandImageWrapper>
      }
    >
      <BrandCardTitle level={4}>{truncate(name, 26, "...")}</BrandCardTitle>

      <PriceWrapper>
        <HondaAutoCardDescription>
          {truncate(description, 80, "...")}
        </HondaAutoCardDescription>
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
      <RatingContainer>
        <StarRating>★★★★★</StarRating>
        <ReviewCount>(5)</ReviewCount>
      </RatingContainer>
    </StyledBrandCard>
  );
};
