import { Flex, Layout as Layout_ } from "antd";

import { Header as Header_ } from "antd/es/layout/layout";
import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 700px;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const Container = styled(Wrapper)`
  padding: 0 0 0 40px;
`;

export const ContentSection = styled.div`
  flex: 1;
  display: flex;
  margin-top: 150px;
  justify-content: center;
`;

export const Layout = styled(Layout_)`
  background-color: transparent;
`;

export const Header = styled(Header_)`
  background-color: transparent;
`;

export const Flex1 = styled(Flex)`
  flex: 1;
`;
