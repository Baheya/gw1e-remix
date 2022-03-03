import { Link } from 'remix';

import logo from '../../../../public/images/GW1E_Logo.png';

import styles from './Logo.css';

//TO DO: wrap logo in h1? Where is the title of the home page, semantically?

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export function Logo() {
  return (
    <Link to="/" className="logo-wrapper">
      <img src={logo} alt="Logo" className="logo" />
    </Link>
  );
}
