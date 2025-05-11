import { Layout, Button } from "antd";
import styled from "styled-components";
import { colors } from "../../constants";
import { zIndex } from "../../utils";

export const StyledHeader = styled(Layout.Header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  height: 80px;
  position: absolute;
  left: 0;
  right: 0;
  z-index: ${zIndex.navBar};
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #333;

  span {
    color: ${colors.accentOrange};
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const ExploreButton = styled(Button)`
  background-color: ${colors.accentOrange};
  height: 48px;
  padding: 0 24px;
  border-radius: 8px;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #e56e50 !important;
    border-color: #e56e50 !important;
    color: white !important;
  }
`;
