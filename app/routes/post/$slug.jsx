import { useLoaderData, useParams } from 'remix';
import { useEffect } from 'react';
import { gql } from 'graphql-request';

import { graphcms } from '~/utils/graphql';
import { SinglePost, singlePostLinks } from '../../components/SinglePost';

export function links() {
  return [...singlePostLinks()];
}

export async function action({ request }) {
  const formData = await request.formData();
  return redirect(`/posts`);
}

// TO DO: think about whether category icon should be dynamic
// add post limit to global config?

const GetPostQuery = gql`
  query GetPostQuery($slug: String!) {
    post(where: { slug: $slug }) {
      body {
        raw
      }
      category {
        name
      }
      featuredImage {
        caption
        image {
          url
        }
      }
      tag {
        ... on Tag {
          id
          name
        }
      }
      publishedAt
      id
      slug
      title
    }
  }
`;

export let loader = async ({ params }) => {
  const slug = params.slug;
  const { post } = await graphcms.request(GetPostQuery, {
    slug,
  });

  return { post };
};

export default function BlogPage() {
  let { post } = useLoaderData();
  const { page } = useParams();

  return <SinglePost post={post} />;
}
