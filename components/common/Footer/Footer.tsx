import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { VFC } from 'react';

import styles from './Footer.module.scss';

const Footer: VFC = () => {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <span>{t('common:footer.footnote')} -</span>
      <Link href="/privacy">{t('common:links.privacy')}</Link>
    </footer>
  );
};

export default Footer;
