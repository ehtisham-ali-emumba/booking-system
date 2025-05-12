import { Typography } from "antd";
import { PlaceholderSvg } from "../assets";

const { Title } = Typography;

export const BlankSlate = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        flexDirection: "column",
      }}
    >
      <PlaceholderSvg />
      <Title
        level={3}
        style={{
          fontWeight: "400",
          color: "#797C9A",
          marginTop: "20px",
        }}
      >
        Sorry, We didn’t found any tour right now at “Miami”
      </Title>
    </div>
  );
};
