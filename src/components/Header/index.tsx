import { Space } from "antd";
import { StyledHeader, Logo, NavMenu } from "./styles";
import { Button } from "../Button";
import { Link } from "react-router-dom";

type HeaderProps = {
  hideExplore?: boolean;
};

export const Header: React.FC<HeaderProps> = ({ hideExplore }) => {
  return (
    <StyledHeader>
      <Link to="/">
        <Logo>
          Tour<span>bay</span>
        </Logo>
      </Link>

      <NavMenu>
        <Space size={36}>
          <Button variant="secondary">
            <Link to="/">Add Tour</Link>
          </Button>
          <Button variant="secondary">
            <Link to="/">Book Tour</Link>
          </Button>
          <Button variant="secondary">
            <Link to="/my-tours">My Tours</Link>
          </Button>
        </Space>
      </NavMenu>

      {hideExplore ? (
        <div />
      ) : (
        <Link to="/explore">
          <Button type="primary">Explore News</Button>
        </Link>
      )}
    </StyledHeader>
  );
};
