import { CookieBanner, Footer, Navbar } from '@components/common';
import { LanguageModalView } from '@components/common/LanguagePicker';
import { Modal } from '@components/ui';
import { useUI } from '@lib/hooks';
import cx from 'classnames';
import { FC, ReactNode } from 'react';

import styles from './Layout.module.scss';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }: Props) => {
  const { displayModal, closeModal, modalView } = useUI();
  return (
    <>
      <Navbar />
      <main className={cx(styles.mainContainer)}>{children}</main>
      <Footer />

      <Modal open={displayModal} onClose={closeModal}>
        {modalView === 'LANGUAGE_VIEW' && <LanguageModalView />}
      </Modal>
      <CookieBanner />
    </>
  );
};

export default Layout;
