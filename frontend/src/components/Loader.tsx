import { Spin } from "antd";
import styled from "styled-components";

const CenteredWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; // Full viewport height
  width: 100%; // Full width
`;

export default function Loader() {
  return (
    <CenteredWrapper>
      <Spin size="large" />
    </CenteredWrapper>
  );
}
