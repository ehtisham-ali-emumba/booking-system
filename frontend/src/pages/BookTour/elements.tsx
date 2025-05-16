import { Flex, Image } from "antd";
import styled, { css } from "styled-components";
import { sizeTablet } from "../../utils";
import { Flex1 } from "../../styles";

export const Box = styled.div`
  margin-top: 100px;
`;

export const ImageWrapper = styled(Flex)`
  flex: 1;
  ${sizeTablet(css`
    display: none;
  `)}
`;
export const ImageUI = styled(Image)`
  height: 100% !important;
  width: 100% !important;
  object-fit: cover;
`;
export const FormWrapper = styled.div`
  margin: 0 auto;
  padding: 0px 20px;
`;

export const ContentWrapper = styled(Flex1)`
  min-height: 80vh;
`;
