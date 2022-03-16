import { BookClubItem, bookClubItemLinks } from '../BookClubItem';

import styles from './BookClubList.css';

export function links() {
  return [...bookClubItemLinks(), { rel: 'stylesheet', href: styles }];
}

export function BookClubList({ books }) {
  return (
    <ul className="book-club-list">
      {books.map((book) => (
        <BookClubItem key={book.id} book={book} />
      ))}
    </ul>
  );
}
