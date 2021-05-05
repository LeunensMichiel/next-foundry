import cn from 'classnames';
import { FC, forwardRef, InputHTMLAttributes } from 'react';

import styles from './Switch.module.scss';

type SwitchProps = {
  label: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

// TODO: Use jsx/scss structure from checkbox to be more consistent

const Switch: FC<SwitchProps> = forwardRef<HTMLInputElement, SwitchProps>(
  ({ name, label, onChange, onBlur, ...rest }, ref) => (
    <label htmlFor={name} className={cn(styles.switchInput)}>
      <input
        id={name}
        type="checkbox"
        name={name}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
        tabIndex={0}
        role="switch"
        {...rest}
      />
      <span className={cn(styles.switchToggle)} />
    </label>
  )
);

export default Switch;
