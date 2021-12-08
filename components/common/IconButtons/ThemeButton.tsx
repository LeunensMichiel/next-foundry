import { Moon, Sun } from '@components/icons';
import { Button } from '@components/ui';
import { ButtonProps } from '@components/ui/Button/Button';
import { useTheme } from 'next-themes';
import { MouseEventHandler, VFC } from 'react';

type ThemeButtonProps = {
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

const ThemeButton: VFC<ThemeButtonProps> = ({
  onClick,
  size = 'sm',
  variant = 'minimal',
  squared = true,
  ...props
}) => {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      aria-label="Toggle between themes"
      iconLeft={theme === 'light' ? <Moon /> : <Sun />}
      onClick={
        onClick ? onClick : () => setTheme(theme === 'light' ? 'dark' : 'light')
      }
      type="button"
      variant={variant}
      size={size}
      squared={squared}
      {...props}
    />
  );
};

export default ThemeButton;
