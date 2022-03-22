import styles from './Divider.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export function Divider() {
  return (
    <div className="divider-wrapper">
      <div className="divider" />
    </div>
  );
}
