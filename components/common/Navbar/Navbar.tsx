import { Logo, ThemeToggle } from '@components/ui';
import cx from 'classnames';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

import MenuToggle from './MenuToggle';

import styles from './Navbar.module.scss';
import MenuItems from './MenuItems';

const Navbar = ({ isTransparent = false }) => {
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    if (ref.current) {
      if (navDrawerOpen) {
        disableBodyScroll(ref.current);
      } else {
        enableBodyScroll(ref.current);
      }
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [navDrawerOpen]);

  return (
    <header
      className={cx(styles.header, {
        [styles.headerTransparent]: isTransparent,
        [styles.navContainerOpen]: navDrawerOpen,
      })}
      ref={ref}
    >
      <div className={cx(styles.headerContainer, 'container-lg')}>
        <nav
          className={cx(styles.navigation, {
            [styles.navigationTransparent]: isTransparent,
          })}
        >
          <div className={cx(styles.toolbar)}>
            <Link href="/">
              <Logo className={styles.logo} />
            </Link>
            <div className={cx(styles.toolbarIcons)}>
              <ThemeToggle
                className={cx('reset', styles.toolbarGeneralIcon, {
                  [styles.menuButtonTransparent]: isTransparent,
                })}
              />
              <MenuToggle
                className={cx('reset', styles.hamburger, {
                  [styles.menuButtonTransparent]: isTransparent,
                })}
                handleToggle={() =>
                  setNavDrawerOpen((prevNavDrawerOpen) => !prevNavDrawerOpen)
                }
              />
            </div>
            <MenuItems
              isTransparent={isTransparent}
              navDrawerOpen={navDrawerOpen}
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
