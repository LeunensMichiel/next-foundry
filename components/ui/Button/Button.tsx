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
interface Props<C extends React.ElementType> {
  as?: C;

  children?: ReactNode;
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'transparent';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  outlined?: boolean;
  circular?: boolean;
  loading?: boolean;
  disabled?: boolean;
  active?: boolean;
  stretched?: boolean;
  uppercased?: boolean;
  minimal?: boolean;
  iconLeft?: ComponentPropsWithoutRef<'svg'> | string;
  iconRight?: ComponentPropsWithoutRef<'svg'> | string;
}

type ButtonProps<C extends ElementType> = Props<C> &
  Omit<ComponentPropsWithRef<C>, keyof Props<C>>;

const Button = <C extends React.ElementType = 'button'>({
  active,
  as,
  className,
  children,
  circular = false,
  disabled = false,
  iconLeft,
  iconRight,
  loading = false,
  minimal = false,
  outlined = false,
  size = 'md',
  stretched = false,
  uppercased = false,
  variant,
  ...rest
}: ButtonProps<C>) => {
  const Component = as || 'button';
  const rootClassName = cn(
    styles.buttonBase,
    {
      [styles[`button-${variant}`]]: !!variant,
      [styles.outlined]: outlined,
      [styles.minimal]: minimal,
      [styles.loading]: loading,
      [styles.disabled]: disabled,
      [styles[`button-${size}`]]: true,
      [styles['button-circular']]: circular && !children,
      [styles['button-rounded']]: circular && children,
      [styles.stretched]: stretched,
      [styles.uppercased]: uppercased,
      [styles[`button-icon-left`]]: (!!iconLeft || loading) && children,
      [styles[`button-icon-right`]]: !!iconRight && children,
    },
    className
  );

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
      {(loading || iconLeft) && <span>{loading ? <Spinner /> : iconLeft}</span>}
      {children}
      {iconRight && <span>{iconRight}</span>}
    </Component>
  );
};

export default Button;
