import { Button, buttonLinks } from '../../shared/Button';
import { Close } from '~/components/shared/Icons/Close';
import { Hamburger } from '~/components/shared/Icons/Hamburger';

import styles from './HamburgerButton.css';

export function links() {
  return [...buttonLinks(), { rel: 'stylesheet', href: styles }];
}

export function HamburgerButton({ isNavVisible, setIsNavVisible }) {
  return (
    <Button
      onClick={() => setIsNavVisible(!isNavVisible)}
      label="Toggle Navigation Menu"
      variant="icon"
      className="hamburger-button"
      aria-expanded={isNavVisible}
      icon={!isNavVisible ? <Hamburger /> : <Close />}
    />
  );
}
