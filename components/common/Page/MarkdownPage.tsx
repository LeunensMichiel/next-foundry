import { ImageWithAspectRatio } from '@components/ui';
import cn from 'classnames';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import { VFC } from 'react';

import styles from './MarkdownPage.module.scss';

export type IFrontmatter = {
  slug: string;
  date: string;
  title: string;
  description: string;
  thumbnail?: string;
};

type MarkdownPageProps = {
  mdxSource: MDXRemoteSerializeResult;
  frontmatter: IFrontmatter;
  locale?: string;
};

const MarkdownPage: VFC<MarkdownPageProps> = ({
  mdxSource,
  frontmatter,
  locale,
}) => {
  const { t } = useTranslation();
  const pageDate = new Date(frontmatter.date);

  return (
    <>
      <NextSeo
        title={frontmatter.title}
        description={frontmatter.description}
        openGraph={{
          title: frontmatter.title,
          description: frontmatter.description,
          ...(frontmatter.thumbnail && {
            images: [
              {
                url: frontmatter.thumbnail,
                width: 800,
                height: 600,
                alt: frontmatter.title,
              },
            ],
          }),
        }}
      />
      {mdxSource && (
        <article className={cn(styles.article)}>
          <header className={cn(styles.header, 'container')}>
            <h1>{frontmatter.title}</h1>
            <small>{`${t(
              'common:date.published'
            )} ${pageDate.toLocaleDateString(locale)}`}</small>
          </header>
          {frontmatter.thumbnail && (
            <ImageWithAspectRatio
              wrapperClassName={cn(styles.thumbnail)}
              src={frontmatter.thumbnail}
              aspectRatio="4/1"
              alt={frontmatter.title}
            />
          )}
          <div className={cn(styles.content, 'container-page')}>
            <MDXRemote {...mdxSource} />
          </div>
        </article>
      )}
    </>
  );
};

export default MarkdownPage;
