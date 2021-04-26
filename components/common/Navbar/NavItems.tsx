import { DropdownMenu, DropdownMenuItem } from '@components/ui/Dropdown';
import cx from 'classnames';

import NavItem from './NavItem';
import styles from './NavItems.module.scss';

const NavItems = ({ navDrawerOpen = false, isTransparent = false }) => (
  <div
    className={cx(styles.navMenuContainer, {
      [styles.navContainerOpen]: navDrawerOpen,
      [styles.navigationTransparent]: isTransparent,
    })}
  >
    <ul className={cx(styles.menuLevelOne)}>
      <NavItem label="Page 1">
        <DropdownMenu>
          <DropdownMenuItem label="#test" internalLink={{ href: '/#test' }} />
          <DropdownMenuItem
            label="External to Next.js"
            externalLink={{
              href: 'https://nextjs.org',
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            }}
          />
          <DropdownMenuItem label="😎 Emoji" internalLink={{ href: '#' }} />
        </DropdownMenu>
      </NavItem>
      <NavItem label="Buttons" link={{ href: '/buttons' }} />
      <NavItem label="Form" link={{ href: '/formpage' }} />
    </ul>
  </div>
);

export default NavItems;
