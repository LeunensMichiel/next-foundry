import cn from 'classnames';
import { ComponentPropsWithoutRef, FC, ReactNode } from 'react';

import styles from './Badge.module.scss';

type BadgeProps = {
  variant?:
    | 'primary'
    | 'secondary'
    | 'contrasted'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info';
  iconLeft?: ComponentPropsWithoutRef<'svg'> | ReactNode | string;
  iconRight?: ComponentPropsWithoutRef<'svg'> | ReactNode | string;
  className?: string;
};

const Badge: FC<BadgeProps> = ({
  children,
  iconLeft,
  iconRight,
  variant,
  className,
}) => (
  <span
    className={cn(
      styles.badge,
      {
        [styles[`badge-${variant}`]]: !!variant,
      },
      className
    )}
  >
    {iconLeft && (
      <span
        className={cn({
          [styles[`badge-icon-left`]]: !!iconLeft && children,
        })}
      >
        {iconLeft}
      </span>
    )}
    {children}
    {iconRight && (
      <span
        className={cn({
          [styles[`badge-icon-right`]]: !!iconLeft && children,
        })}
      >
        {iconRight}
      </span>
    )}
  </span>
);

export default Badge;
