import { Living } from '~/components/Icons/Living';
import { Loving } from '~/components/Icons/Loving';
import { Doing } from '~/components/Icons/Doing';
import { Dying } from '~/components/Icons/Dying';

import styles from './DecorativeIcons.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export function DecorativeIcons() {
  return (
    <div className="decorative-icons-container">
      <Living />
      <Loving />
      <Doing />
      <Dying />
    </div>
  );
}
