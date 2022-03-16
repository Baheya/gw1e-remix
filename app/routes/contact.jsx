import {
  DecorativeIcons,
  decorativeIconsLinks,
} from '~/components/Icons/DecorativeIcons';

import styles from '~/styles/contact.css';

export function links() {
  return [...decorativeIconsLinks(), { rel: 'stylesheet', href: styles }];
}

export default function Contact() {
  return (
    <main>
      <h1 className="visually-hidden">Contact Me</h1>
      <div className="contact-container">
        <p>
          I’d prefer a handwritten letter but since this is the digital age you
          can find me on Instagram @girlwithoneearringblog or via e-mail
          girlwithoneearring@gmail.com
        </p>

        <p>Let's Connect</p>
        <DecorativeIcons />
      </div>
    </main>
  );
}
