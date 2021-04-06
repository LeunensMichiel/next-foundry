import { Logo, ThemeToggle } from '@components/ui';
import cx from 'classnames';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

import { useRouter } from 'next/router';
import MenuToggle from './MenuToggle';
import NavItems from './NavItems';

import styles from './Navbar.module.scss';

const Navbar = ({ isTransparent = false }) => {
  const router = useRouter();

  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    if (navDrawerOpen) {
      setNavDrawerOpen(false);
    }
  }, [router.asPath]);

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
                className={cx('buttonReset', styles.toolbarGeneralIcon, {
                  [styles.menuButtonTransparent]: isTransparent,
                })}
              />
              <MenuToggle
                className={cx('buttonReset', styles.hamburger, {
                  [styles.menuButtonTransparent]: isTransparent,
                })}
                handleToggle={() =>
                  setNavDrawerOpen((prevNavDrawerOpen) => !prevNavDrawerOpen)
                }
              />
            </div>
            <NavItems
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
