import { Link } from 'remix';

import styles from './Tag.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export function Tag({ tag }) {
  return (
    <Link className="tag" to={`/tag/${tag.name.toLowerCase()}`}>
      #{tag.name.toLowerCase()}
    </Link>
  );
}
