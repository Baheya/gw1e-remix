import styles from './FeaturedImage.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export function FeaturedImage({ layoutType, featured, post }) {
  return (
    <>
      {layoutType === 'spotlight' ? (
        featured ? (
          <img
            loading="eager"
            src={post.featuredImage.image.url}
            alt={post?.imageAlt}
            srcSet={`${post.featuredImage.image.thumbnail} 300w, ${post.featuredImage.image.url} 600w`}
            sizes="(min-width: 500px) 600px, 100px"
          />
        ) : (
          <img
            loading="lazy"
            src={post.featuredImage.image.thumbnail}
            alt={post?.imageAlt}
            srcSet={`${post.featuredImage.image.thumbnail} 300w, ${post.featuredImage.image.url} 600w`}
            sizes="(min-width: 800px) 100px, 
            (min-width: 500px) 600px, 100px"
          />
        )
      ) : (
        <img
          className="featured-image"
          loading="eager"
          src={post.featuredImage.image.thumbnail}
          style={{
            aspectRatio: `${
              post.featuredImage.image.width / post.featuredImage.image.height
            }`,
          }}
          alt={post?.imageAlt}
          srcSet={`${post.featuredImage.image.thumbnail} 300w, ${post.featuredImage.image.url} 600w`}
          sizes="(min-width: 500px) 100px, 300px"
        />
      )}
    </>
  );
}
