import { useLoaderData } from 'remix';
import { useEffect } from 'react';
import { gql } from 'graphql-request';

import { Blog, blogLinks } from '~/components/Blog';

import { graphcms } from '~/utils/graphql';

export function links() {
  return [...blogLinks()];
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
          }
          excerpt
          updatedAt
          slug
          featuredImage {
            image {
              thumbnail: url(
                transformation: {
                  image: { resize: { height: 200, width: 300 } }
                  document: { output: { format: webp } }
                }
              )
              url(
                transformation: {
                  image: { resize: { height: 400, width: 600 } }
                  document: { output: { format: webp } }
                }
              )
              width
              height
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

export default function Posts() {
  let { postsConnection } = useLoaderData();

  return (
    <Blog currentPage={0} postsLimit={postsLimit} posts={postsConnection} />
  );
}
