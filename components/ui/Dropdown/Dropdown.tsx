import { Chevron } from '@components/icons';
import cn from 'classnames';
import { useCallback, useState } from 'react';

import { Button } from '..';
import { ButtonProps } from '../Button/Button';
import styles from './Dropdown.module.scss';

type DropdownProps = {
  label: string;
  willFloat?: boolean;
  startOpen?: boolean;
  willOpenOnHover?: boolean;
  buttonClassName?: string;
  containerClassName?: string;
  containerOpenClassName?: string;
  listClassName?: string;
} & Omit<ButtonProps<'button'>, 'onClick | className'>;

const Dropdown: React.FC<DropdownProps> = ({
  children,
  label,
  variant,
  startOpen = false,
  willFloat = true,
  willOpenOnHover = false,
  buttonClassName,
  containerClassName,
  containerOpenClassName,
  listClassName,
  ...btnProps
}) => {
  const [open, setOpen] = useState(startOpen);
  const [touched, setTouched] = useState(startOpen);

  const handleClick = useCallback(() => {
    setTouched((prevTouched) => !prevTouched);
    setOpen((prevOpen) =>
      (prevOpen && !touched) || !(prevOpen && touched) ? true : false
    );
  }, [touched]);

  return (
    <div
      className={cn(
        styles.dropdown,
        {
          [`${containerOpenClassName}`]: open && !!containerOpenClassName,
          [styles.dropdownMenuOpen]: open,
        },
        containerClassName
      )}
      onMouseEnter={() => willOpenOnHover && setOpen(!touched || true)}
      onMouseLeave={() => willOpenOnHover && setOpen(touched || false)}
      aria-expanded={open}
    >
      <Button
        {...btnProps}
        className={cn(styles.dropdownButton, buttonClassName)}
        size="sm"
        variant={variant}
        iconRight={<Chevron />}
        aria-label={label}
        onClick={handleClick}
        onKeyDown={handleClick}
      >
        {label}
      </Button>
      {open && (
        <div
          className={cn(
            styles.dropdownListContainer,
            {
              [styles[`dropdown-${variant}`]]: !!variant,
              [styles.dropdownFloating]: willFloat,
            },
            listClassName
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
