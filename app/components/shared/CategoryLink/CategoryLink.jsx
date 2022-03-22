import { NavLink } from 'remix';

import styles from './CategoryLink.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export function CategoryLink({
  to,
  className,
  children = 'doing',
  ...delegated
}) {
  return (
    <NavLink
      to={to}
      className={`${className ?? ''} category-link ${
        children ? children?.toLowerCase() : ''
      }`}
      {...delegated}
    >
      <span>{children}</span>
    </NavLink>
  );
}
