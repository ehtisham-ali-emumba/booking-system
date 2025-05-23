import { Spin } from "antd";
import React from "react";
import type { LoaderProps } from "./type";
import { CenteredWrapper } from "./elements";

export const Loader: React.FC<LoaderProps> = ({ marginTop, paddingTop }) => {
  return (
    <CenteredWrapper marginTop={marginTop} paddingTop={paddingTop}>
      <Spin size="large" />
    </CenteredWrapper>
  );
};
