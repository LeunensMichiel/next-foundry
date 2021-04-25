import useTranslation from 'next-translate/useTranslation';

import styles from './Footer.module.scss';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>{t('common:footer.footnote')}</footer>
  );
};

export default Footer;
