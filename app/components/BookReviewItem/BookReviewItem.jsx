import { Link } from 'remix';
import styles from './BookReviewItem.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export function BookReviewItem({ book }) {
  return (
    <li className="book-review_item" key={book.id}>
      <Link to="/">
        <img
          src={book.featuredImage.image.url}
          alt={`Book cover for ${book.featuredImage.name}`}
        />
      </Link>
    </li>
  );
}
