import { Layout } from '@components/common';
import { getAllPosts } from '@lib/mdxUtils';
import cn from 'classnames';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

import { Post } from './posts/[slug]';
import styles from './styles/blog.module.scss';

type BlogProps = {
  posts: Post[];
};

const Blog = ({ posts }: BlogProps) => (
  <>
    <NextSeo title="Blog" />
    <div className={cn(styles.article, 'container mx-auto padded')}>
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

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts([
    'slug',
    'date',
    'thumbnail',
    'title',
    'description',
  ]);

  return { props: { posts } };
};
