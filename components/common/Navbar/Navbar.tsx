import { MenuToggle } from '@components/icons';
import { Logo, ThemeToggle } from '@components/ui';
import {
  BodyScrollOptions,
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from 'body-scroll-lock';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useEffect, useRef, useState } from 'react';

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
      <div className={cn(styles.headerContainer, 'container-lg')}>
        <nav
          className={cn(styles.navigation, {
            [styles.navigationTransparent]: isTransparent,
          })}
        >
          <div className={cn(styles.toolbar)}>
            <Link href="/" passHref>
              <Logo className={styles.logo} />
            </Link>
            <div className={cn(styles.toolbarIcons)}>
              <ThemeToggle
                className={cn('buttonReset', styles.toolbarGeneralIcon, {
                  [styles.menuButtonTransparent]: isTransparent,
                })}
              />
              <MenuToggle
                className={cn('buttonReset', styles.hamburger, {
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
