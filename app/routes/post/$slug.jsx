import { useLoaderData, useParams } from 'remix';
import { gql } from 'graphql-request';

import { graphcms } from '~/utils/graphql';
import { SinglePost, singlePostLinks } from '../../components/Post';

export function links() {
  return [...singlePostLinks()];
}

export async function action({ request }) {
  const formData = await request.formData();
  return redirect(`/category/all`);
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

  return <SinglePost post={post} />;
}
