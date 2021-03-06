import { Link } from 'remix';

import { Button, buttonLinks } from '../shared/Button';
import { Instagram } from '../shared/Icons/Instagram';

import styles from './Footer.css';

export function links() {
  return [...buttonLinks(), { rel: 'stylesheet', href: styles }];
}

export function Footer() {
  const pages = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/category/all' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];
  return (
    <footer className="footer">
      <nav className="footer-navigation" aria-label="Footer Navigation">
        <ul className="footer-navigation-links">
          {pages.map((page, index) => (
            <li key={index}>
              <Link to={page.path}>{page.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Button
        variant="icon"
        label="Follow on Instagram"
        icon={<Instagram className="icon" />}
      />
    </footer>
  );
}
