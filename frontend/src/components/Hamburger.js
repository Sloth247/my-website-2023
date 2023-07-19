import './Hamburger.scss';

export default function Hamburger({ mobileExpanded, handleButtonClick }) {
  return (
    <button
      className={
        mobileExpanded
          ? 'hamburger-mobile-icon menu-close'
          : 'hamburger-mobile-icon'
      }
      aria-labelledby="toggle-menu"
      aria-expanded={mobileExpanded}
      aria-controls="mobile-menu"
      onClick={handleButtonClick}
    >
      <h2 className="sr-only" id="toggle-menu">
        Mobile Menu
      </h2>
      <span aria-hidden="true"></span>
    </button>
  );
}
