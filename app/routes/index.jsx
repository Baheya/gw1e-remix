import { useLoaderData } from 'remix';
import { gql } from 'graphql-request';

import {
  BookClubSection,
  bookClubSectionLinks,
} from '~/components/BookClubSection';
import {
  NewsletterFormSection,
  newsletterFormSectionLinks,
} from '~/components/NewsletterFormSection';
import { PostsSection, postsSectionLinks } from '~/components/PostsSection';

import { graphcms } from '~/utils/graphql';
import styles from '~/styles/home.css';

export function links() {
  return [
    ...bookClubSectionLinks(),
    ...newsletterFormSectionLinks(),
    ...postsSectionLinks(),
    { rel: 'stylesheet', href: styles },
  ];
}

export async function action({ request }) {
  const formData = await request.formData();
  return redirect(`/category/all`);
}

// TO DO: think about whether category icon should be dynamic

const GetBlogPostsQuery = gql`
  {
    posts(first: 4, where: { type: Blog }) {
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
        }
      }
    }
  }
`;

const GetBookReviewPostsQuery = gql`
  {
    posts(where: { type: Review }) {
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
  const { posts: blogPosts } = await graphcms.request(GetBlogPostsQuery);
  const { posts: bookReviewPosts } = await graphcms.request(
    GetBookReviewPostsQuery
  );

  return { blogPosts, bookReviewPosts };
};

export default function Index() {
  let { blogPosts, bookReviewPosts } = useLoaderData();

  return (
    <main>
      <h1 className="visually-hidden">Girl with One Earring</h1>
      <PostsSection blogPosts={blogPosts} />
      <BookClubSection books={bookReviewPosts} />
      <NewsletterFormSection />
    </main>
  );
}
