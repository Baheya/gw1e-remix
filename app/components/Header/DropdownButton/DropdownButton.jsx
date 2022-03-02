import { Button, buttonLinks } from '~/components/Button';

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
      aria-expanded={isSubNavVisible}
      aria-controls="blog-dropdown"
      onClick={() => setIsSubNavVisible(!isSubNavVisible)}
    >
      <span>{children}</span>
    </Button>
  );
}
