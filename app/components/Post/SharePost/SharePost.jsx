import { useEffect, useState } from 'react';
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share';

import { Facebook } from '../../shared/Icons/Facebook';
import { Link } from '../../shared/Icons/Link';
import { Linkedin } from '../../shared/Icons/Linkedin';
import { Mail } from '../../shared/Icons/Mail';
import { Twitter } from '../../shared/Icons/Twitter';

import styles from './SharePost.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export function SharePost() {
  const [shareLink, setShareLink] = useState('');

  useEffect(() => {
    setShareLink(window.location.href);
  }, []);

  return (
    <div className="social-media">
      <p>Share</p>
      <TwitterShareButton url={shareLink}>
        <Twitter className="social-media-icon" />
      </TwitterShareButton>
      <FacebookShareButton url={shareLink}>
        <Facebook className="social-media-icon" />
      </FacebookShareButton>
      <LinkedinShareButton url={shareLink}>
        <Linkedin className="social-media-icon" />
      </LinkedinShareButton>
      <EmailShareButton url={shareLink}>
        <Mail className="social-media-icon" />
      </EmailShareButton>
      <Link className="social-media-icon" />
    </div>
  );
}
