import styled from "styled-components";
import { Wrapper } from "../../styles";
import { Typography } from "antd";

const { Title } = Typography;

export const ContentTitle = styled(Title)`
  text-align: center;
  margin-bottom: 40px !important;
`;

export const Container = styled(Wrapper)`
  justify-content: flex-start;
  margin-bottom: 80px;
`;

export const Box = styled.div`
  margin-top: 110px;
  width: 100%;
`;
