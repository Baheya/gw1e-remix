import { Button, buttonLinks } from '~/components/shared/Button';

import styles from './DropdownButton.css';

export function links() {
  return [...buttonLinks(), { rel: 'stylesheet', href: styles }];
}

export function DropdownButton({
  isSubNavVisible,
  setIsSubNavVisible,
  children,
}) {
  return (
    <Button
      label="Toggle Blog Categories Navigation"
      className="button dropdown-button"
      aria-expanded={isSubNavVisible}
      aria-controls="blog-dropdown"
      onClick={() => setIsSubNavVisible(!isSubNavVisible)}
    >
      <span>{children}</span>
    </Button>
  );
}
