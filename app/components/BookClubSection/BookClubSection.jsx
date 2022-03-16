import { BookClubList, BookClubListLinks } from './BookClubList';

import styles from './BookClubSection.css';

export function links() {
  return [...BookClubListLinks(), { rel: 'stylesheet', href: styles }];
}

export function BookClubSection({ books }) {
  return (
    <section className="book-club-section">
      <h2>The Book Club</h2>
      <h3>
        {new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date())}
        's Picks
      </h3>
      <BookClubList books={books} />
    </section>
  );
}
