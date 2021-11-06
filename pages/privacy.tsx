import { Layout } from '@components/common';
import MarkdownPage, {
  IFrontmatter,
} from '@components/common/Page/MarkdownPage';
import { readMarkdownFile } from '@lib/mdxUtils';
import { GetStaticProps } from 'next';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

type PrivacyPage = {
  mdxSource: MDXRemoteSerializeResult;
  frontmatter: IFrontmatter;
  locale?: string;
};

const PrivacyPage = ({ frontmatter, mdxSource, locale }: PrivacyPage) => {
  return (
    <MarkdownPage
      locale={locale}
      mdxSource={mdxSource}
      frontmatter={frontmatter}
    />
  );
};

export default PrivacyPage;
PrivacyPage.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const { content, data } = readMarkdownFile('privacybeleid', locale!);

  const mdxSource = content ? await serialize(content, { scope: data }) : null;

  return {
    props: {
      mdxSource,
      frontmatter: data,
      locale,
    },
  };
};
