import { Layout } from '@components/common';
import styles from '@styles/pages/500.module.scss';
import cn from 'classnames';
import useTranslation from 'next-translate/useTranslation';

const Custom500Page = () => {
  const { t } = useTranslation('common');
  return (
    <div className={cn('container', 'mx-auto', 'padded', styles.custom500)}>
      <h4>{t('errorPage.title')}</h4>
      <p>{t('errorPage.description')}</p>
    </div>
  );
};

export default Custom500Page;

Custom500Page.Layout = Layout;
