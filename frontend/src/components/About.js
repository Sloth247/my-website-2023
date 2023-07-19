import './About.scss';

export default function About() {
  return (
    <section className="main__about" id="about">
      <div className="main__about--inner">
        <h2 className="title">About Me</h2>
        <div className="main__about--img-container">
          <img
            src="/images/coding-woman.svg"
            alt=""
            className="main__about--img"
            aria-hidden="true"
          />
        </div>
        <p className="main__about--description">
          Hi 👋 there, I&apos;m Yuko Horita and and I appreciate you visiting my
          website. I am a self-taught full-stack developer who is passionate
          about continually improving my skills. Attention to detail is
          something I prioritize in all of my work. Accessibility is also a key
          focus for me, as I believe in making the internet open to everyone. My
          strengths lie in my flexibility, as I am eager to take on new
          challenges and meet the targets set by my clients.
        </p>
      </div>
    </section>
  );
}
