import cn from 'classnames';
import {
  ReactNode,
  ElementType,
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
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
    | 'neutral'
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
  outlined = false,
  size = 'md',
  stretched = false,
  uppercased = false,
  variant = 'neutral',
  ...rest
}: ButtonProps<C>) => {
  const Component = as || 'button';
  const rootClassName = cn(
    styles.buttonBase,
    {
      [styles[`button-${variant}`]]: true,
      [styles[`button-${size}`]]: true,
      [styles.stretched]: stretched,
      [styles['button-circular']]: circular && !children,
      [styles['button-rounded']]: circular && children,
      [styles.loading]: loading,
      [styles.outlined]: outlined,
      [styles.disabled]: disabled,
      [styles.uppercased]: uppercased,
      [styles[`button-icon-left`]]: !!iconLeft && children,
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
      <span>{iconLeft}</span>
      {children}
      <span>{iconRight}</span>
      {/* {loading && (
        <i className="pl-2 m-0 flex">
          <LoadingDots />
        </i>
      )} */}
    </Component>
  );
};

export default Button;
