import { Spin } from "antd";
import React from "react";
import styled from "styled-components";

const CenteredWrapper = styled.div<{ marginTop?: string; paddingTop?: string }>`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding-top: ${(props) => props.paddingTop || "30px"};
  margin-top: ${(props) => props.marginTop || "0px"};
`;

type Props = {
  marginTop?: string;
  paddingTop?: string;
};
export const Loader: React.FC<Props> = ({ marginTop, paddingTop }) => {
  return (
    <CenteredWrapper marginTop={marginTop} paddingTop={paddingTop}>
      <Spin size="large" />
    </CenteredWrapper>
  );
};
