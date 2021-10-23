import { Alert } from '@components/icons';
import cn from 'classnames';
import {
  ComponentPropsWithoutRef,
  forwardRef,
  InputHTMLAttributes,
} from 'react';
import { FieldError } from 'react-hook-form';

import styles from './Input.module.scss';

export type InputProps = {
  iconLeft?: ComponentPropsWithoutRef<'svg'> | string;
  iconRight?: ComponentPropsWithoutRef<'svg'> | string;
  withFeedback?: boolean;
  label: string;
  error?: FieldError;
  colSpan?: 1 | 2 | 3 | 4;
} & InputHTMLAttributes<HTMLInputElement>;

const getInputMode = (
  type?: InputHTMLAttributes<HTMLInputElement>['type']
): InputHTMLAttributes<HTMLInputElement>['inputMode'] => {
  switch (type) {
    case 'email':
      return 'email';
    case 'number':
      return 'tel';
    case 'password':
      return 'text';
    case 'search':
      return 'search';
    case 'url':
      return 'url';
    case 'file':
      return 'none';
    default:
      return 'text';
  }
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      name,
      label,
      error,
      children,
      onChange,
      onBlur,
      type = 'text',
      iconLeft,
      iconRight,
      colSpan = 1,
      withFeedback = true,
      ...rest
    },
    ref
  ) => (
    <div className={cn({ [`col-span-${colSpan}`]: colSpan })}>
      <label htmlFor={name} className={cn(styles.inputLabel)}>
        {label}
      </label>
      <div className={cn(styles.inputContainer)}>
        <input
          id={name}
          ref={ref}
          name={name}
          className={cn(styles.inputField, {
            [styles[`has-icon-left`]]: !!iconLeft,
            [styles[`has-icon-right`]]: !!iconRight,
            [styles[`has-error`]]: !!error?.message,
          })}
          onChange={onChange}
          onBlur={onBlur}
          type={type}
          inputMode={getInputMode(type)}
          aria-invalid={!!error}
          {...rest}
        />
        {iconLeft && (
          <span className={cn(styles.inputIconContainer, styles.inputIconLeft)}>
            {iconLeft}
          </span>
        )}
        {iconRight && (
          <span
            className={cn(styles.inputIconContainer, styles.inputIconRight)}
          >
            {iconRight}
          </span>
        )}
        {children}
      </div>
      {withFeedback && (
        <div className={cn(styles.fieldAlert)} role="alert">
          {error && (
            <>
              <div className={cn(styles.fieldAlertIcon)}>
                <Alert />
              </div>
              <small className={cn(styles.fieldAlertText)}>
                {error.message}
              </small>
            </>
          )}
        </div>
      )}
    </div>
  )
);

Input.displayName = 'Input';

export default Input;
