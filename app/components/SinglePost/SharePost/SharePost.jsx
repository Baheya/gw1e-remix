import { Facebook } from '../../Icons/Facebook';
import { Link } from '../../Icons/Link';
import { Linkedin } from '../../Icons/Linkedin';
import { Mail } from '../../Icons/Mail';
import { Twitter } from '../../Icons/Twitter';

import { useEffect, useState } from 'react';

import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from 'react-share';

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
