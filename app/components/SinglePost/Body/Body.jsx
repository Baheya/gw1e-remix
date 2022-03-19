import { RichText } from '@graphcms/rich-text-react-renderer';

import { Quote, quoteLinks } from '../Quote';

import styles from './Body.css';

export function links() {
  return [...quoteLinks(), { rel: 'stylesheet', href: styles }];
}

export function Body({ content }) {
  return (
    <div className="body">
      <RichText
        content={content}
        renderers={{ blockquote: ({ children }) => <Quote>{children}</Quote> }}
      />
    </div>
  );
}
