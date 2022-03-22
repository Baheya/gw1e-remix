import styles from './FeaturedImage.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export function FeaturedImage({ image, caption }) {
  return (
    <figure className="featured-image">
      <img
        loading="eager"
        src={image.thumbnail}
        alt="Featured Image"
        srcSet={`${image.thumbnail} 300w, ${image.url} 600w`}
        sizes="(min-width: 500px) 600px, 100px"
      />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
