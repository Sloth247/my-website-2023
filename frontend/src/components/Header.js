import { Link } from 'react-router-dom';
import { useState } from 'react';
import Hamburger from './Hamburger';
import './Header.scss';

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const handleButtonClick = () => {
    setMobileExpanded(!mobileExpanded);
    setShowMobileMenu(!showMobileMenu);
  };
  const handleClose = () => {
    setMobileExpanded(false);
    setShowMobileMenu(false);
  };

  return (
    <header className="header">
      <nav className="header__nav wrapper">
        <Link to="/">
          <h1 className="header__nav--logo">
            <div className="header__nav--logo-container">
              <img src="/images/logo.svg" alt="Yuko Horita" />
            </div>
          </h1>
        </Link>

        <div className="header__nav--menu-container">
          <ul
            className={
              mobileExpanded
                ? 'header__nav--menus nav-show'
                : 'header__nav--menus'
            }
            id="mobile-menu"
          >
            <li className="header__nav--about">
              <Link
                to="#about"
                className="header__nav--link"
                onClick={handleClose}
              >
                About Me
              </Link>
            </li>
            <li className="header__nav--skills">
              <Link
                to="#skills"
                className="header__nav--link"
                onClick={handleClose}
              >
                Skills
              </Link>
            </li>
            <li className="header__nav--portfolio">
              <Link
                to="/#portfolio"
                className="header__nav--link"
                onClick={handleClose}
              >
                Projects
              </Link>
            </li>
            <li className="header__nav--contact">
              <Link
                to="/#contact"
                className="header__nav--link"
                onClick={handleClose}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="header__icon-container">
            <Hamburger
              mobileExpanded={mobileExpanded}
              handleButtonClick={handleButtonClick}
            />
          </div>
        </div>
        <div
          className={
            mobileExpanded ? 'nav-overlay overlay-open' : 'nav-overlay'
          }
        ></div>
      </nav>
    </header>
  );
}
