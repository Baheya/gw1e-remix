import styles from './BookClubSection.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export function BookClubSection({ books }) {
  return (
    <section className="book-club_section">
      <h2>The Book Club</h2>
      <h3>
        {new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date())}
        's Picks
      </h3>
      <div className="books">
        {books.map((book) => (
          <img
            src={book.featuredImage.image.url}
            alt={`Book cover for ${book.featuredImage.name}`}
          />
        ))}
      </div>
    </section>
  );
}
