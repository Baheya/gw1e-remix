import { Link } from 'remix';

import styles from './Button.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export function Button({
  children,
  to,
  icon,
  variant,
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
            variant === 'icon'
              ? 'button icon-button'
              : variant === 'primary'
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
          className={
            variant === 'icon'
              ? 'button icon-button'
              : variant === 'primary'
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
