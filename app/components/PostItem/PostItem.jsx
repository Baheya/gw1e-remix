import { Link } from 'remix';

import { Button, buttonLinks } from '../Button';
import { WavyLineMobile } from '../Icons/WavyLineMobile';
import { PostMeta, postMetaLinks } from '../PostMeta';
import { FeaturedImage, featuredImageLinks } from './FeaturedImage';

import styles from './PostItem.css';

export function links() {
  return [
    ...postMetaLinks(),
    ...buttonLinks(),
    ...featuredImageLinks(),
    { rel: 'stylesheet', href: styles },
  ];
}

// TO DO: optimize images

export function PostItem({ post, featured, layoutType }) {
  return (
    <li>
      <article
        className={featured ? 'blog-post-item featured' : 'blog-post-item'}
      >
        <FeaturedImage
          layoutType={layoutType}
          post={post}
          featured={featured}
        />
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
