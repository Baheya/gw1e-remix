import { Fragment, useEffect, useRef } from 'react';

import { Divider, dividerLinks } from './Divider';
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
  const gridRef = useRef(null);

  useEffect(() => {
    let handlers = [];

    if (gridRef.current !== null) {
      setTimeout(() => {
        const filteredMasonryGrids = filterGrids([gridRef.current]);
        onLayout(filteredMasonryGrids)();
        addEventListener(
          'resize',
          (handlers[filteredMasonryGrids] = onLayout(filteredMasonryGrids)),
          false
        );
      }, 600);
    }

    return () =>
      removeEventListener(
        'resize',
        () => handlers[filteredMasonryGrids],
        false
      );
  }, [gridRef.current]);

  return (
    <ul
      ref={layoutType === 'masonry' ? gridRef : null}
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
            {layoutType === 'spotlight' && index === 0 ? (
              <li role="separator">
                <Divider />
              </li>
            ) : null}
          </Fragment>
        ))
      ) : (
        <p>No posts to display.</p>
      )}
    </ul>
  );
}
