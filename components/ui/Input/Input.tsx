import cn from 'classnames';
import { FC, forwardRef, InputHTMLAttributes } from 'react';

import styles from './Input.module.scss';

type InputProps = {
  label: string;
  type?:
    | 'checkbox'
    | 'color'
    | 'email'
    | 'file'
    | 'hidden'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'url';
} & InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ name, label, onChange, onBlur, type = 'text', ...rest }, ref) => (
    <div className={cn(styles.fieldContainer)}>
      <label htmlFor={name} className={cn(styles.inputLabel)}>
        {label}
      </label>
      <input
        id={name}
        ref={ref}
        name={name}
        className={cn(styles.inputField)}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
        {...rest}
      />
    </div>
  )
);

export default Input;
