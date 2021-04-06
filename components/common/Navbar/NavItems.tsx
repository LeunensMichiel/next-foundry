import cx from 'classnames';

import { DropdownMenuItem, DropdownMenu } from '@components/ui/Dropdown';
import styles from './NavItems.module.scss';
import NavItem from './NavItem';

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
          <DropdownMenuItem label="Subpage 1" internalLink={{ href: '/' }} />
          <DropdownMenuItem
            label="Subpage 2"
            internalLink={{ href: '/#test' }}
          />
          <DropdownMenuItem label="Subpage 3" internalLink={{ href: '/' }} />
        </DropdownMenu>
      </NavItem>
      <NavItem label="Page 2" link={{ href: '/page-2' }} />
      <NavItem label="Page 3" link={{ href: '/' }} />
      <NavItem label="Page 4">
        <DropdownMenu>
          <DropdownMenuItem label="Subpage 1" internalLink={{ href: '/' }} />
          <DropdownMenuItem label="Subpage 2" internalLink={{ href: '/' }} />
          <DropdownMenuItem label="Subpage 3" internalLink={{ href: '/' }} />
        </DropdownMenu>
      </NavItem>
      <NavItem label="Page 5" link={{ href: '/' }} />
    </ul>
  </div>
);

export default NavItems;
