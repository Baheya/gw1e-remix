import { BookReviewItem, bookReviewItemLinks } from '../BookReviewItem';

import styles from './BookClubSection.css';

export function links() {
  return [...bookReviewItemLinks(), { rel: 'stylesheet', href: styles }];
}

export function BookClubSection({ books }) {
  return (
    <section className="book-club_section">
      <h2>The Book Club</h2>
      <h3>
        {new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date())}
        's Picks
      </h3>
      <ul className="books">
        {books.map((book) => (
          <BookReviewItem key={book.id} book={book} />
        ))}
      </ul>
    </section>
  );
}
