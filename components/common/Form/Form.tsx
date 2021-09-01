import cn from 'classnames';
import { ComponentPropsWithRef, FC, forwardRef } from 'react';

import styles from './Form.module.scss';

type FormProps = {
  wrapperClassName?: string;
};

const Form: FC<ComponentPropsWithRef<'form'> & FormProps> = forwardRef<
  HTMLFormElement,
  FormProps
>(({ children, wrapperClassName, ...rest }, ref) => (
  <form ref={ref} className={cn(styles.form, wrapperClassName)} {...rest}>
    {children}
  </form>
));

Form.displayName = 'Form';

export default Form;
