import { NavLink } from 'remix';

import styles from './PaginationItem.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export function PaginationItem({ index, currentPage, category }) {
  return (
    <li>
      <NavLink
        to={
          index === 0
            ? `/category/${category}`
            : `/category/${category}/${index + 1}`
        }
        className={({ isActive }) =>
          isActive ? 'pagination-item active' : 'pagination-item'
        }
        aria-label="Go to page"
        aria-current={currentPage === index}
        end
      >
        {index + 1}
      </NavLink>
    </li>
  );
}
