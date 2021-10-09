import { useClickOutside } from '@lib/hooks';
import cn from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, MutableRefObject, useRef, useState } from 'react';
import { DateRange, DayPicker, DayPickerProps } from 'react-day-picker';

import Input from '../Input';
import { InputProps } from '../Input/Input';
import styles from './DatePicker.module.scss';

type CustomDatePickerProps = Pick<
  InputProps,
  'label' | 'iconLeft' | 'iconRight' | 'withFeedback' | 'colSpan' | 'error'
> &
  Omit<DayPickerProps, 'defaultSelected'> & {
    value: string;
    onChange: (value: string) => void;
    // Remove uncontrolled mode by overwriting here
    mode?: 'single' | 'range' | 'multiple';
  };

// USING https://react-day-picker-next.netlify.app/ (v8 beta)
const DatePicker: FC<CustomDatePickerProps> = ({
  onChange,
  value,
  label,
  iconLeft,
  iconRight,
  withFeedback,
  colSpan,
  error,
  mode = 'single',
  ...rest
}) => {
  const { lang } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useRef() as MutableRefObject<HTMLDivElement>;
  useClickOutside(containerRef, () => setIsOpen(false));

  const handleDayClick = (e: Date | DateRange | Date[] | undefined) => {
    let value;
    switch (mode) {
      case 'single':
        value = e as Date;
        return onChange(value.toLocaleDateString(lang));
      case 'range':
        value = e as DateRange;
        return onChange(
          value.to
            ? `${value.from?.toLocaleDateString(
                lang
              )} - ${value?.to?.toLocaleDateString(lang)}`
            : `${value.from?.toLocaleDateString(lang)}`
        );
      case 'multiple':
        value = e as Date[];
        const dates = value.map((date) => date?.toLocaleDateString(lang));
        return onChange(dates?.join(', '));
    }
  };

  return (
    <>
      <Input
        label={label}
        iconLeft={iconLeft}
        iconRight={iconRight}
        withFeedback={withFeedback}
        colSpan={colSpan}
        error={error}
        value={value}
        readOnly
        autoComplete="off"
        onFocus={() => setIsOpen((prev) => !prev)}
      >
        {isOpen && (
          <div className={cn(styles.wrapper)} ref={containerRef}>
            <DayPicker
              {...rest}
              mode={mode}
              className={cn(styles.root)}
              onSelect={handleDayClick}
            />
          </div>
        )}
      </Input>
    </>
  );
};

DatePicker.displayName = 'Datepicker';

export default DatePicker;
