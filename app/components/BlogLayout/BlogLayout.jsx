import { Pagination, paginationLinks } from '../Pagination';
import { PostItem, postItemLinks } from '../PostItem';

import styles from './BlogLayout.css';

export function links() {
  return [
    ...paginationLinks(),
    ...postItemLinks(),
    { rel: 'stylesheet', href: styles },
  ];
}

export function BlogLayout({ posts, postsLimit, currentPage }) {
  let pageCount = Math.round(posts.aggregate.count / postsLimit);

  return (
    <main className="blog-feed">
      <h1 className="visually-hidden">Latest Posts</h1>
      <ul className="grid-masonry">
        {posts?.edges.map((post) => (
          <PostItem key={post.node.id} post={post.node} />
        ))}
      </ul>
      <Pagination currentPage={currentPage} pageCount={pageCount} />
    </main>
  );
}
