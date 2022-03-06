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
      <ul>
        {blogPosts.map((post, index) => (
          <Fragment key={post.id}>
            <PostItem
              title={post.title}
              category={post.category}
              date={post.updatedAt}
              excerpt={post.excerpt}
              image={post.featuredImage.image.url}
              featured={index === 0}
              key={post.id}
            />
            {index === 0 ? <Divider /> : null}
          </Fragment>
        ))}
      </ul>
    </section>
  );
}
