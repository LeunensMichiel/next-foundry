import { Chevron } from '@components/icons';
import cn from 'classnames';
import { motion } from 'framer-motion';
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
  variant = 'default',
  startOpen = false,
  willFloat = true,
  willOpenOnHover = false,
  buttonClassName,
  containerClassName,
  containerOpenClassName,
  listClassName,
  stretched = false,
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
          [styles.stretched]: stretched,
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
        stretched={stretched}
        onClick={handleClick}
        onKeyDown={handleClick}
      >
        {label}
      </Button>
      {open && (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
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
        </motion.div>
      )}
    </div>
  );
};

export default Dropdown;
