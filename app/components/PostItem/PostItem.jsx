import { Link } from 'remix';
import { Button, buttonLinks } from '../Button';
import { WavyLineMobile } from '../Icons/WavyLineMobile';
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
      <article
        className={featured ? 'blog-post-item featured' : 'blog-post-item'}
      >
        <img src={post.featuredImage.image.url} alt={post?.imageAlt} />
        <div className="content-wrapper">
          {featured ? (
            <h3>{post.title}</h3>
          ) : (
            <Link className="content-link" to={`/post/${post.slug}`}>
              <h3>{post.title}</h3>
            </Link>
          )}
          {!featured ? (
            <PostMeta category={post.category} date={post.updatedAt} />
          ) : null}
          <p className="content-excerpt">{post.excerpt}</p>
          {featured ? (
            <div className="featured-button-wrapper">
              <Button variant="primary" to={`/post/${post.slug}`}>
                Read More
              </Button>
              <WavyLineMobile />
            </div>
          ) : null}
        </div>
      </article>
    </li>
  );
}
