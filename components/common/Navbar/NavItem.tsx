import { Dropdown } from '@components/ui';
import cn from 'classnames';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { FC, LiHTMLAttributes, useEffect, useState } from 'react';

import styles from './NavItem.module.scss';

type NavItemProps = {
  label: string;
  link?: LinkProps;
} & LiHTMLAttributes<HTMLLIElement>;

const NavItem: FC<NavItemProps> = ({ children, label, link }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (router.asPath) {
      setOpen(false);
    }
  }, [router.asPath]);

  return (
    <>
      {!children && link ? (
        <Link {...link}>
          <a
            role="menuitem"
            className={cn(styles.navItemContainer, styles.linkContainer, {
              [styles.activeLink]: router.pathname === link?.href,
            })}
          >
            {label}
          </a>
        </Link>
      ) : (
        <Dropdown
          label={label}
          role="menu"
          willFloat
          willOpenOnHover
          startOpen={open}
          buttonClassName={cn(styles.subMenuButton, 'parentSubMenuButton')}
          listClassName={styles.subMenuList}
          containerOpenClassName={styles.subMenuOpen}
          containerClassName={cn(
            styles.navItemContainer,
            styles.subMenuContainer
          )}
        >
          {children}
        </Dropdown>
      )}
    </>
  );
};

export default NavItem;
