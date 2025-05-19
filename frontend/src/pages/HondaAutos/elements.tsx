import styled from "styled-components";
import { Wrapper } from "../../styles";
import { Typography } from "antd";

export const Container = styled(Wrapper)`
  justify-content: flex-start;
  height: 100vh !important;
`;

export const Box = styled.div({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
});

export const Heading = styled(Typography.Title)({
  textAlign: "center",
  marginBottom: "40px",
});

export const InputContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  margin: "20px 0px",
  width: "100%",
});

export const GridWrapper = styled.div<{ width?: number }>`
  margin: 0 auto !important;
  width: ${(props) => props.width || "100%"} !important;
`;

export const ListContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  height: 100%;
`;
