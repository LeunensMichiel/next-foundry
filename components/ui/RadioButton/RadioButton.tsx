import cn from 'classnames';
import { FC, forwardRef, InputHTMLAttributes } from 'react';

import styles from './RadioButton.module.scss';

type RadioButtonProps = {
  label: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

const RadioButton: FC<RadioButtonProps> = forwardRef<
  HTMLInputElement,
  RadioButtonProps
>(({ name, label, onChange, onBlur, ...rest }, ref) => (
  <label htmlFor={label} className={cn(styles.radioButton)}>
    <span className={cn(styles.radioButtonInput)}>
      <input
        id={label}
        type="radio"
        name={name}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
        {...rest}
      />
      <span className={cn(styles.radioButtonControl)} />
    </span>
    <span className={cn(styles.radioButtonLabel)}>{label}</span>
  </label>
));

RadioButton.displayName = 'RadioButton';

export default RadioButton;
