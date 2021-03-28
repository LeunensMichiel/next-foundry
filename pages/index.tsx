import { useTheme } from 'next-themes';
import { NextSeo } from 'next-seo';

import styles from '../styles/pages/index.module.scss';

export default function Home() {
  const { setTheme, theme } = useTheme();
  return (
    <>
      <NextSeo
        title="Simple Usage Example"
        description="A short description goes here."
        openGraph={{
          title: 'Simple Usage Example',
          description: 'A short description goes here.',
        }}
      />
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to{' '}
            <a
              href="https://nextjs.org"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              Next.js!
            </a>
          </h1>

          <p className={styles.description}>
            Opinionated starter template by{' '}
            <code className={styles.code}>Michiel Leunens</code>
          </p>

          <div className={styles.grid}>
            <a
              href="https://github.com/LeunensMichiel/nextjs-starter-template/blob/master/README.md"
              className={styles.card}
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              <h3>Documentation &rarr;</h3>
              <p>Find in-depth information about this project.</p>
            </a>

            <a
              href="https://nextjs.org/docs/getting-started"
              className={styles.card}
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              <h3>Learn Next.js &rarr;</h3>
              <p>Learn about Next.js by getting started in the docs</p>
            </a>

            <button
              className={styles.card}
              type="button"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
              <h3>
                {`Toggle ${theme === 'light' ? 'dark' : 'light'} mode \u2192`}
              </h3>
              <p>
                Themes out of the box with{' '}
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

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h3>Change language &rarr;</h3>
              <p>i18n support out of the box.</p>
            </a>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/logo.svg" alt="Logo" className={styles.logo} />
          </a>
        </footer>
      </div>
    </>
  );
}
