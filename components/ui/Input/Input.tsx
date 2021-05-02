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

type InputProps = {
  iconLeft?: ComponentPropsWithoutRef<'svg'> | string;
  iconRight?: ComponentPropsWithoutRef<'svg'> | string;
  withFeedback?: boolean;
  label: string;
  error?: FieldError;
  colSpan?: 1 | 2 | 3 | 4;
  type?:
    | 'email'
    | 'file'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'text'
    | 'url';
} & InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      name,
      label,
      error,
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
      </div>
      {withFeedback && (
        <div className={cn(styles.fieldAlert)}>
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

export default Input;
