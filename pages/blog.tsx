import { Layout } from '@components/common';
import { IFrontmatter } from '@components/common/Page/MarkdownPage';
import { getAllMarkdownByDate } from '@lib/mdxUtils';
import cn from 'classnames';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

type BlogProps = {
  posts: IFrontmatter[];
};

const Blog = ({ posts }: BlogProps) => (
  <>
    <NextSeo title="Blog" />
    <div className={cn('container')}>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  </>
);

export default Blog;

Blog.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const posts = getAllMarkdownByDate(
    ['slug', 'date', 'thumbnail', 'title', 'description'],
    locale!,
    'posts'
  );

  if (posts.length === 0) {
    return {
      notFound: true,
    };
  }

  return { props: { posts } };
};
