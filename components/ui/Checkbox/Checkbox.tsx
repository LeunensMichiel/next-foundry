import { Check } from '@components/icons';
import cn from 'classnames';
import { FC, forwardRef, InputHTMLAttributes } from 'react';

import styles from './Checkbox.module.scss';

type CheckboxProps = {
  label: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

const Checkbox: FC<CheckboxProps> = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ name, label, onChange, onBlur, ...rest }, ref) => (
    <label htmlFor={name} className={cn(styles.checkbox)}>
      <span className={cn(styles.checkboxInput)}>
        <input
          id={name}
          type="checkbox"
          name={name}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
          {...rest}
        />
        <span className={cn(styles.checkboxControl)}>
          <Check aria-hidden="true" focusable="false" />
        </span>
      </span>
      <span className={cn(styles.checkboxLabel)}>{label}</span>
    </label>
  )
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
