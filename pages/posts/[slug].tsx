import { Layout } from '@components/common';
import { ImageWithAspectRatio } from '@components/ui';
import { getAllPosts, getPost } from '@lib/mdxUtils';
import cn from 'classnames';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { NextSeo } from 'next-seo';

import styles from '../styles/post.module.scss';

export type Post = {
  slug: string;
  date: string;
  title: string;
  description: string;
  thumbnail: string;
};

type PostPage = {
  mdxSource: MDXRemoteSerializeResult;
  frontmatter: Post;
  locale?: string;
};

const SingleBlog = ({ mdxSource, frontmatter, locale }: PostPage) => {
  const blogdate = new Date(frontmatter.date);
  return (
    <>
      <NextSeo
        title={frontmatter.title}
        description={frontmatter.description}
        openGraph={{
          title: frontmatter.title,
          description: frontmatter.description,
          images: [
            {
              url: frontmatter.thumbnail,
              width: 800,
              height: 600,
              alt: frontmatter.title,
            },
          ],
        }}
      />
      <article className={cn(styles.article)}>
        <header className={cn(styles.header, 'container padded')}>
          <h1>{frontmatter.title}</h1>
          <small>{`Published at ${blogdate.toLocaleDateString(locale)}`}</small>
        </header>
        {frontmatter.thumbnail && (
          <ImageWithAspectRatio
            wrapperClassName={cn(styles.thumbnail)}
            src={frontmatter.thumbnail}
            aspectRatio="4/1"
          />
        )}
        <div className={cn(styles.content, 'container-page mx-auto padded')}>
          <MDXRemote {...mdxSource} />
        </div>
      </article>
    </>
  );
};

export default SingleBlog;

SingleBlog.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const { content, data } = getPost(params?.slug as string);

  const mdxSource = await serialize(content, { scope: data });

  return {
    props: {
      mdxSource,
      frontmatter: data,
      locale,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const posts = getAllPosts(['slug']);

  const paths = posts.flatMap((post) =>
    locales!.map((locale) => ({
      params: {
        slug: post.slug,
      },
      locale,
    }))
  );

  return {
    paths,
    fallback: false,
  };
};
