import { Link } from 'remix';

import styles from './Button.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export function Button({
  children,
  to,
  icon,
  type,
  label,
  onClick,
  ...delegated
}) {
  return (
    <>
      {to ? (
        <Link
          to={to}
          className={
            type === 'icon'
              ? 'button icon-button'
              : type === 'primary'
              ? 'button primary-button'
              : 'button'
          }
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
          className={
            type === 'icon'
              ? 'button icon-button'
              : type === 'primary'
              ? 'button primary-button'
              : 'button'
          }
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
