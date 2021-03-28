import { useTheme } from 'next-themes';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import setLanguage from 'next-translate/setLanguage';

import styles from '@styles/pages/index.module.scss';
import i18nConfig from 'i18n.json';

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
      <div className={styles.container}>
        <main className={styles.main}>
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

          <div className={styles.grid}>
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
              <p>
                {t('features.theme.description')}{' '}
                <a
                  href="https://www.npmjs.com/package/next-themes"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  Next Themes
                </a>
                .
              </p>
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
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('common:footer.powered')}{' '}
            <img src="/logo.svg" alt="Logo" className={styles.logo} />
          </a>
        </footer>
      </div>
    </>
  );
}
