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
          <Button href="/" variant="secondary">
            <Link to="/add-tour">Add Tour</Link>
          </Button>
          <Button href="/" variant="secondary">
            <Link to="/book-tour">Book Tour</Link>
          </Button>
          <Button href="/my-tours" variant="secondary">
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
