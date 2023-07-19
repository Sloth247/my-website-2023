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
              <Link to="#about">
                <a className="header__nav--link" onClick={handleClose}>
                  About Me
                </a>
              </Link>
            </li>
            <li className="header__nav--skills">
              <Link to="#skills">
                <a className="header__nav--link" onClick={handleClose}>
                  Skills
                </a>
              </Link>
            </li>
            <li className="header__nav--portfolio">
              <Link to="/#portfolio">
                <a className="header__nav--link" onClick={handleClose}>
                  Projects
                </a>
              </Link>
            </li>
            <li className="header__nav--contact">
              <Link to="/#contact">
                <a className="header__nav--link" onClick={handleClose}>
                  Contact
                </a>
              </Link>
            </li>
          </ul>
          <div className="header__icon-container">
            {/* <button
              className={""['header__nav--language-icon']}
              aria-labelledby="language-switcher"
              aria-expanded="false"
              aria-controls="language-menu"
            >
              <h2 className="sr-only" id="language-switcher">
                Language switcher
              </h2>
              <i
                className={`fas fa-globe ${""['header__nav--language-img']}`}
                aria-hidden="true"
              ></i>
            </button> */}
            <Hamburger
              mobileExpanded={mobileExpanded}
              handleButtonClick={handleButtonClick}
            />
            {/* <ul
              className={""['header__nav--language-modal']}
              id="language-menu"
            >
              <li>
                <Link href="/">
                  <a>English</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Japanese</a>
                </Link>
              </li>
            </ul> */}
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
