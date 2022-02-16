import { Alert } from '@components/icons';
import cn from 'classnames';
import {
  ComponentPropsWithoutRef,
  FC,
  forwardRef,
  TextareaHTMLAttributes,
} from 'react';
import { FieldError } from 'react-hook-form';

import styles from './TextArea.module.scss';

type TextAreaProps = {
  iconLeft?: ComponentPropsWithoutRef<'svg'> | string;
  iconRight?: ComponentPropsWithoutRef<'svg'> | string;
  withFeedback?: boolean;
  label: string;
  error?: FieldError;
  colSpan?: 1 | 2 | 3 | 4;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea: FC<TextAreaProps> = forwardRef<
  HTMLTextAreaElement,
  TextAreaProps
>(
  (
    {
      name,
      label,
      error,
      onChange,
      onBlur,
      iconLeft,
      iconRight,
      colSpan = 1,
      withFeedback = true,
      ...rest
    },
    ref
  ) => (
    <div className={cn({ [`col-span-${colSpan}`]: colSpan })}>
      <label htmlFor={name} className={cn(styles.textAreaLabel)}>
        {label}
      </label>
      <div className={cn(styles.textAreaContainer)}>
        <textarea
          id={name}
          ref={ref}
          name={name}
          className={cn(styles.textAreaField, {
            [styles[`has-icon-left`]]: !!iconLeft,
            [styles[`has-icon-right`]]: !!iconRight,
            [styles[`has-error`]]: !!error?.message,
          })}
          onChange={onChange}
          onBlur={onBlur}
          aria-invalid={!!error}
          {...rest}
        />
        {iconLeft && (
          <span
            className={cn(
              styles.textAreaIconContainer,
              styles.textAreaIconLeft
            )}
          >
            {iconLeft}
          </span>
        )}
        {iconRight && (
          <span
            className={cn(
              styles.textAreaIconContainer,
              styles.textAreaIconRight
            )}
          >
            {iconRight}
          </span>
        )}
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

TextArea.displayName = 'TextArea';

export default TextArea;
