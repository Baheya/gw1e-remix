import { useLoaderData, json, Link } from 'remix';
import { GraphQLClient, gql } from 'graphql-request';

import styles from '~/styles/posts.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

const GetBlogPostsQuery = gql`
  {
    blogPosts {
      id
      title
    }
  }
`;

export let loader = async () => {
  const graphcms = new GraphQLClient(
    'https://api-ap-south-1.graphcms.com/v2/ckypsi3rt0inu01xx6kuecie8/master'
  );

  const { blogPosts } = await graphcms.request(GetBlogPostsQuery);

  return blogPosts;
};

export default function Posts() {
  let blogPosts = useLoaderData();

  return (
    <div>
      <h1>Posts hiiii</h1>
      {blogPosts.map((post) => (
        <h1>{post.title}</h1>
      ))}
    </div>
  );
}
