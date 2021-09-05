import 'react-day-picker/style.css';

import { useClickOutside } from '@lib/hooks';
import cn from 'classnames';
import {
  // ChangeEvent,
  // ChangeEventHandler,
  // ComponentPropsWithoutRef,
  FC,
  forwardRef,
  MutableRefObject,
  // useCallback,
  useRef,
  useState,
} from 'react';
import { DayPicker, useInput, UseInputOptions } from 'react-day-picker';

// import { FieldError } from 'react-hook-form';
import { InputProps } from '../Input/Input';
import styles from './DatePicker.module.scss';

// type DatePickerProps = {
//   iconLeft?: ComponentPropsWithoutRef<'svg'> | string;
//   iconRight?: ComponentPropsWithoutRef<'svg'> | string;
//   withFeedback?: boolean;
//   label: string;
//   error?: FieldError;
//   colSpan?: 1 | 2 | 3 | 4;
// };

const options: UseInputOptions = {
  defaultSelected: new Date(),
};

const DatePicker: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      // label,
      // colSpan,
      error,
      iconLeft,
      iconRight,
      // withFeedback,
      // onChange,
      onBlur,
      onFocus,
      name,
      ...rest
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const input = useInput(options);

    useClickOutside(containerRef, () => setIsOpen(false));

    // const internalOnChange = (event) => {
    //   onChange?.(event);
    //   // input.fieldProps.onChange(event);
    // };

    // const internalOnBlur = (event) => {
    //   // input.fieldProps.onBlur(event);
    //   onBlur?.(event);
    // };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const internalOnFocus = (event: any) => {
      setIsOpen(true);
      // input.fieldProps.onFocus(event);
      onFocus?.(event);
    };

    return (
      <>
        <input
          id={name}
          ref={ref}
          name={name}
          className={cn(styles.inputField, {
            [styles[`has-icon-left`]]: !!iconLeft,
            [styles[`has-icon-right`]]: !!iconRight,
          })}
          // value={input.fieldProps.value}
          onChange={input.fieldProps.onChange}
          onBlur={onBlur}
          onFocus={internalOnFocus}
          aria-invalid={!!error}
          {...rest}
        />
        {/* <Input
        label={label}
        colSpan={colSpan}
        error={error}
        iconLeft={iconLeft}
        iconRight={iconRight}
        withFeedback={withFeedback}
        value={input.fieldProps.value}
        onChange={(e) => {
          console.log(e.target.value);
          input.fieldProps.onChange(e); // your method
          onChange?.(e); // method from hook form register
        }}
        onBlur={internalOnBlur}
        onFocus={internalOnFocus}
        name={name}
        // ref={(e) => {
        //   ref(e);
        //   // dateRef.current = e; // you can still assign to ref
        // }}
      >
      </Input> */}
        {isOpen && (
          <div className={cn(styles.wrapper)} ref={containerRef}>
            <DayPicker {...input.dayPickerProps} className={cn(styles.root)} />
          </div>
        )}
      </>
    );
  }
);

DatePicker.displayName = 'Datepicker';

export default DatePicker;
