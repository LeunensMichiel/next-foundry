import { Moon, Sun } from '@components/icons';
import { useIsClient } from '@lib/hooks';
import { useTheme } from 'next-themes';

type Props = {
  className?: string;
};

const ThemeToggle: React.FC<Props> = ({ className = '' }) => {
  const { setTheme, theme } = useTheme();
  const isClient = useIsClient();

  return (
    <button
      className={className}
      type="button"
      aria-label="Toggle between themes"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {isClient && (theme === 'light' ? <Moon /> : <Sun />)}
    </button>
  );
};

export default ThemeToggle;
