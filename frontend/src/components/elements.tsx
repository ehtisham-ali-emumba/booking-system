import { Typography } from "antd";
import styled from "styled-components";

const { Title } = Typography;

export const BlankSlateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  flex-direction: column;
`;

export const BlankSlateTitle = styled((props) => (
  <Title level={3} {...props} />
))`
  font-weight: 400 !important;
  color: #797c9a !important;
  margin-top: 20px;
`;
