import { Link } from 'remix';

import styles from './BookClubItem.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export function BookClubItem({ book }) {
  return (
    <li className="book-club-item" key={book.id}>
      <Link to={`/post/${book.slug}`}>
        <img
          loading="lazy"
          src={book.featuredImage.image.thumbnail}
          alt={`Book cover for ${book.featuredImage.name}`}
        />
      </Link>
    </li>
  );
}
