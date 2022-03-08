import { Fragment } from 'react';
import { Divider, dividerLinks } from '../Divider';
import { PostItem, postItemLinks } from '~/components/PostItem';

import styles from './BlogPostsSection.css';

export function links() {
  return [
    ...postItemLinks(),
    ...dividerLinks(),
    { rel: 'stylesheet', href: styles },
  ];
}

export function BlogPostsSection({ blogPosts }) {
  return (
    <section className="posts_section">
      <h2 className="visually-hidden">Latest Blog Posts</h2>
      <ul>
        {blogPosts &&
          blogPosts.map((post, index) => (
            <Fragment key={post.id}>
              <PostItem post={post} featured={index === 0} key={post.id} />
              {index === 0 ? <Divider /> : null}
            </Fragment>
          ))}
      </ul>
    </section>
  );
}
