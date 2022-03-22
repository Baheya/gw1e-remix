import { Posts, postsLinks } from '../../shared/Posts';

import styles from './PostsSection.css';

export function links() {
  return [...postsLinks(), { rel: 'stylesheet', href: styles }];
}

export function PostsSection({ blogPosts }) {
  return (
    <section className="posts-section">
      <h2 className="visually-hidden">Latest Blog Posts</h2>
      <Posts layoutType="spotlight" posts={blogPosts} />
    </section>
  );
}
