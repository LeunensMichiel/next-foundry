import { useTheme } from 'next-themes';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import setLanguage from 'next-translate/setLanguage';
import Image from 'next/image';

import styles from '@styles/pages/index.module.scss';
import { Layout } from '@components/common';
import i18nConfig from 'i18n.json';
import classNames from 'classnames';

const { locales } = i18nConfig;

export default function Home() {
  const { setTheme, theme } = useTheme();
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

      <div style={{ position: 'relative', width: '100%', height: '250px' }}>
        <Image
          alt="Mountains"
          src="/test.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className={classNames(styles.grid, 'container-lg', 'mx-auto')}>
        <a
          href="https://github.com/LeunensMichiel/nextjs-starter-template/blob/master/README.md"
          className={styles.card}
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          <h3>{t('features.documentation.title')}</h3>
          <p>{t('features.documentation.description')}</p>
        </a>

        <a
          href="https://nextjs.org/docs/getting-started"
          className={styles.card}
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          <h3>{t('features.next.title')}</h3>
          <p>{t('features.next.description')}</p>
        </a>

        <button
          className={styles.card}
          type="button"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          <h3>
            {t('features.theme.title', {
              theme: theme === 'light' ? 'dark' : 'light',
            })}
          </h3>
          <p>{t('features.theme.description')} Next Themes .</p>
        </button>

        <div className={styles.card}>
          <h3>{t('features.internationalization.title')}</h3>
          <p>{t('features.internationalization.description')}</p>
          {locales.map((lng) => (
            <button
              key={lng}
              type="button"
              onClick={async () => setLanguage(lng)}
            >
              {t(`features.internationalization.${lng}`)}
            </button>
          ))}
        </div>
      </div>

      {/* <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('common:footer.powered')}{' '}
            <img src="/logo.svg" alt="Logo" className={styles.logo} />
          </a>
        </footer> */}
    </>
  );
}

Home.Layout = Layout;
