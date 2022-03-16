import styles from './FeaturedImage.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export function FeaturedImage({ image, caption }) {
  return (
    <figure className="featured-image">
      <img src={image} alt="Featured Image" />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
