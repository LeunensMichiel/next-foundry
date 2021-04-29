import { Alert } from '@components/icons';
import cn from 'classnames';
import { FC } from 'react';
import { FieldError } from 'react-hook-form';

import styles from './Fieldset.module.scss';

type FieldSetProps = {
  withFeedback?: boolean;
  label: string;
  error?: FieldError;
  colSpan?: 1 | 2 | 3 | 4;
};

const FieldSet: FC<FieldSetProps> = ({
  colSpan = 1,
  withFeedback = true,
  label,
  children,
  error,
}) => (
  <fieldset className={cn({ [styles[`col-span-${colSpan}`]]: colSpan })}>
    <legend className={cn(styles.inputLabel)}>{label}</legend>
    <div className={cn(styles.inputFieldContainer)}>{children}</div>
    {withFeedback && (
      <div className={cn(styles.fieldAlert)}>
        {error && (
          <>
            <div className={cn(styles.fieldAlertIcon)}>
              <Alert />
            </div>
            <small className={cn(styles.fieldAlertText)}>{error.message}</small>
          </>
        )}
      </div>
    )}
  </fieldset>
);

export default FieldSet;
