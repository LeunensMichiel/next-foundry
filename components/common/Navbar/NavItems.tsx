import { Dropdown } from '@components/ui';
import cn from 'classnames';
import { motion } from 'framer-motion';
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
  <motion.div
    layout
    className={cn(styles.navMenuContainer, {
      [styles.navContainerOpen]: navDrawerOpen,
      [styles.navigationTransparent]: isTransparent,
    })}
  >
    <div className={cn(styles.navMenuList)}>
      <NavItem label="Links">
        <NavItem label="❓ 404" link={{ href: '/404' }} />
        <NavItem label="🛑 500" link={{ href: '/500' }} />
        <Dropdown label="Nested dropdown">
          <p>Lorem</p>
          <Dropdown label="Deeply dropdown">
            <p>Lorem</p>
            <p>Ipsum</p>
          </Dropdown>
        </Dropdown>
        <p>Doloret</p>
      </NavItem>
      <NavItem label="Buttons" link={{ href: '/buttons' }} />
      <NavItem label="Form" link={{ href: '/formpage' }} />
      <NavItem label="Blog" link={{ href: '/blog' }} />
    </div>
  </motion.div>
);

export default NavItems;
