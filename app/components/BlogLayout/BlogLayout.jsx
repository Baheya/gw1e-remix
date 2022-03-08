import { PaginationItem, paginationItemLinks } from '../PaginationItem';
import { PostItem, postItemLinks } from '../PostItem';

import styles from './BlogLayout.css';

export function links() {
  return [
    ...paginationItemLinks(),
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
      <nav role="navigation" aria-label="Pagination">
        <ul>
          {Array.from({ length: pageCount }, (_, i) => i + 1).map(
            (_, index) => (
              <PaginationItem
                currentPage={currentPage}
                key={index}
                index={index}
              />
            )
          )}
        </ul>
      </nav>
    </main>
  );
}
