import { LanguagePicker, Layout } from '@components/common';
import {
  Accordion,
  AccordionItem,
  Badge,
  Button,
  ImageWithAspectRatio,
  Tooltip,
} from '@components/ui';
import { ArticleSkeleton } from '@components/ui/Skeleton';
import { useUI } from '@lib/context/ui';
import { useIsClient } from '@lib/hooks';
import cn from 'classnames';
import { NextSeo } from 'next-seo';
import { useTheme } from 'next-themes';
import useTranslation from 'next-translate/useTranslation';
import { toast } from 'react-toastify';

import testImg from '../public/assets/test.jpg';
import styles from './styles/index.module.scss';

const Home = () => {
  const { setTheme, theme } = useTheme();
  const { t } = useTranslation('home');
  const { openModal } = useUI();
  const isClient = useIsClient();

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
      <div className={cn(styles.intro, 'container', 'mx-auto')}>
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
        src={testImg}
        aspectRatio="8/1"
        placeholder="blur"
        objectFit="cover"
        objectPosition="50% 60%"
        alt="mountains"
        priority
      />
      <div className={cn(styles.grid, 'container', 'mx-auto')}>
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
            {isClient &&
              t('features.theme.title', {
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
          <LanguagePicker />
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
            <p>
              Powered by <code>react-popper</code>
            </p>
          </div>
        </Tooltip>
        <ArticleSkeleton className={cn(styles.card)} uniqueKey="test-loader" />
        <div className={cn(styles.card)}>
          <h3>Accordion</h3>
          <Accordion>
            <AccordionItem title="Item 1" itemKey={0}>
              <p>
                Ad aliqua occaecat duis ut anim aute cupidatat ullamco
                consectetur incididunt eu non id occaecat. Amet reprehenderit
                exercitation ut nisi.
              </p>
            </AccordionItem>
            <AccordionItem title="Item 2" itemKey={1}>
              <h6>This is an accordion2</h6>
              <p>
                Ad aliqua occaecat duis ut anim aute cupidatat ullamco
                consectetur incididunt eu non id occaecat. Amet reprehenderit
                exercitation ut nisi. Pariatur enim qui aute nostrud ullamco
                culpa veniam sint officia tempor. Nisi anim anim commodo amet
                sit irure consequat tempor occaecat nostrud amet veniam
                cupidatat pariatur. Exercitation ullamco culpa voluptate duis
                enim ex Lorem consectetur cillum nulla veniam. Lorem ad aliqua
                irure qui ea nulla exercitation dolor nulla voluptate.
              </p>
              <Button type="button" size="sm">
                Button
              </Button>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Home;

Home.Layout = Layout;
