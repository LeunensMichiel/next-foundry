import { Layout } from '@components/common';
import { Chip, ImageWithAspectRatio } from '@components/ui';
import { useUI } from '@lib/hooks';
import styles from '@styles/pages/index.module.scss';
import cx from 'classnames';
import i18nConfig from 'i18n.json';
import { NextSeo } from 'next-seo';
import { useTheme } from 'next-themes';
import setLanguage from 'next-translate/setLanguage';
import useTranslation from 'next-translate/useTranslation';
import { toast } from 'react-toastify';

const { locales } = i18nConfig;

const Home = () => {
  const { setTheme, theme } = useTheme();
  const { t } = useTranslation('home');
  const { openModal } = useUI();

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
      <div className={cx(styles.intro, 'container', 'mx-auto')}>
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
        <ImageWithAspectRatio
          src="/assets/test.jpg"
          aspectRatio="8/1"
          objectFit="cover"
          objectPosition="50% 60%"
        />
      </div>

      <div className={cx(styles.grid, 'container', 'mx-auto')}>
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
          <p>{t('features.theme.description')} Next Themes.</p>
        </button>
        <div className={styles.card}>
          <h3>Toasts with react-toastify!</h3>
          <button
            type="button"
            onClick={() => toast("Don't forget to ⭐ on Github!")}
          >
            🍞 Default
          </button>
          <button
            type="button"
            onClick={() => toast.dark("Don't forget to ⭐ on Github!")}
          >
            🍞 Dark
          </button>
          <button
            type="button"
            onClick={() => toast.error("Don't forget to ⭐ on Github!")}
          >
            🍞 Error
          </button>
          <button
            type="button"
            onClick={() => toast.warn("Don't forget to ⭐ on Github!")}
          >
            🍞 Warn
          </button>
          <button
            type="button"
            onClick={() => toast.success("Don't forget to ⭐ on Github!")}
          >
            🍞 Success
          </button>
          <button
            type="button"
            onClick={() => toast.info("Don't forget to ⭐ on Github!")}
          >
            🍞 Info
          </button>
        </div>
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
        <div className={styles.card}>
          <h3>Modal</h3>
          <p>Accessible and Customizable</p>
          <button type="button" onClick={() => openModal()}>
            Toggle Modal
          </button>
        </div>
        <div className={styles.card}>
          <h3>Chips</h3>
          <p>Mjum</p>
          <Chip>Leunie</Chip>
          <Chip variant="primary">Is</Chip>
          <Chip variant="secondary">De</Chip>
          <Chip variant="contrasted">Beste</Chip>
          <Chip variant="danger" iconLeft="😂">
            Pls
          </Chip>
          <Chip variant="success" iconLeft="😏" iconRight="🍕">
            Rate
          </Chip>
          <Chip variant="warning">This</Chip>
          <Chip variant="info">Thank you</Chip>
        </div>
      </div>
    </>
  );
};

export default Home;

Home.Layout = Layout;
