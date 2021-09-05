import cn from 'classnames';
import { FC, forwardRef, InputHTMLAttributes } from 'react';

import styles from './Switch.module.scss';

type SwitchProps = {
  label: string;
  labelOn?: string;
  labelOff?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

const Switch: FC<SwitchProps> = forwardRef<HTMLInputElement, SwitchProps>(
  ({ name, label, onChange, onBlur, labelOff, labelOn, ...rest }, ref) => (
    <label htmlFor={name} className={cn(styles.switch)}>
      <span className={cn(styles.switchInput)}>
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
        {labelOff && (
          <span className={cn(styles.switchInnerText, styles.off)}>
            {labelOff}
          </span>
        )}
        {labelOn && (
          <span className={cn(styles.switchInnerText, styles.on)}>
            {labelOn}
          </span>
        )}
      </span>
      <span className={cn(styles.switchLabel)}>{label}</span>
    </label>
  )
);

Switch.displayName = 'Switch';

export default Switch;
