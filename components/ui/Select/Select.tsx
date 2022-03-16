import { Alert } from '@components/icons';
import cn from 'classnames';
import * as React from 'react';
import { FieldError } from 'react-hook-form';
import Select, { GroupBase, Props, StylesConfig } from 'react-select';

import styles from './Select.module.scss';

const customStyles: StylesConfig = {
  control: (base, { isDisabled, isFocused }) => ({
    ...base,
    background: 'var(--color-input-bg)',
    color: 'var(--color-text-secondary)',
    borderWidth: '0.125rem',
    borderRadius: 'var(--border-radius)',
    boxShadow: isFocused ? `var(--box-shadow-sm)` : undefined,
    borderColor: isDisabled
      ? 'var(--color-input-disabled-border)'
      : isFocused
      ? 'var(--color-input-focus-border)'
      : 'var(--color-input-border)',
    '&:hover': {
      borderColor: isFocused
        ? 'var(--color-input-focus-border)'
        : 'var(--color-input-hover-border)',
    },
  }),
  valueContainer: (base) => ({
    ...base,
    padding: '0.25rem 0.75rem',
  }),
  singleValue: (base, { isDisabled }) => ({
    ...base,
    overflow: 'initial',
    color: isDisabled
      ? 'var(--color-text-disabled)'
      : 'var(--color-text-secondary)',
  }),
  placeholder: (base) => ({
    ...base,
    color: 'var(--color-text-placeholder)',
  }),
  clearIndicator: (base, { isFocused }) => ({
    ...base,
    color: isFocused
      ? 'var(--color-label-primary-icon)'
      : 'var(--color-label-primary-icon)',
    ':hover': {
      color: 'var(--color-input-hover-border)',
    },
  }),
  dropdownIndicator: (base, { isFocused, isDisabled }) => ({
    ...base,
    color: isDisabled
      ? 'var(--color-icon-disabled)'
      : isFocused
      ? 'var(--color-label-primary-icon)'
      : 'var(--color-label-primary-icon)',
    ':hover': {
      color: 'var(--color-label-primary-icon)',
    },
  }),
  input: (base) => ({
    ...base,
    color: 'var(--color-text-primary)',
  }),
  menu: (base) => ({
    ...base,
    background: 'var(--color-input-select-menu-bg)',
    overflow: 'hidden',
    zIndex: 10,
  }),
  menuList: (base) => ({
    ...base,
    padding: 0,
  }),
  group: (base) => ({
    ...base,
    padding: 0,
  }),
  groupHeading: (base) => ({
    ...base,
    paddingTop: '.75rem',
    color: 'var(--color-text-placeholder)',
  }),
  indicatorSeparator: (base, { isDisabled }) => ({
    ...base,
    backgroundColor: isDisabled
      ? 'var(--color-input-disabled-border)'
      : 'var(--color-input-border)',
  }),
  option: (base, { isSelected, isFocused, isDisabled }) => ({
    ...base,
    transition:
      'background .5s cubic-bezier(0.16, 1, 0.3, 1), color .5s cubic-bezier(0.16, 1, 0.3, 1)',
    backgroundColor: isSelected
      ? 'var(--color-input-select-item-selected-bg)'
      : isFocused
      ? 'var(--color-input-select-item-hover-bg)'
      : 'transparent',
    color: isDisabled
      ? 'var(--color-text-disabled);'
      : isSelected
      ? 'var(--color-input-select-item-selected-text)'
      : 'inherit',
    // provide some affordance on touch devices
    ':active': {
      backgroundColor: !isDisabled
        ? isSelected
          ? 'var(--color-input-select-item-selected-bg)'
          : 'var(--color-input-select-item-focus-bg)'
        : undefined,
      color: !isDisabled
        ? isSelected
          ? 'var(--color-input-select-item-selected-text)'
          : 'var(--color-input-select-item-focus-text)'
        : undefined,
    },
  }),
  multiValue: (base) => ({
    ...base,
    backgroundColor: 'var(--color-badge-bg)',
    transition: 'background .5s cubic-bezier(0.16, 1, 0.3, 1)',
  }),
  multiValueLabel: (base) => ({
    ...base,
    color: 'var(--color-badge-text)',
    transition: 'color .5s cubic-bezier(0.16, 1, 0.3, 1)',
  }),
  multiValueRemove: (base, { isFocused }) => ({
    ...base,
    backgroundColor: isFocused ? 'var(--color-badge-bg)' : undefined,

    ':hover': {
      backgroundColor: 'var(--color-badge-danger-bg)',
      color: 'var(--color-badge-danger-text)',
    },
  }),
  noOptionsMessage: (base) => ({
    ...base,
    color: 'var(--color-text-placeholder)',
  }),
  loadingMessage: (base) => ({
    ...base,
    color: 'var(--color-text-placeholder)',
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
