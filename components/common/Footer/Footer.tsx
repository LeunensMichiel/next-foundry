import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import styles from './Footer.module.scss';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <span>{t('common:footer.footnote')}</span>
      <Link href="/privacy">Privacy</Link>
    </footer>
  );
};

export default Footer;
