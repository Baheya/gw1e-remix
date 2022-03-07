import { useLoaderData } from 'remix';
import { GraphQLClient, gql } from 'graphql-request';

import {
  BookClubSection,
  bookClubSectionLinks,
} from '~/components/BookClubSection';
import {
  NewsletterFormSection,
  newsletterFormSectionLinks,
} from '~/components/NewsletterFormSection';
import {
  BlogPostsSection,
  blogPostsSectionLinks,
} from '~/components/BlogPostsSection';

import { graphcms } from '~/utils/graphql';
import styles from '~/styles/home.css';

export function links() {
  return [
    ...bookClubSectionLinks(),
    ...newsletterFormSectionLinks(),
    ...blogPostsSectionLinks(),
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
    blogPosts(first: 4) {
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
  // const graphcms = new GraphQLClient(
  //   'https://api-ap-south-1.graphcms.com/v2/ckypsi3rt0inu01xx6kuecie8/master'
  // );

  const { blogPosts } = await graphcms.request(GetBlogPostsQuery);
  const { bookReviewPosts } = await graphcms.request(GetBookReviewPostsQuery);

  return { blogPosts, bookReviewPosts };
};

export default function Index() {
  let { blogPosts, bookReviewPosts } = useLoaderData();

  return (
    <main>
      <h1 className="visually-hidden">Girl with One Earring</h1>
      <BlogPostsSection blogPosts={blogPosts} />
      <BookClubSection books={bookReviewPosts} />
      <NewsletterFormSection />
    </main>
  );
}
