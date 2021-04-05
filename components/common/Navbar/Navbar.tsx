import { Chevron, Moon, Sun } from '@components/icons';
import { Logo } from '@components/ui';
import cx from 'classnames';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

import MenuToggle from './MenuToggle';

import styles from './Navbar.module.scss';

const Navbar = ({ isTransparent = false }) => {
  const { setTheme, theme } = useTheme();
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
      })}
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
              <button
                className={cx('reset', {
                  [styles.menuButtonTransparent]: isTransparent,
                })}
                type="button"
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              >
                {theme === 'light' ? <Moon /> : <Sun />}
              </button>
              <MenuToggle
                className={cx('reset', {
                  [styles.menuButtonTransparent]: isTransparent,
                })}
                handleToggle={() =>
                  setNavDrawerOpen((prevNavDrawerOpen) => !prevNavDrawerOpen)
                }
              />
            </div>
          </div>
          <div
            className={cx(styles.navContainer, {
              [styles.navContainerOpen]: navDrawerOpen,
              [styles.navigationTransparent]: isTransparent,
            })}
            ref={ref}
          >
            <ul className={cx(styles.navMenuOne)}>
              <li>
                <Link href="/">Page 1</Link>
                <Chevron />
              </li>
              <li>
                <Link href="/">Page 2</Link>
                <Chevron />
              </li>
              <li>
                <Link href="/">Page 3</Link>
                <Chevron />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
