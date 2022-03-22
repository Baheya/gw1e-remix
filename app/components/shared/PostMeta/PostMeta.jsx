import { CategoryLink, categoryLinkLinks } from '../CategoryLink';

import styles from './PostMeta.css';

export function links() {
  return [...categoryLinkLinks(), { rel: 'stylesheet', href: styles }];
}

export function PostMeta({ category, date }) {
  return (
    <div className="post-meta">
      <CategoryLink to={`/category/${category.name.toLowerCase()}`}>
        {category.name}
      </CategoryLink>
      <p className="date">
        {new Date(date).toLocaleDateString('de-DE', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        })}
      </p>
    </div>
  );
}
