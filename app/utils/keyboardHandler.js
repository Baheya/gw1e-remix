export function keyboardHandler(e) {
  if (typeof window === 'undefined') return null;
  const dropdownButton = document.querySelector('.dropdown-button');
  const hamburgerButton = document?.querySelector('.hamburger-button');
  const subNavLinks = document?.querySelectorAll('.sub-navigation-link');
  const mainNavLinks = document?.querySelectorAll('.main-navigation-link');

  const firstFocusableEl = dropdownButton
    ? dropdownButton.getAttribute('aria-expanded') === 'true'
      ? dropdownButton
      : hamburgerButton
    : hamburgerButton;

  const dropdown = dropdownButton
    ? dropdownButton.getAttribute('aria-expanded') === 'true'
      ? subNavLinks
      : hamburgerButton.getAttribute('aria-expanded') === 'true' &&
        dropdownButton.getAttribute('aria-expanded') === 'false'
      ? mainNavLinks
      : null
    : null;

  const lastFocusableEl = dropdown?.[dropdown.length - 1];
  if (e.keyCode === 9) {
    //Rotate Focus
    if (e.shiftKey && document?.activeElement === firstFocusableEl) {
      // e.preventDefault();
      lastFocusableEl.focus();
    } else if (!e.shiftKey && document?.activeElement === lastFocusableEl) {
      e.preventDefault();
      firstFocusableEl.focus();
    }
  }
}
