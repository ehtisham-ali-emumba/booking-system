import React from "react";
import {
  StyledHondaAutoCard,
  HondaAutoCardTitle,
  HondaAutoCardDescription,
  PriceWrapper,
  BrandImageWrapper,
  BrandImage,
  DropDownIcon,
} from "./elements";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Dropdown, type MenuProps } from "antd";
import { truncate } from "../../utils";

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
    <StyledHondaAutoCard
      hoverable={false}
      className={className}
      onClick={onClick}
      cover={
        <BrandImageWrapper>
          <BrandImage src={imageSrc} />
        </BrandImageWrapper>
      }
    >
      <HondaAutoCardTitle level={4}>
        {truncate(name, 26, "...")}
      </HondaAutoCardTitle>

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
    </StyledHondaAutoCard>
  );
};
