import { Alert } from '@components/icons';
import cn from 'classnames';
import * as React from 'react';
import { FieldError } from 'react-hook-form';
import Select, { GroupBase, Props, StylesConfig } from 'react-select';

import styles from './Select.module.scss';

const customStyles: StylesConfig = {
  control: (base) => ({
    ...base,
    background: 'var(--color-input-bg)',
    color: 'var(--color-text-secondary)',
    border: '0.125rem solid var(--color-input-border)',
    borderRadius: 'var(--border-radius)',
  }),
  valueContainer: (base) => ({
    ...base,
    padding: '0.25rem 0.75rem',
  }),
  singleValue: (base) => ({
    ...base,
    overflow: 'initial',
  }),
};

type SelectProps<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> = {
  //  instanceId is required for SSR in Next
  instanceId: number | string;
  withFeedback?: boolean;
  label: string;
  error?: FieldError;
  colSpan?: 1 | 2 | 3 | 4;
  name?: string;
  placeholder: string;
} & Props<Option, IsMulti, Group>;

const SelectField = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>({
  isMulti,
  instanceId,
  label,
  error,
  colSpan = 1,
  withFeedback = true,
  placeholder,
  name,
  ...props
}: SelectProps<Option, IsMulti, Group>) => {
  return (
    <div className={cn({ [`col-span-${colSpan}`]: colSpan })}>
      <label htmlFor={name} className={cn(styles.inputLabel)}>
        {label}
      </label>
      <Select
        {...props}
        name={name}
        isMulti={isMulti}
        instanceId={instanceId}
        placeholder={placeholder}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        styles={customStyles as any}
      />
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
  );
};

export default SelectField;
