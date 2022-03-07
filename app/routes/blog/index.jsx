import { useLoaderData } from 'remix';
import { useEffect } from 'react';
import { gql } from 'graphql-request';

import { PostItem, postItemLinks } from '~/components/PostItem';

import { graphcms } from '~/utils/graphql';
import { calculateMasonryLayout } from '~/utils/calculateMasonryLayout';

import styles from '~/styles/blog.css';

export function links() {
  return [...postItemLinks(), { rel: 'stylesheet', href: styles }];
}

export async function action({ request }) {
  const formData = await request.formData();
  return redirect(`/blog`);
}

// TO DO: think about whether category icon should be dynamic

const GetPostsQuery = gql`
  {
    posts(first: 6) {
      id
      title
      category {
        name
        # icon {
        #   url
        # }
      }
      excerpt
      updatedAt
      featuredImage {
        image {
          url
        }
      }
    }
  }
`;

export let loader = async () => {
  const { posts } = await graphcms.request(GetPostsQuery);

  return { posts };
};

export default function Blog() {
  let { posts } = useLoaderData();

  useEffect(() => {
    calculateMasonryLayout();
  }, []);

  return (
    <main className="blog-feed">
      <h1 className="visually-hidden">Latest Posts</h1>
      <ul className="grid-masonry">
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
    </main>
  );
}
