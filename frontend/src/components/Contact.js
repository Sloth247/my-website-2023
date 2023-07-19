import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './Contact.scss';

export default function contact() {
  return (
    <section className="container" id="contact">
      <div className="inner">
        <h2 className="title">Get In Touch</h2>
        <div className="texts">
          <p className="open">I&apos;m open for chat!</p>
          <a href="mailto:yukohorita@outlook.com" className={''.item}>
            <p className="details">
              <MdEmail />
              <span>yukohorita@outlook.com</span>
            </p>
          </a>
          <a
            href="https://www.linkedin.com/in/yuko-horita"
            className="footer__item"
            target="blank"
          >
            <p className="details">
              <FaLinkedin />
              <span>LinkedIn</span>
            </p>
          </a>
          <img src="/images/globe.svg" alt="" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
