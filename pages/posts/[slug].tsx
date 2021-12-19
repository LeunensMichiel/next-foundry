import { Layout, MarkdownPage } from '@components/common';
import { IFrontmatter } from '@components/common/Page/MarkdownPage';
import { getAllMarkdownSlugsForType, readMarkdownFile } from '@lib/mdxUtils';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

type PostPage = {
  mdxSource: MDXRemoteSerializeResult;
  frontmatter: IFrontmatter;
  locale?: string;
};

const SingleBlog = ({ mdxSource, frontmatter, locale }: PostPage) => {
  return (
    <MarkdownPage
      locale={locale}
      mdxSource={mdxSource}
      frontmatter={frontmatter}
    />
  );
};

export default SingleBlog;

SingleBlog.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const { content, data } = readMarkdownFile(
    params?.slug as string,
    locale!,
    'posts'
  );
  const mdxSource = content ? await serialize(content, { scope: data }) : null;

  return {
    props: {
      mdxSource,
      frontmatter: data,
      locale,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const slugsByLocale = getAllMarkdownSlugsForType(locales!, 'posts');
  const paths = slugsByLocale.flatMap((slugByLocale) => {
    return slugByLocale.uniqueSlugs.map((slug) => ({
      params: {
        slug,
      },
      locale: slugByLocale.locale,
    }));
  });

  return {
    paths,
    fallback: false,
  };
};
