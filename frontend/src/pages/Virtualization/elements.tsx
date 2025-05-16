import styled from "styled-components";
import { Wrapper } from "../../styles";
import { Typography } from "antd";

export const Container = styled(Wrapper)`
  justify-content: flex-start;
`;

export const Box = styled.div({
  marginTop: "110px",
  width: "100%",
  paddingBottom: "82px",
});

export const Heading = styled(Typography.Title)({
  textAlign: "center",
  marginBottom: "40px",
});
