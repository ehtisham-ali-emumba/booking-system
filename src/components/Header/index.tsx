import { Space } from "antd";
import {
  StyledHeader,
  Logo,
  NavMenu,
  ExploreButton,
  HamburgerMenu,
  MobileMenu,
} from "./styles";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";

type HeaderProps = {
  hideExplore?: boolean;
};

export const Header: React.FC<HeaderProps> = ({ hideExplore }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <StyledHeader>
      <Link to="/">
        <Logo>
          Tour<span>bay</span>
        </Logo>
      </Link>

      {/* Desktop Navigation */}
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

      {/* Explore Button */}
      {hideExplore ? (
        <div />
      ) : (
        <Link to="/explore">
          <ExploreButton type="primary">Explore News</ExploreButton>
        </Link>
      )}

      {/* Hamburger Menu for Mobile */}
      <HamburgerMenu onClick={toggleMobileMenu}>
        <span />
        <span />
        <span />
      </HamburgerMenu>

      {/* Mobile Menu Modal */}

      <MobileMenu isOpen={isMobileMenuOpen}>
        <div className="menu-header">
          <Logo>
            Tour<span>bay</span>
          </Logo>
          <Button variant="icon-transparent" onClick={toggleMobileMenu}>
            <CloseOutlined />
          </Button>
        </div>
        <div className="menu-links">
          <Link to="/tours" onClick={toggleMobileMenu}>
            Add Tour
          </Link>
          <Link to="/tours" onClick={toggleMobileMenu}>
            Book Tour
          </Link>
          <Link to="/my-tours" onClick={toggleMobileMenu}>
            My Tours
          </Link>
          {!hideExplore && (
            <Link to="/explore" onClick={toggleMobileMenu}>
              Explore News
            </Link>
          )}
        </div>
      </MobileMenu>
    </StyledHeader>
  );
};
