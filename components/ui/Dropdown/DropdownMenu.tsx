import { ReactNode } from 'react';
import cx from 'classnames';

import styles from './DropdownMenu.module.scss';

type DropdownMenuProps = {
  children: ReactNode;
};
const DropdownMenu = ({ children }: DropdownMenuProps) => (
  <ul className={cx(styles.menuLevelTwo)}>{children}</ul>
);

export default DropdownMenu;
