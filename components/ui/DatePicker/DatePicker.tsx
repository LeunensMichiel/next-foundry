import { useClickOutside } from '@lib/hooks';
import cn from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, MutableRefObject, useRef, useState } from 'react';
import { DayClickEventHandler, DayPicker } from 'react-day-picker';

import Input from '../Input';
import { InputProps } from '../Input/Input';
import styles from './DatePicker.module.scss';

type CustomDatePickerProps = InputProps & {
  mode?: 'single' | 'range';
  value: string;
  onChange: (value: string) => void;
};

const DatePicker: FC<CustomDatePickerProps> = ({
  mode = 'single',
  onChange,
  value,
  ...rest
}) => {
  const { lang } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDays, setSelectedDays] = React.useState<Date[]>([]);

  const containerRef = useRef() as MutableRefObject<HTMLDivElement>;
  useClickOutside(containerRef, () => setIsOpen(false));

  const handleDayClick: DayClickEventHandler = (day, { selected }) => {
    setSelectedDays((currentlySelectedDays) => {
      if (mode === 'single') {
        return [day];
      } else {
        const days = [...currentlySelectedDays];
        if (selected) {
          days.splice(currentlySelectedDays.indexOf(day), 1);
        } else {
          days.push(day);
        }
        return days;
      }
    });
    onChange(day.toLocaleDateString(lang));
  };

  return (
    <>
      <Input
        {...rest}
        value={value}
        readOnly
        autoComplete="off"
        onFocus={() => setIsOpen((prev) => !prev)}
      >
        {isOpen && (
          <div className={cn(styles.wrapper)} ref={containerRef}>
            <DayPicker
              className={cn(styles.root)}
              mode="uncontrolled"
              onDayClick={handleDayClick}
              selected={selectedDays}
            />
          </div>
        )}
      </Input>
    </>
  );
};

DatePicker.displayName = 'Datepicker';

export default DatePicker;
