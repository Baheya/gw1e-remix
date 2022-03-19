import { PaginationItem, paginationItemLinks } from './PaginationItem';

import styles from './Pagination.css';

export function links() {
  return [...paginationItemLinks(), { rel: 'stylesheet', href: styles }];
}

export function Pagination({ pageCount, currentPage, category }) {
  return (
    <nav role="navigation" aria-label="Pagination" className="pagination">
      <ul>
        {Array.from({ length: pageCount }, (_, i) => i + 1).map((_, index) => (
          <PaginationItem
            currentPage={currentPage}
            key={index}
            index={index}
            category={category}
          />
        ))}
      </ul>
    </nav>
  );
}
