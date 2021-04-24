import { Footer, Navbar } from '@components/common';
import { Modal } from '@components/ui';
import { useUI } from '@lib/hooks/useUI';
import cx from 'classnames';
import { FC, ReactNode } from 'react';

import styles from './Layout.module.scss';

type Props = {
  children: ReactNode;
};

const ModalTest = () => (
  <>
    <h2>This is a modal</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime incidunt
      aut molestiae necessitatibus perferendis officiis quis reprehenderit,
      eius, modi harum, expedita aliquam tempore ducimus error! In facere
      aliquam fugit illum?
    </p>
  </>
);

const Layout: FC<Props> = ({ children }: Props) => {
  const { displayModal, closeModal, modalView } = useUI();
  return (
    <>
      <Navbar />
      <main className={cx(styles.mainContainer)}>{children}</main>
      <Footer />

      <Modal open={displayModal} onClose={closeModal}>
        {modalView === 'DEFAULT_VIEW' && <ModalTest />}
      </Modal>
    </>
  );
};

export default Layout;
