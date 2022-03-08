import { Link } from 'remix';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import { CategoryLink, categoryLinkLinks } from '../CategoryLink';
import { DropdownButton, dropdownButtonLinks } from './DropdownButton';
import { HamburgerButton, hamburgerButtonLinks } from './HamburgerButton';
import { Logo, logoLinks } from './Logo';

import styles from './Header.css';

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
  { name: 'Doing', path: '/category/doing' },
  { name: 'Dying', path: '/category/dying' },
];

const pages = [
  { name: 'Home', path: '/', hasChildren: false },
  { name: 'Blog', path: '/posts', hasChildren: true },
  { name: 'About', path: '/about', hasChildren: false },
  { name: 'Contact', path: '/contact', hasChildren: false },
];

export function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isSubNavVisible, setIsSubNavVisible] = useState(false);

  const isBiggerThanTablet = useMediaQuery({
    query: '(min-width: 768px)',
  });

  useEffect(() => {
    setIsSubNavVisible(false);
  }, [isBiggerThanTablet]);

  return (
    <header
      className={isNavVisible && !isBiggerThanTablet ? 'header pink' : 'header'}
    >
      <nav className="nav" aria-label="Main Navigation">
        <Logo />
        <HamburgerButton
          setIsNavVisible={setIsNavVisible}
          isNavVisible={isNavVisible}
        />
        {isBiggerThanTablet || isNavVisible ? (
          <ul className="main-navigation-links">
            {pages.map((page, index) =>
              page.hasChildren ? (
                <li className="dropdown" key={index}>
                  <DropdownButton
                    isSubNavVisible={isSubNavVisible}
                    setIsSubNavVisible={setIsSubNavVisible}
                  >
                    Blog
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
                      <li>
                        <CategoryLink to="/category/living" key={index}>
                          {category.name}
                        </CategoryLink>
                      </li>
                    ))}
                    <li>
                      <Link to="/posts">All Stories</Link>
                    </li>
                  </ul>
                </li>
              ) : (
                <li key={index}>
                  <Link to={page.path}>{page.name}</Link>
                </li>
              )
            )}
          </ul>
        ) : null}
      </nav>
    </header>
  );
}
