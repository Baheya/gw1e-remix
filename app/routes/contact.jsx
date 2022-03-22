import { Link } from 'remix';
import {
  DecorativeIcons,
  decorativeIconsLinks,
} from '~/components/shared/Icons/DecorativeIcons';

import styles from '~/styles/contact.css';

export function links() {
  return [...decorativeIconsLinks(), { rel: 'stylesheet', href: styles }];
}

export function meta() {
  return { title: 'Girl with One Earring | Contact' };
}

export default function Contact() {
  return (
    <main>
      <h1 className="visually-hidden">Contact Me</h1>
      <div className="contact-container">
        <p>
          I’d prefer a handwritten letter but since this is the digital age you
          can find me on Instagram{' '}
          <a href="https://instagram.com/girlwithoneearringblog">
            @girlwithoneearringblog
          </a>{' '}
          or via e-mail{' '}
          <a href="mailto:girlwithoneearring.com">
            girlwithoneearring@gmail.com
          </a>
        </p>

        <p>Let's Connect</p>
        <DecorativeIcons />
      </div>
    </main>
  );
}
