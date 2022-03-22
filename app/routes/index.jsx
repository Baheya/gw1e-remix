import { useLoaderData } from 'remix';
import { gql } from 'graphql-request';

import {
  BookClubSection,
  bookClubSectionLinks,
} from '~/components/Home/BookClubSection';
import {
  NewsletterFormSection,
  newsletterFormSectionLinks,
} from '~/components/Home/NewsletterFormSection';
import {
  PostsSection,
  postsSectionLinks,
} from '~/components/Home/PostsSection';

import { graphcms } from '~/utils/graphql';

export function links() {
  return [
    ...bookClubSectionLinks(),
    ...newsletterFormSectionLinks(),
    ...postsSectionLinks(),
  ];
}

export async function action({ request }) {
  const formData = await request.formData();
  return redirect(`/category/all`);
}

export function meta() {
  return { title: 'Girl with One Earring | Home' };
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
      slug
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
