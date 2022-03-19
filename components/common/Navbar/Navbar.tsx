import { Logo } from '@components/ui';
import {
  BodyScrollOptions,
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from 'body-scroll-lock';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { FC, useEffect, useRef, useState } from 'react';

import { MenuButton, ThemeButton } from '../IconButtons';
import styles from './Navbar.module.scss';
import NavItems from './NavItems';

const BODY_SCROLL_OPTIONS: BodyScrollOptions = {
  reserveScrollBarGap: true,
};

type NavbarProps = {
  isTransparent?: boolean;
};

const Navbar: FC<NavbarProps> = ({ children, isTransparent = false }) => {
  const router = useRouter();

  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    if (router.asPath) {
      setNavDrawerOpen(false);
    }
  }, [router.asPath]);

  useEffect(() => {
    if (ref.current) {
      if (navDrawerOpen) {
        disableBodyScroll(ref.current, BODY_SCROLL_OPTIONS);
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
      className={cn(styles.header, {
        [styles.headerTransparent]: isTransparent,
        [styles.navContainerOpen]: navDrawerOpen,
      })}
      ref={ref}
    >
      {children}
      <div className={cn(styles.headerContainer, 'container')}>
        <nav
          className={cn(styles.navigation, {
            [styles.navigationTransparent]: isTransparent,
          })}
        >
          <div className={cn(styles.toolbar)}>
            <Logo className={styles.logo} />
            <NavItems
              isTransparent={isTransparent}
              navDrawerOpen={navDrawerOpen}
            />
            <div className={cn(styles.toolbarIcons)}>
              <ThemeButton />
              <MenuButton
                className={cn(styles.hamburger)}
                onClick={() =>
                  setNavDrawerOpen((prevNavDrawerOpen) => !prevNavDrawerOpen)
                }
              />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
