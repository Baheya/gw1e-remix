import { Living } from '~/components/shared/Icons/Living';
import { Loving } from '~/components/shared/Icons/Loving';
import { Doing } from '~/components/shared/Icons/Doing';
import { Dying } from '~/components/shared/Icons/Dying';

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
