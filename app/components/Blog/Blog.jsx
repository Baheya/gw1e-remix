import { Pagination, paginationLinks } from './Pagination';
import { Posts, postsLinks } from '../shared/Posts';

import styles from './Blog.css';

export function links() {
  return [
    ...paginationLinks(),
    ...postsLinks(),
    { rel: 'stylesheet', href: styles },
  ];
}

export function Blog({ posts, postsLimit, currentPage, category }) {
  let pageCount = Math.round(posts.aggregate.count / postsLimit);

  return (
    <main className="blog-container">
      <h1 className="visually-hidden">Latest Posts</h1>
      <Posts layoutType="masonry" posts={posts?.edges} />
      <Pagination
        currentPage={currentPage}
        pageCount={pageCount}
        category={category}
      />
    </main>
  );
}
