import Link from 'next/link';
import cx from 'classnames';
import { Chevron } from '@components/icons';

import styles from './MenuItems.module.scss';

const MenuItems = ({ navDrawerOpen = false, isTransparent = false }) => (
  <div
    className={cx(styles.navMenuContainer, {
      [styles.navContainerOpen]: navDrawerOpen,
      [styles.navigationTransparent]: isTransparent,
    })}
  >
    <ul className={cx(styles.menuLevelOne)}>
      <li role="menuitem" tabIndex={0}>
        <span>
          Page 1 <Chevron />
        </span>
        <ul className={cx(styles.menuLevelTwo)}>
          <li>
            <Link href="/">Subpage 1</Link>
          </li>
          <li>
            <Link href="/">Subpage 2</Link>
          </li>
          <li>
            <Link href="/">Subpage 3</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="/">Page 2</Link>
      </li>
      <li>
        <Link href="/">Page 3</Link>
      </li>
      <li>
        <Link href="/">Page 4</Link>
      </li>
      <li role="menuitem" tabIndex={-1}>
        <span>
          Page 5 <Chevron />
        </span>
        <ul className={cx(styles.menuLevelTwo)}>
          <li>
            <Link href="/">Subpage 1</Link>
          </li>
          <li>
            <Link href="/">Subpage 2</Link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
);

export default MenuItems;
