import { Living } from '~/components/Icons/Living';
import { Loving } from '~/components/Icons/Loving';
import { Doing } from '~/components/Icons/Doing';
import { Dying } from '~/components/Icons/Dying';

import styles from '~/styles/contact.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
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
        <div className="icons-container">
          <Living />
          <Loving />
          <Doing />
          <Dying />
        </div>
      </div>
    </main>
  );
}
