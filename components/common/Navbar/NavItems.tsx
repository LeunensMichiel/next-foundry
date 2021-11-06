import { DropdownMenu, DropdownMenuItem } from '@components/ui/Dropdown';
import cx from 'classnames';
import { VFC } from 'react';

import NavItem from './NavItem';
import styles from './NavItems.module.scss';

type NavItemsProps = {
  navDrawerOpen?: boolean;
  isTransparent?: boolean;
};

const NavItems: VFC<NavItemsProps> = ({
  navDrawerOpen = false,
  isTransparent = false,
}) => (
  <div
    className={cx(styles.navMenuContainer, {
      [styles.navContainerOpen]: navDrawerOpen,
      [styles.navigationTransparent]: isTransparent,
    })}
  >
    <ul className={cx(styles.menuLevelOne)}>
      <NavItem label="Page 1">
        <DropdownMenu>
          <DropdownMenuItem label="❓ 404" internalLink={{ href: '/404' }} />
          <DropdownMenuItem label="🛑 500" internalLink={{ href: '/500' }} />
          <DropdownMenuItem
            label="External to Next.js"
            externalLink={{
              href: 'https://nextjs.org',
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            }}
          />
        </DropdownMenu>
      </NavItem>
      <NavItem label="Buttons" link={{ href: '/buttons' }} />
      <NavItem label="Form" link={{ href: '/formpage' }} />
      <NavItem label="Blog" link={{ href: '/blog' }} />
    </ul>
  </div>
);

export default NavItems;
