import { NavLink } from 'remix';
import { useState, useEffect } from 'react';

import { CategoryLink, categoryLinkLinks } from '../shared/CategoryLink';
import { DropdownButton, dropdownButtonLinks } from './DropdownButton';
import { HamburgerButton, hamburgerButtonLinks } from './HamburgerButton';
import { Logo, logoLinks } from './Logo';

import { keyboardHandler } from '~/utils/keyboardHandler';

import styles from './Header.css';
import { useLocation } from '@remix-run/react';

export function links() {
  return [
    ...logoLinks(),
    ...categoryLinkLinks(),
    ...hamburgerButtonLinks(),
    ...dropdownButtonLinks(),
    { rel: 'stylesheet', href: styles },
  ];
}

const categories = [
  { name: 'Living', path: '/category/living' },
  { name: 'Loving', path: '/category/loving' },
  { name: 'Reading', path: '/category/reading' },
  { name: 'Doing', path: '/category/doing' },
  { name: 'Dying', path: '/category/dying' },
];

const pages = [
  { name: 'Home', path: '/', hasChildren: false },
  { name: 'Blog', path: '/category/all', hasChildren: true },
  { name: 'About', path: '/about', hasChildren: false },
  { name: 'Contact', path: '/contact', hasChildren: false },
];

export function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isSubNavVisible, setIsSubNavVisible] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsNavVisible(false);
  }, [pathname]);

  useEffect(() => {
    addEventListener('keydown', keyboardHandler);

    return () => removeEventListener('keydown', keyboardHandler);
  }, []);

  return (
    <header className={isNavVisible ? 'header pink' : 'header'}>
      <nav className="header-navigation" aria-label="Main Navigation">
        <Logo />
        <HamburgerButton
          setIsNavVisible={setIsNavVisible}
          isNavVisible={isNavVisible}
        />

        <ul
          className={
            isNavVisible
              ? 'main-navigation-links visible'
              : 'main-navigation-links'
          }
        >
          {pages.map((page, index) =>
            page.hasChildren ? (
              <li className="dropdown" key={index}>
                <DropdownButton
                  isSubNavVisible={isSubNavVisible}
                  setIsSubNavVisible={setIsSubNavVisible}
                >
                  {page.name}
                </DropdownButton>
                <ul
                  className={
                    isSubNavVisible
                      ? 'sub-navigation-links visible'
                      : 'sub-navigation-links'
                  }
                  id="blog-dropdown"
                >
                  {categories.map((category, index) => (
                    <li key={index}>
                      <CategoryLink
                        className="sub-navigation-link"
                        prefetch="intent"
                        to={category.path}
                      >
                        {category.name}
                      </CategoryLink>
                    </li>
                  ))}
                  <li>
                    <NavLink
                      className="sub-navigation-link"
                      // prefetch="intent"
                      to="/category/all"
                    >
                      All Stories
                    </NavLink>
                  </li>
                </ul>
              </li>
            ) : (
              <li key={index}>
                <NavLink
                  // prefetch="intent"
                  to={page.path}
                  className={({ isActive }) =>
                    isActive
                      ? 'link-active main-navigation-link'
                      : 'main-navigation-link'
                  }
                >
                  {page.name}
                </NavLink>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
}
