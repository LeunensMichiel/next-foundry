import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import { Footer } from '@components/common';

import styles from './Layout.module.scss';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }: Props) => (
  <>
    {/* <Navbar /> */}
    <main className={classNames(styles.mainContainer)}>{children}</main>
    <Footer />
  </>
);

export default Layout;
