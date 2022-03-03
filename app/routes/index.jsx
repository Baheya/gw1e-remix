import { useLoaderData } from 'remix';
import { GraphQLClient, gql } from 'graphql-request';

import styles from '~/styles/home.css';
import { PostItem, postItemLinks } from '~/components/PostItem';
import {
  BookClubSection,
  bookClubSectionLinks,
} from '~/components/BookClubSection';
import {
  NewsletterFormSection,
  newsletterFormSectionLinks,
} from '~/components/NewsletterFormSection';

export function links() {
  return [
    ...postItemLinks(),
    ...bookClubSectionLinks(),
    ...newsletterFormSectionLinks(),
    { rel: 'stylesheet', href: styles },
  ];
}

export async function action({ request }) {
  const formData = await request.formData();
  return redirect(`/posts`);
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
      <NewsletterFormSection />
    </div>
  );
}
