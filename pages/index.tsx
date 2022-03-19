import { Layout } from '@components/common';
import cn from 'classnames';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';

import styles from './styles/index.module.scss';

const Home = () => {
  const { t } = useTranslation('home');

  return (
    <>
      <NextSeo
        title={t('seo.title')}
        description={t('seo.description')}
        openGraph={{
          title: t('seo.title'),
          description: t('seo.description'),
        }}
      />
      <div className={cn(styles.intro, 'container')}>
        <h1 className={styles.title}>
          {t('welcome')}{' '}
          <a
            href="https://nextjs.org"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            Next.js!
          </a>
        </h1>
        <p className={styles.description}>
          {t('intro')} <code className={styles.code}>Michiel Leunens</code>
        </p>
      </div>
    </>
  );
};

export default Home;

Home.Layout = Layout;
