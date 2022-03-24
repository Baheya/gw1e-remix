import styles from './Input.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export function Input({ label, name }) {
  return (
    <div className="newsletter-form-input-field">
      <label htmlFor={name}>{label}</label>
      <input name={name} id={name} type="text" />
    </div>
  );
}
