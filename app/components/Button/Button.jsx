import { Link } from 'remix';

import styles from './Button.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export function Button({ children, to, icon, label, onClick, ...delegated }) {
  return (
    <>
      {to ? (
        <Link
          to={to}
          className={icon ? 'button icon-button' : 'button'}
          {...delegated}
        >
          {icon && (
            <>
              <span className="visually-hidden">{label}</span>
              {icon}
            </>
          )}
          {children}
        </Link>
      ) : (
        <button
          type="button"
          className={icon ? 'button icon-button' : 'button'}
          onClick={onClick}
          {...delegated}
        >
          {icon && (
            <>
              <span className="visually-hidden">{label}</span>
              {icon}
            </>
          )}
          {children}
        </button>
      )}
    </>
  );
}
