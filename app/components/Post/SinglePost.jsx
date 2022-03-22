import {
  ArabicSignature,
  arabicSignatureLinks,
} from '../shared/ArabicSignature';
import { Body, bodyLinks } from './Body';
import {
  DecorativeIcons,
  decorativeIconsLinks,
} from '../shared/Icons/DecorativeIcons';
import { FeaturedImage, featuredImageLinks } from './FeaturedImage';
import { Tags, tagsLinks } from './Tags';
import { PostMeta, postMetaLinks } from '~/components/shared/PostMeta';
import { SharePost, sharePostLinks } from './SharePost';

import styles from './SinglePost.css';

export function links() {
  return [
    ...postMetaLinks(),
    ...sharePostLinks(),
    ...decorativeIconsLinks(),
    ...arabicSignatureLinks(),
    ...featuredImageLinks(),
    ...tagsLinks(),
    ...bodyLinks(),
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
        image={post.featuredImage.image}
        caption={post.featuredImage.caption}
      />
      <Body content={post.body.raw} />
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
