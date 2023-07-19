import { Link } from 'react-router-dom';

import parse from 'html-react-parser';
import { FaGithubAlt } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

export default function Post({ post }) {
  console.log(post);

  return (
    <article className="main__portfolio--item">
      <div className="img-container">
        <img src={post.featuredImage.node.guid} alt="" aria-hidden="true" />
      </div>

      <a href="" target="_blank" rel="noopener noreferrer">
        <h3 className="main__portfolio--item-title">
          <span>{parse(post.title)}</span>
          <FiExternalLink />
        </h3>
      </a>

      <div className="main__portfolio--content">
        {parse(post.content)}
        <p>
          Designs provided by{' '}
          <a
            href="https://www.frontendmentor.io"
            className={''['fem-link']}
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend Mentor
          </a>
        </p>
        <p className="keyTech">
          Key Tech:{' '}
          <span className="keyTech--bold">{post.keyTech.keyTech}</span>
        </p>
      </div>

      <a
        href=""
        className={''['main__portfolio--btn']}
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Repo <FaGithubAlt className="github-icon" />
      </a>
    </article>
  );
}
