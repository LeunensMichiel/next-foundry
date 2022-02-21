import { CookieBanner, Footer, Navbar } from '@components/common';
import { LanguageModalView } from '@components/common/LanguagePicker';
import { Modal } from '@components/ui';
import { useUI } from '@lib/hooks';
import cn from 'classnames';
import { FC, ReactNode } from 'react';

import styles from './Layout.module.scss';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }: Props) => {
  const { displayModal, closeModal, modalView, modalTitle } = useUI();
  return (
    <>
      <Navbar />
      <main className={cn(styles.mainContainer)}>{children}</main>
      <Footer />

      <Modal open={displayModal} onClose={closeModal} title={modalTitle}>
        {modalView === 'LANGUAGE_VIEW' && <LanguageModalView />}
      </Modal>
      <CookieBanner />
    </>
  );
};

export default Layout;
