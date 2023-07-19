import React from 'react';
import Post from './Post';

export default function Portfolio({ posts }) {
  console.log(posts);
  return (
    <section className="main__portfolio" id="portfolio">
      <h2 className="main__portfolio--title">Projects</h2>
      <div className="main__portfolio--container">
        {posts.map((post) => (
          <div key={post.slug}>
            <Post post={post} />
          </div>
        ))}
      </div>
    </section>
  );
}
