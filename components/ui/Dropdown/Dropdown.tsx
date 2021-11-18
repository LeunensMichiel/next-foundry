import { Chevron } from '@components/icons';
import cn from 'classnames';
import { useCallback, useState } from 'react';

import { Button } from '..';
import { ButtonProps } from '../Button/Button';
import styles from './Dropdown.module.scss';

type DropdownProps = {
  label: string;
  willFloat?: boolean;
  willOpenOnHover?: boolean;
} & Omit<ButtonProps<'button'>, 'onClick'>;

const Dropdown: React.FC<DropdownProps> = ({
  children,
  label,
  className,
  variant,
  willFloat = true,
  willOpenOnHover = true,
  ...btnProps
}) => {
  const [open, setOpen] = useState(false);
  const [touched, setTouched] = useState(false);

  const handleClick = useCallback(() => {
    setTouched((prevTouched) => !prevTouched);
    setOpen((prevOpen) =>
      (prevOpen && !touched) || !(prevOpen && touched) ? true : false
    );
  }, [touched]);

  return (
    <div
      className={cn(styles.dropdown, {
        [styles.dropdownMenuOpen]: open,
      })}
      onMouseEnter={() => willOpenOnHover && setOpen(!touched || true)}
      onMouseLeave={() => willOpenOnHover && setOpen(touched || false)}
    >
      <Button
        className={cn(styles.dropdownButton, className)}
        size="sm"
        variant={variant}
        iconRight={<Chevron />}
        {...btnProps}
        aria-label={`Open ${label} menu`}
        onClick={handleClick}
      >
        {label}
      </Button>
      {open && (
        <div
          className={cn(styles.dropdownListContainer, {
            [styles[`dropdown-${variant}`]]: !!variant,
            [styles.dropdownFloating]: willFloat,
          })}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
