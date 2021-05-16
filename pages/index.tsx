import { Layout } from '@components/common';
import { Badge, Button, ImageWithAspectRatio, Tooltip } from '@components/ui';
import { ArticleSkeleton } from '@components/ui/Skeleton';
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
      </div>
      <ImageWithAspectRatio
        src="/assets/test.jpg"
        aspectRatio="8/1"
        objectFit="cover"
        objectPosition="50% 60%"
      />

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
          <Button
            type="button"
            onClick={() => toast("Don't forget to ⭐ on Github!")}
            size="xs"
            variant="primary"
          >
            🍞 Default
          </Button>
          <Button
            type="button"
            onClick={() => toast.dark("Don't forget to ⭐ on Github!")}
            size="xs"
            variant="secondary"
          >
            🍞 Dark
          </Button>
          <Button
            type="button"
            onClick={() => toast.error("Don't forget to ⭐ on Github!")}
            size="xs"
            variant="danger"
          >
            🍞 Error
          </Button>
          <Button
            type="button"
            onClick={() => toast.warn("Don't forget to ⭐ on Github!")}
            size="xs"
            variant="warning"
          >
            🍞 Warn
          </Button>
          <Button
            type="button"
            onClick={() => toast.success("Don't forget to ⭐ on Github!")}
            size="xs"
            variant="success"
          >
            🍞 Success
          </Button>
          <Button
            type="button"
            onClick={() => toast.info("Don't forget to ⭐ on Github!")}
            size="xs"
            variant="info"
          >
            🍞 Info
          </Button>
        </div>
        <div className={styles.card}>
          <h3>{t('features.internationalization.title')}</h3>
          <p>{t('features.internationalization.description')}</p>
          {locales.map((lng) => (
            <Button
              key={lng}
              type="button"
              onClick={async () => setLanguage(lng)}
              size="xs"
            >
              {t(`features.internationalization.${lng}`)}
            </Button>
          ))}
        </div>
        <div className={styles.card}>
          <h3>Modal</h3>
          <p>Accessible and Customizable</p>
          <Button type="button" onClick={() => openModal()} size="sm">
            Toggle Modal
          </Button>
        </div>
        <div className={styles.card}>
          <h3>Badges</h3>
          <p>Mjum</p>
          <Badge>Leunie</Badge>
          <Badge variant="primary">Is</Badge>
          <Badge variant="secondary">De</Badge>
          <Badge variant="contrasted">Beste</Badge>
          <Badge variant="danger" iconLeft="😂">
            Pls
          </Badge>
          <Badge variant="success" iconLeft="😏" iconRight="🍕">
            Rate
          </Badge>
          <Badge variant="warning">This</Badge>
          <Badge variant="info">Thank you</Badge>
        </div>
        <Tooltip text="Cool eh?">
          <div className={styles.card}>
            <h3>Tooltip</h3>
            <p>Hover over this card!</p>
          </div>
        </Tooltip>
        <ArticleSkeleton />
      </div>
    </>
  );
};

export default Home;

Home.Layout = Layout;
