import cn from 'classnames';
import { ComponentPropsWithoutRef, FC, ReactNode } from 'react';

import styles from './Chip.module.scss';

type ChipProps = {
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

const Chip: FC<ChipProps> = ({
  children,
  iconLeft,
  iconRight,
  variant,
  className,
}) => (
  <span
    className={cn(
      styles.chip,
      {
        [styles[`chip-${variant}`]]: !!variant,
      },
      className
    )}
  >
    {iconLeft && (
      <span
        className={cn({
          [styles[`chip-icon-left`]]: !!iconLeft && children,
        })}
      >
        {iconLeft}
      </span>
    )}
    {children}
    {iconRight && (
      <span
        className={cn({
          [styles[`chip-icon-right`]]: !!iconLeft && children,
        })}
      >
        {iconRight}
      </span>
    )}
  </span>
);

export default Chip;
