import { Typography } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";

const { Text, Title } = Typography;

export const BaseLink = styled(Link)`
  text-decoration: none;
  :hover {
    text-decoration: none;
  }
`;

export const BlankSlateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  flex-direction: column;
  padding: 0px 16px;
`;

export const BlankSlateTitle = styled((props) => (
  <Title level={3} {...props} />
))`
  font-weight: 400 !important;
  color: #797c9a !important;
  margin-top: 20px;
`;

export const FieldLabel = styled(Text)`
  display: block;
  font-size: 16px;
  color: #a1a1b5;
  margin-bottom: 6px;
  margin-top: 24px;
  text-transform: capitalize;
`;
