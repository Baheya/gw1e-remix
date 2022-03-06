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

export function PostItem({
  title,
  excerpt,
  image,
  imageAlt,
  date,
  path,
  category,
  categoryPath,
  featured,
}) {
  return (
    <li>
      <article className={featured ? 'post-item featured' : 'post-item'}>
        <img src={image} alt={imageAlt} />
        <div className="content-wrapper">
          <h2>{title}</h2>
          {!featured ? <PostMeta category={category} date={date} /> : null}
          <p className="excerpt">{excerpt}</p>
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
