import { Hamburger } from '@components/icons';
import { Button } from '@components/ui';
import { ButtonProps } from '@components/ui/Button/Button';
import { MouseEventHandler, VFC } from 'react';

type MenuButtonProps = {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
} & Pick<
  ButtonProps<'button'>,
  | 'size'
  | 'loading'
  | 'circular'
  | 'disabled'
  | 'outlined'
  | 'variant'
  | 'squared'
>;

const MenuButton: VFC<MenuButtonProps> = ({
  onClick,
  size = 'md',
  variant = 'minimal',
  squared = true,
  ...props
}) => (
  <Button
    aria-haspopup="true"
    aria-label="Navigation menu button"
    iconLeft={<Hamburger />}
    onClick={onClick}
    type="button"
    variant={variant}
    size={size}
    squared={squared}
    {...props}
  />
);

export default MenuButton;
