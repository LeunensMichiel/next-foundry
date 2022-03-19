import { Layout } from '@components/common';
import { Chevron } from '@components/icons';
import { Button } from '@components/ui';
import cn from 'classnames';
import useTranslation from 'next-translate/useTranslation';

import styles from './styles/404.module.scss';

const Custom404 = () => {
  const { t } = useTranslation('common');
  return (
    <div className={cn('container', styles.custom404)}>
      <h4>
        <span className={cn(styles.errCode)}>404</span> | {t('notFound.title')}
      </h4>
      <Button as="a" href="/" iconLeft="🏠" iconRight={<Chevron />} size="sm">
        {t('notFound.description')}
      </Button>
    </div>
  );
};

export default Custom404;

Custom404.Layout = Layout;
