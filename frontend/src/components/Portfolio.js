import React from 'react';
import { FaGithubAlt } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import './Portfolio.scss';

export default function Portfolio({ projects }) {
  console.log(projects);
  return (
    <section className="main__portfolio" id="portfolio">
      <h2 className="title">Projects</h2>
      <div className="main__portfolio--container">
        {projects.map((project) => (
          <div key={project._id}>
            <article className="main__portfolio--item">
              <div className="main__portfolio--img-container">
                <img src={project.image} alt="" aria-hidden="true" />
              </div>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="main__portfolio--item-title">
                  <span>{project.title}</span>
                  <FiExternalLink />
                </h3>
              </a>

              <div className="main__portfolio--content">
                <p>{project.description}</p>
                <p className="keyTech">
                  Key Tech:{' '}
                  <span className="keyTech--bold">{project.stack}</span>
                </p>
              </div>

              <a
                href={project.github}
                className="main__portfolio--btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Repo <FaGithubAlt className="github-icon" />
              </a>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
