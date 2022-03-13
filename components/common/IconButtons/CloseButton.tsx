import { Cross } from '@components/icons';
import { Button } from '@components/ui';
import { ButtonProps } from '@components/ui/Button/Button';
import { MouseEventHandler, VFC } from 'react';

type CloseButtonProps = {
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

const CloseButton: VFC<CloseButtonProps> = ({
  onClick,
  size = 'md',
  variant = 'minimal',
  squared = true,
  ...props
}) => {
  return (
    <Button
      aria-label="Close"
      data-dismiss="modal"
      iconLeft={<Cross />}
      onClick={onClick}
      type="button"
      variant={variant}
      size={size}
      squared={squared}
      {...props}
    />
  );
};

export default CloseButton;
