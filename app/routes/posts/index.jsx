import { useLoaderData } from 'remix';
import { GraphQLClient, gql } from 'graphql-request';

import styles from '~/styles/posts.css';
import { PostItem, postItemLinks } from '~/components/PostItem';
import {
  BookClubSection,
  bookClubSectionLinks,
} from '~/components/BookClubSection';

export function links() {
  return [
    ...postItemLinks(),
    ...bookClubSectionLinks(),
    { rel: 'stylesheet', href: styles },
  ];
}

// TO DO: think about whether category icon should be dynamic

const GetBlogPostsQuery = gql`
  {
    blogPosts {
      id
      title
      category {
        name
        icon {
          url
        }
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

const GetBookReviewPostsQuery = gql`
  {
    bookReviewPosts {
      id
      title
      excerpt
      updatedAt
      featuredImage {
        image {
          url
        }
        name
      }
    }
  }
`;

export let loader = async () => {
  const graphcms = new GraphQLClient(
    'https://api-ap-south-1.graphcms.com/v2/ckypsi3rt0inu01xx6kuecie8/master'
  );

  const { blogPosts } = await graphcms.request(GetBlogPostsQuery);
  const { bookReviewPosts } = await graphcms.request(GetBookReviewPostsQuery);

  return { blogPosts, bookReviewPosts };
};

export default function Posts() {
  let { blogPosts, bookReviewPosts } = useLoaderData();
  console.log(bookReviewPosts);

  return (
    <div>
      <h1>Posts hiiii</h1>
      {blogPosts.map((post) => (
        <PostItem
          title={post.title}
          category={post.category}
          date={post.updatedAt}
          key={post.id}
          excerpt={post.excerpt}
          image={post.featuredImage.image.url}
          featured
        />
      ))}
      <BookClubSection books={bookReviewPosts} />
    </div>
  );
}
