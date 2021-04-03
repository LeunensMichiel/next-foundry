import useTranslation from 'next-translate/useTranslation';
import styles from './Footer.module.scss';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t('common:footer.powered')}
        <img src="/logo.svg" alt="Logo" className={styles.logo} />
      </a>
    </footer>
  );
};

export default Footer;
