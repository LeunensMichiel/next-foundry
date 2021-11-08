import { Chevron } from '@components/icons';
import cn from 'classnames';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { FC, LiHTMLAttributes, ReactNode, useEffect, useState } from 'react';

import styles from './NavItem.module.scss';

type NavItemProps = {
  label: string | ReactNode;
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
    <li
      className={cn(styles.linkContainer, {
        [styles.subMenuOpen]: open,
        [styles.activeLink]: router.pathname === link?.href,
      })}
    >
      {!children && link ? (
        <Link {...link}>{label}</Link>
      ) : (
        <button
          className={cn('buttonReset')}
          type="button"
          aria-label={`Open ${label} menu`}
          onClick={() => setOpen((prevOpen) => !prevOpen)}
        >
          <span>{label}</span>
          <Chevron />
        </button>
      )}

      {children}
    </li>
  );
};

export default NavItem;
