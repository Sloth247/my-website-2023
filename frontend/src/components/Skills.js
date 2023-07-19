import './Skills.scss';

export default function Skills() {
  return (
    <section className="main__skills wrapper" id="skills">
      <div className="main__skills--inner">
        <h2 className="title">Skills</h2>
        <div className="main__skills--container">
          <div className="main__skills--item">
            <img
              src={HTML}
              alt=""
              aria-hidden="true"
              className={''['main__skills--icon']}
              width={96}
              height={96}
            />
            <p className={''['main__skills--name']}>HTML5</p>
          </div>
          <div className="main__skills--item">
            <Image
              src={CSS}
              alt=""
              aria-hidden="true"
              className={''['main__skills--icon']}
              width={96}
              height={96}
            />
            <p className={''['main__skills--name']}>CSS3</p>
          </div>
          <div className="main__skills--item">
            <Image
              src={JS}
              alt=""
              aria-hidden="true"
              className={''['main__skills--icon']}
              width={96}
              height={96}
            />
            <p className={''['main__skills--name']}>JavaScript</p>
          </div>
          <div className="main__skills--item">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              alt=""
              aria-hidden="true"
              className={''['main__skills--icon']}
              width={100}
              height={100}
            />
            <p className={''['main__skills--name']}>TypeScript</p>
          </div>
          <div className="main__skills--item">
            <Image
              src={ReactIcon}
              alt=""
              aria-hidden="true"
              className={''['main__skills--icon']}
              width={96}
              height={96}
            />
            <p className={''['main__skills--name']}>React</p>
          </div>
          <div className="main__skills--item">
            <Image
              src={NextIcon}
              alt=""
              aria-hidden="true"
              className={''['main__skills--icon']}
              width={96}
              height={96}
            />
            <p className={''['main__skills--name']}>Next.js</p>
          </div>
          <div className="main__skills--item">
            <Image
              src={RemixIcon}
              alt=""
              aria-hidden="true"
              className={''['main__skills--icon']}
              width={100}
              height={100}
            />
            <p className={''['main__skills--name']}>Remix</p>
          </div>
          <div className="main__skills--item">
            <Image
              src={SassIcon}
              alt=""
              aria-hidden="true"
              className={''['main__skills--icon']}
              width={100}
              height={100}
            />
            <p className={''['main__skills--name']}>Sass</p>
          </div>
          <div className="main__skills--item">
            <Image
              src={WPIcon}
              alt=""
              aria-hidden="true"
              className={''['main__skills--icon']}
              width={100}
              height={100}
            />
            <p className={''['main__skills--name']}>WordPress</p>
          </div>
          <div className="main__skills--item">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt=""
              aria-hidden="true"
              className={''['main__skills--icon']}
              width={100}
              height={100}
            />
            <p className={''['main__skills--name']}>GitHub</p>
          </div>
        </div>
      </div>
    </section>
  );
}
