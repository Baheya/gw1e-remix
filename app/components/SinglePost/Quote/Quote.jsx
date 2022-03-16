import styles from './Quote.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export function Quote({ children }) {
  return <blockquote className="quote">{children}</blockquote>;
}
