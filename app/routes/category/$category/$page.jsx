import { useLoaderData, useParams } from 'remix';
import { gql } from 'graphql-request';

import { Blog, blogLinks } from '~/components/Blog';

import { graphcms } from '~/utils/graphql';

export function links() {
  return [...blogLinks()];
}

export function meta() {
  return { title: 'Girl with One Earring | Blog' };
}

const postsLimit = 6;

const GetPostsQuery = gql`
  query GetPostsQuery(
    $postsLimit: Int!
    $offset: Int!
    $category: PostWhereInput
  ) {
    postsConnection(first: $postsLimit, skip: $offset, where: $category) {
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
                  image: { resize: { height: 300, width: 400 } }
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

export let loader = async ({ params }) => {
  const offset = (params.page - 1) * postsLimit;
  const category =
    params.category === 'all'
      ? undefined
      : params.category.charAt(0).toUpperCase() +
        params.category.slice(1).toLowerCase();
  const { postsConnection } = await graphcms.request(GetPostsQuery, {
    postsLimit,
    offset: offset,
    category: { category: { name: category } },
  });

  return { postsConnection };
};

export default function Posts() {
  let { postsConnection } = useLoaderData();
  const { category, page } = useParams();

  return (
    <Blog
      currentPage={page}
      postsLimit={postsLimit}
      posts={postsConnection}
      category={category}
    />
  );
}
