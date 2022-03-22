import arabicLogo from '../../../../public/images/arabic_logo.png';

import styles from './ArabicSignature.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export function ArabicSignature() {
  return (
    <img
      className="arabic-signature"
      src={arabicLogo}
      alt="Girl With One Earring Signature in Arabic"
    />
  );
}
