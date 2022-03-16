import { Fragment } from 'react';
import { Divider, dividerLinks } from '../Divider';
import { PostItem, postItemLinks } from '../PostItem';

import styles from './Posts.css';

export function links() {
  return [
    ...postItemLinks(),
    ...dividerLinks(),
    { rel: 'stylesheet', href: styles },
  ];
}

export function Posts({ layoutType, posts }) {
  return (
    <ul
      className={layoutType === 'masonry' ? 'blog-grid masonry' : 'blog-grid'}
    >
      {posts ? (
        posts.map((post, index) => (
          <Fragment key={post.id}>
            <PostItem
              post={post.node ?? post}
              featured={layoutType === 'spotlight' && index === 0}
              key={post.id}
            />
            {layoutType === 'spotlight' && index === 0 ? <Divider /> : null}
          </Fragment>
        ))
      ) : (
        <p>No posts to display.</p>
      )}
    </ul>
  );
}
