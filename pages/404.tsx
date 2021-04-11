import { Layout } from '@components/common';
import cn from 'classnames';

import styles from '@styles/pages/404.module.scss';
import useTranslation from 'next-translate/useTranslation';
import { Button } from '@components/ui';
import { Chevron } from '@components/icons';

const Custom404 = () => {
  const { t } = useTranslation('common');
  return (
    <div className={cn('container', 'mx-auto', 'padded', styles.custom404)}>
      <h4>
        <span className={cn(styles.errCode)}>404</span> | {t('notFound.title')}
      </h4>
      <Button as="a" href="/" iconLeft="🏠" iconRight={<Chevron />}>
        {t('notFound.description')}
      </Button>
    </div>
  );
};

export default Custom404;

Custom404.Layout = Layout;
