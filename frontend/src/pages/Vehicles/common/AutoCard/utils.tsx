import type { MenuProps } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

export const actionItems: MenuProps["items"] = [
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
