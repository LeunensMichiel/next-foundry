import { Moon, Sun } from '@components/icons';
import { Button } from '@components/ui';
import { ButtonProps } from '@components/ui/Button/Button';
import { useIsClient } from '@lib/hooks';
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
  size = 'md',
  variant = 'minimal',
  squared = true,
  ...props
}) => {
  const { setTheme, theme } = useTheme();
  const isClient = useIsClient();

  return (
    <Button
      aria-label="Toggle between themes"
      iconLeft={isClient ? theme === 'light' ? <Moon /> : <Sun /> : undefined}
      onClick={
        onClick ? onClick : () => setTheme(theme === 'light' ? 'dark' : 'light')
      }
      type="button"
      variant={variant}
      tabIndex={0}
      size={size}
      squared={squared}
      {...props}
    />
  );
};

export default ThemeButton;
