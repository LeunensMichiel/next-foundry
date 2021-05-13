import { CookieBanner, Footer, Navbar } from '@components/common';
import { Modal } from '@components/ui';
import { useUI } from '@lib/hooks';
import cx from 'classnames';
import { FC, ReactNode } from 'react';

import styles from './Layout.module.scss';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }: Props) => {
  const { displayModal, closeModal } = useUI();
  return (
    <>
      <Navbar />
      <main className={cx(styles.mainContainer)}>{children}</main>
      <Footer />

      <Modal open={displayModal} onClose={closeModal}>
        {/* {modalView === 'DEFAULT_VIEW' && <MyModalView />} */}
      </Modal>
      <CookieBanner />
    </>
  );
};

export default Layout;
