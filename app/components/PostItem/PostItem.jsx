import { Button, buttonLinks } from '../Button';
import { PostMeta, postMetaLinks } from '../PostMeta';

import styles from './PostItem.css';

export function links() {
  return [
    ...postMetaLinks(),
    ...buttonLinks(),
    { rel: 'stylesheet', href: styles },
  ];
}

// TO DO: optimize images

export function PostItem({ post, featured }) {
  return (
    <li>
      <article className={featured ? 'post-item featured' : 'post-item'}>
        <img src={post.featuredImage.image.url} alt={post?.imageAlt} />
        <div className="content-wrapper">
          <h3>{post.title}</h3>
          {!featured ? (
            <PostMeta category={post.category} date={post.updatedAt} />
          ) : null}
          <p className="excerpt">{post.excerpt}</p>
          {featured ? (
            <Button variant="primary" to="/">
              Read More
            </Button>
          ) : null}
        </div>
      </article>
    </li>
  );
}
