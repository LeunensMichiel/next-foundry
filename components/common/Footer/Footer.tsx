import { Logo } from '@components/ui';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import styles from './Footer.module.scss';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      {t('common:footer.footnote')}
      <Link href="/">
        <Logo className={styles.logo} />
      </Link>
    </footer>
  );
};

export default Footer;
