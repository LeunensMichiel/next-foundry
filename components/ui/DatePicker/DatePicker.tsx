import 'react-day-picker/style.css';

import { useClickOutside } from '@lib/hooks';
import cn from 'classnames';
import React, {
  // ChangeEvent,
  // ChangeEventHandler,
  // ComponentPropsWithoutRef,
  FC,
  // forwardRef,
  MutableRefObject,
  // useCallback,
  useRef,
  useState,
} from 'react';
import {
  DayClickEventHandler,
  DayPicker,
  // useInput,
  // UseInputOptions,
} from 'react-day-picker';

import Input from '../Input';
// import { InputProps } from '../Input/Input';
import styles from './DatePicker.module.scss';

// type DatePickerProps = {
//   iconLeft?: ComponentPropsWithoutRef<'svg'> | string;
//   iconRight?: ComponentPropsWithoutRef<'svg'> | string;
//   withFeedback?: boolean;
//   label: string;
//   error?: FieldError;
//   colSpan?: 1 | 2 | 3 | 4;
// };

// const options: UseInputOptions = {
//   defaultSelected: new Date(),
// };

type DatePickerProps = {
  mode?: 'single' | 'range';
};

const DatePicker: FC<DatePickerProps> = ({ mode = 'single' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDays, setSelectedDays] = React.useState<Date[]>([new Date()]);

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
  };

  return (
    <>
      <Input
        label="label"
        value={selectedDays?.[0]?.toDateString()}
        readOnly
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
