import { Space } from "antd";
import {
  StyledHeader,
  NavMenu,
  ExploreButton,
  HamburgerMenu,
  MobileMenu,
} from "./styles";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { uiStrings } from "../../constants/uiStrings";
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
          <Link to="/virtualization">
            <Button variant="secondary">{uiStrings.virtualization}</Button>
          </Link>
          <Link to="/tours">
            <Button variant="secondary">{uiStrings.bookTour}</Button>
          </Link>
          <Link to="/my-tours">
            <Button variant="secondary">{uiStrings.myTours}</Button>
          </Link>
        </Space>
      </NavMenu>

      {/* Explore Button */}
      {hideExplore ? (
        <div />
      ) : (
        <Link to="/explore">
          <ExploreButton type="primary">{uiStrings.exploreNews}</ExploreButton>
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
          <Link to="/virtualization" onClick={toggleMobileMenu}>
            {uiStrings.virtualization}
          </Link>
          <Link to="/tours" onClick={toggleMobileMenu}>
            {uiStrings.bookTour}
          </Link>
          <Link to="/my-tours" onClick={toggleMobileMenu}>
            {uiStrings.myTours}
          </Link>
          {!hideExplore && (
            <Link to="/explore" onClick={toggleMobileMenu}>
              {uiStrings.exploreNews}
            </Link>
          )}
        </div>
      </MobileMenu>
    </StyledHeader>
  );
};
