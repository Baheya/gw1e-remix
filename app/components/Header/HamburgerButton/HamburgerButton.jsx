import { Button, buttonLinks } from '../../Button';

import closeIcon from '../../../../public/images/close.svg';
import hamburgerIcon from '../../../../public/images/hamburger-icon.svg';

import styles from './HamburgerButton.css';

export function links() {
  return [...buttonLinks(), { rel: 'stylesheet', href: styles }];
}

export function HamburgerButton({ isNavVisible, setIsNavVisible }) {
  return (
    <Button
      onClick={() => setIsNavVisible(!isNavVisible)}
      label="Toggle Navigation Menu"
      type="icon"
      icon={
        !isNavVisible ? (
          <img
            className="icon"
            src={hamburgerIcon}
            alt="Toggle Navigation Menu"
          />
        ) : (
          <img className="icon" src={closeIcon} alt="Toggle Navigation Menu" />
        )
      }
    />
  );
}
