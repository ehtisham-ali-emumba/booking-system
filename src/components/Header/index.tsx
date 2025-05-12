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
          <Link to="/tours">
            <Button variant="secondary">Add Tour</Button>
          </Link>
          <Link to="/tours">
            <Button variant="secondary">Book Tour</Button>
          </Link>
          <Link to="/my-tours">
            <Button variant="secondary">My Tours</Button>
          </Link>
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
