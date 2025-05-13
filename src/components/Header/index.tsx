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
import { strings } from "../../constants/strings";
import { TourLogoSvg } from "../../assets";

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
        <TourLogoSvg style={{ marginTop: "30px" }} />
      </Link>
      <NavMenu>
        <Space size={36}>
          <Link to="/tours">
            <Button variant="secondary">{strings.header.addTour}</Button>
          </Link>
          <Link to="/tours">
            <Button variant="secondary">{strings.header.bookTour}</Button>
          </Link>
          <Link to="/my-tours">
            <Button variant="secondary">{strings.header.myTours}</Button>
          </Link>
        </Space>
      </NavMenu>

      {/* Explore Button */}
      {hideExplore ? (
        <div />
      ) : (
        <Link to="/explore">
          <ExploreButton type="primary">
            {strings.header.exploreButton}
          </ExploreButton>
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
          <TourLogoSvg style={{ marginTop: "5px" }} />
          <Button variant="icon-transparent" onClick={toggleMobileMenu}>
            <CloseOutlined />
          </Button>
        </div>
        <div className="menu-links">
          <Link to="/tours" onClick={toggleMobileMenu}>
            {strings.header.addTour}
          </Link>
          <Link to="/tours" onClick={toggleMobileMenu}>
            {strings.header.bookTour}
          </Link>
          <Link to="/my-tours" onClick={toggleMobileMenu}>
            {strings.header.myTours}
          </Link>
          {!hideExplore && (
            <Link to="/explore" onClick={toggleMobileMenu}>
              {strings.header.exploreButton}
            </Link>
          )}
        </div>
      </MobileMenu>
    </StyledHeader>
  );
};
