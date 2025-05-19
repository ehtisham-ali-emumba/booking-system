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
import { useIsActiveRoute } from "../../hooks/useIsActiveRoute";

type HeaderProps = {
  hideExplore?: boolean;
};

export const Header: React.FC<HeaderProps> = ({ hideExplore }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isRouteActive } = useIsActiveRoute();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const getActiveButtonClass = (path: string) => {
    return isRouteActive(path) ? "active-button" : "";
  };

  return (
    <StyledHeader>
      <Link to="/">
        <TourLogoSvg style={{ marginTop: "30px" }} />
      </Link>
      <NavMenu>
        <Space size={36}>
          <Link to="/honda-autos">
            <Button
              variant="secondary"
              className={getActiveButtonClass("/honda-autos")}
            >
              {uiStrings.hondaAutos}
            </Button>
          </Link>
          <Link to="/virtualization">
            <Button
              variant="secondary"
              className={getActiveButtonClass("/virtualization")}
            >
              {uiStrings.virtualization}
            </Button>
          </Link>
          <Link to="/tours">
            <Button
              variant="secondary"
              className={getActiveButtonClass("/tours")}
            >
              {uiStrings.bookTour}
            </Button>
          </Link>
          <Link to="/my-tours">
            <Button
              variant="secondary"
              className={getActiveButtonClass("/my-tours")}
            >
              {uiStrings.myTours}
            </Button>
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
          <Link
            to="/honda-autos"
            onClick={toggleMobileMenu}
            className={getActiveButtonClass("/honda-autos")}
          >
            {uiStrings.hondaAutos}
          </Link>
          <Link
            to="/virtualization"
            onClick={toggleMobileMenu}
            className={getActiveButtonClass("/virtualization")}
          >
            {uiStrings.virtualization}
          </Link>
          <Link
            to="/tours"
            onClick={toggleMobileMenu}
            className={getActiveButtonClass("/tours")}
          >
            {uiStrings.bookTour}
          </Link>
          <Link
            to="/my-tours"
            onClick={toggleMobileMenu}
            className={getActiveButtonClass("/my-tours")}
          >
            {uiStrings.myTours}
          </Link>
          {!hideExplore && (
            <Link
              to="/explore"
              onClick={toggleMobileMenu}
              className={getActiveButtonClass("/explore")}
            >
              {uiStrings.exploreNews}
            </Link>
          )}
        </div>
      </MobileMenu>
    </StyledHeader>
  );
};
