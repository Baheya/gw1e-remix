import { Link } from 'remix';

import styles from './CategoryLink.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export function CategoryLink({ to, children = 'doing' }) {
  return (
    <Link
      to={to}
      className={`category-link ${children ? children?.toLowerCase() : ''}`}
    >
      <span>{children}</span>
    </Link>
  );
}
