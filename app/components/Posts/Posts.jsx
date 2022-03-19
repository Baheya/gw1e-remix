import { Fragment, useEffect } from 'react';

import { Divider, dividerLinks } from '../Divider';
import { PostItem, postItemLinks } from '../PostItem';

import { filterGrids, onLayout } from '~/utils/calculateMasonryLayout';

import styles from './Posts.css';

export function links() {
  return [
    ...postItemLinks(),
    ...dividerLinks(),
    { rel: 'stylesheet', href: styles },
  ];
}

export function Posts({ layoutType, posts }) {
  useEffect(() => {
    let masonryGrids = [...document.querySelectorAll('.masonry')];
    let handlers = [];

    if (masonryGrids.length) {
      const filteredMasonryGrids = filterGrids(masonryGrids);
      onLayout(filteredMasonryGrids)();
      addEventListener(
        'resize',
        (handlers[filteredMasonryGrids] = onLayout(filteredMasonryGrids)),
        false
      );
    }

    return () =>
      removeEventListener(
        'resize',
        () => handlers[filteredMasonryGrids],
        false
      );
  }, []);

  return (
    <ul
      className={layoutType === 'masonry' ? 'blog-grid masonry' : 'blog-grid'}
    >
      {posts.length ? (
        posts.map((post, index) => (
          <Fragment key={index}>
            <PostItem
              layoutType={layoutType}
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
