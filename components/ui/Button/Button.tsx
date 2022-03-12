import { Spinner } from '@components/ui';
import cn from 'classnames';
import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  ReactNode,
} from 'react';

import styles from './Button.module.scss';

// Inspired by
// https://www.benmvp.com/blog/polymorphic-react-components-typescript/
interface ButtonCustomProps<C extends React.ElementType> {
  as?: C;
  children?: ReactNode;
  variant?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'minimal'
    | 'transparent';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  outlined?: boolean;
  circular?: boolean;
  squared?: boolean;
  loading?: boolean;
  disabled?: boolean;
  active?: boolean;
  stretched?: boolean;
  uppercased?: boolean;
  iconLeft?: ComponentPropsWithoutRef<'svg'> | string;
  iconRight?: ComponentPropsWithoutRef<'svg'> | string;
}

export type ButtonProps<C extends ElementType> = ButtonCustomProps<C> &
  Omit<ComponentPropsWithRef<C>, keyof ButtonCustomProps<C>>;

const Button = <C extends React.ElementType = 'button'>({
  active,
  as,
  className,
  children,
  circular = false,
  squared = false,
  disabled = false,
  iconLeft,
  iconRight,
  loading = false,
  outlined = false,
  size = 'md',
  stretched = false,
  uppercased = false,
  variant = 'default',
  ...rest
}: ButtonProps<C>) => {
  const Component = as || 'button';
  const rootClassName = cn(styles.buttonBase, styles[`button-${variant}`], {
    [styles.outlined]: outlined,
    [styles.loading]: loading,
    [styles.disabled]: disabled,
    [styles[`button-${size}`]]: true,
    [styles['button-circular']]: circular && !children,
    [styles['button-squared']]: squared && !children,
    [styles['button-rounded']]: circular && children,
    [styles.stretched]: stretched,
    [styles.uppercased]: uppercased,
    [`${className}`]: className,
  });

  return (
    <Component
      aria-pressed={active}
      className={rootClassName}
      data-variant={variant}
      aria-disabled={disabled}
      disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      {...rest}
    >
      {(loading || iconLeft) && (
        <span
          className={cn({
            [styles[`button-icon-left`]]: (!!iconLeft || loading) && children,
          })}
        >
          {loading ? <Spinner /> : iconLeft}
        </span>
      )}
      {children}
      {iconRight && (
        <span
          className={cn({
            [styles[`button-icon-right`]]: !!iconRight && children,
          })}
        >
          {iconRight}
        </span>
      )}
    </Component>
  );
};

export default Button;
