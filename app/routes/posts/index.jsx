import { useLoaderData } from 'remix';
import { useEffect } from 'react';
import { gql } from 'graphql-request';

import { BlogLayout, blogLayoutLinks } from '~/components/BlogLayout';

import { graphcms } from '~/utils/graphql';
import { calculateMasonryLayout, layout } from '~/utils/calculateMasonryLayout';

export function links() {
  return [...blogLayoutLinks()];
}

export async function action({ request }) {
  const formData = await request.formData();
  return redirect(`/posts`);
}

// TO DO: think about whether category icon should be dynamic
const postsLimit = 6;

const GetPostsQuery = gql`
  query GetPostsQuery($postsLimit: Int!, $offset: Int!) {
    postsConnection(first: $postsLimit, skip: $offset) {
      pageInfo {
        hasPreviousPage
        hasNextPage
        endCursor
      }
      aggregate {
        count
      }

      edges {
        cursor
        node {
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
    }
  }
`;

export let loader = async () => {
  const { postsConnection } = await graphcms.request(GetPostsQuery, {
    postsLimit,
    offset: 0,
  });

  return { postsConnection };
};

export default function Blog() {
  let { postsConnection } = useLoaderData();

  useEffect(() => {
    calculateMasonryLayout();
    addEventListener('resize', layout, false);

    return () => removeEventListener('resize', layout, false);
  }, []);

  return (
    <BlogLayout
      currentPage={0}
      postsLimit={postsLimit}
      posts={postsConnection}
    />
  );
}
