import { Alert } from '@components/icons';
import cn from 'classnames';
import {
  ComponentPropsWithoutRef,
  FC,
  forwardRef,
  InputHTMLAttributes,
} from 'react';
import { FieldError } from 'react-hook-form';

import styles from './Input.module.scss';

type InputTypes =
  | 'email'
  | 'file'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'text'
  | 'url';

export type InputProps = {
  iconLeft?: ComponentPropsWithoutRef<'svg'> | string;
  iconRight?: ComponentPropsWithoutRef<'svg'> | string;
  withFeedback?: boolean;
  label: string;
  error?: FieldError;
  colSpan?: 1 | 2 | 3 | 4;
  type?: InputTypes;
} & InputHTMLAttributes<HTMLInputElement>;

const InputModes: Record<
  InputTypes,
  InputHTMLAttributes<HTMLInputElement>['inputMode']
> = {
  email: 'email',
  number: 'decimal',
  tel: 'tel',
  search: 'search',
  url: 'url',
  file: 'none',
  password: 'text',
  text: 'text',
};

const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
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
          })}
          onChange={onChange}
          onBlur={onBlur}
          type={type}
          inputMode={InputModes[type]}
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
