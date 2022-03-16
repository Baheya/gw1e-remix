import { useLoaderData, useParams } from 'remix';
import { useEffect } from 'react';
import { gql } from 'graphql-request';

import { Blog, blogLinks } from '~/components/Blog';

import { graphcms } from '~/utils/graphql';
import { calculateMasonryLayout, layout } from '~/utils/calculateMasonryLayout';

export function links() {
  return [...blogLinks()];
}

// TO DO: think about whether category icon should be dynamic
// add post limit to global config?
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
              url
            }
          }
        }
      }
    }
  }
`;

export let loader = async ({ params }) => {
  const offset = (params.page - 1) * postsLimit;
  const { postsConnection } = await graphcms.request(GetPostsQuery, {
    postsLimit,
    offset: offset,
  });

  return { postsConnection };
};

export default function Posts() {
  let { postsConnection } = useLoaderData();
  const { page } = useParams();

  useEffect(() => {
    calculateMasonryLayout();
    addEventListener('resize', layout, false);

    return () => removeEventListener('resize', layout, false);
  }, []);

  return (
    <Blog currentPage={page} postsLimit={postsLimit} posts={postsConnection} />
  );
}
