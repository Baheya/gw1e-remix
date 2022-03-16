import { RichText } from '@graphcms/rich-text-react-renderer';

import { ArabicSignature, arabicSignatureLinks } from '../ArabicSignature';
import {
  DecorativeIcons,
  decorativeIconsLinks,
} from '../Icons/DecorativeIcons';
import { PostMeta, postMetaLinks } from '~/components/PostMeta';
import { SharePost, sharePostLinks } from './SharePost';
import { Tag, tagLinks } from './Tags/Tag';

import styles from './SinglePost.css';
import { FeaturedImage, featuredImageLinks } from './FeaturedImage';
import { Tags, tagsLinks } from './Tags';

export function links() {
  return [
    ...postMetaLinks(),
    ...sharePostLinks(),
    ...decorativeIconsLinks(),
    ...arabicSignatureLinks(),
    ...tagLinks(),
    ...featuredImageLinks(),
    ...tagsLinks(),
    { rel: 'stylesheet', href: styles },
  ];
}

export function SinglePost({ post }) {
  return (
    <article className="post">
      <h1>{post.title}</h1>
      <PostMeta category={post.category} date={post.publishedAt} />
      <SharePost />
      <FeaturedImage
        image={post.featuredImage.image.url}
        caption={post.featuredImage.caption}
      />
      <div className="body">
        <RichText content={post.body.raw} />
      </div>
      <div className="post-footer">
        <Tags tags={post.tag} />

        <SharePost />
      </div>
      <p className="send-off">Till Next Time!</p>
      <ArabicSignature />
      <DecorativeIcons />
    </article>
  );
}
