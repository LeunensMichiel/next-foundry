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
    initial={false}
    layout
    className={cn(styles.navMenuContainer, {
      [styles.navContainerOpen]: navDrawerOpen,
      [styles.navigationTransparent]: isTransparent,
    })}
  >
    <div className={cn(styles.navMenuList)}>
      <NavItem label="Components" link={{ href: '/components' }} />
      <NavItem label="Links">
        <NavItem label="🆘 404" link={{ href: '/404' }} />
        <NavItem label="🛑 500" link={{ href: '/500' }} />
        <NavItem label="💬 Blog" link={{ href: '/blog' }} />
      </NavItem>
    </div>
  </motion.div>
);

export default NavItems;
