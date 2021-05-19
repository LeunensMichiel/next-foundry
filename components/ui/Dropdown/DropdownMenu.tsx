import cx from 'classnames';
import { FC, HTMLAttributes } from 'react';

import styles from './DropdownMenu.module.scss';

const DropdownMenu: FC<HTMLAttributes<HTMLUListElement>> = ({ children }) => (
  <ul className={cx(styles.menuLevelTwo)}>{children}</ul>
);

export default DropdownMenu;
