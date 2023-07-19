import './Footer.scss';

export default function footer() {
  return (
    <footer className="footer">
      <p className="footer__copyrights">
        &copy; {new Date().getFullYear()} Yuko Horita
      </p>
    </footer>
  );
}
